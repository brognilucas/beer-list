import { Component, Input, OnInit, ViewChild } from "@angular/core";
import { ColumnMode } from "@swimlane/ngx-datatable";

@Component({
  selector: "beer-list-table",
  templateUrl: "./beer-list-table.component.html",
  styleUrls: ["./beer-list-table.component.scss"],
})
export class BeerListTableComponent {
  @Input() beers = [];

  @ViewChild("table") table: any;
  @ViewChild("rowDetail") rowdetail: any;

  ColumnMode = ColumnMode;

  @Input() loading: boolean;
  @Input() pagination: any = {};
  expanded: any = {};

  toggleExpandRow(row) {
    this.table.rowDetail.toggleExpandRow(row);
  }

  getIngredients({ ingredients = {} }) {
    let ingredientsArr = [];

    if (Array.isArray(ingredients)) {
      return ingredients
        .map((ingredient) => {
          return ingredient.name;
        })
        .toString();
    }

    Object.keys(ingredients).map((key) => {
      for (let ingredient of ingredients[key]) {
        ingredientsArr.push(ingredient.name);
      }
    });

    return ingredientsArr.toString();
  }

  getBreweries({ breweries }) {
    if (!breweries) {
      return null;
    }

    return breweries
      .map((brewery) => {
        return brewery.name;
      })
      .toString();
  }
}
