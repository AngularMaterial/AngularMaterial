import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { HomepageComponent } from './homepage/homepage.component';
//import our components here

//define routes here 
export const routes: Routes = [
    {path: '', component: HomepageComponent},
    {path: 'details', component: DetailsPageComponent}
];
