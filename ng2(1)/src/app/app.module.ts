import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing';
import { ArticleDetailRoutingModule } from './articledetail.routing';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { CommentComponent } from './comment/comment.component'
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component'

import {BlogService} from './data/blog.service';
import {CommentService} from './data/comment.service';
//import { InMemoryDataService }  from './data/in-memery-data.service'
import { LoginService } from './service/login.service';
import { RoomService } from './service/room.service';
import { LightService } from './service/light.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleDetailsComponent,
    CommentComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ArticleDetailRoutingModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService),//in memery
    AppRoutingModule
  ],
  providers: [BlogService,CommentService,LoginService,RoomService,
    LightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
