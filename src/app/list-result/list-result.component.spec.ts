import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResultComponent } from './list-result.component';

describe('ListResultComponent', () => {
  let component: ListResultComponent;
  let fixture: ComponentFixture<ListResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListResultComponent]
    });
    fixture = TestBed.createComponent(ListResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
