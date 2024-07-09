import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditelementdesalaireComponent } from './editelementdesalaire.component';

describe('EditelementdesalaireComponent', () => {
  let component: EditelementdesalaireComponent;
  let fixture: ComponentFixture<EditelementdesalaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditelementdesalaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditelementdesalaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
