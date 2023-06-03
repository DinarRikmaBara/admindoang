import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private api:ApiService,private router : Router) { }
  form : any = {
    email : '',
    password : ''
  };
  login() {
    this.api.login(this.form).subscribe((res:any)=>{
      if (res.token) {
        const decodedToken : any = jwt_decode(res.token);

        if (decodedToken.role === 'admin') {
          this.router.navigateByUrl("/tabs/list-user");

        }


      }

      localStorage.setItem('email',this.form.email)
      localStorage.setItem('token',res.token);
    });
  }

  ngOnInit() {
  }

}
