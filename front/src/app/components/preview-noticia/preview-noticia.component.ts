import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { Noticia } from '../../interface/noticia';
import { Router, RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { TagModule } from 'primeng/tag';
import { AuthService } from '../../services/auth.service';
import { DatePipe } from '@angular/common'; 

@Component({
  selector: 'app-preview-noticia',
  standalone: true,
  imports: [ImageModule, CardModule, RouterLink, TagModule],
  templateUrl: './preview-noticia.component.html',
  styleUrl: './preview-noticia.component.css',
  encapsulation: ViewEncapsulation.None,
  providers: [DatePipe]
})
export class PreviewNoticiaComponent implements OnInit {
  @Input() noticia!: Noticia;
  fechaFormateada: string = '';
  horaFormateada: string = '';
  env = environment;
  httpRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

  constructor(private router: Router, private authService: AuthService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.authService.clearAccess();
    if (this.noticia && this.noticia.createdAt) {
      const createdAtDate = new Date(this.noticia.createdAt);
      this.fechaFormateada = this.datePipe.transform(createdAtDate, 'dd/MM/yyyy')!;
      this.horaFormateada = this.datePipe.transform(createdAtDate, 'HH:mm')!;
    }
  }

  esUrl(foto: string): Boolean {
    return this.httpRegex.test(foto);
  }
}