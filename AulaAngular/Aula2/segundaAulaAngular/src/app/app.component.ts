import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'segundaAulaAngular';

  images: Array<any> = [
    {
      url: "./assets/img/imagem1.jpg",
      titulo: "Vaca voadora",
      ativa:true
    }, {
      url: "./assets/img/imagem2.jpg",
      titulo: "Liza crackuda",
      ativa:true  
    }, {
      url: "./assets/img/imagem3.jpg",
      titulo: "Seila",
      ativa:true
    }
  ]

  // funcao para deletar imagem
  deletar(index:string){
    this.images[index].ativa = false
    // alert("deletado "+index)
  }

  //funcao para adicionar imagem
  adicionar(index:string){
    let objImagem = {
      titulo: "Imagem Aleatoria",
      url: "https://picsum.photos/200",
      ativa:true
    }

    //adici
    this.images.push(objImagem)
    // alert("Adicionado")
  }

}
