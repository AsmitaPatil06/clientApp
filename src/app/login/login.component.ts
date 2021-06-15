import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  loginForm: FormGroup;



  constructor(private router: Router, private auth: AuthServiceService) { }

  ngOnInit(): void {

    this.initForm();

  }
  initForm() {
    // this.loginForm = this.formBuilder.group({
    //   email: ['', Validators.required],
    //   password: ['', [Validators.required, Validators.minLength(6)]]

    // });
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl()
    });
  }

  login() {
    console.log(this.loginForm.value);

    if (this.loginForm.value) {
      this.auth.login(this.loginForm.value).subscribe((res: any) => {
        console.log(res);
        sessionStorage.setItem('token', res.token)
        // this.auth.login().subscribe(res => console.log(res)
        this.router.navigate(['client-page']);
        this.auth.clientGet().subscribe(res => console.log(res)
        )
      },
        (err) => {
          console.log(err);
          alert(err.error.reason);

        })
    }
  }
}
