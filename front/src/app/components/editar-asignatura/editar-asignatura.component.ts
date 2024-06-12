import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmComponent } from '../confirm/confirm.component';
import { AsignaturaService } from '../../services/asignatura.service';
import { Asignatura } from '../../interface/asignatura';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-editar-asignatura',
  standalone: true,
  imports: [
    FormsModule,
    ToastModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    ConfirmComponent,
  ],
  templateUrl: './editar-asignatura.component.html',
  styleUrls: ['./editar-asignatura.component.css'],
  providers: [DialogService, MessageService, AsignaturaService, provideNativeDateAdapter()]
})
export class EditarAsignaturaComponent {
  constructor(
    private asignaturaService: AsignaturaService,
    private messageService: MessageService,
  ) {}

  @Input() asignaturas?: any;
  @Input() tipo = 0;
  @Input() id!: number;
  @Input() visible: boolean = false;
  @Output() cerrarModal = new EventEmitter<void>();
  asignatura!: Asignatura;

  validacionNombre = '';

  asignaturaModal: Asignatura = {
    id: 0,
    nombre: '',
    idCurso: 0,
    activo: false
  };

  validarCampos(): Boolean {
    let validacion = true;

    if (this.asignaturaModal.nombre) {
      if ((this.asignaturaModal.nombre).length < 3) {
        this.validacionNombre = 'ng-invalid ng-dirty';
        validacion = false;
        this.messageService.add({ severity: 'warn', summary: 'Crear Asignatura', detail: 'El nombre debe de contener al menos 3 caracteres', life: 3000 });
      } else {
        this.validacionNombre = '';
      }
    } else {
      this.validacionNombre = 'ng-invalid ng-dirty';
      this.messageService.add({ severity: 'warn', summary: 'Crear Asignatura', detail: 'El nombre de la asignatura es obligatorio', life: 3000 });
      validacion = false;
    }

    return validacion;
  }

  cerrar(): void {
    this.cerrarModal.emit();
  }

  showDialog() {
    this.asignaturaService.getAsignaturaPorId(this.id!).subscribe({
      next: (asig: Asignatura) => {
        this.asignatura = asig;
        this.visible = true;
        this.asignaturaModal = { ...asig };
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo cargar la asignatura', life: 3000 });
      }
    });
  }

  async guardar(confirm: Boolean) {
    if (confirm) {
      if (this.validarCampos()) {
        this.asignaturaService.updateAsignatura(this.asignaturaModal, this.id).subscribe({
          next: (data: any) => {
            setTimeout(() => {
              this.messageService.add({ severity: 'success', summary: 'Actualizar Asignatura', detail: 'Completada', life: 3000 });
              for (let i = 0; i < this.asignaturas.length; i++) {
                if (this.asignaturas[i].id == this.asignaturaModal.id) {
                  this.asignaturas[i] = this.asignaturaModal;
                  this.visible = false;
                }
              }
              window.location.reload();
            }, 1000);
          },
          error: (err) => {
            this.messageService.add({ severity: 'error', summary: 'Actualizar Asignatura', detail: 'Error al actualizar la asignatura, inténtelo de nuevo', life: 3000 });
          }
        });
      }
    }
  }

  async eliminar(confirm: Boolean) {
    if (confirm) {
      this.asignaturaService.deleteAsignatura(this.id).subscribe({
        next: (data: any) => {
          setTimeout(() => {
            this.messageService.add({ severity: 'success', summary: 'Eliminar Asignatura', detail: 'Completada', life: 3000 });
            for (let i = 0; i < this.asignaturas.length; i++) {
              if (this.asignaturas[i].id == this.asignaturaModal.id) {
                this.asignaturas.splice(i, 1);
                this.visible = false;
              }
            }
            window.location.reload();
          }, 1000);
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: 'Eliminar Asignatura', detail: 'Error al eliminar la asignatura, inténtelo de nuevo', life: 3000 });
        }
      });
    }
  }
}