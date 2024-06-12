import { Component, Input } from '@angular/core';
import { finalize } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Evento } from '../../interface/evento';
import { AuthService } from '../../services/auth.service';
import { EventosService } from '../../services/eventos.service';
import { PreviewEventosComponent } from '../preview-eventos/preview-eventos.component';

@Component({
  selector: 'app-amigos-cepa',
  standalone: true,
  imports: [
    PreviewEventosComponent
  ],
  templateUrl: './amigos-cepa.component.html',
  styleUrl: './amigos-cepa.component.css'
})
export class AmigosCepaComponent {
  constructor(
    private servicioEventos:EventosService,
    private authService:AuthService
  ){}

  @Input() eventos:Array<Evento>=[]

  ngOnInit(): void {

    this.authService.clearAccess()
    this.servicioEventos.getEventosActivos()
      .pipe(
        finalize(() => this.formatearSrc())
      )
      .subscribe({
        next:(eventos: Array<Evento>) => {
          for (let i=0 ; i<eventos.length ; i++){
            let tipo = eventos[i].tipo
            if (tipo.includes('Asociación Amigos CEPA')){
              this.eventos.push(eventos[i])
            }
          }
          this.eventos = eventos;
        },
        error:(err)=>{
          
        }
      })
  }

  formatearSrc(){
    for (let i=0 ; i<this.eventos.length;i++){
      if(!this.eventos[i].fotoCartel.includes('http') || !this.eventos[i].fotoCartel.includes('https')){
        this.eventos[i].fotoCartel = environment.baseUrl + environment.urlFotosEventos + '/' + this.eventos[i].fotoCartel
      }   
    }
  }
}
