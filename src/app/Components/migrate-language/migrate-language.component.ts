import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { projectInfo } from 'src/app/models/projectInfo';
import { OpenAIDemoService } from 'src/app/open-aidemo.service';

@Component({
  selector: 'app-migrate-language',
  templateUrl: './migrate-language.component.html',
  styleUrls: ['./migrate-language.component.css']
})
export class MigrateLanguageComponent {
  constructor(private service: OpenAIDemoService, private toast:NgToastService) { }

  solutionPath: string = '';
  outputFolderPath: string = '';
  projectList: any[] = [];
  prompt: string = '';
  outputFolderPathForFolder: string = '';
  projectFolders: any[] = [];

  onSubmit(){
    this.service.getProjectPaths(this.solutionPath).subscribe(
      (result: any) => {
        this.projectList = result;
        console.log(result);
        this.toast.success({detail:"SUCCESS",summary:"",duration:5000,position:'topRight'});
      },
      (error: any) => {
        console.error('Error occured', error);
        this.toast.error({detail:"ERROR",summary:"Invalid Input",duration:5000,position:'topRight'});
        // Handle the error here, e.g., display an error message to the user.
      }
    );

    /*this.service.createDirectoryStructure(this.solutionPath, this.outputFolderPath).subscribe((result:any) =>{console.log(result);}, (error:any) => {console.log(error);});*/
  }
  /*processProject(projectPath:string){
    this.service.getProjectFolders(projectPath).subscribe((data: any) => {
      this.projectFolders = data as any[];
      console.log(this.projectFolders);
    } );
  }*/

}
