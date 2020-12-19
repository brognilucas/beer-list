import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";

import { MyBeersListComponent } from "./my-beers-list.component";

describe("MyBeersListComponent", () => {
  let component: MyBeersListComponent;
  let fixture: ComponentFixture<MyBeersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyBeersListComponent],
      imports: [HttpClientTestingModule],
      providers: [Router]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBeersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

});
