import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employe} from "../model/employe.model";

@Injectable({
  providedIn: 'root'
})
export class EmployesService {
  backendhost:string="http://localhost:8089"
  constructor(private  http:HttpClient) {}
    public getEmployes() :Observable<Array<Employe>>{
      return this.http.get<Array<Employe>>(this.backendhost+"/employe/all");
  }
  public searchEmploye(keyword:string):Observable<Array<Employe>>{
    return this.http.get<Array<Employe>>(this.backendhost+"/employe/search?keyword="+keyword);
  }
  public saveEmploye(employe:Employe):Observable<Employe>{
    return this.http.post<Employe>(this.backendhost+"/employe",employe);
  }
  public deleteEmploye(idEmploye:number){
    return this.http.delete(this.backendhost+"/employe/"+idEmploye);
  }
  public getEmployeName(idEmploye:number) :Observable<String>{
    return this.http.get<String>(this.backendhost+"/employe/Name/"+idEmploye);
  }
  public getEmploye(idEmploye:number) :Observable<Employe>{
    return this.http.get<Employe>(this.backendhost+"/employe/"+idEmploye);
  }
  public updateEmploye(idEmploye:number,employe:Employe) :Observable<Employe>{
    return this.http.put<Employe>(this.backendhost+"/employe/"+idEmploye,employe);
  }
}
