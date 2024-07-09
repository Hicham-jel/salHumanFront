import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmployesService} from "../services/employes.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CongeService} from "../services/conge.service";
import {Employe} from "../model/employe.model";
import {Conge} from "../model/conge";

@Component({
  selector: 'app-edit-conge',
  templateUrl: './edit-conge.component.html',
  styleUrl: './edit-conge.component.css'
})
export class EditCongeComponent implements OnInit {
  editCongeFormGroup!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private congeService: CongeService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  handleEditEmploye() {
    if (this.editCongeFormGroup.valid) {
      const conge: Conge = this.editCongeFormGroup.value;
      this.congeService.updateConge(conge.idConge, conge).subscribe({
        next: data => {
          alert('Congé modifié avec succès!');
          this.router.navigateByUrl('/conges');
        },
        error: err => {
          console.error('Erreur lors de la mise à jour de le congé:', err);
        }
      });
    }
  }

  ngOnInit(): void {
    this.editCongeFormGroup = this.fb.group({
      idConge: [null, Validators.required],
      dateDebut: this.fb.control('', [Validators.required, Validators.minLength(4)]),
      dateFin: this.fb.control('', [Validators.required, Validators.minLength(4)]),
      typeDeConge: this.fb.control('', [Validators.required, Validators.minLength(4)]),
      statut: this.fb.control('', [Validators.required, Validators.minLength(4)])
    });
    const idStr = this.route.snapshot.paramMap.get('id');
    if (idStr) {
      const id = Number(idStr);
      if (!isNaN(id)) {
        this.congeService.getConges(id).subscribe({
          next: (conge) => {
            this.editCongeFormGroup.patchValue(conge);
          },
          error: (err) => {
            console.error('Erreur lors de la récupération de le conge:', err);
          }
        });
      } else {
        console.error('L\'ID fourni n\'est pas un nombre valide.');
      }
    } else {
      console.error('Aucun ID n\'a été fourni pour le conge.');
    }
  }

}
