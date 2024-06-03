import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmComponent } from '../confirm/confirm.component';
import { DocumentoProgramaticoService } from '../../services/documentoProgramatico.service';
import { DocumentoProgramatico } from '../../interface/documentoProgramatico';

@Component({
  selector: 'app-editar-documento',
  standalone: true,
  imports: [
    FormsModule,
    ToastModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    ConfirmComponent,
  ],
  templateUrl: './editar-documento.component.html',
  styleUrls: ['./editar-documento.component.css'],
  providers: [DialogService, MessageService, DocumentoProgramaticoService]
})
export class EditarDocumentoComponent {
  constructor(
    private servicioDocumento: DocumentoProgramaticoService,
    private messageService: MessageService,
  ) {}

  @Input() 
  documentos: any 
  @Input() tipo=0
  @Input()
  id!: number;
  @Input() visible: boolean = false
  @Output() cerrarModal = new EventEmitter<void>();
  documento!: DocumentoProgramatico;

  validacionNombre = ''
  validacionLink = ''
  validacionTipo = ''
  validacionActivo = ''

  documentoModal: DocumentoProgramatico = {
    id: 0,
    nombre: '',
    link: '',
    tipo: '',
    activo: false
  }

  validarCampos(): Boolean {
    let validacion = true

    if (this.documentoModal.nombre) {
      if ((this.documentoModal.nombre).length < 3) {
        this.validacionNombre = 'ng-invalid ng-dirty'
        validacion = false
        this.messageService.add({ severity: 'warn', summary: 'Crear Documento', detail: 'El nombre debe de contener al menos 3 caracteres', life: 3000 })
      } else {
        this.validacionNombre = ''
      }
    } else {
      this.validacionNombre = 'ng-invalid ng-dirty'
      this.messageService.add({ severity: 'warn', summary: 'Crear Documento', detail: 'El nombre del documento es obligatorio', life: 3000 });
      validacion = false
    }

    if (this.documentoModal.link) {
      if ((this.documentoModal.link).length < 10) {
        this.validacionLink = 'ng-invalid ng-dirty'
        validacion = false
        this.messageService.add({ severity: 'warn', summary: 'Crear Documento', detail: 'El link debe de contener al menos 10 caracteres', life: 3000 })
      } else {
        this.validacionLink = ''
      }
    } else {
      this.validacionLink = 'ng-invalid ng-dirty'
      validacion = false
      this.messageService.add({ severity: 'warn', summary: 'Crear Documento', detail: 'El link del documento es obligatorio', life: 3000 })
    }

    if (this.documentoModal.tipo) {
      this.validacionTipo = ''
    } else {
      this.validacionTipo = 'ng-invalid ng-dirty'
      validacion = false
      this.messageService.add({ severity: 'warn', summary: 'Crear Documento', detail: 'El tipo del documento es obligatorio', life: 3000 })
    }

    return validacion
  }

  cerrar(): void {
    this.cerrarModal.emit();
  }

  showDialog() {
    this.servicioDocumento.getDocumentoPorId(this.id!).subscribe({
      next: (doc: DocumentoProgramatico) => {
        this.documento = doc
        this.visible = true;
        this.documentoModal = { ...doc }
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo cargar el documento', life: 3000 });
      }
    })
  }

  async guardar(confirm: Boolean) {
    if (confirm) {
      if (this.validarCampos()) {
        this.servicioDocumento.updateDocumento(this.documentoModal, this.id).subscribe({
          next: (data: any) => {
            setTimeout(() => {
              this.messageService.add({ severity: 'success', summary: 'Actualizar documento', detail: 'Completada', life: 3000 })
              for (let i = 0; i < this.documentos.length; i++) {
                if (this.documentos[i].id == this.documentoModal.id) {
                  this.documentos[i] = this.documento
                  this.visible = false
                }
              }
              window.location.reload()
            }, 1000)
          },
          error: (err) => {
            this.messageService.add({ severity: 'error', summary: 'Actualizar documento', detail: 'Error al actualizar el documento, inténtelo de nuevo', life: 3000 });
          }
        })
      }
    }
  }

  async eliminar(confirm: Boolean) {
    if (confirm) {
      this.servicioDocumento.deleteDocumento(this.id).subscribe({
        next: (data: any) => {
          setTimeout(() => {
            this.messageService.add({ severity: 'success', summary: 'Eliminar documento', detail: 'Completada', life: 3000 })
            for (let i = 0; i < this.documentos.length; i++) {
              if (this.documentos[i].id == this.documentoModal.id) {
                this.documentos[i] = this.documento
                this.visible = false
              }
            }
            window.location.reload()
          }, 1000)
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: 'Eliminar documento', detail: 'Error al eliminar el documento, inténtelo de nuevo', life: 3000 });
        }
      })
    }
  }
}