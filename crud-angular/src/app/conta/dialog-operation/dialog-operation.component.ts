import { ContaService } from './../service/conta.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  saldo: number;
  id: number;
  operacao: string;
}

@Component({
  selector: 'app-dialog-operation',
  templateUrl: './dialog-operation.component.html',
  styleUrls: ['./dialog-operation.component.scss']
})
export class DialogOperationComponent implements OnInit {
  form: FormGroup;
  valor!: number;

  constructor(
    private contaService: ContaService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogOperationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    console.log(data.saldo);
    this.form = formBuilder.group({
      valor: [null]
    })
    console.log(data.operacao);
   }

  ngOnInit(): void {
  }

 onSubmit(){
  this.valor = Number(Object.values(this.form.value)[0]);

  this.contaService.findContaById(this.data.id).subscribe(conta => {
    if(this.data.operacao === 'Depósito'){
      const total = this.data.saldo + this.valor;
      conta.saldo = total;
    }
    else{
      const total = this.data.saldo - this.valor
      conta.saldo = total;
    }

    this.contaService.update(this.data.id, conta).subscribe(success =>{
      this.dialogRef.close();
    });
  });
 }
}
