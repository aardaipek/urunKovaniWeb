import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from "../../../app.service"
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  sideMenuShow: boolean;
  sideMenu: object;
  url: string;
  likeCount: number;
  homePage: boolean;
  loginButtonChangeToSignOut: Boolean = false;
  usertoken: any;

  constructor(
    private http: HttpClient, 
    public appService: AppService, 
    public route: ActivatedRoute, 
    private router: Router, 
    public auth: AuthService,
    private toast: ToastService) 
    {

    }

  async sideMenuGet() {
    let appSettings = await this.appService.getAppSettings();
    this.sideMenu = appSettings["side_menu"];

  }

  sideMenuClose(sideMenuStatus) {
    if (sideMenuStatus)
      this.sideMenuShow = false;
    else
      this.sideMenuShow = true;
  }

  ngOnInit(): void {
    this.likeCount = 0;
    this.sideMenuGet();

    this.url = this.route.routeConfig.path;

    if (!this.url) {
      this.sideMenuShow = true;
      this.homePage = true;

    }
    else {
      this.homePage = false;
    }

    this.usertoken = this.auth.isUserLogged();
    if (this.usertoken != null) {
      this.loginButtonChangeToSignOut = true;
    }

    // this.router.config //  tanımlı bütün routeları döner
  }

  logout() {
    this.auth.logoutUser();
    this.toast.succesProcess("Çıkış Yapıldı")
  }



  toggleWithGreeting(popover, greeting: string, language: string) {
    if (popover.isOpen()) {
      popover.close();
    } else {
      popover.open({ greeting, language });
    }
  }



}
