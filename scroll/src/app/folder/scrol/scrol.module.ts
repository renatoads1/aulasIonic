import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScrolPageRoutingModule } from './scrol-routing.module';

import { ScrolPage } from './scrol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrolPageRoutingModule
  ],
  declarations: [ScrolPage]
})
export class ScrolPageModule {}
