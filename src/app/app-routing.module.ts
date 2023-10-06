import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MigrateVersionComponent } from './Components/migrate-version/migrate-version.component';
import { MigrateLanguageComponent } from './Components/migrate-language/migrate-language.component';
import { HomeComponent } from './Components/home/home.component';
import { ProcessProjectComponent } from './Components/process-project/process-project.component';
import { LanguageSelectorComponent } from './Components/language-selector/language-selector.component';

const routes: Routes = [{
  path:'migrate-version',
  component: MigrateVersionComponent
},{
  path:'migrate-language',
  component: MigrateLanguageComponent
},{
  path:'home',
  component: HomeComponent
},
{
  path:'process-folder',
  component: ProcessProjectComponent
},
{
  path:'language-selector',
  component:LanguageSelectorComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
