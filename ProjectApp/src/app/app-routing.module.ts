import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'details/:id',
    component: PostCreateComponent
  },
  {
    path: 'posts',
    component: PostDetailsComponent
  },
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
