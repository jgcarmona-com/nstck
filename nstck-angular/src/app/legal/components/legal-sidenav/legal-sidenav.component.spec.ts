import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalSidenavComponent } from './legal-sidenav.component';

describe('LegalSidenavComponent', () => {
  let component: LegalSidenavComponent;
  let fixture: ComponentFixture<LegalSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
