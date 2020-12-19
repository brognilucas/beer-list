import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiBeersComponent } from './api-beers.component';

describe('ApiBeersComponent', () => {
  let component: ApiBeersComponent;
  let fixture: ComponentFixture<ApiBeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiBeersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
