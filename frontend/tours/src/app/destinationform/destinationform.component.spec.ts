import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationformComponent } from './destinationform.component';

describe('DestinationformComponent', () => {
  let component: DestinationformComponent;
  let fixture: ComponentFixture<DestinationformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestinationformComponent]
    });
    fixture = TestBed.createComponent(DestinationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
