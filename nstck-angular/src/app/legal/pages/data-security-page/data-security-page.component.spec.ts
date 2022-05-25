import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSecurityPageComponent } from './data-security-page.component';

describe('DataSecurityPageComponent', () => {
  let component: DataSecurityPageComponent;
  let fixture: ComponentFixture<DataSecurityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSecurityPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSecurityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
