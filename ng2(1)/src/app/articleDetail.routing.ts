import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommentComponent }   from './comment/comment.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

const articleDetailRoutes: Routes = [
  {
    path: 'articledetail/:id',
    component: ArticleDetailsComponent,
    children: [
      {
        path: 'comment',
        component: CommentComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(articleDetailRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ArticleDetailRoutingModule { }
