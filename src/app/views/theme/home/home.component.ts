import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { TokenStorageService } from '../../../auth/token-storage.service';
import { apiUrl } from 'src/environments/environment';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  id:any;
  accidents:any[] | undefined;
  vehicle:any;
  info: any;
  displayedColumns: string[] = ['id', 'Accident Type','State','City', 'Death', 'Injury','action'];
  dataSource!: MatTableDataSource<any>;

@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator | undefined;
@ViewChild(MatSort, {static: true}) sort: MatSort | undefined;
  constructor( private http: HttpClient, private actRoute: ActivatedRoute, private router: Router, private token: TokenStorageService) { }

  ngOnInit() {
    this.getAccident();
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
   
   
         
  }
  logout() {
    this.token.signOut();
    window.location.reload();
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
      this.dataSource.paginator!= this.paginator;
      this.dataSource.sort!= this.sort;             
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
}
