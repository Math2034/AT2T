import { Component } from '@angular/core';
import { IObjetivo } from '../models/IObjetivo';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router, public alertController: AlertController, public toastController: ToastController) {}

  lista : IObjetivo[] = [
    {
      nome: 'Erradicação da pobreza',
      imagem: "https://images.unric.org/pt/wp-content/uploads/sites/9/2019/01/SDG-icon-PT-RGB-01.jpg",
      pagina: 'https://brasil.un.org/pt-br/sdgs/1',
      descricao:"Erradicar a pobreza em todas as formas e em todos os lugares",
      codigo: "Objetivo 1",
      favorito: false
    },
    {
      nome: 'Fome zero e agricultura sustentável',
      imagem: "https://sc.movimentoods.org.br/wp-content/uploads/2019/09/2.png",
      pagina: 'https://brasil.un.org/pt-br/sdgs/2',
      descricao:"Erradicar a fome, alcançar a segurança alimentar, melhorar a nutrição e promover a agricultura sustentável",
      codigo: "Objetivo 2",
      favorito: false
    },
    {
      nome: 'Saúde e Bem-Estar',
      imagem: "https://www.estrategiaods.org.br/wp-content/uploads/2021/10/ODS3-1.jpg",
      pagina: 'https://brasil.un.org/pt-br/sdgs/3',
      descricao:"Garantir o acesso à saúde de qualidade e promover o bem-estar para todos, em todas as idades",
      codigo: "Objetivo 3",
      favorito: false
    },
    {
      nome: 'Educação de qualidade',
      imagem: "https://www.univates.br/media/institucional/somos-ods/selos_4.jpg",
      pagina: 'https://brasil.un.org/pt-br/sdgs/4',
      descricao:"Garantir o acesso à educação inclusiva, de qualidade e equitativa, e promover oportunidades de aprendizagem ao longo da vida para todos",
      codigo: "Objetivo 4",
      favorito: false
    },
    {
      nome: 'Igualdade de gênero',
      imagem: "https://images.unric.org/pt/wp-content/uploads/sites/9/2019/01/SDG-icon-PT-RGB-05-1.jpg",
      pagina: 'https://brasil.un.org/pt-br/sdgs/5',
      descricao:"Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas",
      codigo: "Objetivo 5",
      favorito: false
    },
    {
      nome: 'Água potável e saneamento',
      imagem: "https://static.wixstatic.com/media/9f7d66_59d2fee2dbb941b5a0373c52bda731eb~mv2.png/v1/fill/w_466,h_466,al_c/6-min.png",
      pagina: 'https://brasil.un.org/pt-br/sdgs/6',
      descricao:"Garantir a disponibilidade e a gestão sustentável da água potável e do saneamento para todos",
      codigo: "Objetivo 6",
      favorito: false
    },
    {
      nome: 'Energia limpa e acessível',
      imagem: "https://images.unric.org/pt/wp-content/uploads/sites/9/2019/01/SDG-icon-PT-RGB-07-1.jpg",
      pagina: 'https://brasil.un.org/pt-br/sdgs/7',
      descricao:"Garantir o acesso a fontes de energia fiáveis, sustentáveis e modernas para todos",
      codigo: "Objetivo 7",
      favorito: false
    },
    {
      nome: 'Trabalho decente e crescimento econômico',
      imagem: "https://brasilnaagenda2030.files.wordpress.com/2019/10/ods8.jpg?w=640",
      pagina: 'https://brasil.un.org/pt-br/sdgs/8',
      descricao:"Promover o crescimento econômico inclusivo e sustentável, o emprego pleno e produtivo e o trabalho digno para todos",
      codigo: "Objetivo 8",
      favorito: false
    },
    {
      nome: 'Indústria, inovação e infraestrutura',
      imagem: "https://www.estrategiaods.org.br/wp-content/uploads/2021/10/ODS9-1.jpg",
      pagina: 'https://brasil.un.org/pt-br/sdgs/9',
      descricao:"Construir infraestruturas resilientes, promover a industrialização inclusiva e sustentável e fomentar a inovação",
      codigo: "Objetivo 9",
      favorito: false
    },
    {
      nome: 'Redução das desigualdades',
      imagem: "https://www.estrategiaods.org.br/wp-content/uploads/2021/10/ODS10-1.jpg",
      pagina: 'https://brasil.un.org/pt-br/sdgs/10',
      descricao:"Reduzir as desigualdades no interior dos países e entre países",
      codigo: "Objetivo 10",
      favorito: false
    },
    {
      nome: 'Cidades e comunidades sustentáveis',
      imagem: "https://www.estrategiaods.org.br/wp-content/uploads/2021/10/ODS11-1.jpg",
      pagina: 'https://brasil.un.org/pt-br/sdgs/11',
      descricao:"Tornar as cidades e comunidades mais inclusivas, seguras, resilientes e sustentáveis",
      codigo: "Objetivo 11",
      favorito: false
    },
    {
      nome: 'Consumo e produção responsáveis',
      imagem: "https://www.estrategiaods.org.br/wp-content/uploads/2021/10/ODS12-1.jpg",
      pagina: 'https://brasil.un.org/pt-br/sdgs/12',
      descricao:"Garantir padrões de consumo e de produção sustentáveis",
      codigo: "Objetivo 12",
      favorito: false
    },
    {
      nome: 'Ação contra a mudança global do clima',
      imagem: "https://www.estrategiaods.org.br/wp-content/uploads/2021/10/ODS13-1.jpg",
      pagina: 'https://brasil.un.org/pt-br/sdgs/13',
      descricao:"Adotar medidas urgentes para combater as alterações climáticas e os seus impactos",
      codigo: "Objetivo 13",
      favorito: false
    },
    {
      nome: 'Vida na água',
      imagem: "https://upload.wikimedia.org/wikipedia/commons/3/33/Objetivo_Desenvolvimento_Sustent%C3%A1vel_14_PT.jpg",
      pagina: 'https://brasil.un.org/pt-br/sdgs/14',
      descricao:"Conservar e usar de forma sustentável os oceanos, mares e os recursos marinhos para o desenvolvimento sustentável",
      codigo: "Objetivo 14",
      favorito: false
    },
    {
      nome: 'Vida terrestre',
      imagem: "https://upload.wikimedia.org/wikipedia/commons/d/df/Objetivo_Desenvolvimento_Sustent%C3%A1vel_15_PT.webp",
      pagina: 'https://brasil.un.org/pt-br/sdgs/15',
      descricao:"Proteger, restaurar e promover o uso sustentável dos ecossistemas terrestres, gerir de forma sustentável as florestas, combater a desertificação, travar e reverter a degradação dos solos e travar a perda da biodiversidade",
      codigo: "Objetivo 15",
      favorito: false
    },
    {
      nome: 'Paz, Justiça e Instituições Eficazes',
      imagem: "https://www.estrategiaods.org.br/wp-content/uploads/2021/10/ODS16-1-1.jpg",
      pagina: 'https://brasil.un.org/pt-br/sdgs/16',
      descricao:"Promover sociedades pacíficas e inclusivas para o desenvolvimento sustentável, proporcionar o acesso à justiça para todos e construir instituições eficazes, responsáveis e inclusivas a todos os níveis",
      codigo: "Objetivo 16",
      favorito: false
    },
    {
      nome: 'Parcerias e meios de implementação',
      imagem: "https://brasilnaagenda2030.files.wordpress.com/2019/10/ods17.jpg",
      pagina: 'https://brasil.un.org/pt-br/sdgs/17',
      descricao:"Reforçar os meios de implementação e revitalizar a parceria global para o desenvolvimento sustentável",
      codigo: "Objetivo 17",
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
