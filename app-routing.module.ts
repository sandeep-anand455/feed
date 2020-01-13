import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { UpdateStreamsComponent } from './update-streams/update-streams.component';


const routes: Routes = [

  { path: 'register', component: RegisterComponent },
  { path:  'update-stream', component: UpdateStreamsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
