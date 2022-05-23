import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffectationAddComponent } from './affectation-add/affectation-add.component';
import { BoardAcademicSupervisorComponent } from './board-academic-supervisor/board-academic-supervisor.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardStudentComponent } from './board-student/board-student.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { CreatePDFDocumentsDeStageComponent } from './create-pdfdocuments-de-stage/create-pdfdocuments-de-stage.component';
import { DepotBilanPeriodiqueDebutDuStageComponent } from './depot-bilan-periodique-debut-du-stage/depot-bilan-periodique-debut-du-stage.component';
import { DepotBilanPeriodiqueFinDuStageComponent } from './depot-bilan-periodique-fin-du-stage/depot-bilan-periodique-fin-du-stage.component';
import { DepotBilanPeriodiqueMilieuDuStageComponent } from './depot-bilan-periodique-milieu-du-stage/depot-bilan-periodique-milieu-du-stage.component';
import { DepotConventionDeStageComponent } from './depot-convention-de-stage/depot-convention-de-stage.component';
import { DepotFicheDeStageComponent } from './depot-fiche-de-stage/depot-fiche-de-stage.component';
import { DepotJournalDeStageComponent } from './depot-journal-de-stage/depot-journal-de-stage.component';
import { DepotRapportPremiereVersionComponent } from './depot-rapport-premiere-version/depot-rapport-premiere-version.component';
import { DepotRapportVersionFinaleComponent } from './depot-rapport-version-finale/depot-rapport-version-finale.component';
import { DepotComponent } from './depot/depot.component';
import { DocumentsDeStageAddComponent } from './documents-de-stage-add/documents-de-stage-add.component';
import { DocumentsDeStageEditComponent } from './documents-de-stage-edit/documents-de-stage-edit.component';
import { DocumentsDeStageListDEPOSEEComponent } from './documents-de-stage-list-deposee/documents-de-stage-list-deposee.component';
import { DocumentsDeStageListComponent } from './documents-de-stage-list/documents-de-stage-list.component';
import { DocumentsDeStageViewComponent } from './documents-de-stage-view/documents-de-stage-view.component';
import { DownloadDocumentsDeStageComponent } from './download-documents-de-stage/download-documents-de-stage.component';
import { EmailComponent } from './email/email.component';
import { HomeComponent } from './home/home.component';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UploadOffresDeStageComponent } from './upload-offres-de-stage/upload-offres-de-stage.component';
import { UploadRapportsDeStageComponent } from './upload-rapports-de-stage/upload-rapports-de-stage.component';
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
  {path:'downloadDocumentsDeStage/:folder', component:DownloadDocumentsDeStageComponent},
  {path:'listDocumentsDeStage', component:DocumentsDeStageListComponent},
  {path:'addDocumentsDeStage', component: DocumentsDeStageAddComponent},
  {path:'editDocumentsDeStage/:id', component:DocumentsDeStageEditComponent},
  {path:'viewDocumentsDeStage', component:DocumentsDeStageViewComponent},
  {path:'viewDocumentsDeStage/:id', component:DocumentsDeStageViewComponent},
  {path:'uploadRapportsDeStage', component:UploadRapportsDeStageComponent},
  {path:'uploadOffresDeStage', component:UploadOffresDeStageComponent},
  {path:'email', component:EmailComponent},
  {path:'chart', component:PieChartComponent},
  {path:'listDocumentsDeStageDEPOSEE', component:DocumentsDeStageListDEPOSEEComponent},
  {path:'affectation', component:AffectationAddComponent},
  {path:'gererDepot', component:DepotComponent},
  {path:'Convention_de_stage', component:DepotConventionDeStageComponent},
  {path:'Fiche_de_stage', component:DepotFicheDeStageComponent},
  {path:'Bilan_périodique_début_du_stage', component:DepotBilanPeriodiqueDebutDuStageComponent},
  {path:'Bilan_périodique_milieu_du_stage', component:DepotBilanPeriodiqueMilieuDuStageComponent},
  {path:'Bilan_périodique_fin_du_stage', component:DepotBilanPeriodiqueFinDuStageComponent},
  {path:'Rapport_premiere_version', component:DepotRapportPremiereVersionComponent},
  {path:'Rapport_version_finale', component:DepotRapportVersionFinaleComponent},
  {path:'Journal_de_stage', component:DepotJournalDeStageComponent},
  {
    path: 'dashboardAdmin',
    component: DefaultComponent,
    children: [{
      path: 'dashboardAdmin',
      component: DashboardComponent
    }, {
      path: 'posts',
      component: PostsComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
