import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  form: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = formBuilder.group({
      conta: [null],
      password: [null]
    })
  }

  ngOnInit(): void {
  }

  onLoginAccount(){

  }

  onRegister(){
    this.router.navigate(['register'], { relativeTo: this.route });
  }

}
