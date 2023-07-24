import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
<<<<<<< HEAD

import { AppMaterialModule } from './../shared/app-material/app-material.module';
=======
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

>>>>>>> 96d594701e0f379f4af07637c642543ea28cdab4
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';


<<<<<<< HEAD

=======
>>>>>>> 96d594701e0f379f4af07637c642543ea28cdab4
@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
<<<<<<< HEAD
    AppMaterialModule
=======
    MatTableModule,
    MatCardModule,
    MatToolbarModule
>>>>>>> 96d594701e0f379f4af07637c642543ea28cdab4
  ]
})
export class CoursesModule { }
