import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(public dialog:MatDialogRef<StartComponent>, private router:Router) { }

  ngOnInit(): void {
  }

  start=true;
  login=false;
  register=false;
 
  showLogin(){
    this.start=false;
    this.login=true;
    this.register=false;
  }
  showRegister(){
    this.start=false;
    this.login=false;
    this.register=true;
  }

  onSubmit(){
    this.router.navigate(['/homecat']);
    this.dialog.close(true)
}

  onLogin(){
    this.router.navigate(['/results']);
    this.dialog.close(false)
  }

}
