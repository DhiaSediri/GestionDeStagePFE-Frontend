import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

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

import { CreatePDFDocumentsDeStageComponent } from './create-pdfdocuments-de-stage/create-pdfdocuments-de-stage.component';
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
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { UploadRapportsDeStageComponent } from './upload-rapports-de-stage/upload-rapports-de-stage.component';
import { UploadOffresDeStageComponent } from './upload-offres-de-stage/upload-offres-de-stage.component';
import { EmailComponent } from './email/email.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DocumentsDeStageListDEPOSEEComponent } from './documents-de-stage-list-deposee/documents-de-stage-list-deposee.component';
import { DefaultModule } from './layouts/default/default.module';
import { AffectationAddComponent } from './affectation-add/affectation-add.component';
import { AffectationViewComponent } from './affectation-view/affectation-view.component';
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
    CreatePDFDocumentsDeStageComponent,
    DownloadDocumentsDeStageComponent,
    DocumentsDeStageAddComponent,
    DocumentsDeStageEditComponent,
    DocumentsDeStageViewComponent,
    DocumentsDeStageListComponent,
    UploadRapportsDeStageComponent,
    UploadOffresDeStageComponent,
    EmailComponent,
    PieChartComponent,
    DocumentsDeStageListDEPOSEEComponent,
    AffectationAddComponent,
    AffectationViewComponent,
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
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    DefaultModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
