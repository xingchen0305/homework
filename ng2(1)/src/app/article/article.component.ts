import {Component, OnInit} from '@angular/core';

import {BLOGS,Blog} from '../data/blog';
import {BlogService} from './../data/blog.service';

import {Observable} from 'rxjs';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  blogList:Blog[];
  selectedBlog:Blog;
  editStr:string;
  constructor(private bService:BlogService,
              private _activatedRoute:ActivatedRoute)
  {
    bService.getBlogs().then(x=>{this.blogList=x});
  }
  selectBlog(id:number)
  {
    this.bService.getSelectedBlog(id).then(blog=>{this.selectedBlog=blog;console.log(blog);});
  }
  doAdd()
  {
    if(this.editStr.length>0)
    {
      this.bService.create(this.editStr)
        .then(x=>{
          this.blogList.push(x);this.editStr=""
        });
    }
  }
  ngOnInit(){
    this._activatedRoute.queryParams.subscribe(queryParams=>{
      console.log("queryParams参数:",queryParams);
      //this.id = Number.parseInt(queryParams["id"]);
     // this.name = queryParams["name"];
     // this.age = Number.parseInt(queryParams["age"]);
    })
  }
}
