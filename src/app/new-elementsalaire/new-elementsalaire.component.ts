import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmployesService} from "../services/employes.service";
import {Router} from "@angular/router";
import {ElementdesalaireService} from "../services/elementdesalaire.service";
import {Employe} from "../model/employe.model";
import {ElementDeSalaire} from "../model/elementDeSalaire";

@Component({
  selector: 'app-new-elementsalaire',
  templateUrl: './new-elementsalaire.component.html',
  styleUrl: './new-elementsalaire.component.css'
})
export class NewElementsalaireComponent implements OnInit{
  newElementFormGroup!:FormGroup;
  constructor(private fb:FormBuilder,private elementService:ElementdesalaireService, private router:Router) {
  }


  ngOnInit(): void {
    this.newElementFormGroup=this.fb.group({
      idFiche:this.fb.control(null,[Validators.required]),
      montant:this.fb.control(null,[Validators.required]),
      TypeE:this.fb.control(null,[Validators.required])
    });
  }
  handleSaveElement() {
    let element: ElementDeSalaire = this.newElementFormGroup.value;
    this.elementService.saveElementDeSalaire(element).subscribe({
      next: data => {
        alert("Element de salaire has been Saved !");
        this.router.navigateByUrl('/admin/elementdesalaire');
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
