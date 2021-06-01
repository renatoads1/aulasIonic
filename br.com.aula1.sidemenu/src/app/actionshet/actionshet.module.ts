import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionshetPageRoutingModule } from './actionshet-routing.module';

import { ActionshetPage } from './actionshet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionshetPageRoutingModule
  ],
  declarations: [ActionshetPage]
})
export class ActionshetPageModule {}
