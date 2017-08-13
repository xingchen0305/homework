import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Params, Router} from '@angular/router';
import { Location }     from '@angular/common';

import 'rxjs/add/operator/switchMap';

import {BlogService} from "../data/blog.service";
import {LoginService} from '../service/login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'chengjia';
  loginName="";
  pwd="";
  msg="hahah";
  data :any={};
  words:Array<string>=[
    '哦，听说楼主很帅？',
    '是吗，没见过啊',
    '真的真的，那天去软件园看到的'
  ];
  constructor( private router: Router,
               private loginService: LoginService) { }

  ngOnInit(){

  };

  login() {
    console.log(this.loginName);
    this.loginService.getAccount(this.loginName).subscribe(
      (res)=> {
        this.data = res.json().data;
        console.log(res);
        console.log(this.data);
        if (this.data != null) {
          //var tmp=this.data;
          //this.router.navigateByUrl(['/collection',{name:'title'}]);//传参数
         // this.//router.navigate(["/article"],{queryParams:{"id":"10","name":"word","age":"30"}});
          this.router.navigate(["/main"],{queryParams:this.data});
          //this.router.navigateByUrl('article',data);
        } else {
          this.msg = "login failed";
        }
      });
  }


}
