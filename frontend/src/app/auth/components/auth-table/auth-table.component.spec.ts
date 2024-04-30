import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthTableComponent } from './auth-table.component';

describe('AuthTableComponent', () => {
  let component: AuthTableComponent;
  let fixture: ComponentFixture<AuthTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthTableComponent]
    });
    fixture = TestBed.createComponent(AuthTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
