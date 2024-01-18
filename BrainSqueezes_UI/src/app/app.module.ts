import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesComponent } from './components/categories/categories.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { TagsComponent } from './components/tags/tags.component';
import { ProfileViewComponent } from './components/profile-options/profile-view/profile-view.component';
import { SettingsComponent } from './components/profile-options/settings/settings.component';
import { ActivityComponent } from './components/profile-options/activity/activity.component';
import { LogoutComponent } from './components/profile-options/logout/logout.component';
import {  HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FileDragDropDirective } from './components/core/directives/file-drag-drop/file-drag-drop.directive';
import { QandAPopupComponent } from './core/qanda-popup/qanda-popup.component';
import { QandaAccordianComponent } from './core/qanda-accordian/qanda-accordian.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppVideoCallComponent } from './core/video-call/video-call.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    LayoutComponent,
    SidebarComponent,
    NavbarComponent,
    CategoriesComponent,
    QuestionsComponent,
    TagsComponent,
    ProfileViewComponent,
    SettingsComponent,
    ActivityComponent,
    LogoutComponent,
    FileDragDropDirective,
    QandAPopupComponent,
    QandaAccordianComponent,
    AppVideoCallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    ToastrModule.forRoot({
      //timeOut: 10000,
      positionClass: 'toast-top-right',
      //preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
