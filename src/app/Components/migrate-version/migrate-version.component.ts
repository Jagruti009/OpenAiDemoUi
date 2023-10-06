import { Component } from '@angular/core';
import { OpenAIDemoService } from 'src/app/open-aidemo.service';

@Component({
  selector: 'app-migrate-version',
  templateUrl: './migrate-version.component.html',
  styleUrls: ['./migrate-version.component.css']
})
export class MigrateVersionComponent {
  projectPath = '';
  targetFramework: string | null = null;
  FolderContents: string[] = []; 
  ProjectFolders: string[] = []; 
  ProjectFiles: string[] = []; 
  activeAction: 'listAll' | 'listFolders' | 'listFiles' |'' = '';
  searchAll: string = ''; 
  searchFolders: string = ''; 
  searchFiles: string = ''; 
  selectedFileForProcessing: string | null = null;
  isProcessingSuccessful = false;
  isLoading: boolean = false;
  key: string = '';

  constructor(private service : OpenAIDemoService) { }

  filterData(data: string[], search: string): string[] {
    return data.filter(item => item.toLowerCase().includes(search.toLowerCase()));
  }

  updateFilteredData() {
    switch (this.activeAction) {
      case 'listAll':
        this.FolderContents = this.filterData(this.FolderContents, this.searchAll);
        break;
      case 'listFolders':
        this.ProjectFolders = this.filterData(this.FolderContents, this.searchFolders);
        break;
      case 'listFiles':
        this.ProjectFiles = this.filterData(this.FolderContents, this.searchFiles);
        break;
    }
  }

  FindTargetFramework() {
    if (this.projectPath) {
      this.service.getTargetFramework(this.projectPath).subscribe(
        (result: any) => {
          this.targetFramework = result;
        },
        (error: any) => {
          console.error('Error finding target framework', error);
          this.targetFramework = error.error.text;
          // Handle the error here, e.g., display an error message to the user.
        }
      );
    }
  }
  listAllContent() {
    if (this.projectPath) {
      this.service.getFolderContent(this.projectPath).subscribe(
        (result: any) => {
          this.FolderContents = result; 
        },
        (error: any) => {
          console.error('Error listing files', error);
        }
      );
    }
    this.activeAction = 'listAll';
  }

  listProjectFolders() {
    if (this.projectPath) {
      this.service.getProjectFolders(this.projectPath).subscribe(
        (result: any) => {
          this.ProjectFolders = result; 
        },
        (error: any) => {
          console.error('Error listing files', error);
        }
      );
    }
    this.activeAction = 'listFolders';
  }

  listFilesInFolder() {
    if (this.projectPath) {
      this.service.getFilesInFolder(this.projectPath).subscribe(
        (result: any) => {
          this.ProjectFiles = result; 
        },
        (error: any) => {
          console.error('Error listing files', error);
        }
      );
    }
    this.activeAction = 'listFiles';
  }
  processFile(file: string) {
    this.selectedFileForProcessing = file;
    this.isLoading = true; // Set loading state to true

    // Call the service for the selected file
    if (this.selectedFileForProcessing) {
      this.service.parseFileThroughApi(
        this.selectedFileForProcessing,
        "your_hardcoded_prompt", // Replace with your desired prompt
        "your_hardcoded_output_folder_path" // Replace with your desired output folder path
        ,this.key
      ).subscribe(
        (result: any) => {
          // Handle success
          // You can display a success message or take any other action
          console.log('Parsing successful', result);
          this.isProcessingSuccessful = true; // Set success state to true
          this.isLoading = false; // Set loading state to false
        },
        (error: any) => {
          // Handle error
          // You can display an error message or take any other action
          console.error('Error parsing file', error);
          this.isLoading = false; // Set loading state to false
        }
      );
    }
  }
}

