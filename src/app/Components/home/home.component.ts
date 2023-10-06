import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router,private toast:NgToastService){}
  showMessage: boolean = false;

  navigateToLanguageMigration(){
    this.router.navigate(['/language-selector']);
    this.showMessage = false;
  }
  navigateToVersionMigration(){
    //this.router.navigate(['/migrate-version']);
    this.showMessage = true;
    this.toast.warning({detail:"Service Under Development",summary:"",duration:5000,position:'topRight'});
  }
  
}
