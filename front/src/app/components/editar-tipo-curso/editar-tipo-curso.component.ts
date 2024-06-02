import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmComponent } from '../confirm/confirm.component';
import { TipoCursoService } from '../../services/tipoCurso.service';
import { TipoCurso } from '../../interface/tipoCurso';

@Component({
  selector: 'app-editar-tipo-curso',
  standalone: true,
  imports: [
    FormsModule,
    ToastModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    ConfirmComponent,
  ],
  templateUrl: './editar-tipo-curso.component.html',
  styleUrls: ['./editar-tipo-curso.component.css'],
  providers: [
    DialogService, 
    MessageService, 
    TipoCursoService,
  ]
})

export class EditarTipoCursoComponent{
  
  constructor(
    private tipoCursoService : TipoCursoService,
    private messageService:MessageService,
  ){}

  @Input() tipoCurso?: any 
  @Input() tipo=0
  @Input()
  id!: number;
  @Input() visible: boolean = false
  @Output() cerrarModal = new EventEmitter<void>();

  validacionNombre = ''
  validacionActivo= ''
  
  tipoCursoModal : TipoCurso = {
    id: 0,
    nombre: '',
    activo: false,
  }

  
  validarCampos():Boolean{
    let validacion=true
   
    if (this.tipoCurso.nombre){
      if ((this.tipoCurso.nombre).length<3){
        this.validacionNombre = 'ng-invalid ng-dirty'
        validacion = false
        this.messageService.add({ severity: 'warn', summary: 'Crear Tipo Curso', detail: 'El nombre debe de contener al menos 3 caracteres', life: 3000 })
      } else {
        this.validacionNombre = ''
      }
    } else {
      this.validacionNombre = 'ng-invalid ng-dirty'
      this.messageService.add({ severity: 'warn', summary: 'Crear Tipo Curso', detail: 'El nombre del evento es obligatorio', life: 3000 });
      validacion = false
    }
    
    return validacion
  }
  cerrar(): void {
    this.cerrarModal.emit();
  }

  showDialog() {
    this.tipoCursoService.getTipoCursoPorId(this.id!).subscribe({
      
      next: (tp:TipoCurso) => {
        this.tipoCurso=tp
          this.visible = true;
          this.tipoCurso.nombre = tp.nombre
          this.tipoCurso.activo = tp.activo
      },
      error: (err) => {
     
      }  
    })
  }
  async guardar(confirm: boolean) {
    if (confirm) {
      if (this.validarCampos()) {
        this.tipoCursoService.updateTipoCurso(this.tipoCursoModal).subscribe({
          next: () => {
            this.messageService.add({ severity: 'success', summary: 'Actualizar Tipo Curso', detail: 'Completada', life: 3000 });
            this.cerrar();
          },
          error: (err) => {
            this.messageService.add({ severity: 'error', summary: 'Actualizar Tipo Curso', detail: 'Error al actualizar el tipo de curso, inténtelo de nuevo', life: 3000 });
          }
        });
      }
    }
  }

  async eliminar(confirm: boolean) {
    if (confirm) {
      this.tipoCursoService.deleteTipoCurso(this.id).subscribe({
        next: () => {
          this.messageService.add({ severity: 'success', summary: 'Eliminar Tipo Curso', detail: 'Completada', life: 3000 });
          this.cerrar();
        },
        error: (err) => {
          this.messageService.add({ severity: 'error', summary: 'Eliminar Tipo Curso', detail: 'Error al eliminar el tipo de curso, inténtelo de nuevo', life: 3000 });
        }
      });
    }
  }
}
