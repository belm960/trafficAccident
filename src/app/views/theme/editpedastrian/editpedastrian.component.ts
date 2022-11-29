import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { apiUrl } from 'src/environments/environment';

@Component({
  selector: 'app-editpedastrian',
  templateUrl: './editpedastrian.component.html',
  styleUrls: ['./editpedastrian.component.scss']
})
export class EditpedastrianComponent implements OnInit {
  id:any;
  pedastrian:any;
  address:any;
  additionalInfo: any;
  dateCreated : any;
  firstName:any;
  age:any;
  injuryClass:any;
  lastName:any;
  middleName:any;
  phoneNumber:any;
  positionDuringAccident:any;
  sex:any;
  


  constructor(private http: HttpClient, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.actRoute.params.subscribe(params => {
      this.id =params['id']; // (+) converts string 'id' to a number         
      console.log("The id in the url"+this.id);
    });


    this.getPedastrian(this.id);
   
         
  }
  updatepedastrian(form : any){
    const rooturl = +apiUrl+'/trafficaccidentanalysis/pedastrian/update/';      
    this.http.put(rooturl + this.id,form).subscribe(data => {        
     this.pedastrian = data; 
     this.router.navigate(['/theme/accidentlist'])
     
           
      console.log(this.pedastrian);              
 });


  }
  getPedastrian(id : any): void {    
    const rooturl = +apiUrl+'/trafficaccidentanalysis/pedastrian/pedastrian/';      
     this.http.get(rooturl + this.id).subscribe(data => {        
      this.pedastrian = data; 
      this.additionalInfo = this.pedastrian.additionalInfo;
      this.dateCreated = this.pedastrian.dateCreated;
      this.age = this.pedastrian.age;
      this.address = this.pedastrian.address;
      this.firstName = this.pedastrian.firstName;
      this.injuryClass = this.pedastrian.injuryClass;
      this.lastName = this.pedastrian.lastName;
      this.middleName = this.pedastrian.middleName;
      this.phoneNumber = this.pedastrian.phoneNumber;
      this.positionDuringAccident = this.pedastrian.positionDuringAccident;
      this.sex = this.pedastrian.sex;
      
            
       console.log(this.pedastrian);              
  });

  }

  
}