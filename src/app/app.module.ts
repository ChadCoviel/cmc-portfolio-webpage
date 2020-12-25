import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
// import { NgxPageScrollModule } from 'ngx-page-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { SideBarNavComponent } from './side-bar-nav/side-bar-nav.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { JavaAppComponent } from './java-app/java-app.component';
import { TopBarNavComponent } from './top-bar-nav/top-bar-nav.component';
import { BottomBarNavComponent } from './bottom-bar-nav/bottom-bar-nav.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResumeComponent } from './resume/resume.component';
import { ScrollSpyDirective } from './scroll-spy.directive';
// import { InViewportModule } from '@thisissoon/angular-inviewport';
// import { ScrollSpyModule } from '@thisissoon/angular-scrollspy';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SideBarNavComponent,
    EmailFormComponent,
    JavaAppComponent,
    TopBarNavComponent,
    BottomBarNavComponent,
    AboutMeComponent,
    ResumeComponent,
    ScrollSpyDirective
    // ScrollSpyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: AboutMeComponent },
      { path: 'aboutme', component: AboutMeComponent },
      { path: 'emailme', component: EmailFormComponent },
      { path: 'resume', component: ResumeComponent },
      { path: 'slogo', component: JavaAppComponent },
      { path: 'blog', component: ContentComponent }
    ]),
    BrowserAnimationsModule
    // NgxPageScrollModule,
    // InViewportModule, 
    // ScrollSpyModule.forRoot()
    // NgxPageScrollCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
