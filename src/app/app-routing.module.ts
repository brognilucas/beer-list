import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ApiBeersComponent } from "./components/api-beers/api-beers.component";
import { CreateBeerComponent } from "./components/create-beer/create-beer.component";
import { MyBeersListComponent } from "./components/my-beers-list/my-beers-list.component";

const routes: Routes = [
  { path: "", redirectTo: "beers", pathMatch: "full" },
  {
    path: "beers",
    children: [
      { path: "", redirectTo: "others", pathMatch: "full" },
      { path: "others", component: ApiBeersComponent },
      {
        path: "my-beers",
        children: [
          { path: "", component: MyBeersListComponent },
          { path: "create", component: CreateBeerComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
