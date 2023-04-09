import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EmpresaService } from 'src/app/services/empresa.service';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {
  constructor(
    public dialog: MatDialogRef<StartComponent>,
    private router: Router,
    private fb: FormBuilder,
    private empresaService: EmpresaService
  ) {}

  addEmpresaForm!: FormGroup;
  logEmpresaForm!: FormGroup;

  ngOnInit(): void {
    this.addEmpresaForm = this.fb.group({
      correo: [''],
      contrasena: [''],
      nombreEmpresa: [''],
    });
    this.logEmpresaForm = this.fb.group({
      correo: [''],
      contrasena: [''],
    });
  }

  start = true;
  login = false;
  register = false;

  showLogin() {
    this.start = false;
    this.login = true;
    this.register = false;
  }
  showRegister() {
    this.start = false;
    this.login = false;
    this.register = true;
  }

  onSubmit() {
    const credentials = this.addEmpresaForm.value;
    this.empresaService.New(credentials).subscribe((resp) => {
      localStorage.setItem('authToken', resp._id);
      if (!resp.ingreso) {
        this.dialog.close(true);
        this.router.navigate(['/homecat']);
      }
    });
  }

  onLogin() {
    const credentials = this.logEmpresaForm.value;
    this.empresaService.Login(credentials).subscribe((resp) => {
      localStorage.setItem('authToken', resp._id);
      if (!resp.ingreso) {
        this.dialog.close(true);
        this.router.navigate(['/homecat']);
      } else {
        this.router.navigate(['/results']);
        this.dialog.close(false);
      }
    });
  }
}
