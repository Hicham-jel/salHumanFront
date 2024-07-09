import {Component, OnInit} from '@angular/core';
import {FicheDePaie} from "../model/ficheDePaie";
import {map, Observable} from "rxjs";
import {FormBuilder} from "@angular/forms";
import {ElementdesalaireService} from "../services/elementdesalaire.service";
import {FichedepaieService} from "../services/fichedepaie.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-fichedepaie',
  templateUrl: './fichedepaie.component.html',
  styleUrl: './fichedepaie.component.css'
})
export class FichedepaieComponent implements OnInit{
  ficheP!: Observable<Array<FicheDePaie>>;
  errorMessage!: string;

  constructor(private elementsService: ElementdesalaireService, private fb: FormBuilder , private fichedepaieservice: FichedepaieService,public authService:AuthService ) {
  }

  ngOnInit(): void {
    this.ficheP=this.fichedepaieservice.allficheDePaie();
  }

  handleDeletefichedepais(fp: FicheDePaie) {
    let confime=confirm("Are you sure")
    if (!confime) return
    this.fichedepaieservice.deleteficheDePaie(fp.idFiche).subscribe({
      next:(resp)=>{
        this.ficheP=this.ficheP.pipe(
          map(data=>{
            let index=data.indexOf(fp);
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


}
