import { Component, OnInit } from "@angular/core";
import { throwToolbarMixedModesError } from "@angular/material/toolbar";
import { BreweryService } from "src/app/services/brewery.service";

@Component({
  selector: "app-api-beers",
  templateUrl: "./api-beers.component.html",
  styleUrls: ["./api-beers.component.scss"],
})
export class ApiBeersComponent implements OnInit {
  beers = [];

  pagination: any = {
    currentPage: 1,
    numberOfPages: 0,
    totalResults: 0,
    pageSize: 50,
  };

  loading: boolean;

  constructor(private service: BreweryService) {}

  ngOnInit(): void {
    this.getBeers();
  }

  getBeers() {
    this.loading = true;
    this.service
      .get("beers", this.pagination)
      .subscribe(({ data, ...pagination }) => {
        this.beers = data;
        this.pagination = pagination;

        this.loading = false;
      });
  }

  paginate($event) {
    this.pagination = {
      ...this.pagination,
      currentPage: this.pagination.currentPage + 1,
    };

    this.getBeers();
  }
}
