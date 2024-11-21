import { Component } from '@angular/core';
import { UploadFileComponent } from "./components/upload-file/upload-file.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ UploadFileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Secret Santa';
}
