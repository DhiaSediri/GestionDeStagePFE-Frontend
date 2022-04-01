import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAcademicSupervisorComponent } from './board-academic-supervisor/board-academic-supervisor.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardStudentComponent } from './board-student/board-student.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { CreatePDFDocumentsDeStageComponent } from './create-pdfdocuments-de-stage/create-pdfdocuments-de-stage.component';
import { DownloadDocumentsDeStageComponent } from './download-documents-de-stage/download-documents-de-stage.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'student', component: BoardStudentComponent },
  { path: 'academicSupervisor', component: BoardAcademicSupervisorComponent },
  { path: 'user', component: BoardUserComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'listUsers', component:UsersListComponent},
  {path:'addUser', component: UserAddComponent},
  {path:'editUser/:id', component:UserEditComponent},
  {path:'viewUser', component:UserViewComponent},
  {path:'viewUser/:id', component:UserViewComponent},
  {path:'demanderDocumentsDeStage', component:CreatePDFDocumentsDeStageComponent},
  {path:'downloadDocumentsDeStage', component:DownloadDocumentsDeStageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
