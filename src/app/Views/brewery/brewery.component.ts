import { Component, OnInit } from '@angular/core';
import { BreweryService } from '../../Services/brewery.service';
import { Brewery } from '../../Classes/Brewery';

@Component({
  selector: 'app-brewery',
  templateUrl: './brewery.component.html',
  styleUrls: ['./brewery.component.css']
})

export class BreweryComponent implements OnInit {
  rows = [];
  constructor(private breweryService: BreweryService) {
  }

  ngOnInit() {
    this.getBreweries();
  }

  getBreweries(): void {
    var me = this;

    me.breweryService.getLatestBrewries()
      .subscribe(
      result => me.rows = result,
      error => console.log("Error :: " + error)
      );
  }
}
