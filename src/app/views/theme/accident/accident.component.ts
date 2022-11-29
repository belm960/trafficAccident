import { Component, OnInit, SkipSelf } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/environments/environment';


@Component({
  selector: 'app-accident',
  templateUrl: './accident.component.html',
  styleUrls: ['./accident.component.scss']
})
export class AccidentComponent implements OnInit {
  accidentform!: FormGroup;
  formarray!: FormArray;
  submitted!: false;
  accident: any;
  id:any;
  selectedFile!: File;
  imgURL: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message!: string;
  imageName: any;
  control: any;
  constructor(private router: Router, private formBuilder:FormBuilder,@SkipSelf() private http:HttpClient) { }

  ngOnInit() {
    this.accidentform = this.formBuilder.group({
        accidentTypeDto:[''],
        additionalInfoDto:[''],
        addressLocationDto:[''],
        cityDto:[''],
        dateCreatedDto:[''],
        dateOfAccidentDto:[''],
        dateUpdatedDto:[''],
        latitudeDto:[''],
        legalRoadSpeedKmhDto:[''],
        logitudeDto:[''],
        numberOfModerateInjuryDto:[''],
        numberOfDeathDto:[''],
        numberOfMajorInjuryDto:[''],
        numberOfMinorInjuryDto:[''],
        numberOfPeopleInvolvedDto:[''],
        numberOfVehiclesInvolvedDto:[''],
        regionDto:[''],
        reportingOfficerNameDto:[''],
        reportingOfficerPhoneDto:[''],
        reportingOfficerStataionDto:[''],
        roadClassificationDto:[''],
        roadConditionDto:[''],
        roadTypeDto:[''],
        timeOfAccidentDto:[''],
        uknownInjuryDto:[''],
        updatedByDto:[''],
        weatherDuringAccidentDto:[''],
        vehiclesDto: new FormArray([]),
     
    
    });
    
  
  }
  get f() { return this.accidentform.controls; }
  get t() { return <FormArray>this.accidentform.get('vehiclesDto'); } 

  registerAccident(form: any){
   console.log('adding a person');
   console.log(form);
   //apiUrl+'/trafficaccidentanalysis/accident/save'
    this.http.post(apiUrl+'/trafficaccidentanalysis/accident/save', form)
    .subscribe(
      data => {
      this.accident = data;
      this.id = this.accident.accidentid;
     // console.log(this.accident.accidentid);
      // this.accident = JSON.stringify(data, null, 4);
      // console.log(this.accident);
      // const a = JSON.parse(this.accident);
      // this.id = a['accidentid'];
      // console.log(a['accidentid']);
       //console.log(a['outcome']);
       this.router.navigate(['/theme/vehiclelist',this.id]).then(e => {
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
       });
       
    },
    error => {
      console.log('Error', error);
      console.log(form.vehicles);
  }
  );
  
  
}
addVehicleFormGroup() : FormGroup{
  return this.formBuilder.group({
    modelDto: [''] ,
    makeDto:[''],
    accidentPositionDto:[''],
	  additionalInfoDto:[''],
	  colorDto:[''],
	  damageClassDto:[''], 
	  dateCreatedDto:[''],
	  dateUpdatedDto:[''],
	  hasInsuranceDto:[''],
	   
	  mannerOfCollisionDto:[''],
	   
	  plateNumberDto:[''], 
	  vehicleOwnerDto:[''],
	  vehicle_speed_before_accident_KMhDto:[''], 
	  vehicleTypeDto:[''], 
	  vinDto:[''],
	  yearDto:[''],

   
    
   })
}

addVehicle(): void {
   
  (<FormArray>this.accidentform.get('vehiclesDto')).push(this.addVehicleFormGroup())
  


}


onReset() {
  //reset whole form back to initial state
  this.submitted = false;
  this.accidentform.reset();
  
  this.t.clear();
  
}
public onFileChanged(event: any) {
  //Select File
  this.selectedFile = event.target.files[0];
}



}



