import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenAIDemoService {

  constructor(private http:HttpClient) { }
  baseurl:string = "https://localhost:7038";

  getFolderContent(folderPath:string){
    return this.http.post(`${this.baseurl}/api/OpenAi/FolderContent`, null, {params:{folderPath:folderPath}});
  }

  getProjectFolders(folderPath:string){
    return this.http.post(`${this.baseurl}/api/OpenAi/ProjectFolders`, null, {params:{folderPath:folderPath}});
  }

  getFilesInFolder(folderPath:string){
    return this.http.post(`${this.baseurl}/api/OpenAi/FilesInFolder`, null, {params:{folderPath:folderPath}});
  }

  getTargetFramework(projectPath: string): Observable<string> {
    const params = { ProjectPath: projectPath };
    return this.http.get<string>(`${this.baseurl}/api/OpenAi/FindTargetFramework`, { params });
  }

  parseFileThroughApi(filePath:string, prompt:string, outputFolderPath:string, key:string){
    return this.http.post(`${this.baseurl}/api/OpenAi/ParseFileThroughAPI`, null, {params:{filePath:filePath, prompt:prompt, outputFolderPath:outputFolderPath,key:key}});
  }

  createDirectoryStructure(solutionPath:string, outputFolderPath:string){
    return this.http.post<string>(`${this.baseurl}/api/OpenAi/CreateDirectoryStructure`,{params:{solutionPath:solutionPath, outputFolderPath:outputFolderPath}});
  }

  getProjectPaths(solutionPath:string){
    return this.http.post(`${this.baseurl}/api/OpenAi/GetProjectPaths`,null, {params:{solutionPath:solutionPath}});
  }
  parseFolderThroughApiJava(folderPath:string, prompt:string, outputFolderPath:string, key:string){
    return this.http.post(`${this.baseurl}/api/OpenAi/ParseFolderThroughAPIJava`, null, {params:{folderPath:folderPath, prompt:prompt, outputFolderPath:outputFolderPath,key:key}});
  }

  parsePOM(projectPath:string, outputFolderPath:string,key:string){
    return this.http.post(`${this.baseurl}/api/OpenAi/ParsePOM`, null, {params:{projectPath:projectPath, outputFolderPath:outputFolderPath,key:key}});
  }



}
