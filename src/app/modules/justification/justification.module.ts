import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JustificationRoutingModule } from './justification-routing.module';

import { JustificationListComponent } from './components/justification-list/justification-list.component';
import { JustificationCreateComponent } from './components/justification-create/justification-create.component';

@NgModule({
  declarations: [
    JustificationListComponent,
    JustificationCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    JustificationRoutingModule
  ]
})
export class JustificationModule { }
