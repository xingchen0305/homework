import {RouterModule,Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import {LoginComponent} from "./login/login.component";
//noinspection TypeScriptCheckImport
import {MainComponent} from "./main/main.component"

const routes:Routes=[
  { path: 'home',component: LoginComponent},
 { path: 'article',component: ArticleComponent},
  { path: 'main',component: MainComponent},
 /* { path: 'articledetail/:id',component: ArticleDetailsComponent},*/
  { path: '',redirectTo:"/home",pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
