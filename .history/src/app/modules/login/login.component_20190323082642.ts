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

  public acedamic_year = [
    {value: '2015-2016', viewValue: '2015-2016'},
    {value: '2016-2017', viewValue: '2016-2017'},
    {value: '2018-2019', viewValue: '2018-2019'}
  ];

  public institute = [
    {value: 'PAR School', viewValue: 'PAR School'},
    {value: 'PAR School', viewValue: 'PAR School'},
    {value: 'PAR School', viewValue: 'PAR School'}
  ];

  constructor(private _formBuilder: FormBuilder, private _router: Router, private _loginservice: LoginService) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      acedamicyear: ['', [Validators.required]],
      institute: ['', [Validators.required]],
    });
  }

  public onLoggedin() {
    if (this.loginForm.valid) {
      console.log(this.loginForm);
      this._loginservice.login(this.loginForm.value)
            .subscribe(
                data => {
                    localStorage.setItem('isLoggedin', data);
                    this._router.navigate(['/dashboard']);
                },
                error => {
                    // this.error = error;
                    // this.loading = false;
                });
    }
  }

}
