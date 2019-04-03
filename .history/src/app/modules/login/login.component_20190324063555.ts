import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  public branchs = [
    {value: 'PAR School', viewValue: 'PAR School'},
    {value: 'PAR School', viewValue: 'PAR School'},
    {value: 'PAR School', viewValue: 'PAR School'}
  ];

  constructor(private _formBuilder: FormBuilder, private _router: Router, private _loginservice: LoginService) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      branch: ['', [Validators.required]],
    });
  }

  public onLoggedin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm);
      this._loginservice.login(this.loginForm.value)
            .subscribe(
                data => {
                  console.log(data);
                  this._router.navigate(['/dashboard']);
                },
                error => {
                    console.log(error);
                    // this.error = error;
                    // this.loading = false;
                });
    }
  }

}
