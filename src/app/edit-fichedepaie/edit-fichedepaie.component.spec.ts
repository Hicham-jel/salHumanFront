import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFichedepaieComponent } from './edit-fichedepaie.component';

describe('EditFichedepaieComponent', () => {
  let component: EditFichedepaieComponent;
  let fixture: ComponentFixture<EditFichedepaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditFichedepaieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditFichedepaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
