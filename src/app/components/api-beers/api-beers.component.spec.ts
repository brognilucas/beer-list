import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ApiBeersComponent } from "./api-beers.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { Router } from "@angular/router";
describe("ApiBeersComponent", () => {
  let component: ApiBeersComponent;
  let fixture: ComponentFixture<ApiBeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiBeersComponent],
      imports: [HttpClientTestingModule],
      providers: [ Router]

    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
