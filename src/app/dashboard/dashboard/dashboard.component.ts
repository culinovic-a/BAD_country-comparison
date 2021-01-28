import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

// SERVICES
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  listOfCountries: any = [];
  private subscription: Subscription;
  selectedOptions = [];
  selectedOption;
  isSelected: boolean;
  public mostPopulatedCountry: any;
  public leastPopulatedCountry: any;
  public differenceOfPopulation: number;
  public searchText: '';
  public newArr = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadCountries();
  }

  // GET ALL COUNTRIES
  loadCountries() {
    return (this.subscription = this.apiService.getCountries().subscribe(data => this.listOfCountries = data));
  }

  // GET ALL CHECKED CHECKBOXES
  onNgModelChange($event): void {
    this.selectedOption = $event;

    this.isSelected = false;
  }

  // COMPARE COUNTRIES
  compareCountries(): void {
    this.isSelected = true;

    // FIND MOST POPULATED COUNTRY
    this.mostPopulatedCountry = this.selectedOption.reduce((prev, current) => {
      return (prev.population > current.population) ? prev : current;
    });

    // FIND LEAST POPULATED COUNTRY
    this.leastPopulatedCountry = this.selectedOption.reduce((prev, current) => {
      return (prev.population < current.population) ? prev : current;
    });

    // DIFFERENCE
    this.differenceOfPopulation = this.populationDifference(this.mostPopulatedCountry.population, this.leastPopulatedCountry.population);

    this.getNewArr();
  }

  // GET THE DIFFERENCE OF POPULATION
  populationDifference(max, min) {
    return max - min;
  }

  // REPLACING OBJECT POPULATION KEY WITH VALUE KEY IN ORDER TO SEND VALID DATA TO NGX CHART
  getNewArr() {
    this.selectedOptions.map(elem => this.newArr.push({ name: elem.name, value: elem.population }));
  }

  // OBSERVABLE UNSUBSCRIPTION
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
