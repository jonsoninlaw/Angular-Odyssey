import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FirstHighlightDirective } from './first-highlight.directive';
import { DisplayMoviesDirective } from './display-movies.directive';
import { MenuComponent } from './menu/menu.component';
import { ROUTES } from './app.routes';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserProfileComponent,
    FirstHighlightDirective,
    DisplayMoviesDirective,
    MenuComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
