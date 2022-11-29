import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { apiUrl } from 'src/environments/environment';

@Component({
  selector: 'app-editpersoninvehicle',
  templateUrl: './editpersoninvehicle.component.html',
  styleUrls: ['./editpersoninvehicle.component.scss']
})
export class EditpersoninvehicleComponent implements OnInit {
  id:any;
  personinvehicle:any;
  address:any;
  additionalInfo: any;
  dateCreated : any;
  dateUpdated : any;
  firstName:any;
  age:any;
  injuryClass:any;
  lastName:any;
  middleName:any;
  phoneNumber:any;
  restraintUsed:any;
  sex:any;
  personType:any;


  constructor(private http: HttpClient, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      this.id =params['id']; // (+) converts string 'id' to a number         
      console.log("The id in the url"+this.id);
    });


    this.getPersoninvehicle(this.id);
   
         
  }
  updatepersoninvehicle(form : any){
    const rooturl = apiUrl+'/trafficaccidentanalysis/personinvehicle/update/';      
    this.http.put(rooturl + this.id,form).subscribe(data => {        
     this.personinvehicle = data; 
     this.router.navigate(['/theme/accidentlist'])
     
           
      console.log(this.personinvehicle);              
 });


  }
  getPersoninvehicle(id : any): void {    
    const rooturl = apiUrl+'/trafficaccidentanalysis/personinvehicle/personinvehicle/';      
     this.http.get(rooturl + this.id).subscribe(data => {        
      this.personinvehicle = data; 
      this.additionalInfo = this.personinvehicle.additionalInfo;
      this.dateCreated = this.personinvehicle.dateCreated;
      this.age = this.personinvehicle.age;
      this.address = this.personinvehicle.address;
      this.firstName = this.personinvehicle.firstName;
      this.injuryClass = this.personinvehicle.injuryClass;
      this.lastName = this.personinvehicle.lastName;
      this.middleName = this.personinvehicle.middleName;
      this.phoneNumber = this.personinvehicle.phoneNumber;
      this.restraintUsed = this.personinvehicle.restraintUsed;
      this.sex = this.personinvehicle.sex;
      this.personType = this.personinvehicle.personType;
      
            
       console.log(this.personinvehicle);              
  });

  }

  
}



