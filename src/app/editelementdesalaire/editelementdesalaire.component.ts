import {Component, OnInit} from '@angular/core';
import {ElementDeSalaire} from "../model/elementDeSalaire";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ElementdesalaireService} from "../services/elementdesalaire.service";

@Component({
  selector: 'app-editelementdesalaire',
  templateUrl: './editelementdesalaire.component.html',
  styleUrl: './editelementdesalaire.component.css'
})
export class EditelementdesalaireComponent implements OnInit{
  editelementdesalaireFormGroup!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ElementDeSService: ElementdesalaireService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }


  handleEditelementDesalaire() {
    if (this.editelementdesalaireFormGroup.valid) {
      const elementSalaire: ElementDeSalaire = this.editelementdesalaireFormGroup.value;
      this.ElementDeSService.updateelemntdeSalaire(elementSalaire.idElementSalaire, elementSalaire).subscribe({
        next: data => {
          alert('Element De Salaire modifié avec succès!');
          this.router.navigateByUrl('/elementsDeSalaires');
        },
        error: err => {
          console.error('Erreur lors de la mise à jour de élément de salaire :', err);
        }
      });
    }
  }

  ngOnInit(): void {
    this.editelementdesalaireFormGroup = this.fb.group({
      idElementSalaire: [null, Validators.required],
      montant: this.fb.control('', [Validators.required]),
      typeE: this.fb.control('', [Validators.required]),


    });
    const idStr = this.route.snapshot.paramMap.get('id');
    if (idStr) {
      const id = Number(idStr);
      if (!isNaN(id)) {
        this.ElementDeSService.getElementDeSalaireByID(id).subscribe({
          next: (elementDeSalaire) => {
            this.editelementdesalaireFormGroup.patchValue(elementDeSalaire);
          },
          error: (err) => {
            console.error('Erreur lors de la récupération de élément de salaire :', err);
          }
        });
      } else {
        console.error('L\'ID fourni n\'est pas un nombre valide.');
      }
    } else {
      console.error('Aucun ID n\'a été fourni pour lélément de salaire.');
    }
  }
}
