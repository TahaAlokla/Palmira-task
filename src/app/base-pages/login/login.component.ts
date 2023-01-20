import { LocalStorageService } from './../../services/local-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginService!: Subscription;
  msgErrorLogin: string = '';
  successfullyMsg: string = '';
  isLoading = false;
  constructor(
    private fb: FormBuilder,
    private TokenStorageService: LocalStorageService,
    private router: Router
  ) {}
  loginUser = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  ngOnInit(): void {}

  loginUserSubmit() {
    this.isLoading = true;
    if (this.loginUser.invalid) {
      this.msgErrorLogin = 'something Error please check your info !';
      return;
    }

    let email = this.loginUser.value.email as string;
    let password = this.loginUser.value.password as string;
    console.log(email, password);
    let f = new FormData();
    f.append('email', email);
    f.append('password', password);

    this.loginService = this.TokenStorageService.login(f).subscribe({
      next: (response: any) => {
        if (response.code == 1) {
          console.log('response.data.accessToken', response.data.accessToken);

          this.TokenStorageService.saveToken(response.data.accessToken);
          // this.TokenStorageService.saveUser(response.data.email);

          this.isLoading = false;
          this.loginUser.reset();
          this.router.navigate(['hierarchies']);
        } else {
          this.msgErrorLogin = response.message;
          setTimeout(() => {
            this.msgErrorLogin = '';
          }, 2000);

          this.isLoading = false;
        }
      },
      error: (err: any) => {
        console.log(err.message);
        this.msgErrorLogin = 'something Error !';
        this.isLoading = false;
      },
    });
  }

  ngOnDestroy(): void {
    if (this.loginService) this.loginService.unsubscribe();
  }
}
