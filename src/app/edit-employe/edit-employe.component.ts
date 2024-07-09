import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EmployesService } from "../services/employes.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Employe } from "../model/employe.model";

@Component({
  selector: 'app-edit-employe',
  templateUrl: './edit-employe.component.html',
  styleUrls: ['./edit-employe.component.css']
})
export class EditEmployeComponent implements OnInit {
  editEmployeFormGroup!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private employeService: EmployesService,
    private router: Router,
    private route: ActivatedRoute  // Injectez ici directement
  ) {}

  ngOnInit(): void {
    this.editEmployeFormGroup = this.fb.group({
      idEmploye: [null, Validators.required],
      nom: this.fb.control('', [Validators.required, Validators.minLength(4)]),
      prenom: this.fb.control('', [Validators.required, Validators.minLength(4)]),
      departement: this.fb.control('', [Validators.required, Validators.minLength(4)]),
      poste: this.fb.control('', [Validators.required, Validators.minLength(4)]),
      date_embauche: this.fb.control('', [Validators.required, Validators.minLength(4)])
    });

    const idStr = this.route.snapshot.paramMap.get('id');
    if (idStr) {
      const id = Number(idStr);
      if (!isNaN(id)) {
        this.employeService.getEmploye(id).subscribe({
          next: (employe) => {
            this.editEmployeFormGroup.patchValue(employe);
          },
          error: (err) => {
            console.error('Erreur lors de la récupération de l\'employé:', err);
          }
        });
      } else {
        console.error('L\'ID fourni n\'est pas un nombre valide.');
      }
    } else {
      console.error('Aucun ID n\'a été fourni pour l\'employé.');
    }
  }

  handleEditEmploye() {
    if (this.editEmployeFormGroup.valid) {
      const employe: Employe = this.editEmployeFormGroup.value;
      this.employeService.updateEmploye(employe.idEmploye, employe).subscribe({
        next: data => {
          alert('Employé modifié avec succès!');
          this.router.navigateByUrl('/employes');
        },
        error: err => {
          console.error('Erreur lors de la mise à jour de l\'employé:', err);
        }
      });
    }
  }
}
