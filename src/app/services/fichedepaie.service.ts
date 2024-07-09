import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {FicheDePaie} from "../model/ficheDePaie";

@Injectable({
  providedIn: 'root'
})
export class FichedepaieService {
  backendhost:string="http://localhost:8089"
  constructor(private  http:HttpClient) {}

  //add
  public saveficheDePaie(fp :FicheDePaie  ):Observable<FicheDePaie>{
    return this.http.post<FicheDePaie>(this.backendhost+"/fichedepaie",fp);
  }

  //GetAll
  public allficheDePaie() :Observable<Array<FicheDePaie>>{
    return this.http.get<Array<FicheDePaie>>(this.backendhost+"/fichedepaie/all");
  }


  //GetByID
  public getficheDePaie(idFp:number) :Observable<FicheDePaie>{
    return this.http.get<FicheDePaie>(this.backendhost+"/fichedepaie/"+idFp);
  }

  //Delete
  public deleteficheDePaie(idFp:number){
    return this.http.delete(this.backendhost+"/fichedepaie/"+idFp);
  }

  //Update
  public updateficheDePaie(idFp:number,fp:FicheDePaie) :Observable<FicheDePaie>{
    return this.http.put<FicheDePaie>(this.backendhost+"/fichedepaie/"+idFp,fp);
  }
}
