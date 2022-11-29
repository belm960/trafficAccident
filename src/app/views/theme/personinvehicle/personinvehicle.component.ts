import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute} from '@angular/router';
import { apiUrl } from 'src/environments/environment';


@Component({
  selector: 'app-personinvehicle',
  templateUrl: './personinvehicle.component.html',
  styleUrls: ['./personinvehicle.component.scss']
})
export class PersoninvehicleComponent implements OnInit {
  personinvehicleform!: FormGroup;
  id:any;
  accident: any;
  accidenttype: any;
  accid:any;
  showsavebutton: boolean = true;
  success:any;
  error:any;
  submitted!: boolean;
  constructor(private actRoute: ActivatedRoute,private router: Router,private formBuilder: FormBuilder,private http:HttpClient) { }

  ngOnInit() {
    this.id =  this.actRoute.snapshot.paramMap.get('id');
    this.personinvehicleform = this.formBuilder.group({
     
      personsinVehicle: new FormArray([])
      

    }) 
   
}
get t() { return <FormArray>this.personinvehicleform.get('personsinVehicle'); } 

onReset() {
  //reset whole form back to initial state
  this.submitted = false;
  this.personinvehicleform.reset();
  this.t.clear();
  
}
  addPerson(form: any): void {
    console.log(this.id);
    console.log(form);
    const rooturl = apiUrl+'/trafficaccidentanalysis/personinvehicle/save';
      this.http.post(rooturl + '/' + this.id,form).subscribe(data => {
        console.log(data);
        this.accident = data;
        this.accid  = this.accident.accident_id;
        this.showsavebutton = false
        console.log('Person is registered successfully ', data);
        this.success = 'Person is registered successfully'
        console.log(this.accidenttype);
        //this.router.navigate(['/accident/',this.accid]);
        //this.accident = JSON.stringify(data, null, 4);
        //console.log(this.accident);

      },error => {
        console.log('Error', error);
        this.error = error;
    })
    }
   
addPersonInVehicleFormGroup() : FormGroup{

  
  return this.formBuilder.group({
    additionalInfoDto:[''],
    addressDto:[''],
   // ageDto:[''],
    
    firstNameDto:[''],
    injuryClassDto:[''],
    lastNameDto:[''],
    middleNameDto:[''],
    personTypeDto:[''],
    phoneNumberDto:[''],
    restraintUsedDto:[''],
    sexDto:[''],
   })
}


addPersonInVehicle(): void {
  
  (<FormArray>this.personinvehicleform.get('personsinVehicle')).push(this.addPersonInVehicleFormGroup())
  this.showsavebutton = true
  
}
next(): void {
  this.router.navigate(['/theme/vehiclelist/',this.accid]);
}

  
}
