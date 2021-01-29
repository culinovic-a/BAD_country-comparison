import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

// SERVICES
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, OnDestroy {

  selectedCountriesList: any;
  isSelected = false;
  public mostPopulatedCountry: any;
  public leastPopulatedCountry: any;
  public differenceOfPopulation: any;
  private subscription: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.selectedCountries.subscribe((data) => {
      this.selectedCountriesList = data;
      this.isSelected = true;

      // FIND MOST POPULATED COUNTRY
      this.mostPopulatedCountry = this.selectedCountriesList.reduce((prev: { population: number; }, current: { population: number; }) => {
        return (prev.population > current.population) ? prev : current;
      });

      // FIND LEAST POPULATED COUNTRY
      this.leastPopulatedCountry = this.selectedCountriesList.reduce((prev: { population: number; }, current: { population: number; }) => {
        return (prev.population < current.population) ? prev : current;
      });

      // DIFFERENCE
      this.differenceOfPopulation = this.populationDifference(this.mostPopulatedCountry.population, this.leastPopulatedCountry.population);
    });

  }

  populationDifference(max: number, min: number) {
    return max - min;
  }

  // OBSERVABLE UNSUBSCRIPTION
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
