import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
//or
// import Chart from 'chart.js'

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.scss']
})
export class BarchartComponent {
  chart: any;

  ngOnInit(): void {
    this.createBar();
  }


  createBar() {

    this.chart = new Chart("bar", {
      type: 'bar', //this denotes tha type of chart

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
            backgroundColor: '#858796'
          }
        ]
      },
      options: {
        aspectRatio: 2.8
      }

    });
  }


}
