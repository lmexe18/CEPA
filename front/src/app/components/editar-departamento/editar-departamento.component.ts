import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmComponent } from '../confirm/confirm.component';
import { DepartamentoService } from '../../services/departamento.service';
import { Departamento } from '../../interface/departamento';

@Component({
  selector: 'app-editar-departamento',
  standalone: true,
  imports: [
    FormsModule,
    ToastModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    ConfirmComponent,
  ],
  templateUrl: './editar-departamento.component.html',
  styleUrls: ['./editar-departamento.component.css'],
  providers: [DialogService, MessageService, DepartamentoService]
})
export class EditarDepartamentoComponent {
  constructor(
    private servicioDepartamento: DepartamentoService,
    private messageService: MessageService,
  ) {}

  @Input() departamentos?: any 
  @Input() tipo=0
  @Input()
  id!: number;
  @Input() visible: boolean = false
  @Output() cerrarModal = new EventEmitter<void>();
  departamento!: Departamento;

  validacionNombre = ''
  validacionDescripcion = ''
  validacionJefe = ''

  departamentoModal: Departamento = {
    id: 0,
    nombre: '',
    descripcion: '',
    jefeDepartamento: '',
    activo: false,
    foto: ''
  }

  validarCampos(): boolean {
    let validacion = true;

    if (this.departamentoModal.nombre) {
      if ((this.departamentoModal.nombre).length < 3) {
        this.validacionNombre = 'ng-invalid ng-dirty';
        validacion = false;
        this.messageService.add({ severity: 'warn', summary: 'Crear Departamento', detail: 'El nombre debe contener al menos 3 caracteres', life: 3000 });
      } else {
        this.validacionNombre = '';
      }
    } else {
      this.validacionNombre = 'ng-invalid ng-dirty';
      this.messageService.add({ severity: 'warn', summary: 'Crear Departamento', detail: 'El nombre del departamento es obligatorio', life: 3000 });
      validacion = false;
    }

    if (this.departamentoModal.descripcion) {
      if ((this.departamentoModal.descripcion).length < 15) {
        this.validacionDescripcion = 'ng-invalid ng-dirty';
        validacion = false;
        this.messageService.add({ severity: 'warn', summary: 'Crear Departamento', detail: 'La descripción debe contener al menos 15 caracteres', life: 3000 });
      } else {
        this.validacionDescripcion = '';
      }
    } else {
      this.validacionDescripcion = 'ng-invalid ng-dirty';
      validacion = false;
      this.messageService.add({ severity: 'warn', summary: 'Crear Departamento', detail: 'La descripción del departamento es obligatoria', life: 3000 });
    }

    if (this.departamentoModal.jefeDepartamento) {
      if ((this.departamentoModal.jefeDepartamento).length < 3) {
        this.validacionJefe = 'ng-invalid ng-dirty';
        validacion = false;
        this.messageService.add({ severity: 'warn', summary: 'Crear Departamento', detail: 'El nombre del jefe debe contener al menos 3 caracteres', life: 3000 });
      } else {
        this.validacionJefe = '';
      }
    } else {
      this.validacionJefe = 'ng-invalid ng-dirty';
      this.messageService.add({ severity: 'warn', summary: 'Crear Departamento', detail: 'El nombre del jefe del departamento es obligatorio', life: 3000 });
      validacion = false;
    }

    return validacion;
  }

  cerrar(): void {
    this.cerrarModal.emit();
  }

  showDialog() {
    this.servicioDepartamento.getDepartamentoPorId(this.id!).subscribe({
      next: (dep: Departamento) => {
        this.departamento = dep;
        this.visible = true;
        this.departamentoModal = { ...dep };
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo cargar el departamento', life: 3000 });
      }
    });
  }

  guardar(confirm: boolean) {
    if (confirm) {
      if (this.validarCampos()) {
        this.servicioDepartamento.updateDepartamento(this.departamentoModal, this.id).subscribe({
          next: (data: any) => {
            setTimeout(() => {
              this.messageService.add({ severity: 'success', summary: 'Actualizar Departamento', detail: 'Completado', life: 3000 });
              for (let i = 0; i < this.departamentos.length; i++) {
                if (this.departamentos[i].id === this.departamentoModal.id) {
                  this.departamentos[i] = this.departamentoModal;
                  this.visible = false;
                }
              }
            }, 1000);
           // window.location.reload();
          },
          error: (err) => {
            this.messageService.add({ severity: 'error', summary: 'Actualizar Departamento', detail: 'Error al actualizar el departamento, inténtelo de nuevo', life: 3000 });
          }
        });
      }
    }
  }

  eliminar(confirm: boolean) {
    if (confirm) {
      this.servicioDepartamento.deleteDepartamento(this.id).subscribe({
        next: (data: any) => {
          setTimeout(() => {
            this.messageService.add({ severity: 'success', summary: 'Eliminar Departamento', detail: 'Completado', life: 3000 });
            for (let i = 0; i < this.departamentos.length; i++) {
              if (this.departamentos[i].id === this.departamentoModal.id) {
                this.departamentos.splice(i, 1);
                this.visible = false;
              }
            }
            window.location.reload();
          }, 1000);
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: 'Eliminar Departamento', detail: 'Error al eliminar el departamento, inténtelo de nuevo', life: 3000 });
        }
      });
    }
  }
}