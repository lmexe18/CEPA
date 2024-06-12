import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../interface/noticia';
import { AuthService } from '../../services/auth.service';
import { NoticiaService } from '../../services/noticia.service';
import { PreviewNoticiaComponent } from '../preview-noticia/preview-noticia.component';

@Component({
  selector: 'app-erasmus',
  standalone: true,
  imports: [
    PreviewNoticiaComponent
  ],
  providers: [
    NoticiaService,
    AuthService
  ],
  templateUrl: './erasmus.component.html',
  styleUrl: './erasmus.component.css'
})
export class ErasmusComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private noticiasService: NoticiaService
  ) { }
  noticias: Array<Noticia> = []
  ngOnInit(): void {
    this.authService.clearAccess()
    this.noticiasService.getAllNoticias()
      .subscribe({
        next: (data) => {
          for (let i = 0; i < data.length; i++) {
            let tipo = data[i].tipo.toLowerCase()
            if (tipo.includes('erasmus')) {
              this.noticias.push(data[i])
            }
          }

        }
      })
  }
}
