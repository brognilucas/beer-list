import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BreweryService {
  constructor(private http: HttpClient) {}

  API = "/api";

  get(path, pagination): Observable<any> {
    const { key } = environment;
    return this.http.get(`${this.API}/${path}`, {
      params: {
        key,
        ...this.getPaginationParams(pagination),
        withIngredients: "Y",
        withBreweries: "Y",
        withSocialAccounts: "Y",
      },
    });
  }

  getPaginationParams(pagination) {
    if (!pagination) {
      return {};
    }
    return {
      p: pagination.currentPage,
    };
  }
}
