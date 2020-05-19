import { Component, OnInit, OnDestroy } from '@angular/core';
import { Cov19trackService } from 'src/app/services/cov19track.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy, OnInit {

  covindiaData: any = [];
  lastUpdate: any;
  total: any = [];
  confirmed: any;
  deltaconfirmed: any;
  activeCases: any;
  recovered: any;
  deltarecovered: any;
  deaths: any;
  deltadeaths: any;

  pandemicChartLabels: string[] = ['Active Case', 'Recovered', 'Death'];
  pandemicChartData: number[] = [];
  pandemicChartType: string = 'doughnut';
  pandemicChartOptions: any = {
    legend: {
      position: 'bottom',
      labels: {
        // fontSize: 10,
        usePointStyle: true
      }
    }
  }

  pandemicChartColors: any[] = [
    { backgroundColor: ["#ffb027", "#2dce99", "#f5385a"] }];
  top10death: any;
  top10deathToday: any;
  top10Active: any;
  top10Recovered: any;
  top10Cases: any;
  top10CaseToday: any;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private _service: Cov19trackService) { }

  ngOnInit() {
    this.dtOptions = {
      destroy: true,
      pagingType: 'full_numbers',
      pageLength: 10,
      searching: true,
      ordering: true,
      order: [[2, 'desc']]
    };
    this.getCovid19IndiaData()
  }

  getCovid19IndiaData() {

    this._service.getCovid19India()
      .subscribe((res: any) => {
        console.log(res.statewise)
        this.covindiaData = res.statewise;
        this.dtTrigger.next();

        this.total = this.covindiaData.filter((x: { state: string; }) => x.state.toUpperCase() === "TOTAL");

        this.lastUpdate = this.total[0].lastupdatedtime;

        this.confirmed = this.total[0].confirmed;
        this.deltaconfirmed = this.total[0].deltaconfirmed;

        this.activeCases = this.total[0].active;

        this.recovered = this.total[0].recovered;
        this.deltarecovered = this.total[0].deltarecovered;

        this.deaths = this.total[0].deaths;
        this.deltadeaths = this.total[0].deltadeaths;

        this.pandemicChartData.push(this.activeCases, this.recovered, this.deaths)

        this.top10Cases = this.covindiaData.sort(function (a: { confirmed: number; }, b: { confirmed: number; }) { return b.confirmed - a.confirmed })
          .slice(1, 11);

        this.top10CaseToday = this.covindiaData.sort(function (a: { deltaconfirmed: number; }, b: { deltaconfirmed: number; }) { return b.deltaconfirmed - a.deltaconfirmed })
          .slice(1, 11);

        this.top10Active = this.covindiaData.sort(function (a: { active: number; }, b: { active: number; }) { return b.active - a.active })
          .slice(1, 11);

        this.top10Recovered = this.covindiaData.sort(function (a: { recovered: number; }, b: { recovered: number; }) { return b.recovered - a.recovered })
          .slice(1, 11);

        this.top10death = this.covindiaData.sort(function (a: { deaths: number; }, b: { deaths: number; }) { return b.deaths - a.deaths })
          .slice(1, 11);

        this.top10deathToday = this.covindiaData.sort(function (a: { deltadeaths: number; }, b: { deltadeaths: number; }) { return b.deltadeaths - a.deltadeaths })
          .slice(1, 11);

      },
        err => {
          console.log(err)
        }
      );
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  public pieChartPlugins = [{
    afterLayout: function (chart) {
      chart.legend.legendItems.forEach(
        (label) => {
          let value = chart.data.datasets[0].data[label.index];
          label.text += ' : ' + value;
          return label;
        }
      )
    }
  }];

}
