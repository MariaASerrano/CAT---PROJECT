import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(    public dialog: MatDialogRef<LogoutComponent>,
    private router: Router,) {
    
   }

  ngOnInit(): void {
    
  }
  onLogout(resp : boolean) {
        if (resp) {
        localStorage.removeItem("authToken");
        this.router.navigate(['/homecat']);
    }
    this.dialog.close(true);
    }
  
}
