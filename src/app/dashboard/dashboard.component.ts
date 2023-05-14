import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  flightData: any;
  loading = true
  beginTime = Math.round(new Date().getTime() / 1000) - 3600; // One hour ago
  endTime = Math.round(new Date().getTime() / 1000);
  isLoading = true


  displayedColumns: string[] = ['Airport','Time', 'Arriving', 'Departing'];

  constructor(private http: HttpClient) { }

   async ngOnInit() {
    this.http.get(`https://opensky-network.org/api/flights/all?begin=${this.beginTime}&end=${this.endTime}`).subscribe((response) => {
  console.log('this is the response ',response);
  this.loading = false
  this.flightData = response
  this.isLoading =false
  })
}

  format(time: any) {
    return new Date(time).toLocaleString();
  }
}
