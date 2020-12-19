import { Route } from "@angular/compiler/src/core";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent {
  constructor(private router: Router) {}

  listOtherBeers() {
    this.router.navigateByUrl("/beers/others");
  }

  listMyOwnBeers() {
    this.router.navigateByUrl("/beers/my-beers");
  }

  createBeer() {
    this.router.navigateByUrl("/beers/my-beers/create");
  }
}
