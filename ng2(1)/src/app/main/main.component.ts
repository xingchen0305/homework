import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from "@angular/router";

import {LightService} from "../service/light.service"
import {RoomService} from "../service/room.service";
import {isNumber} from "util";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  data :any={};
  lightList:any[];
  roomId:String="";
  roomList:any[];
  style:boolean=false;
  showR:boolean=false;
  showL:boolean=false;
  msg:String;

  name:String;
  person:String;
  num:number;
  wrong:String;

  constructor(private _activatedRoute:ActivatedRoute,
              private  roomService:RoomService,
              private  lightService:LightService
  ) { }
  onChange(id:String){
    console.log("参数是"+id);
    this.roomId=id;
    this.lightService.getLightByBelongs(id).subscribe(
      (res)=> {
        this.lightList = res.json().data;
        console.log(res);
        console.log(this.lightList);
      });
  }
  changRoom(){
    if(this.data.role==1){
      this.roomService.getAllRoom().subscribe(
        (res)=> {
          this.roomList = res.json().data;
          console.log(res);
          console.log(this.roomList);
        });
    }else if(this.data.role==0){
      this.roomService.getRoomByBelongs(this.data.loginName).subscribe(
        (res)=> {
          this.roomList = res.json().data;
          console.log(res);
          console.log(this.roomList);
        });
    }else {
      this.msg=="请先登录";
    }
  }
  ngOnInit() {
    this._activatedRoute.queryParams.subscribe(queryParams=>{
      console.log("queryParams参数:",queryParams);
      this.data=queryParams;
      console.log(this.data);
      //this.id = Number.parseInt(queryParams["id"]);
      // this.name = queryParams["name"];
      // this.age = Number.parseInt(queryParams["age"]);
      this.changRoom();
    });


  }
show(){
  console.log(this.style);
  if(this.style){
    this.style=false;
  }else {
    this.style=true;
  }
}
showRoom(){
  this.showR=true;
}
  showLight(){
    this.showL=true;
  }

  cancelRoom(){
    this.showR=false;
  }
  cancelLight(){
    this.showL=false;
  }

  submitRoom(){
    let postData = {
      name: this.name,
      belongs:this.person
    };
    this.roomService.addRooom(postData).subscribe(
      (res)=> {
             console.log(res);
        if(res.json().message=="SUCCESS"){
          this.showR=false;
          //操作时间间隔太短，后台jpa会使用缓存，造成暂时的数据不一致
          this.changRoom();
        }
            });
  }
  submitLight() {
    if (this.roomId == "") {
      this.wrong = "请选择房间";
    } else {
      while (this.num > 0) {
        let postData = {
          belongs: this.roomId
        };
        this.lightService.addLight(postData).subscribe(
          (res)=> {
            console.log(res);
            if (res.json().message == "SUCCESS") {
              this.showL = false;
            }
          });
        this.num--;
        console.log(this.num);
      }
      //操作时间间隔太短，后台jpa会使用缓存，造成暂时的数据不一致
      this.onChange(this.roomId);
    }
  }
}
