import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ViewNotesComponent } from './view-notes/view-notes.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleOsComponent } from './schedule-os/schedule-os.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'create-note',
    pathMatch: 'full'
  },
  {
    path: 'create-note',
    component: CreateNoteComponent
  },
  {
    path: 'view-notes',
    component: ViewNotesComponent
  },
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: 'schedule-os',
    component: ScheduleOsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
