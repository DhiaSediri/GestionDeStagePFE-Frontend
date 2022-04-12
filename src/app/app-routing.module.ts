import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAcademicSupervisorComponent } from './board-academic-supervisor/board-academic-supervisor.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardStudentComponent } from './board-student/board-student.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { CreatePDFDocumentsDeStageComponent } from './create-pdfdocuments-de-stage/create-pdfdocuments-de-stage.component';
import { DocumentsDeStageAddComponent } from './documents-de-stage-add/documents-de-stage-add.component';
import { DocumentsDeStageEditComponent } from './documents-de-stage-edit/documents-de-stage-edit.component';
import { DocumentsDeStageListComponent } from './documents-de-stage-list/documents-de-stage-list.component';
import { DocumentsDeStageViewComponent } from './documents-de-stage-view/documents-de-stage-view.component';
import { DownloadDocumentsDeStageComponent } from './download-documents-de-stage/download-documents-de-stage.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { UploadOffresDeStageComponent } from './upload-offres-de-stage/upload-offres-de-stage.component';
import { UploadRapportsDeStageComponent } from './upload-rapports-de-stage/upload-rapports-de-stage.component';
import { UploadRapportsComponent } from './upload-rapports/upload-rapports.component';
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
  {path:'listUser', component:UsersListComponent},
  {path:'addUser', component: UserAddComponent},
  {path:'editUser/:id', component:UserEditComponent},
  {path:'viewUser', component:UserViewComponent},
  {path:'viewUser/:id', component:UserViewComponent},
  {path:'demanderDocumentsDeStage', component:CreatePDFDocumentsDeStageComponent},
  {path:'downloadDocumentsDeStage', component:DownloadDocumentsDeStageComponent},
  {path:'listDocumentsDeStage', component:DocumentsDeStageListComponent},
  {path:'addDocumentsDeStage', component: DocumentsDeStageAddComponent},
  {path:'editDocumentsDeStage/:id', component:DocumentsDeStageEditComponent},
  {path:'viewDocumentsDeStage', component:DocumentsDeStageViewComponent},
  {path:'viewDocumentsDeStage/:id', component:DocumentsDeStageViewComponent},
  {path:'uploadFile', component:UploadFileComponent},
  {path:'uploadRapports', component:UploadRapportsComponent},
  {path:'uploadRapportsDeStage', component:UploadRapportsDeStageComponent},
  {path:'uploadOffresDeStage', component:UploadOffresDeStageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
