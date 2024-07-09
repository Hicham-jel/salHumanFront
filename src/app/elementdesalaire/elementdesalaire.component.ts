import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {ElementDeSalaire} from "../model/elementDeSalaire";
import {ElementdesalaireService} from "../services/elementdesalaire.service";
import {FormBuilder} from "@angular/forms";
import {FichedepaieService} from "../services/fichedepaie.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-elementdesalaire',
  templateUrl: './elementdesalaire.component.html',
  styleUrl: './elementdesalaire.component.css'
})
export class ElementdesalaireComponent implements OnInit{
  elementS!: Observable<Array<ElementDeSalaire>>;
  errorMessage!: string;


  constructor(private elementsService: ElementdesalaireService, private fb: FormBuilder , private fichedepaieservice: FichedepaieService,public authService:AuthService ) {
  }

  ngOnInit(): void {
    this.elementS = this.elementsService.allElementDeSalaires();
  }

  handleDeleteElementdeSalaire(es: ElementDeSalaire) {
    let confime=confirm("Are you sure")
    if (!confime) return
    this.elementsService.deleteElementDeSalaires(es.idElementSalaire).subscribe({
      next:(resp)=>{
        this.elementS=this.elementS.pipe(
          map(data=>{
            let index=data.indexOf(es);
            data.slice(index,1)
            return data;
          })
        );
      },
      error:err=>{
        console.log(err);
      }
    })
  }

  getFicheDepaieByID(idFicheDepaie: number) {

    return this.fichedepaieservice.getficheDePaie(idFicheDepaie);

  }

}
