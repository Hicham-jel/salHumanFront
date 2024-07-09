import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';
import { EmployesComponent } from './employes/employes.component';
import { CongesComponent } from './conges/conges.component';
import { NewEmployeComponent } from './new-employe/new-employe.component';
import { EditEmployeComponent } from './edit-employe/edit-employe.component';
import { EditCongeComponent } from './edit-conge/edit-conge.component';
import { NewCongeComponent } from './new-conge/new-conge.component';
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import {AppHttpInterceptor} from "./interceptors/app-http.interceptor";
import { FichedepaieComponent } from './fichedepaie/fichedepaie.component';
import { ElementdesalaireComponent } from './elementdesalaire/elementdesalaire.component';
import { EditFichedepaieComponent } from './edit-fichedepaie/edit-fichedepaie.component';
import { NewFichedepaieComponent } from './new-fichedepaie/new-fichedepaie.component';
import { EditelementdesalaireComponent } from './editelementdesalaire/editelementdesalaire.component';
import { NewElementsalaireComponent } from './new-elementsalaire/new-elementsalaire.component';
import { ProposComponent } from './propos/propos.component';
import { AcceuilComponent } from './acceuil/acceuil.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployesComponent,
    CongesComponent,
    NewEmployeComponent,
    EditEmployeComponent,
    EditCongeComponent,
    NewCongeComponent,
    LoginComponent,
    AdminTemplateComponent,
    FichedepaieComponent,
    ElementdesalaireComponent,
    EditFichedepaieComponent,
    NewFichedepaieComponent,
    EditelementdesalaireComponent,
    NewElementsalaireComponent,
    ProposComponent,
    AcceuilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    {provide:HTTP_INTERCEPTORS,useClass:AppHttpInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
