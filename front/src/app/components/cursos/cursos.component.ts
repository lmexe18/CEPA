import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TipoCurso } from '../../interface/tipoCurso';
import { TipoCursoService } from '../../services/tipoCurso.service';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [
    CardModule
  ],
  providers:[
    TipoCursoService
  ],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit{
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
            if (!(nombre.includes('secundaria distancia')) && 
                !(nombre.includes('secundaria presencial')) && 
                !(nombre.includes('basica')) && 
                !(nombre.includes('básica')) && 
                !(nombre.includes('grado medio'))) {
              this.ensenanzas.push(data[i])
            }
          }
        }
      })
  }
}
