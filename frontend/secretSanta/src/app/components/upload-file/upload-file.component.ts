import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-upload-file',
  standalone: true,
  imports: [],
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.css'
})
export class UploadFileComponent {
  employeeFile: File | null = null;
  previousFile: File | null = null;

  constructor(private apiService: ApiService){

  }

  onFileChange(event: any, type: string){
    if(type === 'employees') this.employeeFile = event.target.files[0];
    else if(type === 'previous') this.previousFile = event.target.files[0];
  }

  submitFiles(){
    const formData = new FormData();
    if(this.employeeFile) formData.append('employees', this.employeeFile);
    if(this.previousFile) formData.append('previous', this.previousFile);

    this.apiService.uploadFiles(formData).subscribe(response => {
      console.log('Assignments',response)
    })
  }
}
