import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FicheDePaie} from "../model/ficheDePaie";
import {ElementDeSalaire} from "../model/elementDeSalaire";

@Injectable({
  providedIn: 'root'
})
export class ElementdesalaireService {
  backendhost:string="http://localhost:8089"
  constructor(private  http:HttpClient) {}


  //add
  public saveElementDeSalaire(es :ElementDeSalaire  ):Observable<ElementDeSalaire >{
    return this.http.post<ElementDeSalaire >(this.backendhost+"/elementsalaire",es);
  }
  //GetAll
  public allElementDeSalaires() :Observable<Array<ElementDeSalaire >>{
    return this.http.get<Array<ElementDeSalaire >>(this.backendhost+"/elementsalaire/all");
  }

  //GetByID
  public getElementDeSalaireByID(idEs:number) :Observable<ElementDeSalaire >{
    return this.http.get<ElementDeSalaire >(this.backendhost+"/elementsalaire/"+idEs);
  }

  //Delete
  public deleteElementDeSalaires(idES:number){
    return this.http.delete(this.backendhost+"/elementsalaire/"+idES);
  }

  //Update
  public updateelemntdeSalaire(idES:number,es:ElementDeSalaire ) :Observable<ElementDeSalaire >{
    return this.http.put<ElementDeSalaire >(this.backendhost+"/elementsalaire/"+idES,es);
  }
}
