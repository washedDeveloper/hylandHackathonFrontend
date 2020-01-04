import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ClassDashboardComponent } from './components/class/class-dashboard/class-dashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CalendarComponent } from './components/class/calendar/calendar.component';
import { IssuesComponent } from './components/class/issues/issues.component';
import { NotesComponent } from './components/class/notes/notes.component';
import { AssignmentsComponent } from './components/class/assignments/assignments.component';
import { ChatComponent } from './components/class/chat/chat.component';
import { SettingsComponent } from './components/settings/settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material.module';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    ClassDashboardComponent,
    CalendarComponent,
    IssuesComponent,
    NotesComponent,
    AssignmentsComponent,
    ChatComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
