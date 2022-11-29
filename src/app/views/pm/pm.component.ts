import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-pm',
  templateUrl: './pm.component.html',
  styleUrls: ['./pm.component.scss']
})
export class PmComponent implements OnInit {
  board!: string;
  errorMessage!: string;
 
  constructor(private userService: UserService) { }
 
  ngOnInit() {
    this.userService.getPMBoard().subscribe(
      data => {
        this.board = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
  }
}
