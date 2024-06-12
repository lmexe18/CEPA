import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TipoCurso } from '../../interface/tipoCurso';
import { TipoCursoService } from '../../services/tipoCurso.service';

@Component({
  selector: 'app-ensenanzas-basicas',
  standalone: true,
  imports: [
    CardModule
  ],
  providers: [
    TipoCursoService
  ],
  templateUrl: './ensenanzas-basicas.component.html',
  styleUrl: './ensenanzas-basicas.component.css'
})
export class EnsenanzasBasicasComponent implements OnInit {
  basicas: Array<TipoCurso> = []

  constructor(
    private tipoCursoServices: TipoCursoService
  ) { }

  ngOnInit() {
    this.tipoCursoServices.getTiposCursos()
      .subscribe({
        next: (data) => {
          for (let i = 0; i < data.length; i++) {
            let nombre = data[i].nombre.toLowerCase()
            if (nombre.includes('basica') || nombre.includes('básica')) {
              this.basicas.push(data[i])
            }
          }
        }
      })
  }
}
