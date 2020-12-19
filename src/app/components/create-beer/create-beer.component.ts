import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { BreweryService } from "src/app/services/brewery.service";
import { MyBeersService } from "src/app/services/my-beers.service";

@Component({
  selector: "app-create-beer",
  templateUrl: "./create-beer.component.html",
  styleUrls: ["./create-beer.component.scss"],
})
export class CreateBeerComponent implements OnInit {
  form: FormGroup;

  breweries = [];
  categories = [];
  ingredients = [];

  constructor(
    private fb: FormBuilder,
    private myBeersService: MyBeersService,
    private breweryService: BreweryService,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      style: new FormGroup({
        name: new FormControl(null),
        description: new FormControl(null),
        category: new FormControl(null),
      }),
      breweries: new FormControl(null),
      ingredients: new FormControl(null),
      isOrganic: new FormControl(null),
      isRetired: new FormControl(null),
    });
  }

  ngOnInit(): void {
    this.breweryService.get("breweries", null).subscribe((res) => {
      this.breweries = res.data;
    });

    this.breweryService.get("ingredients", null).subscribe((res) => {
      this.ingredients = res.data;
    });

    this.breweryService.get("categories", null).subscribe((res) => {
      this.categories = res.data;
    });
  }

  submit() {
    const { isOrganic, isRetired, ...beerInfo } = this.form.value;

    let beer = { ...beerInfo };

    Object.assign(beer, {
      isOrganic: isOrganic ? "Y" : "N",
      isRetired: isRetired ? "Y" : "N",
    });

    this.myBeersService.addBeer(beer);

    this.router.navigateByUrl("/beers/my-beers");
  }
}
