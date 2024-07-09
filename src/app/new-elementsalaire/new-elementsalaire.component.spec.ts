import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewElementsalaireComponent } from './new-elementsalaire.component';

describe('NewElementsalaireComponent', () => {
  let component: NewElementsalaireComponent;
  let fixture: ComponentFixture<NewElementsalaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewElementsalaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewElementsalaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
