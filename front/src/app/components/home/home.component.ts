import { Component, Input, OnInit, ViewEncapsulation  } from '@angular/core';
import { finalize } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { PreviewEventosComponent } from "../preview-eventos/preview-eventos.component";
import { NoticiaComponent } from '../noticia/noticia.component';
import { Subscription } from 'rxjs';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { PreviewNoticiaComponent } from '../preview-noticia/preview-noticia.component';
import { AuthService } from '../../services/auth.service';
import { ContactoService } from '../../services/contacto.service';
import { Contacto } from '../../interface/contacto';
import { Evento } from '../../interface/evento';
import { Noticia } from '../../interface/noticia';
import { NoticiaService } from '../../services/noticia.service';
import { EventosService } from '../../services/eventos.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    encapsulation: ViewEncapsulation.None,
    imports: [PreviewEventosComponent,NoticiaComponent,CardModule,PreviewNoticiaComponent],
    providers:[ContactoService]
})
export class HomeComponent implements OnInit {
 
  httpRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
  @Input() eventos:Array<Evento>=[]
  @Input() last:number = 0
  noticias?:Array<Noticia>

  @Input() contacto:Array<Contacto>=[]

  env=environment
  noticiaSubscripcion:Subscription=new Subscription
  constructor(
    private servicioEventos: EventosService,
    private noticiaService:NoticiaService,
    private contactoService: ContactoService,
    private authService:AuthService
  ){}
  ngOnInit(): void {
    this.authService.clearAccess()

    this.contactoService.getContactos(
    ).subscribe({
      next: (data: Array<Contacto>) => {
        this.contacto = data
      },
      error: (err) => {

      }
    })
    this.servicioEventos.getEventosActivos()

      .pipe(
        finalize(() => this.formatearSrc())
      )
      .subscribe({
        next:(evento: Array<Evento>) => {
          this.eventos = evento
          this.last = evento?.length-1
        },
        error:(err)=>{
     
        }
      })
    this.noticiaSubscripcion=this.noticiaService.getUltimasNoticias().subscribe({
      next:(data:Array<Noticia>)=>{
   
        this.noticias=data
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

  esUrl(foto:string):Boolean{
    return this.httpRegex.test(foto)
    }

}
