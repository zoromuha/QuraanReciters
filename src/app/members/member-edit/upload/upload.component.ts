import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/_services/auth.service';
import { Photo } from 'src/app/_models/Photo';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  @Input() photos: Photo[];
  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  hasAnotherDropZoneOver = false;
  response: string;
  baseUrl = environment.baseUrl;
  public progress: number;
  public message: boolean;
  public onUploadFinished = new EventEmitter();

  constructor(private http: HttpClient , private authSerivce: AuthService) { }

  ngOnInit() {
    this.initializeUploader();
  }
  showfile(file) {
    const fileToUpload = file.rawFile as File;
    console.log(file);
    const formData = new FormData();
    formData.append('file', fileToUpload , fileToUpload.name);
    this.http.post('http://localhost:58883/api/photo/upload/' + this.authSerivce.decodeToken.nameid  , formData,
     {reportProgress: true, observe: 'events'})
    .subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event.type === HttpEventType.Response) {
        this.message = true;
        console.log(this.message);
        this.onUploadFinished.emit(event.body);
      }
    });
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
  initializeUploader() {
this.uploader = new FileUploader({
url: 'http://localhost:58883/api/photo/upload/' + this.authSerivce.decodeToken.nameid,
authToken: 'bearer ' + localStorage.getItem('token'),
isHTML5: true,
allowedFileType: ['image'],
removeAfterUpload: true,
autoUpload: false,
 });
  }
}
