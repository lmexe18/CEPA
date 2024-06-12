import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CursoService } from '../../services/curso.service';
import { Curso } from '../../interface/curso';
import { ConfirmComponent } from '../confirm/confirm.component';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-nuevo-curso',
  standalone: true,
  templateUrl: './nuevo-curso.component.html',
  styleUrls: ['./nuevo-curso.component.css'],
  providers: [DialogService, MessageService, CursoService],
  imports: [
    ConfirmComponent,
    FormsModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    ToastModule
  ]
})
export class NuevoCursoComponent {
  constructor(
    private cursoService: CursoService,
    private messageService: MessageService,
  ) {}

  @Input() visible: boolean = false;
  @Output() cerrarModal = new EventEmitter<void>();

  validacionNombre = '';
  validacionHorario = '';
  validacionFecha = '';
  validacionTipoCurso = '';
  validacionIdTutor = '';

  nuevoCurso: Curso = {
    id: 0,
    numeroCurso: 0,
    horario: '',
    fechaInicio: '',
    fechaFin: '',
    idTipoCurso: 0,
    idTutor: 0,
    activo: false,
  };

  showDialog() {
    this.visible = true;
  }

  cerrar(): void {
    this.cerrarModal.emit();
  }

  validarCampos(): Boolean {
    let validacion = true;
    let fechaRegex = /^\d{2}\/\d{2}\/\d{4}$/;

    if (!this.nuevoCurso.numeroCurso || this.nuevoCurso.numeroCurso <= 0) {
      this.validacionNombre = 'ng-invalid ng-dirty';
      validacion = false;
      this.messageService.add({ severity: 'warn', summary: 'Crear Curso', detail: 'El número de curso es obligatorio y debe ser mayor que cero', life: 3000 });
    } else {
      this.validacionNombre = '';
    }

    if (!this.nuevoCurso.horario) {
      this.validacionHorario = 'ng-invalid ng-dirty';
      validacion = false;
      this.messageService.add({ severity: 'warn', summary: 'Crear Curso', detail: 'El horario es obligatorio', life: 3000 });
    } else {
      this.validacionHorario = '';
    }

    if (!this.nuevoCurso.fechaInicio || !fechaRegex.test(this.nuevoCurso.fechaInicio)) {
      this.validacionFecha = 'ng-invalid ng-dirty';
      validacion = false;
      this.messageService.add({ severity: 'warn', summary: 'Crear Curso', detail: 'La fecha de inicio es obligatoria y debe tener el formato DD/MM/YYYY', life: 3000 });
    } else {
      this.validacionFecha = '';
    }

    if (!this.nuevoCurso.fechaFin || !fechaRegex.test(this.nuevoCurso.fechaFin)) {
      this.validacionFecha = 'ng-invalid ng-dirty';
      validacion = false;
      this.messageService.add({ severity: 'warn', summary: 'Crear Curso', detail: 'La fecha de fin es obligatoria y debe tener el formato DD/MM/YYYY', life: 3000 });
    } else {
      this.validacionFecha = '';
    }

    if (!this.nuevoCurso.idTipoCurso || this.nuevoCurso.idTipoCurso <= 0) {
      this.validacionTipoCurso = 'ng-invalid ng-dirty';
      validacion = false;
      this.messageService.add({ severity: 'warn', summary: 'Crear Curso', detail: 'El tipo de curso es obligatorio', life: 3000 });
    } else {
      this.validacionTipoCurso = '';
    }

    if (!this.nuevoCurso.idTutor || this.nuevoCurso.idTutor <= 0) {
      this.validacionIdTutor = 'ng-invalid ng-dirty';
      validacion = false;
      this.messageService.add({ severity: 'warn', summary: 'Crear Curso', detail: 'El ID del tutor es obligatorio', life: 3000 });
    } else {
      this.validacionIdTutor = '';
    }

    return validacion;
  }

  crear(confirm: Boolean) {
    if (confirm) {
      if (this.validarCampos()) {
        this.cursoService.insertCurso(this.nuevoCurso).subscribe({
          next: (data: any) => {
            this.messageService.add({ severity: 'success', summary: 'Crear Curso', detail: 'Completado', life: 3000 });
            this.nuevoCurso = { id: 0, numeroCurso: 0, horario: '', fechaInicio: '', fechaFin: '', idTipoCurso: 0, idTutor: 0, activo: false };
            this.visible = false;
            this.cerrar();
            
          },
          error: (err) => {
            this.messageService.add({ severity: 'error', summary: 'Crear Curso', detail: 'Error al crear el curso, inténtelo de nuevo', life: 3000 });
          }
         
        });
      }
    }
  }
}
