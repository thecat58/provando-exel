import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTeableComponent } from './data-teable.component';

describe('DataTeableComponent', () => {
  let component: DataTeableComponent;
  let fixture: ComponentFixture<DataTeableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataTeableComponent]
    });
    fixture = TestBed.createComponent(DataTeableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
