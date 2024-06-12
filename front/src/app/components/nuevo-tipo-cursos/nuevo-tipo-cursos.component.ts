import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { Router } from '@angular/router';
import { TipoCursoService } from '../../services/tipoCurso.service';
import { TipoCurso } from '../../interface/tipoCurso';
import { ConfirmComponent } from "../confirm/confirm.component";

@Component({
    selector: 'app-nuevo-tipo-cursos',
    standalone: true,
    templateUrl: './nuevo-tipo-cursos.component.html',
    styleUrls: ['./nuevo-tipo-cursos.component.css'],
    providers: [
        DialogService,
        MessageService,
        TipoCursoService
    ],
    imports: [
        FormsModule,
        ToastModule,
        DialogModule,
        ButtonModule,
        InputTextModule,
        InputSwitchModule,
        ConfirmComponent
    ]
})
export class NuevoTipoCursosComponent {
  constructor(
    public messageService: MessageService,
    private tipoCursoService: TipoCursoService,
    private router: Router
  ) {}

  @Input() visible: boolean = false;
  @Output() cerrarModal = new EventEmitter<void>();
  validacionNombre = '';

  nuevoTipoCurso: TipoCurso = {
    nombre: '',
    activo: true
  };

  showDialog() {
    this.visible = true;
  }

  cerrar(): void {
    this.cerrarModal.emit();
  }

  validarCampos(): boolean {
    let validacion = true;
    if (!this.nuevoTipoCurso.nombre || this.nuevoTipoCurso.nombre.length < 3) {
      this.validacionNombre = 'ng-invalid ng-dirty';
      validacion = false;
      this.messageService.add({ severity: 'warn', summary: 'Crear Tipo de Curso', detail: 'El nombre debe de contener al menos 3 caracteres', life: 3000 });
    } else {
      this.validacionNombre = '';
    }
    return validacion;
  }

  crear(confirm: boolean) {
    if (confirm && this.validarCampos()) {
      this.messageService.add({ severity: 'info', summary: 'Crear Tipo de Curso', detail: 'En curso', life: 3000 });
      this.tipoCursoService.insertTipoCurso(this.nuevoTipoCurso).subscribe({
        next: (data: any) => {
          this.messageService.add({ severity: 'success', summary: 'Crear Tipo de Curso', detail: 'Completado', life: 3000 });
          this.nuevoTipoCurso.nombre = '';
          this.nuevoTipoCurso.activo = true;
          this.cerrar();
        },
        error: () => {
          this.messageService.add({ severity: 'error', summary: 'Crear Tipo de Curso', detail: 'Algo ha ido mal, inténtelo de nuevo', life: 3000 });
        }
      });
    }
  }
}