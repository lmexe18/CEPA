import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TipoCurso } from '../../interface/tipoCurso';
import { TipoCursoService } from '../../services/tipoCurso.service';

@Component({
  selector: 'app-medio-fp',
  standalone: true,
  imports: [
    CardModule
  ],
  providers:[
    TipoCursoService
  ],
  templateUrl: './medio-fp.component.html',
  styleUrl: './medio-fp.component.css'
})
export class MedioFpComponent implements OnInit {
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
            if (nombre.includes('grado medio')) {
              this.ensenanzas.push(data[i])
            }
          }
        }
      })
  }
}
