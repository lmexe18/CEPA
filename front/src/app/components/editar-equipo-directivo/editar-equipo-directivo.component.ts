import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmComponent } from '../confirm/confirm.component';
import { EquipoDirectivoService } from '../../services/equipoDirectivo.service';
import { EquipoDirectivo } from '../../interface/equipoDirectivo';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-editar-equipo-directivo',
  standalone: true,
  imports: [
    FormsModule,
    ToastModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    ConfirmComponent,
  ],
  templateUrl: './editar-equipo-directivo.component.html',
  styleUrls: ['./editar-equipo-directivo.component.css'],
  providers: [DialogService, MessageService, EquipoDirectivoService, provideNativeDateAdapter()]
})
export class EditarEquipoDirectivoComponent {
  constructor(
    private equiposService: EquipoDirectivoService,
    private messageService: MessageService,
  ) {}

  @Input() equipos?: any 
  @Input() tipo = 0;
  @Input()
  id!: number;
  @Input() visible: boolean = false;
  @Output() cerrarModal = new EventEmitter<void>();
  equipo!: EquipoDirectivo;

  validacionNombre = '';
  validacionPuesto = '';
  validacionEmail=''

  equipoModal: EquipoDirectivo = {
    id: 0,
    nombre: '',
    puesto: '',
    email: ''
  };

  validarCampos(): Boolean {
    let validacion = true;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (this.equipoModal.nombre) {
      if ((this.equipoModal.nombre).length < 3) {
        this.validacionNombre = 'ng-invalid ng-dirty';
        validacion = false;
        this.messageService.add({ severity: 'warn', summary: 'Editar Equipo Directivo', detail: 'El nombre debe de contener al menos 3 caracteres', life: 3000 });
      } else {
        this.validacionNombre = '';
      }
    } else {
      this.validacionNombre = 'ng-invalid ng-dirty';
      this.messageService.add({ severity: 'warn', summary: 'Editar Equipo Directivo', detail: 'El nombre del miembro es obligatorio', life: 3000 });
      validacion = false;
    }

    if (this.equipoModal.puesto) {
      if ((this.equipoModal.puesto).length < 3) {
        this.validacionPuesto = 'ng-invalid ng-dirty';
        validacion = false;
        this.messageService.add({ severity: 'warn', summary: 'Editar Equipo Directivo', detail: 'El puesto debe de contener al menos 3 caracteres', life: 3000 });
      } else {
        this.validacionPuesto = '';
      }
    } else {
      this.validacionPuesto = 'ng-invalid ng-dirty';
      this.messageService.add({ severity: 'warn', summary: 'Editar Equipo Directivo', detail: 'El puesto del miembro es obligatorio', life: 3000 });
      validacion = false;
    }

    if (this.equipoModal.email){
      let result = emailRegex.test(this.equipoModal.email)
      if(result == false){
        this.validacionEmail = 'ng-invalid ng-dirty';
        validacion = false
        this.messageService.add({severity: 'warn', summary: 'Editar Equipo Directivo', detail: 'El email debe de tener un formato correcto', life:3000})
      } else {
        this.validacionEmail = ''
      }
    }
    
    return validacion;
  }

  cerrar(): void {
    this.cerrarModal.emit();
  }

  showDialog() {
    this.equiposService.getEquipoDirectivoPorId(this.id!).subscribe({
      next: (eq: EquipoDirectivo) => {
        this.equipo = eq;
        this.visible = true;
        this.equipoModal.nombre = eq.nombre;
        this.equipoModal.puesto = eq.puesto;
        this.equipoModal.email = eq.email;
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo cargar el equipo directivo', life: 3000 });
      }
    });
  }

  async guardar(confirm: Boolean) {
    if (confirm) {
      if (this.validarCampos()) {
        this.equiposService.updateEquipoDirectivo(this.equipoModal, this.id).subscribe({
          next: (data: any) => {
            setTimeout(() => {
              this.messageService.add({ severity: 'success', summary: 'Actualizar equipo directivo', detail: 'Completada', life: 3000 });
              for (let i = 0; i < this.equipos.length; i++) {
                if (this.equipos[i].id == this.equipoModal.id) {
                  this.equipos[i] = this.equipo;
                  this.visible = false;
                }
              }
              window.location.reload();
            }, 1000);
          },
          error: (err) => {
            this.messageService.add({ severity: 'error', summary: 'Actualizar equipo directivo', detail: 'Error al actualizar el equipo directivo, inténtelo de nuevo', life: 3000 });
          }
        });
      }
    }
  }

  async eliminar(confirm: Boolean) {
    if (confirm) {
      this.equiposService.deleteEquipoDirectivo(this.id).subscribe({
        next: (data: any) => {
          setTimeout(() => {
            this.messageService.add({ severity: 'success', summary: 'Eliminar equipo directivo', detail: 'Completada', life: 3000 });
            for (let i = 0; i < this.equipos.length; i++) {
              if (this.equipos[i].id == this.equipoModal.id) {
                this.equipos[i] = this.equipo;
                this.visible = false;
              }
            }
            window.location.reload();
          }, 1000);
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: 'Eliminar equipo directivo', detail: 'Error al eliminar el equipo directivo, inténtelo de nuevo', life: 3000 });
        }
      });
    }
  }
}
