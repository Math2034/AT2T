import { Component } from '@angular/core';
import { IObjetivo } from '../models/IObjetivos';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router : Router, public alertController: AlertController, public toastController: ToastController) {}

  listaObjetivos: IObjetivo[] = [
    {
      nome: 'Erradicação da pobreza',
      imagem: "https://images.unric.org/pt/wp-content/uploads/sites/9/2019/01/SDG-icon-PT-RGB-01.jpg",
      pagina: 'https://brasil.un.org/pt-br/sdgs/1',
      descricao:"Erradicar a pobreza em todas as formas e em todos os lugares",
      favorito: false
    }
  ];

  exibirObjetivo(objetivo: IObjetivo){
    const navigationExtras: NavigationExtras = {state:{paramObjetivo:objetivo}};
    this.router.navigate(['objetivo-detalhe'],navigationExtras);
  }

  async exibirAlertaFavorito(objetivo: IObjetivo) {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o objetivo?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            objetivo.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            objetivo.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }
  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Objetivo adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }
}