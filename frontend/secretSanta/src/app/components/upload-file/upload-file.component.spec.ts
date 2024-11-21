import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UploadFileComponent } from './upload-file.component';
import { ApiService } from '../../services/api.service';
import { of } from 'rxjs';

describe('UploadFileComponent', () => {
  let component: UploadFileComponent;
  let fixture: ComponentFixture<UploadFileComponent>;
  let apiService: jasmine.SpyObj<ApiService>;

  beforeEach(async () => {
    const apiServiceMock = jasmine.createSpyObj('ApiService', ['uploadFiles']);

    await TestBed.configureTestingModule({
      imports: [UploadFileComponent, HttpClientTestingModule],
      providers: [{ provide: ApiService, useValue: apiServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(UploadFileComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update employeeFile when a file is selected for employees', () => {
    const file = new File(['content'], 'employee-file.txt');
    const event = { target: { files: [file] } } as any;

    component.onFileChange(event, 'employees');

    expect(component.employeeFile).toBe(file);
  });

  it('should update previousFile when a file is selected for previous', () => {
    const file = new File(['content'], 'previous-file.txt');
    const event = { target: { files: [file] } } as any;

    component.onFileChange(event, 'previous');

    expect(component.previousFile).toBe(file);
  });

  it('should call uploadFiles with formData on submitFiles()', () => {
    const employeeFile = new File(['employee content'], 'employee-file.txt');
    const previousFile = new File(['previous content'], 'previous-file.txt');
    const mockResponse = { success: true };

    component.employeeFile = employeeFile;
    component.previousFile = previousFile;
    apiService.uploadFiles.and.returnValue(of(mockResponse));

    component.submitFiles();

    const formData = new FormData();
    formData.append('employees', employeeFile);
    formData.append('previous', previousFile);

    expect(apiService.uploadFiles).toHaveBeenCalledWith(formData);
  });

  it('should log response after file submission', () => {
    spyOn(console, 'log');
    const mockResponse = { success: true };
    apiService.uploadFiles.and.returnValue(of(mockResponse));

    component.submitFiles();

    expect(console.log).toHaveBeenCalledWith('Assignments', mockResponse);
  });
});
