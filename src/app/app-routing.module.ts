import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployesComponent} from "./employes/employes.component";
import {CongesComponent} from "./conges/conges.component";
import {NewEmployeComponent} from "./new-employe/new-employe.component";
import {EditEmployeComponent} from "./edit-employe/edit-employe.component";
import {EditCongeComponent} from "./edit-conge/edit-conge.component";
import {NewCongeComponent} from "./new-conge/new-conge.component";
import {LoginComponent} from "./login/login.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {ElementdesalaireComponent} from "./elementdesalaire/elementdesalaire.component";
import {FichedepaieComponent} from "./fichedepaie/fichedepaie.component";
import {EditFichedepaieComponent} from "./edit-fichedepaie/edit-fichedepaie.component";
import {NewFichedepaieComponent} from "./new-fichedepaie/new-fichedepaie.component";
import {EditelementdesalaireComponent} from "./editelementdesalaire/editelementdesalaire.component";
import {NewElementsalaireComponent} from "./new-elementsalaire/new-elementsalaire.component";
import {ProposComponent} from "./propos/propos.component";

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"",redirectTo:"/login",pathMatch:"full"},
  {path:"admin",component:AdminTemplateComponent,canActivate:[AuthenticationGuard],
    children:[
      {path:"employes",component:EmployesComponent},
      {path:"conges",component:CongesComponent},
      {path:"new-employe",component:NewEmployeComponent},
      {path:"new-conge",component:NewCongeComponent},
      {path:"edit-conge/:id",component:EditCongeComponent},
      {path:"edit-employe/:id",component:EditEmployeComponent},
      {path:"elementdesalaire",component:ElementdesalaireComponent},
      {path:"fichedepaie",component:FichedepaieComponent},
      {path:"editfichedepaie",component:EditFichedepaieComponent},
      {path:"new-fichedepaie",component:NewFichedepaieComponent},
      {path:"elementdesalaire",component:ElementdesalaireComponent},
      {path:"editelementdesalaire",component:EditelementdesalaireComponent},
      {path:"new-elementsalaire",component:NewElementsalaireComponent},
      {path:"propos",component:ProposComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
