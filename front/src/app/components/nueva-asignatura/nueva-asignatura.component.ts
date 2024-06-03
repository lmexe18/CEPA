import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DropdownModule } from 'primeng/dropdown';
import { ActivatedRoute, Router } from '@angular/router';
import { AsignaturaService } from '../../services/asignatura.service';
import { Asignatura } from '../../interface/asignatura';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { ConfirmComponent } from "../confirm/confirm.component";

@Component({
    selector: 'app-nueva-asignatura',
    standalone: true,
    templateUrl: './nueva-asignatura.component.html',
    styleUrls: ['./nueva-asignatura.component.css'],
    providers: [
        DialogService,
        MessageService,
        AsignaturaService,
        provideNativeDateAdapter()
    ],
    imports: [
        FormsModule,
        ToastModule,
        DialogModule,
        ButtonModule,
        InputTextModule,
        InputSwitchModule,
        DropdownModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        ConfirmComponent
    ]
})
export class NuevaAsignaturaComponent {
  constructor(
    public messageService: MessageService,
    private asignaturaService: AsignaturaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam){
      this.cursoId = +idParam;
    }
  }

  cursoId = 0

  @Input() visible: boolean = false;
  @Output() cerrarModal = new EventEmitter<void>();
  validacionNombre = '';
  validacionIdCurso = '';
  nuevoAsignatura: Asignatura = {
    id: 0,
    nombre: '',
    idCurso: this.cursoId,
    activo: false
  };

  showDialog() {
    this.visible = true;
  }

  cerrar(): void {
    this.cerrarModal.emit();
  }

  validarCampos(): boolean {
    let validacion = true;

    if (!this.nuevoAsignatura.nombre || this.nuevoAsignatura.nombre.length < 3) {
      this.validacionNombre = 'ng-invalid ng-dirty';
      validacion = false;
      this.messageService.add({ severity: 'warn', summary: 'Crear Asignatura', detail: 'El nombre debe de contener al menos 3 caracteres', life: 3000 });
    } else {
      this.validacionNombre = '';
    }

    return validacion;
  }

  crear(confirm: boolean) {
    if (confirm) {
      if (this.validarCampos()) {
        this.nuevoAsignatura.idCurso = this.cursoId;  
        this.messageService.add({ severity: 'info', summary: 'Crear Asignatura', detail: 'En curso', life: 3000 });
        this.asignaturaService.insertAsignatura(this.nuevoAsignatura).subscribe({
          next: (data: any) => {
            this.messageService.add({ severity: 'success', summary: 'Crear Asignatura', detail: 'Completado', life: 3000 });
            this.nuevoAsignatura.id = data.id;
            this.nuevoAsignatura.nombre = '';
            this.nuevoAsignatura.idCurso = this.cursoId;
            this.nuevoAsignatura.activo = false;
            this.cerrar();
            window.location.reload();
          },
          error: (error) => {
            this.messageService.add({ severity: 'error', summary: 'Crear Asignatura', detail: 'Algo ha ido mal al crear la asignatura, inténtelo de nuevo', life: 3000 });
          }
        });
      }
    }
  }
}
