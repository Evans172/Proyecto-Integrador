import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { ContactusComponent } from "./pages/contactus/contactus.component";
import { AboutusComponent } from "./pages/aboutus/aboutus.component";
import { TeamComponent } from "./pages/team/team.component";
import { ApartmentComponent } from "./pages/apartment/apartment.component";
import { ProjectComponent } from "./pages/project/project.component";


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'team' , component: TeamComponent },
    { path: 'apartment' , component: ApartmentComponent},
    { path: 'apartment/:id' , component: ApartmentComponent},
    {path: 'project' , component: ProjectComponent},
    {path: 'project/:id' , component: ProjectComponent},
    { path: '' , redirectTo: 'home' , pathMatch: 'full' }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}