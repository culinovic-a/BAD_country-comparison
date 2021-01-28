import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

// SERVICES
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  listOfCountries: any = [];
  private subscription: Subscription;
  selectedOptions = [];
  selectedOption;
  isSelected: boolean;

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

}
