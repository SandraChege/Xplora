import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldestinationsComponent } from './alldestinations.component';

describe('AlldestinationsComponent', () => {
  let component: AlldestinationsComponent;
  let fixture: ComponentFixture<AlldestinationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlldestinationsComponent]
    });
    fixture = TestBed.createComponent(AlldestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
