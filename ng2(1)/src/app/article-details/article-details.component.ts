import { Component, OnInit,Input} from '@angular/core';
//import { FORM_DIRECTIVES } from '@angular/forms';

import {ActivatedRoute, Params, Router} from '@angular/router';
import { Location }     from '@angular/common';

import 'rxjs/add/operator/switchMap';

import {BLOGS,Blog} from '../data/blog';
import {BlogService} from './../data/blog.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  @Input() blog:Blog;
  constructor(private bService: BlogService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) { }
  doComment()
  {
    console.log("hahhaha");
    this.router.navigate(["comment",{id:this.blog.id,title:this.blog.title}],{relativeTo:this.route});
    //this.router.navigateByUrl("home");
    //_router.navigateByUrl(['/collection',{name:'title'}]);
    console.log("hahhaha2");
  }
  ngOnInit() {
    /*let id=this.route.params
      .switchMap((params: Params) => params['id'])
      .subscribe(x=>this.blog=this.bService.getSelectedBlog(+x))*/
    let id=this.route.params
            .switchMap((params: Params) =>this.bService.getSelectedBlog(+params['id']))
            .subscribe(x=>this.blog=x)
  }
  back()
  {
    this.location.back();
  }

}
