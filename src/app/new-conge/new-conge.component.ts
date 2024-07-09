import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmployesService} from "../services/employes.service";
import {Router} from "@angular/router";
import {CongeService} from "../services/conge.service";
import {Employe} from "../model/employe.model";
import {Conge} from "../model/conge";

@Component({
  selector: 'app-new-conge',
  templateUrl: './new-conge.component.html',
  styleUrl: './new-conge.component.css'
})
export class NewCongeComponent implements OnInit{
  newCongeFormGroup!:FormGroup;
  constructor(private fb:FormBuilder,private congeService:CongeService, private router:Router) {
  }
  ngOnInit(): void {
    this.newCongeFormGroup=this.fb.group({
      idEmploye:this.fb.control(null,[Validators.required]),
      dateDebut:this.fb.control(null,[Validators.required]),
      dateFin:this.fb.control(null,[Validators.required]),
      statut:this.fb.control(null,[Validators.required]),
      typeDeConge:this.fb.control(null,[Validators.required])
    });
  }

  handleSaveConge() {
    let conge: Conge = this.newCongeFormGroup.value;
    this.congeService.saveConge(conge).subscribe({
      next: data => {
        alert("Conge has been Saved !");
        this.router.navigateByUrl('/admin/conges');
      },
      error: err => {
        console.log(err);
      }
    });
  }
}

