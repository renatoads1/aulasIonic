import { Component, OnInit } from '@angular/core';
//componentes injetados no construtor devem ser importados 
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.page.html',
  styleUrls: ['./navegacao.page.scss'],
})
export class NavegacaoPage implements OnInit {
//todos os controladores devem ser injetados aqui dentro do construtor
  constructor(
    private navCtrl : NavController

  ) { }

  ngOnInit() {
  }

  showPagePerfil(){
    this.navCtrl.navigateForward('perfil');
  }

}
