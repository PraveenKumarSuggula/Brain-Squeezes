import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { TagsComponent } from './components/tags/tags.component';
import { ProfileViewComponent } from './components/profile-options/profile-view/profile-view.component';
import { ActivityComponent } from './components/profile-options/activity/activity.component';
import { SettingsComponent } from './components/profile-options/settings/settings.component';
import { AppVideoCallComponent } from './core/video-call/video-call.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'tags', component: TagsComponent },
  { path: 'profile-options/profile', component: ProfileViewComponent },
  { path: 'profile-options/settings', component: SettingsComponent },
  { path: 'profile-options/activity', component: ActivityComponent },
  { path: 'videocall', component: AppVideoCallComponent },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
