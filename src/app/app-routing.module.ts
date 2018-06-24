import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SearchComponent } from './pages/search/search.component';
import { ProfilepostContainerComponent } from './components/profilepost-container/profilepost-container.component';
import { ProfiletopicContainerComponent } from './components/profiletopic-container/profiletopic-container.component';
import { ProfileuserContainerComponent } from './components/profileuser-container/profileuser-container.component';
import { ProfileactivityContainerComponent } from './components/profileactivity-container/profileactivity-container.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'discover', component: DiscoverComponent},
  {path: 'favorites', component: FavoritesComponent},
  {
    path: 'profile/:seokey',
    component: ProfileComponent,
    children: [
      {path: '', component: ProfilepostContainerComponent},
      {path: 'private', component: ProfilepostContainerComponent},
      {path: 'activity', component: ProfileactivityContainerComponent},
      {path: 'topics', component: ProfiletopicContainerComponent},
      {path: 'followers', component: ProfileuserContainerComponent},
      {path: 'following', component: ProfileuserContainerComponent},
    ]
  },

  {path: 'settings', component: SettingsComponent},
  {path: 'search', component: SearchComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
