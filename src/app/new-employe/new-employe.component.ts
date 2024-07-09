import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Employe} from "../model/employe.model";
import {EmployesService} from "../services/employes.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-employe',
  templateUrl: './new-employe.component.html',
  styleUrl: './new-employe.component.css'
})
export class NewEmployeComponent implements OnInit{
  newEmployeFormGroup!:FormGroup;
  constructor(private fb:FormBuilder,private employeService:EmployesService, private router:Router) {
  }
  ngOnInit(): void {
    this.newEmployeFormGroup=this.fb.group({
      nom:this.fb.control(null,[Validators.required]),
      prenom:this.fb.control(null,[Validators.required]),
      departement:this.fb.control(null,[Validators.required]),
      poste:this.fb.control(null,[Validators.required]),
      date_embauche:this.fb.control(null,[Validators.required])
    });
  }

  handleSaveEmploye() {
    let employe: Employe = this.newEmployeFormGroup.value;
    this.employeService.saveEmploye(employe).subscribe({
      next: data => {
        alert("Employe has been Saved !");
        this.router.navigateByUrl('/admin/employes');
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
