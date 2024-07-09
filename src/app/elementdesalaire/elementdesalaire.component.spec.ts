import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementdesalaireComponent } from './elementdesalaire.component';

describe('ElementdesalaireComponent', () => {
  let component: ElementdesalaireComponent;
  let fixture: ComponentFixture<ElementdesalaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElementdesalaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElementdesalaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
