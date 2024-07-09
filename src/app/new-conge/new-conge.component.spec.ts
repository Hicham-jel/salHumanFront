import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCongeComponent } from './new-conge.component';

describe('NewCongeComponent', () => {
  let component: NewCongeComponent;
  let fixture: ComponentFixture<NewCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewCongeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
