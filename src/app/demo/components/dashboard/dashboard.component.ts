import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';
import { Subscription, debounceTime } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { ChartHelper } from "../../helper/chart-helper";
import { FinancialResult } from "../../service/financial-result.service";
import { AssetApiService } from "../../service/api/asset-api.service";

interface ChartData {
    labels: string[];
    datas: number[];
}

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {

    items!: MenuItem[];

    products!: Product[];

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    assetData: any;

    assetSelected: string;

    constructor(
        private productService: ProductService,
        private assetApiService: AssetApiService
    ) { }

    ngOnInit() {
        this.getAssetData('BTC');
        this.productService.getProductsSmall().then(data => this.products = data);

        this.items = [
            { label: 'Add New', icon: 'pi pi-fw pi-plus' },
            { label: 'Remove', icon: 'pi pi-fw pi-minus' }
        ];
    }

    getAssetData(asset: string): any {
        return this.assetApiService.getAssetData('DIGITAL_CURRENCY_DAILY', asset, 'USD')
            .subscribe(data => {
                this.assetData = data;
                this.assetSelected = asset;
                const response = this.assetData["Time Series (Digital Currency Daily)"];

                const dateAndOpenValue = Object.entries(response).map(([date, data]) => ({
                    date,
                    openValue: data["1a. open (USD)"]
                }));

                const chartLabels = dateAndOpenValue.reverse().map(value => ChartHelper.formatDate(value.date));
                const chartDatas = dateAndOpenValue.map(value => value.openValue);

                this.chartOptions = ChartHelper.initChart(chartLabels, chartDatas)[0];
                this.chartData = ChartHelper.initChart(chartLabels, chartDatas)[1];
            });
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }




    // initChart(labels, datas) {
    //     const documentStyle = getComputedStyle(document.documentElement);
    //     const textColor = documentStyle.getPropertyValue('--text-color');
    //     const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    //     const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    //
    //     this.chartData = {
    //         labels: labels,
    //         datasets: [
    //             {
    //                 label: 'First Dataset',
    //                 data: datas,
    //                 fill: false,
    //                 backgroundColor: documentStyle.getPropertyValue('--bluegray-700'),
    //                 borderColor: documentStyle.getPropertyValue('--bluegray-700'),
    //                 tension: .4
    //             }
    //         ]
    //     };
    //
    //     this.chartOptions = {
    //         plugins: {
    //             legend: {
    //                 labels: {
    //                     color: textColor
    //                 }
    //             }
    //         },
    //         scales: {
    //             x: {
    //                 ticks: {
    //                     color: textColorSecondary
    //                 },
    //                 grid: {
    //                     color: surfaceBorder,
    //                     drawBorder: false
    //                 }
    //             },
    //             y: {
    //                 ticks: {
    //                     color: textColorSecondary
    //                 },
    //                 grid: {
    //                     color: surfaceBorder,
    //                     drawBorder: false
    //                 }
    //             }
    //         }
    //     };
    // }
}
