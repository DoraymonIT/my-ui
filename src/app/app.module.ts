import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyCardComponent } from './my-card/my-card.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { MyInputComponent } from './my-input/my-input.component';
import { MyNotesAlertsComponent } from './my-notes-alerts/my-notes-alerts.component';
import { MyNavBarComponent } from './my-nav-bar/my-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCardComponent,
    MyButtonComponent,
    MyInputComponent,
    MyNotesAlertsComponent,
    MyNavBarComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
