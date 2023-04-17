import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatMenuTrigger} from '@angular/material/menu';
import { LogoutComponent } from 'src/app/cat/pages/modal/logout/logout.component';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { EmpresaService } from 'src/app/services/empresa.service';
import { RespuestaService } from 'src/app/services/respuesta.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @ViewChild('menuTrigger')
  menuTrigger!: MatMenuTrigger;
  nombreEmpresa = [];

  constructor(private dialog: MatDialog, private empresaService: EmpresaService,
    private respuestaService: RespuestaService,
    private localStorageService: LocalStorageService) {
    
   }

  ngOnInit(): void {
    this.empresaService.GetId(this.localStorageService.get('authToken')??'').subscribe((resp) => {
      // Assuming the response is an array and you want to extract the first element's nombreEmpresa value
      if (resp) {
        this.nombreEmpresa = resp.nombreEmpresa; // Extract the nombreEmpresa value from the first element of the response
      }
    });
  
  }
  showLogout() {
    this.dialog.open(LogoutComponent);
  }

}

