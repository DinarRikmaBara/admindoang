import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api/api.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.page.html',
  styleUrls: ['./list-user.page.scss'],
})
export class ListUserPage implements OnInit {

  constructor(private api:ApiService) { }
  token = localStorage.getItem('token') 
  headers  = new HttpHeaders({ 
    'Authorization': `${this.token}`
  });
  DataUser:any

  delete(id:any){
    this.api.delete(id,this.headers).subscribe( (res:any) =>{ 
      console.log('berhasil')
      location.reload()
    });
  }

  ngOnInit() {
    this.api.getuser(this.headers).subscribe( (res:any) =>{ 
      this.DataUser = res['data']; 
      console.log('Data User ===>'+JSON.stringify( res['data']) ); 
    });
  }

}
