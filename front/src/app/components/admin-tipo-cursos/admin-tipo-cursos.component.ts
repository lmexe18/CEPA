import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { finalize } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { NuevoTipoCursosComponent } from '../nuevo-tipo-cursos/nuevo-tipo-cursos.component';
import { EditarTipoCursoComponent } from '../editar-tipo-curso/editar-tipo-curso.component';
import { TipoCursoService } from '../../services/tipoCurso.service';
import { TipoCurso } from '../../interface/tipoCurso';

@Component({
    selector: 'app-admin-tipo-cursos',
    standalone: true,
    templateUrl: './admin-tipo-cursos.component.html',
    styleUrls: ['./admin-tipo-cursos.component.css'],
    imports: [
        ToastModule,
        TableModule,
        ButtonModule,
        NuevoTipoCursosComponent,
        EditarTipoCursoComponent,
        RouterLink,
        RouterModule
    ],
    providers: [
      MessageService,
      TipoCursoService
  ]
})
export class AdminTipoCursosComponent implements OnInit {

  @Input() tiposCursos: TipoCurso[] = [];

  constructor(private tipoCursoService: TipoCursoService) {}

  ngOnInit(): void {
    this.tipoCursoService.getTiposCursos()
      .pipe(
        finalize(() => {})
      )
      .subscribe({
        next: (tiposCursos: TipoCurso[]) => {
          this.tiposCursos = tiposCursos;
        },
        error: (err) => {
          console.error(err);
        }
      });
  }
}