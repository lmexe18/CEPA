
import { Component, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmComponent } from '../confirm/confirm.component';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { DialogService } from 'primeng/dynamicdialog';
import {provideNativeDateAdapter} from '@angular/material/core';
import { ToastModule } from 'primeng/toast';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from '../../services/eventos.service';
import { AsignaturaService } from '../../services/asignatura.service';
import { EditarAsignaturaComponent } from '../editar-asignatura/editar-asignatura.component';
import { NuevaAsignaturaComponent } from '../nueva-asignatura/nueva-asignatura.component';

@Component({
    selector: 'app-admin-asignaturas',
    standalone: true,
    templateUrl: './admin-asignaturas.component.html',
    styleUrl: './admin-asignaturas.component.css',
    providers: [
      MessageService, 
      AsignaturaService, 
      DialogService, 
      provideNativeDateAdapter()],
    imports: [
        FormsModule,
        TableModule,
        ButtonModule,
        InputTextModule,
        ConfirmComponent,
        DialogModule,
        ToastModule,
        EditarAsignaturaComponent,
        NuevaAsignaturaComponent
    ]
})
export class AdminAsignaturasComponent implements OnInit {
  
  asignaturas = []
  cursoId: number = 0

  constructor(
    private asignaturaServicio: AsignaturaService, 
    private route: ActivatedRoute,
    private messageService:MessageService,
    ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.cursoId = +idParam
      this.asignaturaServicio.getAsignaturasDeCurso(this.cursoId!).subscribe({
        next: (asignaturas: any) => {
          this.asignaturas = asignaturas
        },
      });
    } 
  }
}
