import { Pipe, PipeTransform } from '@angular/core';
import { Portfolio } from "../service/portfolio.service";

@Pipe({
    name: 'totalValue'
})
export class TotalValuePipe implements PipeTransform {
    transform(portfolios: Portfolio[]): number {
        let total = 0;
        for (const portfolio of portfolios) {
            total += portfolio.value;
        }
        return total;
    }
}
