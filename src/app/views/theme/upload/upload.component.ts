import { Component, OnInit } from '@angular/core';

import { UploadFileService } from '../../../service/upload-file.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

 
  selectedFiles: FileList | undefined;
  currentFileUpload: File | undefined;
  progress: { percentage: number } = { percentage: 0 };
  id:any;
  constructor(private uploadService: UploadFileService,private actRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  upload(id:any) {
    console.log(this.id)
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles!.item(0) || undefined;
    this.uploadService.pushFileToStorage(this.currentFileUpload!,this.id).subscribe((event: any) => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });

    this.selectedFiles = undefined;
  }

}
