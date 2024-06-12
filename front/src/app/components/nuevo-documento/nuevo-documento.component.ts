import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ConfirmComponent } from '../confirm/confirm.component';
import { Router } from '@angular/router';
import { DocumentoProgramaticoService } from '../../services/documentoProgramatico.service';
import { DocumentoProgramatico } from '../../interface/documentoProgramatico';

@Component({
  selector: 'app-nuevo-documento',
  standalone: true,
  imports: [
    FormsModule,
    ToastModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    ConfirmComponent
  ],
  templateUrl: './nuevo-documento.component.html',
  styleUrls: ['./nuevo-documento.component.css'],
  providers: [
    DialogService,
    MessageService,
    DocumentoProgramaticoService
  ]
})
export class NuevoDocumentoComponent {
  constructor(
    public messageService: MessageService,
    private servicioDocumento: DocumentoProgramaticoService,
    private router: Router
  ) {}

  @Input() visible: boolean = false;
  @Output() cerrarModal = new EventEmitter<void>();
  validacionNombre = '';
  validacionLink = '';
  validacionTipo = '';
  validacionActivo = '';

  nuevoDocumento: DocumentoProgramatico = {
    id: 0,
    nombre: '',
    link: '',
    tipo: '',
    activo: false
  }

  showDialog() {
    this.visible = true;
  }

  cerrar(): void {
    this.cerrarModal.emit();
  }

  validarCampos(): boolean {
    let validacion = true;

    if (this.nuevoDocumento.nombre) {
      if ((this.nuevoDocumento.nombre).length < 3) {
        this.validacionNombre = 'ng-invalid ng-dirty';
        validacion = false;
        this.messageService.add({ severity: 'warn', summary: 'Crear Documento', detail: 'El nombre debe de contener al menos 3 caracteres', life: 3000 });
      } else {
        this.validacionNombre = '';
      }
    } else {
      this.validacionNombre = 'ng-invalid ng-dirty';
      this.messageService.add({ severity: 'warn', summary: 'Crear Documento', detail: 'El nombre del documento es obligatorio', life: 3000 });
      validacion = false;
    }

    if (this.nuevoDocumento.link) {
      if (!this.nuevoDocumento.link.startsWith('http')) {
        this.validacionLink = 'ng-invalid ng-dirty';
        validacion = false;
        this.messageService.add({ severity: 'warn', summary: 'Crear Documento', detail: 'El link debe ser válido', life: 3000 });
      } else {
        this.validacionLink = '';
      }
    } else {
      this.validacionLink = 'ng-invalid ng-dirty';
      this.messageService.add({ severity: 'warn', summary: 'Crear Documento', detail: 'El link del documento es obligatorio', life: 3000 });
      validacion = false;
    }

    if (this.nuevoDocumento.tipo) {
      if ((this.nuevoDocumento.tipo).length < 3) {
        this.validacionTipo = 'ng-invalid ng-dirty';
        validacion = false;
        this.messageService.add({ severity: 'warn', summary: 'Crear Documento', detail: 'El tipo debe de contener al menos 3 caracteres', life: 3000 });
      } else {
        this.validacionTipo = '';
      }
    } else {
      this.validacionTipo = 'ng-invalid ng-dirty';
      this.messageService.add({ severity: 'warn', summary: 'Crear Documento', detail: 'El tipo del documento es obligatorio', life: 3000 });
      validacion = false;
    }

    return validacion;
  }

  crear(confirm: boolean) {
    if (confirm) {
      if (this.validarCampos()) {
        this.messageService.add({ severity: 'info', summary: 'Crear documento', detail: 'En curso', life: 3000 });
        this.servicioDocumento.insertDocumento(this.nuevoDocumento).subscribe({
          next: (data: any) => {
            setTimeout(() => {
              this.messageService.add({ severity: 'success', summary: 'Crear documento', detail: 'Completado', life: 3000 });
              this.nuevoDocumento.id = data.id;
              this.nuevoDocumento.nombre = '';
              this.nuevoDocumento.link = '';
              this.nuevoDocumento.tipo = '';
              this.nuevoDocumento.activo = false;
              this.cerrar();
            });
            this.router.navigate(['/documentos-programaticos']);
          },
          error: (error) => {
            this.messageService.add({ severity: 'error', summary: 'Crear documento', detail: 'Algo ha ido mal al crear el documento, inténtelo de nuevo', life: 3000 });
          }
        });
      }
    }
  }
}