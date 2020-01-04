import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClassDashboardComponent } from './components/class/class-dashboard/class-dashboard.component';
import { AssignmentsComponent } from './components/class/assignments/assignments.component';
import { CalendarComponent } from './components/class/calendar/calendar.component';
import { NotesComponent } from './components/class/notes/notes.component';
import { IssuesComponent } from './components/class/issues/issues.component';
import { ChatComponent } from './components/class/chat/chat.component';

const routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'class',
    component: ClassDashboardComponent,
    children: [
      { path: 'Assignments', component: AssignmentsComponent },
      { path: 'Calendar', component: CalendarComponent },
      { path: 'chat', component: ChatComponent },
      { path: 'issues', component: IssuesComponent },
      { path: 'notes', component: NotesComponent }
    ]
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
