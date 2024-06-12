import { Component, OnInit } from '@angular/core';
import { Noticia } from '../../interface/noticia';
import { AuthService } from '../../services/auth.service';
import { NoticiaService } from '../../services/noticia.service';
import { PreviewNoticiaComponent } from '../preview-noticia/preview-noticia.component';

@Component({
  selector: 'app-plan-garantia-juvenil',
  standalone: true,
  imports: [
    PreviewNoticiaComponent
  ],
  templateUrl: './plan-garantia-juvenil.component.html',
  styleUrl: './plan-garantia-juvenil.component.css'
})
export class PlanGarantiaJuvenilComponent implements OnInit {

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
            if (tipo.includes('plan de garantía juvenil')) {
              this.noticias.push(data[i])
            }
          }

        }
      })
  }
}
