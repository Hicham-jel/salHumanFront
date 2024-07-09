import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmployesService} from "../services/employes.service";
import {Router} from "@angular/router";
import {FichedepaieService} from "../services/fichedepaie.service";
import {Employe} from "../model/employe.model";
import {FicheDePaie} from "../model/ficheDePaie";

@Component({
  selector: 'app-new-fichedepaie',
  templateUrl: './new-fichedepaie.component.html',
  styleUrl: './new-fichedepaie.component.css'
})
export class NewFichedepaieComponent implements OnInit{
  newFicheFormGroup!:FormGroup;
  constructor(private fb:FormBuilder,private ficheService:FichedepaieService, private router:Router) {
  }
  ngOnInit(): void {
    this.newFicheFormGroup=this.fb.group({
      idEmploye:this.fb.control(null,[Validators.required]),
      periode:this.fb.control(null,[Validators.required]),
      montant_brut:this.fb.control(null,[Validators.required]),
      montant_net:this.fb.control(null,[Validators.required]),
      details_deductions:this.fb.control(null,[Validators.required])
    });
  }

  handleSaveFiche() {
    let fiche: FicheDePaie = this.newFicheFormGroup.value;
    this.ficheService.saveficheDePaie(fiche).subscribe({
      next: data => {
        alert("Fiche de paie has been Saved !");
        this.router.navigateByUrl('/admin/fichedepaie');
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
