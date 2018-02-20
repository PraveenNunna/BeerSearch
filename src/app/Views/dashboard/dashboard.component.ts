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
  title = 'app';

  rows = [];

  temp = [];

  columns = [
    { name: 'Beer Name', prop:'name' },
    { name: 'Style', prop : 'styleName' },
    { name: 'Alcohol %', prop: 'alcoholPrecentage' },
    {name : 'Description', prop: 'description'}//,
    //{name : 'Image' , prop : ''}
  ];
  //page={} ;
  pageNumber;
  size;
  loadingIndicator: boolean = true;
  reorderable: boolean = true;
  constructor(private beerService: BeerService) {
    this.pageNumber = 1;
    this.size = 5;
    this.rows = [];

    this.getBeers();
    // this.fetch((data) => {
    //   data = [
    //     { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    //     { name: 'Dany', gender: 'Male', company: 'KFC' },
    //     { name: 'Molly', gender: 'Female', company: 'Burger King' },
    //   ];
    //   // cache our list
    //   this.temp = data;

    //   // push our inital complete list
    //   this.rows = data;
    // });
  }
  ngOnInit() {

  }

  fetch(cb) {
    // const req = new XMLHttpRequest();
    // req.open('GET', `assets/data/company.json`);

    // req.onload = () => {
    //   cb(JSON.parse(req.response));
    // };

    // req.send();
  }

  updateFilter(event) {

    const val = event.target.value.toLowerCase();
    console.log(val);
    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;

  }
  setPage(pageInfo){
    console.log(pageInfo.offset);
    // this.page.pageNumber = pageInfo.offset;
    // this.serverResultsService.getResults(this.page).subscribe(pagedData => {
    //   this.page = pagedData.page;
    //   this.rows = pagedData.data;
    // });
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
    console.log('Toggled Expand Row!', row);
    this.table.rowDetail.toggleExpandRow(row);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }

  searchByName(searchString:string){

  }

}
