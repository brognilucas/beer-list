import { Component, OnInit } from "@angular/core";
import { MyBeersService } from "src/app/services/my-beers.service";

@Component({
  selector: "app-my-beers-list",
  templateUrl: "./my-beers-list.component.html",
  styleUrls: ["./my-beers-list.component.scss"],
})
export class MyBeersListComponent implements OnInit {
  beers = [];

  pagination = {
    currentPage: 1,
    numberOfPages: 0,
    totalResults: 0,
    pageSize: 50,
  };

  constructor(private myBeersService: MyBeersService) {}

  ngOnInit() {
    this.beers = this.myBeersService.getBeers();
    

    this.pagination = {
      currentPage: 1,
      numberOfPages: 1,
      totalResults: this.beers.length,
      pageSize: this.beers.length,
    };
  }
}
