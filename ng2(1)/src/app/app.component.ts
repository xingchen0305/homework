import { Component } from '@angular/core';

import {ActivatedRoute, Params, Router} from '@angular/router';
import { Location }     from '@angular/common';

import 'rxjs/add/operator/switchMap';

import {BlogService} from "./data/blog.service";
import {LoginService} from './service/login.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 // providers:[BlogService]
})
export class AppComponent {
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

  login(){
    console.log(this.loginName);
    this.loginService.getAccount(this.loginName).subscribe(
      (res)=>{
        this.data=res.json().data;
        console.log(res);
        console.log(this.data);
        if(this.data != null){
         //this.router.navigateByUrl(['/collection',{name:'title'}]);//传参数

          this.router.navigateByUrl('article',);
        }else{
          this.msg="login failed";
        }
      });
  }
 /* getWareHouse(index){
    this.assetService.getAssetById(index).subscribe(
      (res) =>{
        this.data = res.json().data;
        console.log(res);
      }
    )
  }*/

  /*onSubmit(value){
    this.organizationService.addAsset(value).subscribe(
      (response)=>{
        console.log(response);
        alert("新增组织成功");
      }
    );
  }

  getOrgBySuperior(superiorId, currentLevel){
    this.organizationService.postSuperior(superiorId).subscribe(
      (res) => {
        this.selectMap.set(currentLevel,res.json().data);
        // 拿到本级菜单，下面的菜单清空
        for(let key of Array.from(this.selectMap.keys())){
          if(key > currentLevel)
            this.selectMap.delete(key);
        }

        console.log("selectMap", this.selectMap)
      }
    )
  }

  createOrg(name:string, level: number, superior: number){
    let postData = {
      name: name,
      level: level,
      superior: superior
    };
    this.organizationService.addAsset(postData).subscribe(
      () =>  this.getOrgBySuperior(superior, level)
    );
    this.contryName="";
    this.cityName="";
    this.quName="";
    this.schoolName="";
    this.buildingName="";
  }

  onChange(currentId, currentLevel, targetLevel){
    this.currentSelect[currentLevel] = currentId;
    this.getOrgBySuperior(currentId, targetLevel)
  }*/

}
