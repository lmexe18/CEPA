import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { ConfirmComponent } from '../confirm/confirm.component';
import { Router } from '@angular/router';
import { DepartamentoService } from '../../services/departamento.service';
import { Departamento } from '../../interface/departamento';

@Component({
  selector: 'app-nuevo-departamento',
  standalone: true,
  imports: [
    FormsModule,
    ToastModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    ConfirmComponent,
  ],
  templateUrl: './nuevo-departamento.component.html',
  styleUrl: './nuevo-departamento.component.css',
  providers: [
    DialogService,
    MessageService,
    DepartamentoService
  ]
})
export class NuevoDepartamentoComponent {
  @Input() visible: boolean = false;
  @Output() cerrarModal = new EventEmitter<void>();

  nuevoDepartamento: Departamento = {
    id: 0,
    nombre: '',
    descripcion: '',
    jefeDepartamento: '',
    foto: '',
    activo: false
  };

  validacionNombre = '';
  validacionDescripcion = '';
  validacionJefe = '';
  formularioFoto: FormData | null = null;
  fotoPreview: string | null = null;

  constructor(
    public messageService: MessageService,
    private servicioDepartamento: DepartamentoService,
    private router: Router
  ) {}

  showDialog() {
    this.visible = true;
  }

  cerrar(): void {
    this.cerrarModal.emit();
  }

  uploadFoto(event: any) {
    const file = event.target.files[0];
    if (file) {
      const permitidas = ['.jpeg', '.jpg', '.png'];
      const fichero = file.name.toLowerCase();
      const extension = fichero.substring(fichero.lastIndexOf('.'));
    
      if (permitidas.includes(extension)) {
        this.formularioFoto = new FormData();
        this.formularioFoto.append('archivo', file);
        this.fotoPreview = URL.createObjectURL(file);
      } else {
        this.messageService.add({ severity: 'warn', summary: 'Subir foto', detail: 'Extensión no válida', life: 3000 });
        this.formularioFoto = null;
      }
    } else {
      this.formularioFoto = null;
    }
  }

  limpiarFoto(archivo: any) {
    archivo.value = null;
    this.formularioFoto = null;
    this.fotoPreview = null;
  }

  validarCampos(): boolean {
    let validacion = true;

    if (this.nuevoDepartamento.nombre) {
      if ((this.nuevoDepartamento.nombre).length < 3) {
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

    if (this.nuevoDepartamento.descripcion) {
      if ((this.nuevoDepartamento.descripcion).length < 15) {
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

    if (this.nuevoDepartamento.jefeDepartamento) {
      if ((this.nuevoDepartamento.jefeDepartamento).length < 3) {
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

  crear(confirm: boolean) {
    if (confirm) {
      if (this.validarCampos()) {
        //if (this.formularioFoto != null) {
         
          //this.servicioDepartamento.uploadFoto(this.formularioFoto).subscribe({
           // next: (data: any) => {
           //   this.nuevoDepartamento.foto = data.url;
            //  this.messageService.add({ severity: 'info', summary: 'Crear Departamento', detail: 'En curso', life: 3000 });
              this.servicioDepartamento.insertDepartamento(this.nuevoDepartamento).subscribe({
                next: (data: any) => {
                  setTimeout(() => {
                    this.messageService.add({ severity: 'success', summary: 'Crear Departamento', detail: 'Completado', life: 3000 });
                    this.nuevoDepartamento = {
                      id: 0,
                      nombre: '',
                      descripcion: '',
                      jefeDepartamento: '',
                      foto: '',
                      activo: false
                    };
                  });
                  window.location.reload();
                },
                error: (error) => {
                  this.messageService.add({ severity: 'error', summary: 'Crear Departamento', detail: 'Algo ha ido mal al crear el departamento, inténtelo de nuevo', life: 3000 });
                }
              });
          /* },
            error: (error) => {
              this.messageService.add({ severity: 'error', summary: 'Crear Departamento', detail: 'Algo ha ido mal al subir la foto, inténtelo de nuevo', life: 3000 });
            }*/
          //});
        //}
      }
    }
  }
}