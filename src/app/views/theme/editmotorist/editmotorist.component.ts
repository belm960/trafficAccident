import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { apiUrl } from 'src/environments/environment';

@Component({
  selector: 'app-editmotorist',
  templateUrl: './editmotorist.component.html',
  styleUrls: ['./editmotorist.component.scss']
})
export class EditmotoristComponent implements OnInit {
  id:any;
  motorist:any;
  additionalInfo: any;
  dateCreated : any;
  dateUpdated:any;
  education:any;
  hasLicense:any;
  issuedCountry:any;
  issuedDate:any;
  issuedState:any;
  licenseNumber:any;
  motorisReadiness:any;
  


  constructor(private http: HttpClient, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      this.id =params['id']; // (+) converts string 'id' to a number         
      console.log("The id in the url"+this.id);
    });


    this.getMotorist(this.id);
   
         
  }
  updatemotorist(form : any){
    const rooturl = apiUrl+'/trafficaccidentanalysis/motorist/update/';      
    this.http.put(rooturl + this.id,form).subscribe(data => {        
     this.motorist = data; 
     this.router.navigate(['/theme/accidentlist'])
     
           
      console.log(this.motorist);              
 });


  }
  getMotorist(id : any): void {    
    const rooturl = apiUrl+'/trafficaccidentanalysis/motorist/motorist/';      
     this.http.get(rooturl + this.id).subscribe(data => {        
      this.motorist = data; 
      this.additionalInfo = this.motorist.additionalInfo;
      this.dateCreated = this.motorist.dateCreated;
      this.dateUpdated = this.motorist.dateUpdated;
      this.education = this.motorist.education;
      this.hasLicense = this.motorist.hasLicense;
      this.issuedCountry = this.motorist.issuedCountry;
      this.issuedDate = this.motorist.issuedDate;
      this.issuedState = this.motorist.issuedState;
      this.licenseNumber = this.motorist.licenseNumber;
      this.motorisReadiness = this.motorist.motorisReadiness;
      
            
       console.log(this.motorist);              
  });

  }

  
}


