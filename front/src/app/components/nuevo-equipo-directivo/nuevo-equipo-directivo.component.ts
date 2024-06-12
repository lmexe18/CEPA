import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ConfirmComponent } from '../confirm/confirm.component';
import { EquipoDirectivoService } from '../../services/equipoDirectivo.service';
import { EquipoDirectivo } from '../../interface/equipoDirectivo';

@Component({
  selector: 'app-nuevo-equipo-directivo',
  standalone: true,
  imports: [
    FormsModule,
    ToastModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    ConfirmComponent
  ],
  templateUrl: './nuevo-equipo-directivo.component.html',
  styleUrls: ['./nuevo-equipo-directivo.component.css'],
  providers: [MessageService, EquipoDirectivoService]
})
export class NuevoEquipoDirectivoComponent {
  @Input() visible: boolean = false;
  @Output() cerrarModal = new EventEmitter<void>();
  
  validacionNombre = '';
  validacionPuesto = '';
  validacionEmail = '';
  
  nuevoEquipoDirectivo: EquipoDirectivo = {
    id: 0,
    nombre: '',
    puesto: '',
    email: ''
  };

  constructor(
    private messageService: MessageService,
    private equipoDirectivoService: EquipoDirectivoService
  ) {}

  showDialog() {
    this.visible = true;
  }

  cerrar(): void {
    this.cerrarModal.emit();
  }

  validarCampos(): boolean {
    let validacion = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
    if (!this.nuevoEquipoDirectivo.nombre || this.nuevoEquipoDirectivo.nombre.length < 3) {
      this.validacionNombre = 'ng-invalid ng-dirty';
      validacion = false;
      this.messageService.add({ severity: 'warn', summary: 'Crear Equipo Directivo', detail: 'El nombre debe contener al menos 3 caracteres', life: 3000 });
    } else {
      this.validacionNombre = '';
    }

    if (!this.nuevoEquipoDirectivo.puesto || this.nuevoEquipoDirectivo.puesto.length < 3) {
      this.validacionPuesto = 'ng-invalid ng-dirty';
      validacion = false;
      this.messageService.add({ severity: 'warn', summary: 'Crear Equipo Directivo', detail: 'El puesto debe contener al menos 3 caracteres', life: 3000 });
    } else {
      this.validacionPuesto = '';
    }

    if (!this.nuevoEquipoDirectivo.email || !emailRegex.test(this.nuevoEquipoDirectivo.email)) {
      this.validacionEmail = 'ng-invalid ng-dirty';
      validacion = false;
      this.messageService.add({ severity: 'warn', summary: 'Crear Equipo Directivo', detail: 'Debe proporcionar un email válido', life: 3000 });
    } else {
      this.validacionEmail = '';
    }

    return validacion;
  }

  crear(confirm: boolean) {
    if (confirm && this.validarCampos()) {
      this.messageService.add({ severity: 'info', summary: 'Crear Equipo Directivo', detail: 'En curso', life: 3000 });
      this.equipoDirectivoService.insertEquipoDirectivo(this.nuevoEquipoDirectivo).subscribe({
        next: (data: any) => {
          this.messageService.add({ severity: 'success', summary: 'Crear Equipo Directivo', detail: 'Completado', life: 3000 });
          this.nuevoEquipoDirectivo = { id: 0, nombre: '', puesto: '', email: '' };
          this.cerrar();
          window.location.reload();
        },
        error: (error) => {
          this.messageService.add({ severity: 'error', summary: 'Crear Equipo Directivo', detail: 'Algo ha ido mal al crear el equipo directivo, inténtelo de nuevo', life: 3000 });
        }
      });
    }
  }
}