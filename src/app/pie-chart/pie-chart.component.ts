import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { forkJoin } from 'rxjs';
import { UserService } from '../_services/user.service';
Chart.register(...registerables);

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor(private _service:UserService) { }

  ngOnInit(): void {

    let nbrAdmins = 0;
    this._service.getNumberAdmins().subscribe(
      data => {nbrAdmins = data;}
    );

    let nbrStudents = 0;
    this._service.getNumberStudents().subscribe(
      data => {nbrStudents = data;}
    );

    let nbrAcademicsSupervisors = 0;
    this._service.getNumberAcademicsSupervisors().subscribe(
      data => {nbrAcademicsSupervisors = data;}
    );

  forkJoin([ this._service.getNumberAdmins(), this._service.getNumberStudents(), this._service.getNumberAcademicsSupervisors()])
  // Array destructuring, a cool EcmaScript 6 feature.
  .subscribe(([value1, value2, value3]) => {
     this.chart(value1, value2, value3);
  });
  }

  chart(nbrAdmins: any, nbrStudents: any, nbrAcademicsSupervisors: any) {
    const myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
          label: '# of Votes',
          data: [nbrAdmins, nbrStudents, nbrAcademicsSupervisors],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}
