import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { apiUrl } from 'src/environments/environment';

@Component({
  selector: 'app-motoristdetail',
  templateUrl: './motoristdetail.component.html',
  styleUrls: ['./motoristdetail.component.scss']
})
export class MotoristdetailComponent implements OnInit {
  id:any;
  acc:any;
  motorist:any;
  vehicle:any;
  constructor(private http: HttpClient, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.getMotorist(this.id);
  }
  getMotorist(id:any): void {    
    const rooturl = apiUrl+'/trafficaccidentanalysis/motorist';      
     this.http.get(rooturl + '/' + id).subscribe(data => {


      this.acc = data;        
       console.log(this.vehicle);                    
        });

    }

      motoristDetail(vehicleId:any){

        this.router.navigate(['/theme/motoristdetail',vehicleId]).then(e => {
          if (e) {
            console.log("Navigation is successful!");
          } else {
            console.log("Navigation has failed!");
          }
         });
   }

   
}