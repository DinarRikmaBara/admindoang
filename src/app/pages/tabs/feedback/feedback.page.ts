import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  constructor(private api:ApiService) { }
  token = localStorage.getItem('token') 
  headers  = new HttpHeaders({ 
    'Authorization': `${this.token}`
  });

  DataUser:any

  ngOnInit() {
    this.api.getkritik(this.headers).subscribe( (res:any) =>{ 
      this.DataUser = res['data']; 
      console.log('Data User ===>'+JSON.stringify( res['data']) ); 
    });
  }

}
