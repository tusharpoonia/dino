import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { AppNavbarComponent } from './components/app-navbar/app-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { CallerService } from './services/caller.service';
import { SearchComponent } from './pages/search/search.component';
import { TrendingComponent } from './components/trending/trending.component';
import { FeedpostComponent } from './components/feedpost/feedpost.component';
import { TrendpostComponent } from './components/trendpost/trendpost.component';
import { ProfileNavComponent } from './components/profile-nav/profile-nav.component';
import { DiscoverNavComponent } from './components/discover-nav/discover-nav.component';
import { DiscoverTopicComponent } from './components/discover-topic/discover-topic.component';
import { ProfileTopComponent } from './components/profile-top/profile-top.component';
import { ProfileBottomComponent } from './components/profile-bottom/profile-bottom.component';
import { UserComponent } from './components/user/user.component';
import { FeedpostContainerComponent } from './components/feedpost-container/feedpost-container.component';
import { ProfilepostContainerComponent } from './components/profilepost-container/profilepost-container.component';
import { ProfiletopicContainerComponent } from './components/profiletopic-container/profiletopic-container.component';
import { ProfileuserContainerComponent } from './components/profileuser-container/profileuser-container.component';
import { DiscovertopicContainerComponent } from './components/discovertopic-container/discovertopic-container.component';
import { NavActiveService } from './services/nav-active.service';
import { ProfileactivityContainerComponent } from './components/profileactivity-container/profileactivity-container.component';
import { TopicComponent } from './components/topic/topic.component';
import { ProfilepostComponent } from './components/profilepost/profilepost.component';
import { ActivitypostComponent } from './components/activitypost/activitypost.component';
import { LikebarComponent } from './components/likebar/likebar.component';
import { FollowbarComponent } from './components/followbar/followbar.component';


@NgModule({
  declarations: [
    AppComponent,
    DiscoverComponent,
    AppNavbarComponent,
    HomeComponent,
    FavoritesComponent,
    ProfileComponent,
    SettingsComponent,
    SearchComponent,
    TrendingComponent,
    FeedpostComponent,
    TrendpostComponent,
    ProfileNavComponent,
    DiscoverNavComponent,
    DiscoverTopicComponent,
    ProfileTopComponent,
    ProfileBottomComponent,
    UserComponent,
    FeedpostContainerComponent,
    ProfilepostContainerComponent,
    ProfiletopicContainerComponent,
    ProfileuserContainerComponent,
    DiscovertopicContainerComponent,
    ProfileactivityContainerComponent,
    TopicComponent,
    ProfilepostComponent,
    ActivitypostComponent,
    LikebarComponent,
    FollowbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    CallerService,
    NavActiveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
