import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FichedepaieService} from "../services/fichedepaie.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FicheDePaie} from "../model/ficheDePaie";

@Component({
  selector: 'app-edit-fichedepaie',
  templateUrl: './edit-fichedepaie.component.html',
  styleUrl: './edit-fichedepaie.component.css'
})
export class EditFichedepaieComponent implements OnInit{
  editFichedePaieFormGroup!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ficheDePaieService: FichedepaieService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }


  ngOnInit(): void {
    this.editFichedePaieFormGroup = this.fb.group({
      idFiche: [null, Validators.required],
      periode: this.fb.control('', [Validators.required]),
      montant_brut: this.fb.control('', [Validators.required]),
      montant_net: this.fb.control('', [Validators.required]),
      details_deductions: this.fb.control('', [Validators.required]),
    });
    const idStr = this.route.snapshot.paramMap.get('id');
    if (idStr) {
      const id = Number(idStr);
      if (!isNaN(id)) {
        this.ficheDePaieService.getficheDePaie(id).subscribe({
          next: (ficheDePaie) => {
            this.editFichedePaieFormGroup.patchValue(ficheDePaie);
          },
          error: (err) => {
            console.error('Erreur lors de la récupération de fiche De Paie:', err);
          }
        });
      } else {
        console.error('L\'ID fourni n\'est pas un nombre valide.');
      }
    } else {
      console.error('Aucun ID n\'a été fourni pour de fiche De Paie .');
    }
  }
  handleEditFicheDePaie() {
    if (this.editFichedePaieFormGroup.valid) {
      const fichePaie: FicheDePaie = this.editFichedePaieFormGroup.value;
      this.ficheDePaieService.updateficheDePaie(fichePaie.idFiche, fichePaie).subscribe({
        next: data => {
          alert('Fiche De Paie modifié avec succès!');
          this.router.navigateByUrl('/fichesDePaies');
        },
        error: err => {
          console.error('Erreur lors de la mise à jour de la fiche De Paie:', err);
        }
      });
    }
  }


}
