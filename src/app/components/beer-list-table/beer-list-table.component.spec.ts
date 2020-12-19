import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { BeerListTableComponent } from './beer-list-table.component';

describe('BeerListTableComponent', () => {
  let component: BeerListTableComponent;
  let fixture: ComponentFixture<BeerListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerListTableComponent ],
      imports: [HttpClientTestingModule],
      providers: [ Router]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
