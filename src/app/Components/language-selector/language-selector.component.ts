import { Component } from '@angular/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent {
  constructor() { }
  selectedSourceLanguage: string = '';
  selectedTargetLanguage: string = '';
  showMessage: boolean = false;
  isMigrationRoute: boolean = false;

  checkLanguages() {
    if (this.selectedSourceLanguage === 'csharp' && this.selectedTargetLanguage === 'java') {
      // If user chooses C# as source and Java as target, route to migrate component
      this.isMigrationRoute = true;
      this.showMessage = false;
    } else {
      // Show the "Service is under development" message
      this.showMessage = true;
      this.isMigrationRoute = false;
    }
  }
}
