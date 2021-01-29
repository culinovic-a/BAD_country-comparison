import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

// SERVICES
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnDestroy {

  selectedCountriesList: any;
  public newArr = [];
  private subscription: Subscription;
  dataReceived = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.selectedCountries.subscribe(data => {
      this.selectedCountriesList = data;
      this.getNewArr();
      this.dataReceived = true;
    });
  }

  // REPLACING OBJECT POPULATION KEY WITH VALUE KEY IN ORDER TO SEND VALID DATA TO NGX CHART
  getNewArr(): void {
    this.newArr = [];
    this.selectedCountriesList.map(elem => this.newArr.push({ name: elem.name, value: elem.population }));
  }

  // OBSERVABLE UNSUBSCRIPTION
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
