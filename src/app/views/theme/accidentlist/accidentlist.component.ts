import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { apiUrl } from 'src/environments/environment';


@Component({
  selector: 'app-accidentlist',
  templateUrl: './accidentlist.component.html',
  styleUrls: ['./accidentlist.component.scss']
  
})
export class AccidentlistComponent implements OnInit {
  id:any;
  accidents!:any[];
  vehicle:any;
  displayedColumns: string[] = ['id', 'Accident Type','State','City', 'Death', 'Injury','action','update','upload','download'];
  dataSource!: MatTableDataSource<any>;

@ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
@ViewChild(MatSort, {static: true}) sort!: MatSort;
  constructor( private http: HttpClient, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getAccident();
   
   
         
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getAccident(): void {    
    const rooturl = apiUrl+'/trafficaccidentanalysis/accident/getall';      
     this.http.get<any[]>(rooturl).subscribe(data => {        
      this.accidents = data;
      this.dataSource = new MatTableDataSource(this.accidents);
      this.dataSource.paginator= this.paginator;
      this.dataSource.sort= this.sort;             
  });

  }

  accidentDetail(accidentId:any){

    this.router.navigate(['/theme/alldetails',accidentId]).then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
     });

     
  }
  accidentUpdate(accidentId:any){

    this.router.navigate(['/theme/update',accidentId]).then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
     });

}
upload(accidentId:any){

  this.router.navigate(['/theme/upload',accidentId]).then(e => {
    if (e) {
      console.log("Navigation is successful!");
    } else {
      console.log("Navigation has failed!");
    }
   });

}
download(accidentId:any){

  this.router.navigate(['/theme/image',accidentId]).then(e => {
    if (e) {
      console.log("Navigation is successful!");
    } else {
      console.log("Navigation has failed!");
    }
   });

}
}
