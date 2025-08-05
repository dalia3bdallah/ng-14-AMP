import { Component, OnInit } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexYAxis, ApexTitleSubtitle } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'pm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
  
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  series: ApexAxisChartSeries|any;
  chart: ApexChart|any;
  xaxis: ApexXAxis|any;
  yaxis: ApexYAxis|any;
  title: ApexTitleSubtitle|any;
  
    public chartOptions: ChartOptions = {
    series: [
      {
        name: "Sales",
        data: [10, 20, 30, 40, 50, 60, 70]
      }
    ],
    chart: {
      type: 'line',
      height: 350
    },
    title: {
      text: 'Sales over Time',
      align: 'center'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    },
    yaxis: {
      title: {
        text: 'Amount'
      }
    }
  };

}
