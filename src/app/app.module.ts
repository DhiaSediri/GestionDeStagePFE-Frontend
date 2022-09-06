import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardStudentComponent } from './board-student/board-student.component';
import { BoardAcademicSupervisorComponent } from './board-academic-supervisor/board-academic-supervisor.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { BoardUserComponent } from './board-user/board-user.component';

import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserViewComponent } from './user-view/user-view.component';

import { DownloadDocumentsDeStageComponent } from './download-documents-de-stage/download-documents-de-stage.component';

import { DocumentsDeStageAddComponent } from './documents-de-stage-add/documents-de-stage-add.component';
import { DocumentsDeStageEditComponent } from './documents-de-stage-edit/documents-de-stage-edit.component';
import { DocumentsDeStageViewComponent } from './documents-de-stage-view/documents-de-stage-view.component';
import { DocumentsDeStageListComponent } from './documents-de-stage-list/documents-de-stage-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

import { UploadRapportsDeStageComponent } from './upload-rapports-de-stage/upload-rapports-de-stage.component';
import { UploadOffresDeStageComponent } from './upload-offres-de-stage/upload-offres-de-stage.component';

import { DocumentsDeStageListDEPOSEEComponent } from './documents-de-stage-list-deposee/documents-de-stage-list-deposee.component';

import { AffectationAddComponent } from './affectation-add/affectation-add.component';
import { AffectationListComponent } from './affectation-list/affectation-list.component';

import { DepotComponent } from './depot/depot.component';
import { DepotConventionDeStageComponent } from './depot-convention-de-stage/depot-convention-de-stage.component';
import { DepotFicheDeStageComponent } from './depot-fiche-de-stage/depot-fiche-de-stage.component';
import { DepotBilanPeriodiqueDebutDuStageComponent } from './depot-bilan-periodique-debut-du-stage/depot-bilan-periodique-debut-du-stage.component';
import { DepotBilanPeriodiqueMilieuDuStageComponent } from './depot-bilan-periodique-milieu-du-stage/depot-bilan-periodique-milieu-du-stage.component';
import { DepotBilanPeriodiqueFinDuStageComponent } from './depot-bilan-periodique-fin-du-stage/depot-bilan-periodique-fin-du-stage.component';
import { DepotRapportPremiereVersionComponent } from './depot-rapport-premiere-version/depot-rapport-premiere-version.component';
import { DepotRapportVersionFinaleComponent } from './depot-rapport-version-finale/depot-rapport-version-finale.component';
import { DepotJournalDeStageComponent } from './depot-journal-de-stage/depot-journal-de-stage.component';

import { ListEtudiantsPourEncadrantComponent } from './list-etudiants-pour-encadrant/list-etudiants-pour-encadrant.component';
import { EncadrantDepotComponent } from './encadrant-depot/encadrant-depot.component';
import { EncadrantDepotConventionDeStageComponent } from './encadrant-depot-convention-de-stage/encadrant-depot-convention-de-stage.component';
import { EncadrantDepotFicheDeStageComponent } from './encadrant-depot-fiche-de-stage/encadrant-depot-fiche-de-stage.component';
import { EncadrantDepotBilanPeriodiqueDebutDuStageComponent } from './encadrant-depot-bilan-periodique-debut-du-stage/encadrant-depot-bilan-periodique-debut-du-stage.component';
import { EncadrantDepotBilanPeriodiqueMilieuDuStageComponent } from './encadrant-depot-bilan-periodique-milieu-du-stage/encadrant-depot-bilan-periodique-milieu-du-stage.component';
import { EncadrantDepotBilanPeriodiqueFinDuStageComponent } from './encadrant-depot-bilan-periodique-fin-du-stage/encadrant-depot-bilan-periodique-fin-du-stage.component';
import { EncadrantDepotRapportPremiereVersionComponent } from './encadrant-depot-rapport-premiere-version/encadrant-depot-rapport-premiere-version.component';
import { EncadrantDepotRapportVersionFinaleComponent } from './encadrant-depot-rapport-version-finale/encadrant-depot-rapport-version-finale.component';
import { EncadrantDepotJournalDeStageComponent } from './encadrant-depot-journal-de-stage/encadrant-depot-journal-de-stage.component';

import { ListOffresDeStagePourEtudiantComponent } from './list-offres-de-stage-pour-etudiant/list-offres-de-stage-pour-etudiant.component';
import { ListRapportsDeStagePourEtudiantComponent } from './list-rapports-de-stage-pour-etudiant/list-rapports-de-stage-pour-etudiant.component';
import { ListRapportDeStagePourAdminComponent } from './list-rapport-de-stage-pour-admin/list-rapport-de-stage-pour-admin.component';
import { ListOffreDeStagePourAdminComponent } from './list-offre-de-stage-pour-admin/list-offre-de-stage-pour-admin.component';
import { ListEtudiantsPourEncadrantAffectaionComponent } from './list-etudiants-pour-encadrant-affectaion/list-etudiants-pour-encadrant-affectaion.component';
import { ListFilesOffreDeStagePourAdminComponent } from './list-files-offre-de-stage-pour-admin/list-files-offre-de-stage-pour-admin.component';
import { ListFilesOffreDeStagePourEtudiantComponent } from './list-files-offre-de-stage-pour-etudiant/list-files-offre-de-stage-pour-etudiant.component';
import { ListFilesRapportDeStagePourAdminComponent } from './list-files-rapport-de-stage-pour-admin/list-files-rapport-de-stage-pour-admin.component';
import { ListFilesRapportDeStagePourEtudiantComponent } from './list-files-rapport-de-stage-pour-etudiant/list-files-rapport-de-stage-pour-etudiant.component';
import { ListDepotConventionDeStagePouAdminComponent } from './list-depot-convention-de-stage-pou-admin/list-depot-convention-de-stage-pou-admin.component';
import { ListDepotConventionDeStageDEPOSEEPourAdminComponent } from './list-depot-convention-de-stage-deposeepour-admin/list-depot-convention-de-stage-deposeepour-admin.component';
import { ListFileDepotConventionDeStagePourAdminComponent } from './list-file-depot-convention-de-stage-pour-admin/list-file-depot-convention-de-stage-pour-admin.component';

import { RendezVousDeStageComponent } from './rendez-vous-de-stage/rendez-vous-de-stage.component';
import { FichesDeStageComponent } from './fiches-de-stage/fiches-de-stage.component';

import { RendezVousDeStagePourAdminComponent } from './rendez-vous-de-stage-pour-admin/rendez-vous-de-stage-pour-admin.component';
import { FichesDeStagePourAdminComponent } from './fiches-de-stage-pour-admin/fiches-de-stage-pour-admin.component';

import { UserEditByHimselfComponent } from './user-edit-by-himself/user-edit-by-himself.component';

import { TemplateDashboardComponent } from './template-dashboard/template-dashboard.component';
import { TemplateNavigationComponent } from './template-navigation/template-navigation.component';
import { EditCommentaireFicheDeStageComponent } from './edit-commentaire-fiche-de-stage/edit-commentaire-fiche-de-stage.component';
import { EditCommentaireBilanPeriodiqueDebutDeStageComponent } from './edit-commentaire-bilan-periodique-debut-de-stage/edit-commentaire-bilan-periodique-debut-de-stage.component';
import { EditCommentaireBilanPeriodiqueMilieuDeStageComponent } from './edit-commentaire-bilan-periodique-milieu-de-stage/edit-commentaire-bilan-periodique-milieu-de-stage.component';
import { EditCommentaireBilanPeriodiqueFinDeStageComponent } from './edit-commentaire-bilan-periodique-fin-de-stage/edit-commentaire-bilan-periodique-fin-de-stage.component';
import { EditCommentaireRapportPremiereVersionComponent } from './edit-commentaire-rapport-premiere-version/edit-commentaire-rapport-premiere-version.component';
import { EditCommentaireRapportVersionFinalComponent } from './edit-commentaire-rapport-version-final/edit-commentaire-rapport-version-final.component';
import { EditCommentaireJournalDeStageComponent } from './edit-commentaire-journal-de-stage/edit-commentaire-journal-de-stage.component';
import { EncadrantEditCommentaireFicheDeStageComponent } from './encadrant-edit-commentaire-fiche-de-stage/encadrant-edit-commentaire-fiche-de-stage.component';
import { EncadrantEditCommentaireJournalDeStageComponent } from './encadrant-edit-commentaire-journal-de-stage/encadrant-edit-commentaire-journal-de-stage.component';
import { EncadrantEditCommentaireRapportPremiereVersionComponent } from './encadrant-edit-commentaire-rapport-premiere-version/encadrant-edit-commentaire-rapport-premiere-version.component';
import { EncadrantEditCommentaireBilanPeriodiqueDebutDeStageComponent } from './encadrant-edit-commentaire-bilan-periodique-debut-de-stage/encadrant-edit-commentaire-bilan-periodique-debut-de-stage.component';
import { EncadrantEditCommentaireBilanPeriodiqueMilieuDeStageComponent } from './encadrant-edit-commentaire-bilan-periodique-milieu-de-stage/encadrant-edit-commentaire-bilan-periodique-milieu-de-stage.component';
import { EncadrantEditCommentaireBilanPeriodiqueFinDeStageComponent } from './encadrant-edit-commentaire-bilan-periodique-fin-de-stage/encadrant-edit-commentaire-bilan-periodique-fin-de-stage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardStudentComponent,
    BoardAcademicSupervisorComponent,
    BoardUserComponent,
    UserAddComponent,
    UserEditComponent,
    UsersListComponent,
    UserViewComponent,
    DownloadDocumentsDeStageComponent,
    DocumentsDeStageAddComponent,
    DocumentsDeStageEditComponent,
    DocumentsDeStageViewComponent,
    DocumentsDeStageListComponent,
    UploadRapportsDeStageComponent,
    UploadOffresDeStageComponent,
    DocumentsDeStageListDEPOSEEComponent,
    AffectationAddComponent,
    AffectationListComponent,
    DepotComponent,
    DepotConventionDeStageComponent,
    DepotFicheDeStageComponent,
    DepotBilanPeriodiqueDebutDuStageComponent,
    DepotBilanPeriodiqueMilieuDuStageComponent,
    DepotBilanPeriodiqueFinDuStageComponent,
    DepotRapportPremiereVersionComponent,
    DepotRapportVersionFinaleComponent,
    DepotJournalDeStageComponent,
    ListEtudiantsPourEncadrantComponent,
    EncadrantDepotComponent,
    EncadrantDepotConventionDeStageComponent,
    EncadrantDepotFicheDeStageComponent,
    EncadrantDepotBilanPeriodiqueDebutDuStageComponent,
    EncadrantDepotBilanPeriodiqueMilieuDuStageComponent,
    EncadrantDepotBilanPeriodiqueFinDuStageComponent,
    EncadrantDepotRapportPremiereVersionComponent,
    EncadrantDepotRapportVersionFinaleComponent,
    EncadrantDepotJournalDeStageComponent,
    ListOffresDeStagePourEtudiantComponent,
    ListRapportsDeStagePourEtudiantComponent,
    ListRapportDeStagePourAdminComponent,
    ListOffreDeStagePourAdminComponent,
    ListEtudiantsPourEncadrantAffectaionComponent,
    ListFilesOffreDeStagePourAdminComponent,
    ListFilesOffreDeStagePourEtudiantComponent,
    ListFilesRapportDeStagePourAdminComponent,
    ListFilesRapportDeStagePourEtudiantComponent,
    ListDepotConventionDeStagePouAdminComponent,
    ListDepotConventionDeStageDEPOSEEPourAdminComponent,
    ListFileDepotConventionDeStagePourAdminComponent,
    RendezVousDeStageComponent,
    FichesDeStageComponent,
    RendezVousDeStagePourAdminComponent,
    FichesDeStagePourAdminComponent,
    UserEditByHimselfComponent,
    TemplateDashboardComponent,
    TemplateNavigationComponent,
    EditCommentaireFicheDeStageComponent,
    EditCommentaireBilanPeriodiqueDebutDeStageComponent,
    EditCommentaireBilanPeriodiqueMilieuDeStageComponent,
    EditCommentaireBilanPeriodiqueFinDeStageComponent,
    EditCommentaireRapportPremiereVersionComponent,
    EditCommentaireRapportVersionFinalComponent,
    EditCommentaireJournalDeStageComponent,
    EncadrantEditCommentaireFicheDeStageComponent,
    EncadrantEditCommentaireJournalDeStageComponent,
    EncadrantEditCommentaireRapportPremiereVersionComponent,
    EncadrantEditCommentaireBilanPeriodiqueDebutDeStageComponent,
    EncadrantEditCommentaireBilanPeriodiqueMilieuDeStageComponent,
    EncadrantEditCommentaireBilanPeriodiqueFinDeStageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    DefaultModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
