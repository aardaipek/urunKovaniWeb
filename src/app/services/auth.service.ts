import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient, HttpParams } from '@angular/common/http';
import { ToastService } from './toast.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public url: string;


  constructor(
    public http: HttpClient,
    public router: Router,
    private toast: ToastService
  ) {
    this.url = 'https://localhost:44388';
  }

  async regsiterUser(data:Object) {
    // memberType ve acceptRule eklenecek 
    // db de alanları açılmalı
    const response = await this.http.post(this.url + '/api/user/register', data).toPromise().then((res)=> {
        if(res != null){
          localStorage.setItem("token", res["name"] + '!fffsdffs11');
          this.toast.succesProcess("Kayıt başarılı")
          this.router.navigateByUrl("/");
        }
    });

    return response;
  }

  async loginUser(data:Object) {
    // memberType ve acceptRule eklenecek 
    // db de alanları açılmalı
    const response = await this.http.post(this.url + '/api/user/login', data).toPromise().then((res)=> {
        if(res != null){
          localStorage.setItem("token", res["name"] + '!fffsdffs11');
          this.toast.succesProcess("Giriş Yapılıyor")
        }
    });
    setTimeout (() => {
      this.router.navigateByUrl("/");
   }, 1000);

    return response;
  }


  logoutUser(){
    // şimdilik
    localStorage.removeItem('token');
  }


  isUserLogged(){
    var currentUserToken = localStorage.getItem('token');

    return currentUserToken;
  }

}
