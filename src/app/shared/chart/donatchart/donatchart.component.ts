import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-donatchart',
  templateUrl: './donatchart.component.html',
  styleUrls: ['./donatchart.component.scss']
})
export class DonatchartComponent {
  chart: any;
  ngOnInit(): void {
    this.createChart();
  }


  createChart() {
    this.chart = new Chart("doughnut", {
      type: 'doughnut', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12', '2022-05-13',
          '2022-05-14', '2022-05-15', '2022-05-16', '2022-05-17',],
        datasets: [
          {
            label: "Sales",
            data: ['467', '576', '572', '79', '92',
              '574', '573', '576'],
            backgroundColor: '#4e73df'

          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
              '0.00', '538', '541'],
            backgroundColor: '#f6c23e'

          }
        ]
      },
      options: {
        aspectRatio: 1.3
      }

    });
  }
}
