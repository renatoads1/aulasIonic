import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-actionshet',
  templateUrl: './actionshet.page.html',
  styleUrls: ['./actionshet.page.scss'],
})
export class ActionshetPage implements OnInit {

  constructor( 
    private objActionsheet:ActionSheetController
  ) { }

  ngOnInit() {
  }

  async actionSheet(){
    const actionSheet = await this.objActionsheet.create({
      header:'Albun',
      buttons:[{
        text:'Delete',
        role:'destructive',
        icon:'trash',
        handler:()=>{
          console.log('delete clicked');
        }
      },{
        text:'share',
        icon:'share',
        handler:()=>{
          console.log('share clicked');
        }
      }]

    });
    await actionSheet.present();
  }
  
}
