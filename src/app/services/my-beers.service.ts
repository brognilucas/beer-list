import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class MyBeersService {
  private beers: any[] = [];
  constructor() {}

  getBeers() {
    return this.beers;
  }

  addBeer(beer) {
    this.beers.push(beer);
  }
}
