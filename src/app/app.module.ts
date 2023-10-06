import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { MigrateVersionComponent } from './Components/migrate-version/migrate-version.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { MigrateLanguageComponent } from './Components/migrate-language/migrate-language.component';
import { HomeComponent } from './Components/home/home.component';
import { ProcessProjectComponent } from './Components/process-project/process-project.component';
import { NgToastModule } from 'ng-angular-popup';
import { LanguageSelectorComponent } from './Components/language-selector/language-selector.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MigrateVersionComponent,
    MigrateLanguageComponent,
    HomeComponent,
    ProcessProjectComponent,
    LanguageSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
