import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BanerComponent } from './baner/baner.component';
import { GetlifeStyleComponent } from './getlife-style/getlife-style.component';
import { CountdownComponent } from './countdown/countdown.component';
import { PackagesComponent } from './packages/packages.component';
import { StoriesComponent } from './stories/stories.component';
import { StoriesTwoComponent } from './stories-two/stories-two.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { BlogsComponent } from './blogs/blogs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    BanerComponent,
    GetlifeStyleComponent,
    CountdownComponent,
    PackagesComponent,
    StoriesComponent,
    StoriesTwoComponent,
    ExperiencesComponent,
    BlogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
