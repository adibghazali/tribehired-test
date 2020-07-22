import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailsComponent } from './post-details/post-details.component';

const routes: Routes = [
    { path: 'postDetails-component/:id', component: PostDetailsComponent },
    // { path: '**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }