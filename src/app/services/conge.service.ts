import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employe} from "../model/employe.model";
import {Conge} from "../model/conge";

@Injectable({
  providedIn: 'root'
})
export class CongeService {
  backendhost:string="http://localhost:8089"
  constructor(private  http:HttpClient) {}
  public allConges() :Observable<Array<Conge>>{
    return this.http.get<Array<Conge>>(this.backendhost+"/conges/all");
  }
  public getConges(idConge:number) :Observable<Conge>{
    return this.http.get<Conge>(this.backendhost+"/conges/"+idConge);
  }
  public deleteConge(idConge:number){
    return this.http.delete(this.backendhost+"/conges/"+idConge);
  }
  public updateConge(idConge:number,conge:Conge) :Observable<Conge>{
    return this.http.put<Conge>(this.backendhost+"/conges/"+idConge,conge);
  }
  public saveConge(conge:Conge):Observable<Conge>{
    return this.http.post<Conge>(this.backendhost+"/conges",conge);
  }
}
