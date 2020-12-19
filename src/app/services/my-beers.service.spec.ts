import { TestBed } from "@angular/core/testing";

import { MyBeersService } from "./my-beers.service";

describe("MyBeersService", () => {
  let service: MyBeersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyBeersService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("When add a beer the list of beers should be increased ", () => {
    let mockBeer = { name: "beer", description: "desc 001" };

    let sizeOfBeers = service.getBeers().length;

    service.addBeer(mockBeer);

    expect(service.getBeers().length).toBeGreaterThan(sizeOfBeers);
  });

  it("Should getBeer to return a list of beers ", () => {
    let mockBeer = { name: "beer", description: "desc 001" };
    service.addBeer(mockBeer);

    expect(Array.isArray(service.getBeers())).toBeTruthy();
    expect(service.getBeers()[0]).toEqual(mockBeer);
  });
});
