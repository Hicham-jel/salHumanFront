import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichedepaieComponent } from './fichedepaie.component';

describe('FichedepaieComponent', () => {
  let component: FichedepaieComponent;
  let fixture: ComponentFixture<FichedepaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FichedepaieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FichedepaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
