import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EmployesService} from "../services/employes.service";
import {catchError, map, Observable, throwError} from "rxjs";
import {Employe} from "../model/employe.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrl: './employes.component.css'
})
export class EmployesComponent implements OnInit{
  employes!:Observable<Array<Employe>>;
  errorMessage!:string;
  searchFormGroup:FormGroup|undefined;
  constructor(private employeService:EmployesService,private fb:FormBuilder,public authService:AuthService) {
  }
  ngOnInit(): void {
    this.searchFormGroup=this.fb.group({
      keyword:this.fb.control("")
    });
    this.handleSearchEmploye();
  }

  handleSearchEmploye() {
    let kw = this.searchFormGroup?.value.keyword;
    this.employes=this.employeService.searchEmploye(kw);
    this.employes=this.employeService.searchEmploye(kw).pipe(
      catchError(err=>{
          this.errorMessage=err.message;
          return throwError(err);
        }

      )
    );

  }

  handleDeleteEmploye(e:Employe) {
    let confime=confirm("Are you sure")
    if (!confime) return
    this.employeService.deleteEmploye(e.idEmploye).subscribe({
      next:(resp)=>{
        this.employes=this.employes.pipe(
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

}
