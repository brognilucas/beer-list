import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerListTableComponent } from './beer-list-table.component';

describe('BeerListTableComponent', () => {
  let component: BeerListTableComponent;
  let fixture: ComponentFixture<BeerListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerListTableComponent ]
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
