import { Component,OnInit } from '@angular/core';
import {map, Observable} from "rxjs";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Conge} from "../model/conge";
import {CongeService} from "../services/conge.service";
import {EmployesService} from "../services/employes.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-conges',
  templateUrl: './conges.component.html',
  styleUrl: './conges.component.css'
})
export class CongesComponent implements OnInit {
  conges!: Observable<Array<Conge>>;
  errorMessage!: string;

  constructor(private congeService: CongeService, private fb: FormBuilder,private employeService:EmployesService,public authService:AuthService) {
  }

  ngOnInit(): void {
    this.conges = this.congeService.allConges();
  }

  handleDeleteConge(e: Conge) {
    let confime=confirm("Are you sure")
    if (!confime) return
    this.congeService.deleteConge(e.idConge).subscribe({
      next:(resp)=>{
        this.conges=this.conges.pipe(
          map(data=>{
            let index=data.indexOf(e);
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

  getEmployeName(idEmploye: number) {
    return this.employeService.getEmployeName(idEmploye);
  }
}
