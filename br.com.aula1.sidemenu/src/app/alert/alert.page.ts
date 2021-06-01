import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Button } from 'selenium-webdriver';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(
    private objAlert : AlertController
  ) { }

  ngOnInit() {
  }
  //alert simples
  async Alert(){
    const alert = await this.objAlert.create({
      header:'Alert',
      subHeader:'Subtitulo',
      message:'Mensagem do alerta',
      buttons:['ok']
    });
    alert.present();
  }
//multiple alert
  async Multiple(){
const multiple = await this.objAlert.create({
  header:'Alert Multiple',
  subHeader:'Subtitulo',
  message:'Mensagem do alerta',
  buttons:['Cancel','Open','Delete']
  });
  multiple.present();
}
//confirm alert
async Confirm(){
  const cofirm = await this.objAlert.create({
    header:'Alert Confirm',
    message:'Message <strong>strong Text</strong>',
    buttons:[
      {
      text:'cancel',
      role:'Cancel',
      cssClass:'secondary',
      handler:(blah)=>{
        console.log('clicou no cancel');
      }
    },
      {
        text:'okay',
        handler:()=>{
          console.log('clicou no oky');
        }
      }      
    ]
  });
  cofirm.present();
}

//prompt
async Prompt(){
  const prompt = await this.objAlert.create({
    header:'Prmpt!!',
    inputs:[{
      name:'Nome:',
      type:'text',
      placeholder:'Nome Completo'
    },
    {
      name:'email',
      type:'email',
      id:'email-id',
      placeholder:'E-mail'
    },
    ///multiple input
    {
      name:'Senha',
      type:'password',
      id:'senha-id',
      placeholder:'Senha'
    }],
    buttons:[{
      text:'OK',
      role:'OK',
      cssClass:'secondary',
      handler:(form)=>{
        console.log(form)
      }
    }]
  });
  await prompt.present();
} 


}
