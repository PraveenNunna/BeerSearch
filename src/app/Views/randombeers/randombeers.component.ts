import { Component, OnInit } from '@angular/core';
import { BeerService } from '../../Services/beer.service';
import { Beer } from '../../Classes/Beer';

@Component({
  selector: 'app-randombeers',
  templateUrl: './randombeers.component.html',
  styleUrls: ['./randombeers.component.css']
})

export class RandombeersComponent implements OnInit {
  public loading = true;
  rows = [];
  constructor(private beerService: BeerService) { this.rows = []; }

  ngOnInit() {
    this.getBeers();
  }
  getBeers(): void {
    var me = this;

    me.beerService.getRandomBeers()
      .subscribe(result => {
        me.loading = false;
        me.rows = result;
      },

      error => console.log("Error :: " + error)
      );

  }

}
