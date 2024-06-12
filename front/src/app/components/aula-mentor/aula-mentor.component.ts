import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../interface/noticia';
import { AuthService } from '../../services/auth.service';
import { NoticiaService } from '../../services/noticia.service';
import { PreviewNoticiaComponent } from '../preview-noticia/preview-noticia.component';

@Component({
  selector: 'app-aula-mentor',
  standalone: true,
  imports: [
    PreviewNoticiaComponent
  ],
  templateUrl: './aula-mentor.component.html',
  styleUrl: './aula-mentor.component.css'
})
export class AulaMentorComponent implements OnInit{
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
            if (tipo.includes('aula mentor')) {
              this.noticias.push(data[i])
            }
          }

        }
      })
  }
}
