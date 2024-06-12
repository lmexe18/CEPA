import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CursoService } from '../../services/curso.service';
import { Curso } from '../../interface/curso';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
    selector: 'app-editar-curso',
    templateUrl: './editar-curso.component.html',
    styleUrls: ['./editar-curso.component.css'],
    providers: [
      MessageService, 
      CursoService
    ],
    standalone:true,
    imports:[
      FormsModule,
      ToastModule,
      DialogModule,
      ButtonModule,
      InputTextModule,
      ConfirmComponent
    ]
})
export class EditarCursoComponent {
    constructor(
        private cursoService: CursoService,
        private messageService: MessageService,
    ) {}

    @Input() cursos?: any;
    @Input() tipo = 0;
    @Input() id!: number;
    @Input() visible: boolean = false;
    @Output() cerrarModal = new EventEmitter<void>();
    curso!: Curso;

    validacionNumeroCurso = '';
    validacionHorario = '';
    validacionFechaInicio = '';
    validacionFechaFin = '';
    validacionIdTipoCurso = '';
    validacionIdTutor = '';

    cursoModal: Curso = {
        id: 0,
        numeroCurso: 0,
        horario: '',
        fechaInicio: '',
        fechaFin: '',
        idTipoCurso: 0,
        idTutor: 0,
        activo: false,
    };

    validarCampos(): boolean {
        let validacion = true;
        let fechaRegex = /^\d{2}\/\d{2}\/\d{4}$/

        if (!this.cursoModal.numeroCurso || this.cursoModal.numeroCurso <= 0) {
            this.validacionNumeroCurso = 'ng-invalid ng-dirty';
            validacion = false;
            this.messageService.add({ severity: 'warn', summary: 'Editar Curso', detail: 'El número de curso es obligatorio y debe ser mayor que cero', life: 3000 });
        } else {
            this.validacionNumeroCurso = '';
        }

        if (!this.cursoModal.horario){
          this.validacionHorario = 'ng-invalid ng-dirty'
          validacion = false
          this.messageService.add({severity: 'warn',summary:'Editar Curso', detail:'El horario debe de ser incluido mediante un link a drive', life:3000})
        }
        if (!this.cursoModal.fechaInicio){
          this.validacionFechaInicio = 'ng-invalid ng-dirty'
          validacion = false
          this.messageService.add({severity: 'warn', summary:'Editar Curso', detail:'La fecha de inicio es obligatoria', life: 3000})
        } 
        let fechaInicio = fechaRegex.test(this.cursoModal.fechaInicio)
        if (fechaInicio == false){
          this.validacionFechaInicio = 'ng-invalid ng-dirty'
          validacion = false
          this.messageService.add({severity: 'warn', summary:'Editar Curso', detail:'La fecha debe de seguir el formato DD/MM/YYYY', })
        }

        if(!this.cursoModal.fechaFin){
          this.validacionFechaFin = 'ng-invalid ng-dirty'
          validacion = false
          this.messageService.add({severity:'warn', summary:'Editar Curso', detail:'La fecha de fin es obligatoria', life:3000})
        }

        let fechaFin = fechaRegex.test(this.cursoModal.fechaFin)
        if(fechaFin==false){
          this.validacionFechaFin = 'ng-invalid ng-dirty'
          validacion = false
          this.messageService.add({severity:'warn', summary:'Editar Curso', detail:'La fecha de fin debe de seguir el formato DD/MM/YYYY'})
        }

        if(!this.cursoModal.idTutor || this.cursoModal.idTutor<=0){
          this.validacionIdTutor='ng-invalid ng-dirty'
          validacion = false
          this.messageService.add({severity: 'warn', summary:'Editar Curso', detail: 'El tutor es obligatorio', life:3000})
        }
        
        if(!this.cursoModal.idTipoCurso || this.cursoModal.idTipoCurso <=0){
          this.validacionIdTipoCurso = 'ng-invalid ng-dirty'
          validacion = false
          this.messageService.add({severity:'warn', summary:'Editar Curso', detail:'El tipo de curso es obligatorio'})
        }
        
        return validacion;
    }

    cerrar(): void {
        this.cerrarModal.emit();
    }

    showDialog() {
        this.cursoService.getCursoPorId(this.id).subscribe({
            next: (curso: Curso) => {
                this.curso = curso;
                this.visible = true;
                this.cursoModal.numeroCurso = curso.numeroCurso;
                this.cursoModal.horario = curso.horario;
                this.cursoModal.fechaInicio = curso.fechaInicio;
                this.cursoModal.fechaFin = curso.fechaFin;
                this.cursoModal.idTipoCurso = curso.idTipoCurso;
                this.cursoModal.idTutor = curso.idTutor;
                this.cursoModal.activo = curso.activo;
            },
            error: (err) => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo cargar el curso', life: 3000 });
            }
        });
    }

    async guardar(confirm: boolean) {
        if (confirm) {
            if (this.validarCampos()) {
                this.cursoService.updateCurso(this.cursoModal, this.id).subscribe({
                    next: (data: any) => {
                        setTimeout(() => {
                            this.messageService.add({ severity: 'success', summary: 'Actualizar Curso', detail: 'Los cambios se han guardado correctamente', life: 3000 });
                            for (let i = 0; i < this.cursos.length; i++) {
                                if (this.cursos[i].id == this.cursoModal.id) {
                                    this.cursos[i] = this.curso;
                                    this.visible = false;
                                }
                            }
                            window.location.reload();
                        }, 1000);
                    },
                    error: (err) => {
                        this.messageService.add({ severity: 'error', summary: 'Actualizar Curso', detail: 'Error al actualizar el curso, inténtelo de nuevo', life: 3000 });
                    }
                });
            }
        }
    }

    async eliminar(confirm: boolean) {
        if (confirm) {
            this.cursoService.deleteCurso(this.id).subscribe({
                next: (data: any) => {
                    setTimeout(() => {
                        this.messageService.add({ severity: 'success', summary: 'Eliminar Curso', detail: 'El curso ha sido eliminado correctamente', life: 3000 });
                        for (let i = 0; i < this.cursos.length; i++) {
                            if (this.cursos[i].id == this.cursoModal.id) {
                                this.cursos[i] = this.curso;
                                this.visible = false;
                            }
                        }
                        window.location.reload();
                    }, 1000);
                },
                error: (err) => {
                    this.messageService.add({ severity: 'error', summary: 'Eliminar Curso', detail: 'Error al eliminar el curso, inténtelo de nuevo', life: 3000 });
                }
            });
        }
    }
}