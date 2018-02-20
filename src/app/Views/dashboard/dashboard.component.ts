import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import {BeerService} from '../../Services/beer.service';
import {Beer} from '../../Classes/Beer';
import { DatatableRowDetailDirective } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('myTable') table: any;

  public beers : Beer[];

  rows = [];
  temp = [];
  pageNumber;
  size;
  loadingIndicator: boolean;
  reorderable: boolean = true;

  columns = [
    { name: 'Beer Name', prop:'name' },
    { name: 'Style', prop : 'styleName' },
    { name: 'Alcohol %', prop: 'alcoholPrecentage' },
    {name : 'Description', prop: 'description'}//,
    //{name : 'Image' , prop : ''}
  ];
  //page={} ;

  constructor(private beerService: BeerService) {
    this.pageNumber = 1;
    this.size = 5;
    this.rows = [];
    this.loadingIndicator = true;

    this.getBeers();
  }
  ngOnInit() {

  }

  fetch(cb) {
  }

  updateFilter(event) {

    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;

  }
  setPage(pageInfo){
    console.log(pageInfo.offset);
  }

  getBeers():void {
    var me = this;

    me.beerService.getDefaultBeers()
    .subscribe(
      result => {
        me.loadingIndicator = false;
        me.rows = result
      },
      error => console.log("Error :: " + error)
    );

  }

  toggleExpandRow(row) {
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {

  }

  searchByName(searchString:string){
    var me = this;

    me.loadingIndicator = true;
    me.beerService.getBeers(searchString)
    .subscribe(
      result => {
        me.rows = result;
        me.loadingIndicator = false;
      },
      error => console.log("Error :: " + error)
    );
  }

}
