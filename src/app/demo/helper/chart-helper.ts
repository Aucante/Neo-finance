export class ChartHelper {

    static initChart(labels: string[], datas: number[]): [chartOptions: any, chartData: any] {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        const chartData = {
            labels: labels,
            datasets: [
                {
                    label: '',
                    data: datas,
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--green-600'),
                    borderColor: documentStyle.getPropertyValue('--green-600'),
                    tension: .1,
                    borderWidth: 2,
                    pointRadius: 0,
                    pointHoverRadius: 0,
                }
            ]
        };

        const chartOptions = {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        autoSkip: true,
                        maxRotation: 0,
                        minRotation: 0,
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

        return [chartOptions, chartData];
    }

    static formatDate(dateString: string): string {
        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        const date = new Date(dateString);
        const monthIndex = date.getMonth();
        const year = date.getFullYear();

        let formattedDate: string;
        if (monthIndex === 0) {
            formattedDate = year.toString();
        } else {
            formattedDate = monthIndex.toString();
        }

        return formattedDate;
    }
}
