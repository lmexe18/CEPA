import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Curso } from '../../interface/curso';
import { NuevoCursoComponent } from "../nuevo-curso/nuevo-curso.component";
import { EditarCursoComponent } from "../editar-curso/editar-curso.component";
import { Router, RouterLink, RouterModule } from '@angular/router';
import { finalize } from 'rxjs';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-cursos',
  standalone: true,
  templateUrl: './admin-cursos.component.html',
  styleUrls: ['./admin-cursos.component.css'],
  imports: [
    ToastModule,
    TableModule,
    ButtonModule,
    NuevoCursoComponent,
    EditarCursoComponent,
    RouterLink,
    RouterModule
  ],
  providers: [
    MessageService,
    CursoService
  ]
})

export class AdminCursosComponent implements OnInit {
  cursos: Array<Curso> = [];

  constructor(
    private servicioCursos: CursoService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.servicioCursos.getCursos()
      .subscribe({
        next: (cursos: Array<Curso>) => {
          this.cursos = cursos;
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo cargar los cursos', life: 3000 });
        }
      });
  }
}