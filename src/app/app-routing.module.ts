import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotesComponent } from './components/notes/notes.component';
import { ChatComponent } from './components/chat/chat.component';

const routes = [
  { path: 'dashboard', component: DashboardComponent },
     { path: 'chat', component: ChatComponent },
      { path: 'notes', component: NotesComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
