import { DialogOperationComponent } from './../dialog-operation/dialog-operation.component';
import { MatDialog } from '@angular/material/dialog';
import { ContaService } from './../service/conta.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  id!: number;
  numero!:string;
  senha!: string;
  saldo!: number;
  operacao!: string;

  constructor(
    private route: ActivatedRoute,
    private contaService: ContaService,
    public dialog: MatDialog,
  ) {
    this.id = Number(route.snapshot.paramMap.get('id'));
    console.log(this.id);
    if(this.id){
      contaService.findContaById(this.id).subscribe(conta =>{
        this.numero = conta.numero;
        this.senha = conta.senha;
        this.saldo = conta.saldo;
      });
    }
  }

  ngOnInit(): void {
  }

  onDepositar(){
    this.operacao = 'Depósito';
    this.openDialog();
  }

  onSacar(){
    this.operacao = 'Saque';
    this.openDialog();
  }

  onBack(){}

  onLogout(){}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOperationComponent, {
      width: '250px',
      data: {saldo: this.saldo, id: this.id, operacao: this.operacao}
    }).afterClosed().subscribe(result=>{
      this.contaService.findContaById(this.id).subscribe(conta =>{
        this.numero = conta.numero;
        this.senha = conta.senha;
        this.saldo = conta.saldo;
      });
    });
  }

}
