import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffectationAddComponent } from './affectation-add/affectation-add.component';
import { AffectationListComponent } from './affectation-list/affectation-list.component';
import { BoardAcademicSupervisorComponent } from './board-academic-supervisor/board-academic-supervisor.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardStudentComponent } from './board-student/board-student.component';
import { BoardUserComponent } from './board-user/board-user.component';
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
import { EncadrantDepotBilanPeriodiqueDebutDuStageComponent } from './encadrant-depot-bilan-periodique-debut-du-stage/encadrant-depot-bilan-periodique-debut-du-stage.component';
import { EncadrantDepotBilanPeriodiqueFinDuStageComponent } from './encadrant-depot-bilan-periodique-fin-du-stage/encadrant-depot-bilan-periodique-fin-du-stage.component';
import { EncadrantDepotBilanPeriodiqueMilieuDuStageComponent } from './encadrant-depot-bilan-periodique-milieu-du-stage/encadrant-depot-bilan-periodique-milieu-du-stage.component';
import { EncadrantDepotConventionDeStageComponent } from './encadrant-depot-convention-de-stage/encadrant-depot-convention-de-stage.component';
import { EncadrantDepotFicheDeStageComponent } from './encadrant-depot-fiche-de-stage/encadrant-depot-fiche-de-stage.component';
import { EncadrantDepotJournalDeStageComponent } from './encadrant-depot-journal-de-stage/encadrant-depot-journal-de-stage.component';
import { EncadrantDepotRapportPremiereVersionComponent } from './encadrant-depot-rapport-premiere-version/encadrant-depot-rapport-premiere-version.component';
import { EncadrantDepotRapportVersionFinaleComponent } from './encadrant-depot-rapport-version-finale/encadrant-depot-rapport-version-finale.component';
import { EncadrantDepotComponent } from './encadrant-depot/encadrant-depot.component';
import { FichesDeStagePourAdminComponent } from './fiches-de-stage-pour-admin/fiches-de-stage-pour-admin.component';
import { FichesDeStageComponent } from './fiches-de-stage/fiches-de-stage.component';
import { HomeComponent } from './home/home.component';
import { DefaultComponent } from './layouts/default/default.component';
import { ListDepotConventionDeStageDEPOSEEPourAdminComponent } from './list-depot-convention-de-stage-deposeepour-admin/list-depot-convention-de-stage-deposeepour-admin.component';
import { ListDepotConventionDeStagePouAdminComponent } from './list-depot-convention-de-stage-pou-admin/list-depot-convention-de-stage-pou-admin.component';
import { ListEtudiantsPourEncadrantAffectaionComponent } from './list-etudiants-pour-encadrant-affectaion/list-etudiants-pour-encadrant-affectaion.component';
import { ListEtudiantsPourEncadrantComponent } from './list-etudiants-pour-encadrant/list-etudiants-pour-encadrant.component';
import { ListFileDepotConventionDeStagePourAdminComponent } from './list-file-depot-convention-de-stage-pour-admin/list-file-depot-convention-de-stage-pour-admin.component';
import { ListFilesOffreDeStagePourAdminComponent } from './list-files-offre-de-stage-pour-admin/list-files-offre-de-stage-pour-admin.component';
import { ListFilesOffreDeStagePourEtudiantComponent } from './list-files-offre-de-stage-pour-etudiant/list-files-offre-de-stage-pour-etudiant.component';
import { ListFilesRapportDeStagePourAdminComponent } from './list-files-rapport-de-stage-pour-admin/list-files-rapport-de-stage-pour-admin.component';
import { ListFilesRapportDeStagePourEtudiantComponent } from './list-files-rapport-de-stage-pour-etudiant/list-files-rapport-de-stage-pour-etudiant.component';
import { ListOffreDeStagePourAdminComponent } from './list-offre-de-stage-pour-admin/list-offre-de-stage-pour-admin.component';
import { ListOffresDeStagePourEtudiantComponent } from './list-offres-de-stage-pour-etudiant/list-offres-de-stage-pour-etudiant.component';
import { ListRapportDeStagePourAdminComponent } from './list-rapport-de-stage-pour-admin/list-rapport-de-stage-pour-admin.component';
import { ListRapportsDeStagePourEtudiantComponent } from './list-rapports-de-stage-pour-etudiant/list-rapports-de-stage-pour-etudiant.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { RendezVousDeStagePourAdminComponent } from './rendez-vous-de-stage-pour-admin/rendez-vous-de-stage-pour-admin.component';
import { RendezVousDeStageComponent } from './rendez-vous-de-stage/rendez-vous-de-stage.component';
import { UploadOffresDeStageComponent } from './upload-offres-de-stage/upload-offres-de-stage.component';
import { UploadRapportsDeStageComponent } from './upload-rapports-de-stage/upload-rapports-de-stage.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditByHimselfComponent } from './user-edit-by-himself/user-edit-by-himself.component';
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
  { path: 'Academic_Supervisor', component: BoardAcademicSupervisorComponent },
  { path: 'user', component: BoardUserComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'listUser', component:UsersListComponent},
  {path:'addUser', component: UserAddComponent},
  {path:'editUser/:id', component:UserEditComponent},
  {path:'editUserByHimself', component:UserEditByHimselfComponent},
  {path:'viewUser', component:UserViewComponent},
  {path:'viewUser/:id', component:UserViewComponent},
  {path:'downloadDocumentsDeStage/:folder', component:DownloadDocumentsDeStageComponent},
  {path:'listDocumentsDeStage', component:DocumentsDeStageListComponent},
  {path:'rendez-vousDeStage', component:RendezVousDeStageComponent},
  {path:'fichesDeStage', component:FichesDeStageComponent},
  {path:'rendez-vousDeStagePourAdmin', component:RendezVousDeStagePourAdminComponent},
  {path:'fichesDeStagePourAdmin', component:FichesDeStagePourAdminComponent},
  {path:'addDocumentsDeStage', component: DocumentsDeStageAddComponent},
  {path:'editDocumentsDeStage/:id', component:DocumentsDeStageEditComponent},
  {path:'viewDocumentsDeStage', component:DocumentsDeStageViewComponent},
  {path:'viewDocumentsDeStage/:id', component:DocumentsDeStageViewComponent},
  {path:'uploadRapportsDeStage', component:UploadRapportsDeStageComponent},
  {path:'uploadOffresDeStage', component:UploadOffresDeStageComponent},
  {path:'listDocumentsDeStageDEPOSEE', component:DocumentsDeStageListDEPOSEEComponent},
  {path:'addAffectation', component:AffectationAddComponent},
  {path:'listeAffectations', component:AffectationListComponent},
  {path:'listeEtudiantsPourEncadrantAffectaion/:encadrant_id', component:ListEtudiantsPourEncadrantAffectaionComponent},
  {path:'gererDepot', component:DepotComponent},
  {path:'depotConvention_de_stage', component:DepotConventionDeStageComponent},
  {path:'depotFiche_de_stage', component:DepotFicheDeStageComponent},
  {path:'depotBilan_periodique_debut_du_stage', component:DepotBilanPeriodiqueDebutDuStageComponent},
  {path:'depotBilan_periodique_milieu_du_stage', component:DepotBilanPeriodiqueMilieuDuStageComponent},
  {path:'depotBilan_periodique_fin_du_stage', component:DepotBilanPeriodiqueFinDuStageComponent},
  {path:'depotRapport_premiere_version', component:DepotRapportPremiereVersionComponent},
  {path:'depotRapport_version_finale', component:DepotRapportVersionFinaleComponent},
  {path:'depotJournal_de_stage', component:DepotJournalDeStageComponent},
  {path:'listEtudiantsPourEncadrant', component:ListEtudiantsPourEncadrantComponent},
  {path:'encadrantDepot/:id/:email', component:EncadrantDepotComponent},
  {path:'encadrantDepotConvention_de_stage/:email', component:EncadrantDepotConventionDeStageComponent},
  {path:'encadrantDepotFiche_de_stage/:email/:id', component:EncadrantDepotFicheDeStageComponent},
  {path:'encadrantDepotBilan_periodique_debut_du_stage/:email/:id', component:EncadrantDepotBilanPeriodiqueDebutDuStageComponent},
  {path:'encadrantDepotBilan_periodique_milieu_du_stage/:email/:id', component:EncadrantDepotBilanPeriodiqueMilieuDuStageComponent},
  {path:'encadrantDepotBilan_periodique_fin_du_stage/:email/:id', component:EncadrantDepotBilanPeriodiqueFinDuStageComponent},
  {path:'encadrantDepotRapport_premiere_version/:email/:id', component:EncadrantDepotRapportPremiereVersionComponent},
  {path:'encadrantDepotRapport_version_finale/:email/:id', component:EncadrantDepotRapportVersionFinaleComponent},
  {path:'encadrantDepotJournal_de_stage/:email/:id', component:EncadrantDepotJournalDeStageComponent},
  {path:'listOffresDeStagePourEtudiant', component:ListOffresDeStagePourEtudiantComponent},
  {path:'listRapportsDeStagePourEtudiant', component:ListRapportsDeStagePourEtudiantComponent},
  {path:'listOffresDeStagePourAdmin', component:ListOffreDeStagePourAdminComponent},
  {path:'listRapportsDeStagePourAdmin', component:ListRapportDeStagePourAdminComponent},
  {path:'listFilesOffreDeStagePourEtudiant/:societe/:session/:option', component:ListFilesOffreDeStagePourEtudiantComponent},
  {path:'listFilesRapportDeStagePourEtudiant/:session/:option/:encadrant', component:ListFilesRapportDeStagePourEtudiantComponent},
  {path:'listFilesOffreDeStagePourAdmin/:societe/:session/:option', component:ListFilesOffreDeStagePourAdminComponent},
  {path:'listFilesRapportDeStagePourAdmin/:session/:option/:encadrant', component:ListFilesRapportDeStagePourAdminComponent},
  {path:'listDepotConventionDeStagePourAdmin', component:ListDepotConventionDeStagePouAdminComponent},
  {path:'listFileDepotConventionDeStagePourAdmin/:etudiant_email/:depot_id', component:ListFileDepotConventionDeStagePourAdminComponent},
  {path:'listDepotConventionDeStageDEPOSEEPourAdmin', component:ListDepotConventionDeStageDEPOSEEPourAdminComponent},
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
