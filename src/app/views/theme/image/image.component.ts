import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../../../service/upload-file.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { readFileSync } from 'fs';
import { apiUrl } from 'src/environments/environment';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  id: any;
  imgURL: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any ;
  message!: string;
  imageName: any;
  imageNames:any;
  text:any;


  constructor(private domSanitizer:DomSanitizer,private uploadService: UploadFileService,private actRoute: ActivatedRoute,private http: HttpClient) { }

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.getImageName(this.id);
    


    
  }
  
  getImageName(id:any) {
    this.http.get(apiUrl+'/trafficaccidentanalysis/accident/image/' + this.id)
      .subscribe(
        data => {
          this.imageNames = data;
          
        }
      );
  }
  
}
