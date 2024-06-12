import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TipoCurso } from '../../interface/tipoCurso';
import { TipoCursoService } from '../../services/tipoCurso.service';

@Component({
  selector: 'app-secundaria-presencial',
  standalone: true,
  imports: [
    CardModule
  ],
  providers:[
    TipoCursoService
  ],
  templateUrl: './secundaria-presencial.component.html',
  styleUrl: './secundaria-presencial.component.css'
})
export class SecundariaPresencialComponent {
  ensenanzas: Array<TipoCurso> = []

  constructor(
    private tipoCursoServices: TipoCursoService
  ) { }

  ngOnInit() {
    this.tipoCursoServices.getTiposCursos()
      .subscribe({
        next: (data) => {
          for (let i = 0; i < data.length; i++) {
            let nombre = data[i].nombre.toLowerCase()
            if (nombre.includes('secundaria presencial')) {
              this.ensenanzas.push(data[i])
            }
          }
        }
      })
  }
}
