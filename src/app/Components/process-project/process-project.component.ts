import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { OpenAIDemoService } from 'src/app/open-aidemo.service';

@Component({
  selector: 'app-process-project',
  templateUrl: './process-project.component.html',
  styleUrls: ['./process-project.component.css']
})
export class ProcessProjectComponent {
  constructor(private route:ActivatedRoute, private service: OpenAIDemoService,private toast:NgToastService ) { }

  ProjectPath: string = '';
  ProjectName: string = '';
  projectFolders: any[] = [];
  projectFiles: any[] = []; 
  outputResultPath: string = '';
  promptForFolders: string = 'Give me a java version of this code';
  promptForFiles: string = '';
  loading: boolean = false;
  key: string = '';

  ngOnInit(): void {
    // Use ActivatedRoute to retrieve route parameters
    this.route.params.subscribe((params) => {
      this.ProjectPath = params['filePath'];
      this.ProjectName = params['name'];

      // Now you can access the values of filePath and name her
    });

    this.service.getProjectFolders(this.ProjectPath).subscribe((data: any) => {
      this.projectFolders = data as any[];
      
    } );

    this.service.getFilesInFolder(this.ProjectPath).subscribe((data: any) => {
      this.projectFiles = data as any[];
     
    } );
  }
  processPOM(){
    if(this.outputResultPath == '' || this.key == ''){
      this.toast.error({detail:"Error",summary:"Empty Output Path or Key",duration:5000,position:'topRight'});
      console.log('Empty Output Path');
    }
    else{
      this.loading = true;
      this.toast.warning({detail:"Processing",summary:'Project Object Model is processing',duration:20000,position:'topRight'});
      console.log('processing POM' )
      this.service.parsePOM(this.ProjectPath,this.outputResultPath,this.key).subscribe((data: any) => {
      this.loading = false;
      this.toast.success({detail:"SUCCESS",summary:"POM.xml Processed",duration:5000,position:'topRight'});
      }, (error: any) => {console.log(error.error.text); this.loading=false;
        this.toast.success({detail:"SUCCESS",summary:"POM.xml Processed",duration:5000,position:'topRight'});
    } );
    }
    
  }

  processFolder(folderPath: string) {
    if(this.outputResultPath == '' || this.promptForFolders == '' || this.key == ''){
      this.toast.error({detail:"Error",summary:"Empty Output Path Or Prompt Or Key",duration:5000,position:'topRight'});
      console.log('Empty Output Path Or Prompt');
    }
    else{
      this.toast.warning({detail:"Processing",summary:folderPath,duration:20000,position:'topRight'});
      console.log('processFolder', folderPath);
      this.service.parseFolderThroughApiJava(folderPath, this.promptForFolders, this.outputResultPath,this.key).subscribe({
        next: (data: any) => {
          console.log(data);
          this.toast.success({detail:"SUCCESS",summary:"Folder Processed",duration:5000,position:'topRight'});
        },
        error: (error: any) => {
          console.log(error.error.text);
          this.toast.success({detail:"SUCCESS",summary:"Folder Processed",duration:5000,position:'topRight'});
        }
      });
    }
  }
  processFile(filePath: string) {
    console.log('processFile', filePath);
  }

}

