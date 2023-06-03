import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  login(form : any) : Observable<any>{ 
    return this.http.post('https://bayurestapi.shop/api/login',form,); 
  }
  getuser(headers : any){ 
    return this.http.get('https://bayurestapi.shop/api/admin/user',{headers: headers}); 
  }
  getkritik(headers : any){ 
    return this.http.get('https://bayurestapi.shop/api/admin/feedback',{headers: headers}); 
  }
  delete(id :any,headers : any){ 
    return this.http.delete('https://bayurestapi.shop/api/admin/user/'+id,{headers: headers}); 
  }
}
