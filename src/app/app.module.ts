import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { SideBarNavComponent } from './side-bar-nav/side-bar-nav.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { JavaAppComponent } from './java-app/java-app.component';
import { TopBarNavComponent } from './top-bar-nav/top-bar-nav.component';
import { BottomBarNavComponent } from './bottom-bar-nav/bottom-bar-nav.component';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    SideBarNavComponent,
    EmailFormComponent,
    JavaAppComponent,
    TopBarNavComponent,
    BottomBarNavComponent,
    AboutMeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: AboutMeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
