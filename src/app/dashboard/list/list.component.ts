import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

// SERVICES
import { ApiService } from '../../core/services/api.service';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  listOfCountries: any = [];
  private subscription: Subscription;
  selectedOptions = [];
  selectedOption;
  public searchText: '';

  constructor(private apiService: ApiService, private dataService: DataService) { }

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
  }

  // COMPARE COUNTRIES
  compareCountries(): void {
    // SEND SELECTED COUNTRIES TO SERVICE
    this.dataService.selectedCountries.next(this.selectedOption);
  }

  // OBSERVABLE UNSUBSCRIPTION
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
