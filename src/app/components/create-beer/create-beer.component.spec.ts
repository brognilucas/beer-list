import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";

import { CreateBeerComponent } from "./create-beer.component";

describe("CreateBeerComponent", () => {
  let component: CreateBeerComponent;
  let fixture: ComponentFixture<CreateBeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateBeerComponent],
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
