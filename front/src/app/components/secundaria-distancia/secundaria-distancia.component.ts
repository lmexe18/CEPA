import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TipoCurso } from '../../interface/tipoCurso';
import { TipoCursoService } from '../../services/tipoCurso.service';

@Component({
  selector: 'app-secundaria-distancia',
  standalone: true,
  imports: [
    CardModule
  ],
  providers:[
    TipoCursoService
  ],
  templateUrl: './secundaria-distancia.component.html',
  styleUrl: './secundaria-distancia.component.css'
})
export class SecundariaDistanciaComponent {

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
            if (nombre.includes('secundaria distancia')) {
              this.ensenanzas.push(data[i])
            }
          }
        }
      })
  }
}
