import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges,
} from "@angular/core";
import {
    BarChart,
    BarChartData,
    BarChartOptions,
    LineChart,
    LineChartData,
    LineChartOptions,
    PieChart,
    PieChartData,
    PieChartOptions,
    ResponsiveOptions,
} from "chartist";

type ChartTypes = BarChart | LineChart | PieChart;

export interface BarChartConfiguration {
    type: "Bar";
    data: BarChartData;
    options?: BarChartOptions;
    responsiveOptions?: ResponsiveOptions<BarChartOptions>;
}

export interface LineChartConfiguration {
    type: "Line";
    data: LineChartData;
    options?: LineChartOptions;
    responsiveOptions?: ResponsiveOptions<LineChartOptions>;
}

export interface PieChartConfiguration {
    type: "Pie";
    data: PieChartData;
    options?: PieChartOptions;
    responsiveOptions?: ResponsiveOptions<PieChartOptions>;
}

export type Configuration = BarChartConfiguration | LineChartConfiguration | PieChartConfiguration;

export interface ChartEvent {
    [eventName: string]: (data: unknown) => void;
}

@Component({
    selector: "app-chart",
    template: "",
    styles: [`
        :host {
          display: block;
        }

        :host ::ng-deep .ct-series-a .ct-line,
        :host ::ng-deep .ct-series-a .ct-point,
        :host ::ng-deep .ct-series-a .ct-bar,
        :host ::ng-deep .ct-series-a .ct-slice-donut {
            stroke: hsl(250, 30%, 33%);
        }
        :host ::ng-deep .ct-series-a .ct-area,
        :host ::ng-deep .ct-series-a .ct-slice-pie {
            fill: hsl(250, 30%, 33%);
        }

        :host ::ng-deep .ct-series-b .ct-line,
        :host ::ng-deep .ct-series-b .ct-point,
        :host ::ng-deep .ct-series-b .ct-bar,
        :host ::ng-deep .ct-series-b .ct-slice-donut {
            stroke: hsl(140, 75%, 27%);
        }
        :host ::ng-deep .ct-series-b .ct-area,
        :host ::ng-deep .ct-series-b .ct-slice-pie {
            fill: hsl(140, 75%, 27%);
        }

        :host ::ng-deep .ct-series-c .ct-line,
        :host ::ng-deep .ct-series-c .ct-point,
        :host ::ng-deep .ct-series-c .ct-bar,
        :host ::ng-deep .ct-series-c .ct-slice-donut {
            stroke: hsl(170, 38%, 47%);
        }
        :host ::ng-deep .ct-series-c .ct-area,
        :host ::ng-deep .ct-series-c .ct-slice-pie {
            fill: hsl(170, 38%, 47%);
        }

        :host ::ng-deep .ct-series-d .ct-line,
        :host ::ng-deep .ct-series-d .ct-point,
        :host ::ng-deep .ct-series-d .ct-bar,
        :host ::ng-deep .ct-series-d .ct-slice-donut {
            stroke: hsl(200, 75%, 73%);
        }
        :host ::ng-deep .ct-series-d .ct-area,
        :host ::ng-deep .ct-series-d .ct-slice-pie {
            fill: hsl(200, 75%, 73%);
        }

        :host ::ng-deep .ct-series-e .ct-line,
        :host ::ng-deep .ct-series-e .ct-point,
        :host ::ng-deep .ct-series-e .ct-bar,
        :host ::ng-deep .ct-series-e .ct-slice-donut {
            stroke: hsl(50, 60%, 67%);
        }
        :host ::ng-deep .ct-series-e .ct-area,
        :host ::ng-deep .ct-series-e .ct-slice-pie {
            fill: hsl(50, 60%, 67%);
        }

        :host ::ng-deep .ct-series-f .ct-line,
        :host ::ng-deep .ct-series-f .ct-point,
        :host ::ng-deep .ct-series-f .ct-bar,
        :host ::ng-deep .ct-series-f .ct-slice-donut {
            stroke: hsl(350, 50%, 60%);
        }
        :host ::ng-deep .ct-series-f .ct-area,
        :host ::ng-deep .ct-series-f .ct-slice-pie {
            fill: hsl(350, 50%, 60%);
        }

        :host ::ng-deep .ct-series-g .ct-line,
        :host ::ng-deep .ct-series-g .ct-point,
        :host ::ng-deep .ct-series-g .ct-bar,
        :host ::ng-deep .ct-series-g .ct-slice-donut {
            stroke: hsl(310, 38%, 47%);
        }
        :host ::ng-deep .ct-series-g .ct-area,
        :host ::ng-deep .ct-series-g .ct-slice-pie {
            fill: hsl(310, 38%, 47%);
        }

        :host ::ng-deep .ct-series-h .ct-line,
        :host ::ng-deep .ct-series-h .ct-point,
        :host ::ng-deep .ct-series-h .ct-bar,
        :host ::ng-deep .ct-series-h .ct-slice-donut {
            stroke: hsl(330, 30%, 33%);
        }
        :host ::ng-deep .ct-series-h .ct-area,
        :host ::ng-deep .ct-series-h .ct-slice-pie {
            fill: hsl(330, 30%, 33%);
        }

        :host ::ng-deep .ct-series-i .ct-line,
        :host ::ng-deep .ct-series-i .ct-point,
        :host ::ng-deep .ct-series-i .ct-bar,
        :host ::ng-deep .ct-series-i .ct-slice-donut {
            stroke: hsl(0, 0%, 0%);
        }
        :host ::ng-deep .ct-series-i .ct-area,
        :host ::ng-deep .ct-series-i .ct-slice-pie {
            fill: hsl(0, 0%, 0%);
        }

        :host ::ng-deep .ct-series-j .ct-line,
        :host ::ng-deep .ct-series-j .ct-point,
        :host ::ng-deep .ct-series-j .ct-bar,
        :host ::ng-deep .ct-series-j .ct-slice-donut {
            stroke: hsl(41, 82%, 45%);
        }
        :host ::ng-deep .ct-series-j .ct-area,
        :host ::ng-deep .ct-series-j .ct-slice-pie {
            fill: hsl(41, 82%, 45%);
        }

        :host ::ng-deep .ct-series-k .ct-line,
        :host ::ng-deep .ct-series-k .ct-point,
        :host ::ng-deep .ct-series-k .ct-bar,
        :host ::ng-deep .ct-series-k .ct-slice-donut {
            stroke: hsl(202, 77%, 63%);
        }
        :host ::ng-deep .ct-series-k .ct-area,
        :host ::ng-deep .ct-series-k .ct-slice-pie {
            fill: hsl(202, 77%, 63%);
        }

        :host ::ng-deep .ct-series-l .ct-line,
        :host ::ng-deep .ct-series-l .ct-point,
        :host ::ng-deep .ct-series-l .ct-bar,
        :host ::ng-deep .ct-series-l .ct-slice-donut {
            stroke: hsl(164, 45%, 31%);
        }
        :host ::ng-deep .ct-series-l .ct-area,
        :host ::ng-deep .ct-series-l .ct-slice-pie {
            fill: hsl(164, 45%, 31%);
        }

        :host ::ng-deep .ct-series-m .ct-line,
        :host ::ng-deep .ct-series-m .ct-point,
        :host ::ng-deep .ct-series-m .ct-bar,
        :host ::ng-deep .ct-series-m .ct-slice-donut {
            stroke: hsl(56, 85%, 60%);
        }
        :host ::ng-deep .ct-series-m .ct-area,
        :host ::ng-deep .ct-series-m .ct-slice-pie {
            fill: hsl(56, 85%, 60%);
        }

        :host ::ng-deep .ct-series-n .ct-line,
        :host ::ng-deep .ct-series-n .ct-point,
        :host ::ng-deep .ct-series-n .ct-bar,
        :host ::ng-deep .ct-series-n .ct-slice-donut {
            stroke: hsl(202, 54%, 35%);
        }
        :host ::ng-deep .ct-series-n .ct-area,
        :host ::ng-deep .ct-series-n .ct-slice-pie {
            fill: hsl(202, 54%, 35%);
        }

        :host ::ng-deep .ct-series-o .ct-line,
        :host ::ng-deep .ct-series-o .ct-point,
        :host ::ng-deep .ct-series-o .ct-bar,
        :host ::ng-deep .ct-series-o .ct-slice-donut {
            stroke: hsl(26, 72%, 42%);
        }
        :host ::ng-deep .ct-series-o .ct-area,
        :host ::ng-deep .ct-series-o .ct-slice-pie {
            fill: hsl(26, 72%, 42%);
        }

        :host ::ng-deep .ct-series-p .ct-line,
        :host ::ng-deep .ct-series-p .ct-point,
        :host ::ng-deep .ct-series-p .ct-bar,
        :host ::ng-deep .ct-series-p .ct-slice-donut {
            stroke: hsl(327, 45%, 64%);
        }
        :host ::ng-deep .ct-series-p .ct-area,
        :host ::ng-deep .ct-series-p .ct-slice-pie {
            fill: hsl(327, 45%, 64%);
        }

        :host ::ng-deep .ct-series-q .ct-line,
        :host ::ng-deep .ct-series-q .ct-point,
        :host ::ng-deep .ct-series-q .ct-bar,
        :host ::ng-deep .ct-series-q .ct-slice-donut {
            stroke: hsl(223, 100%, 70%);
        }
        :host ::ng-deep .ct-series-q .ct-area,
        :host ::ng-deep .ct-series-q .ct-slice-pie {
            fill: hsl(223, 100%, 70%)
        }

        :host ::ng-deep .ct-series-r .ct-line,
        :host ::ng-deep .ct-series-r .ct-point,
        :host ::ng-deep .ct-series-r .ct-bar,
        :host ::ng-deep .ct-series-r .ct-slice-donut {
            stroke: hsl(251, 83%, 65%);
        }
        :host ::ng-deep .ct-series-r .ct-area,
        :host ::ng-deep .ct-series-r .ct-slice-pie {
            fill: hsl(251, 83%, 65%);
        }

        :host ::ng-deep .ct-series-s .ct-line,
        :host ::ng-deep .ct-series-s .ct-point,
        :host ::ng-deep .ct-series-s .ct-bar,
        :host ::ng-deep .ct-series-s .ct-slice-donut {
            stroke: hsl(331, 72%, 51%);
        }
        :host ::ng-deep .ct-series-s .ct-area,
        :host ::ng-deep .ct-series-s .ct-slice-pie {
            fill: hsl(331, 72%, 51%);
        }

        :host ::ng-deep .ct-series-t .ct-line,
        :host ::ng-deep .ct-series-t .ct-point,
        :host ::ng-deep .ct-series-t .ct-bar,
        :host ::ng-deep .ct-series-t .ct-slice-donut {
            stroke: hsl(23, 99%, 50%);
        }
        :host ::ng-deep .ct-series-t .ct-area,
        :host ::ng-deep .ct-series-t .ct-slice-pie {
            fill: hsl(23, 99%, 50%);
        }

        :host ::ng-deep .ct-series-u .ct-line,
        :host ::ng-deep .ct-series-u .ct-point,
        :host ::ng-deep .ct-series-u .ct-bar,
        :host ::ng-deep .ct-series-u .ct-slice-donut {
            stroke: hsl(41, 100%, 50%);
        }
        :host ::ng-deep .ct-series-u .ct-area,
        :host ::ng-deep .ct-series-u .ct-slice-pie {
            fill: hsl(41, 100%, 50%);
        }

        :host ::ng-deep .ct-series-v .ct-line,
        :host ::ng-deep .ct-series-v .ct-point,
        :host ::ng-deep .ct-series-v .ct-bar,
        :host ::ng-deep .ct-series-v .ct-slice-donut {
            stroke: hsl(258, 30%, 38%);
        }
        :host ::ng-deep .ct-series-v .ct-area,
        :host ::ng-deep .ct-series-v .ct-slice-pie {
            fill: hsl(258, 30%, 38%);
        }

        :host ::ng-deep .ct-series-w .ct-line,
        :host ::ng-deep .ct-series-w .ct-point,
        :host ::ng-deep .ct-series-w .ct-bar,
        :host ::ng-deep .ct-series-w .ct-slice-donut {
            stroke: hsl(148, 75%, 32%);
        }
        :host ::ng-deep .ct-series-w .ct-area,
        :host ::ng-deep .ct-series-w .ct-slice-pie {
            fill: hsl(148, 75%, 32%);
        }

        :host ::ng-deep .ct-series-x .ct-line,
        :host ::ng-deep .ct-series-x .ct-point,
        :host ::ng-deep .ct-series-x .ct-bar,
        :host ::ng-deep .ct-series-x .ct-slice-donut {
            stroke: hsl(178, 38%, 52%);
        }
        :host ::ng-deep .ct-series-x .ct-area,
        :host ::ng-deep .ct-series-x .ct-slice-pie {
            fill: hsl(178, 38%, 52%);
        }

        :host ::ng-deep .ct-series-y .ct-line,
        :host ::ng-deep .ct-series-y .ct-point,
        :host ::ng-deep .ct-series-y .ct-bar,
        :host ::ng-deep .ct-series-y .ct-slice-donut {
            stroke: hsl(208, 75%, 78%);
        }
        :host ::ng-deep .ct-series-y .ct-area,
        :host ::ng-deep .ct-series-y .ct-slice-pie {
            fill: hsl(208, 75%, 78%);
        }

        :host ::ng-deep .ct-series-z .ct-line,
        :host ::ng-deep .ct-series-z .ct-point,
        :host ::ng-deep .ct-series-z .ct-bar,
        :host ::ng-deep .ct-series-z .ct-slice-donut {
            stroke: hsl(58, 60%, 72%);
        }
        :host ::ng-deep .ct-series-y .ct-area,
        :host ::ng-deep .ct-series-z .ct-slice-pie {
            fill: hsl(58, 60%, 72%);
        }
    `]
})
export class AppChartComponent implements OnInit, OnChanges, OnDestroy {
    @Input() configuration!: Configuration;

    /**
     * Events object where keys are Chartist event names and values are event handler functions.
     *
     * Supported events are: draw, optionsChanged, data, animationBegin, animationEnd, created.
     *
     * Event handler function will receive a data argument which contains event data.
     */
    @Input() events!: ChartEvent;

    /**
     * Event emitted after Chartist chart has been initialized.
     *
     * Event handler function will receive chart instance argument.
     */
    @Output() initialized = new EventEmitter<ChartTypes>();

    chart!: ChartTypes | null;

    constructor(private elementRef: ElementRef) { }

    ngOnInit(): void {
        if (this.configuration.type && this.configuration.data) {
            this.renderChart();
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.update(changes);
    }

    ngOnDestroy(): void {
        if (this.chart) {
            this.chart.detach();
            this.chart = null;
        }
    }

    renderChart() {
        const nativeElement = this.elementRef.nativeElement;
        const { type, data, options, responsiveOptions } = this.configuration;

        if (type === "Bar") {
            this.chart = new BarChart(
                nativeElement,
                data,
                options,
                responsiveOptions,
            );
        } else if (type === "Line") {
            this.chart = new LineChart(
                nativeElement,
                data,
                options,
                responsiveOptions,
            );
        } else if (type === "Pie") {
            this.chart = new PieChart(
                nativeElement,
                data,
                options,
                responsiveOptions,
            );
        } else {
            throw new Error(`${type} is not a known chart type`);
        }

        if (this.events) {
            this.bindEvents();
        }

        this.initialized.emit(this.chart);
    }

    update(changes: SimpleChanges): void {
        const { type, data, options } = this.configuration;

        if (!type || !data) {
            return;
        }

        const changedConfiguration = changes.configuration
            .currentValue as Configuration;

        if (!this.chart || changedConfiguration.type !== type) {
            this.renderChart();
        } else if (
            "data" in changedConfiguration ||
            "options" in changedConfiguration
        ) {
            this.chart.update(data, options);
        }
    }

    bindEvents(): void {
        for (const event of Object.keys(this.events)) {
            this.chart?.on(event, this.events[event]);
        }
    }
}