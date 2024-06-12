import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { DialogService } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmComponent } from '../confirm/confirm.component';
import { Subscription, forkJoin } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { RolAsignadoService } from '../../services/rol-asignado.service';
import { RolAsignado } from '../../interface/rolAsignado';
import { InputSwitchModule } from 'primeng/inputswitch';

@Component({
  selector: 'app-modificar-roles',
  standalone: true,
  imports: [
    FormsModule,
    ToastModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    ConfirmComponent,
    InputSwitchModule
  ],
  templateUrl: './modificar-roles.component.html',
  styleUrls: ['./modificar-roles.component.css'],
  providers: [
    DialogService,
    MessageService,
    RolAsignadoService
  ]
})
export class ModificarRolesComponent {

  constructor(
    public messageService: MessageService,
    private servicioRolAsig: RolAsignadoService
  ) { }

  @Input() idUser!: number;
  @Output() cerrarModal = new EventEmitter<void>();

  @Input() visible: boolean = false;
  @Input() tipo = 0;

  @Input() esAdmin: boolean = false;
  @Input() esJefe: boolean = false;
  @Input() esProfe: boolean = false;

  showDialog() {
    this.servicioRolAsig.rolesAsignadosGetIdUsu(this.idUser!).subscribe({
      next: (rolesAsignados: RolAsignado[]) => {
        this.esAdmin = rolesAsignados.some(rol => rol.idRol === 1);
        this.esJefe = rolesAsignados.some(rol => rol.idRol === 2);
        this.esProfe = rolesAsignados.some(rol => rol.idRol === 3);

        this.visible = true;
      },
      error: (e) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al cargar los roles', life: 3000 });
      }
    });
  }

  guardar(b: Boolean) {
    if (b) {
      this.messageService.add({ severity: 'info', summary: 'Modificación de los roles', detail: 'En curso', life: 3000 });

      const observables = [];

      if (this.esAdmin) {
        observables.push(this.servicioRolAsig.rolesAsignadosPost(this.idUser, 1));
      } else {
        observables.push(this.servicioRolAsig.rolesAsignadosDelete(this.idUser, 1));
      }

      if (this.esJefe) {
        observables.push(this.servicioRolAsig.rolesAsignadosPost(this.idUser, 2));
      } else {
        observables.push(this.servicioRolAsig.rolesAsignadosDelete(this.idUser, 2));
      }

      if (this.esProfe) {
        observables.push(this.servicioRolAsig.rolesAsignadosPost(this.idUser, 3));
      } else {
        observables.push(this.servicioRolAsig.rolesAsignadosDelete(this.idUser, 3));
      }

      forkJoin(observables).subscribe({
        next: () => {
          this.messageService.add({ severity: 'success', summary: 'Modificación de los roles', detail: 'Terminada', life: 3000 });
          this.visible = false;
          this.cerrarModal.emit();
        },
        error: (e) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error al modificar los roles', life: 3000 });
        }
      });
    }
  }

  cerrar(): void {
    this.cerrarModal.emit();
  }
}