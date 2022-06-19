import { ContaService } from './../../conta/service/conta.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  id!: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private contaService: ContaService,
    private _snackBar: MatSnackBar
  ) {
    this.form = formBuilder.group({
      numero: [null],
      senha: [null],
      saldo: [null]
    })
  }


  ngOnInit(): void {
  }

  onSubmit(): void{
    console.log(this.form.value);
    this.contaService.save(this.form.value).subscribe(conta =>{
      this.router.navigate(['dashboard', Object.values(conta)[0]]);
      this.openSnackBar();
    });
  }

  openSnackBar(): void{
    this._snackBar.open('Conta criada com sucesso!', '', {
      duration: 4000
    });
  }
}
