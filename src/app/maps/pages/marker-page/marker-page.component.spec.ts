import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerPageComponent } from './marker-page.component';

describe('MarkerPageComponent', () => {
  let component: MarkerPageComponent;
  let fixture: ComponentFixture<MarkerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
