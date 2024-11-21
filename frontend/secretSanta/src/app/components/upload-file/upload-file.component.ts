import { Component, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { UploadFiles } from './upload-file.constant';

@Component({
  selector: 'app-upload-file',
  standalone: true,
  imports: [MatButtonModule,CommonModule],
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class UploadFileComponent {
  //COMPONENT VARIABLES
  employeeFile: File | null = null;
  previousFile: File | null = null;
  fileEntries = UploadFiles;

  constructor(private apiService: ApiService){

  }

  /**
   * This function hndles the file change events
   * @param event passing a selected event
   * @param type passing a selected type
   */
  onFileChange(event: any, type: string){
    if(type === 'employees') this.employeeFile = event.target.files[0];
    else if(type === 'previous') this.previousFile = event.target.files[0];
  }

  /**
   * This function handles the submit selected files
   */
  submitFiles(){
    const formData = new FormData();
    if(this.employeeFile) formData.append('employees', this.employeeFile);
    if(this.previousFile) formData.append('previous', this.previousFile);

    this.apiService.uploadFiles(formData).subscribe(response => {
      console.log('Assignments',response)
    })
  }
}
