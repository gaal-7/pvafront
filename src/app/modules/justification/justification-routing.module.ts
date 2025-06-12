import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JustificationListComponent } from './components/justification-list/justification-list.component';
import { JustificationCreateComponent } from './components/justification-create/justification-create.component';

const routes: Routes = [
  { path: '', component: JustificationListComponent },
  { path: 'create', component: JustificationCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JustificationRoutingModule { }
