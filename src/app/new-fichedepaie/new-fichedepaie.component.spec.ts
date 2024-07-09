import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFichedepaieComponent } from './new-fichedepaie.component';

describe('NewFichedepaieComponent', () => {
  let component: NewFichedepaieComponent;
  let fixture: ComponentFixture<NewFichedepaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewFichedepaieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewFichedepaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
