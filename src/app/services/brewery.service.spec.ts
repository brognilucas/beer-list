import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { Observable } from "rxjs";

import { BreweryService } from "./brewery.service";

describe("BreweryService", () => {
  let service: BreweryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(BreweryService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("Should be able to retrieve an observable without pagination from API", () => {
    spyOn(service, "get").and.callThrough();

    let response = service.get("api-path", null);
    expect(response instanceof Observable).toBeTruthy();
  });

  it("Should call getPagination when called service.get() with pagination", () => {
    spyOn(service, "getPaginationParams").and.callThrough();

    let pagination = { currentPage: 1 };

    service.get("api-path", pagination);

    expect(service.getPaginationParams).toHaveBeenCalledWith(pagination);
  });

  it("Should getPagination return a p property when called with pagination ", () => {
    let pagination = { currentPage: 1 };

    expect(service.getPaginationParams(pagination)).toEqual({
      p: pagination.currentPage,
    });
  });

  it("Should return an empty object if pagination is not passed when call getPagination with a pagination", () => {
    expect(service.getPaginationParams(null)).toEqual({});
  });
});
