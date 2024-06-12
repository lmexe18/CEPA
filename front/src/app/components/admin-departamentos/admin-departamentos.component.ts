import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DepartamentoService } from '../../services/departamento.service';
import { Departamento } from '../../interface/departamento';
import { finalize } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { NuevoDepartamentoComponent } from '../nuevo-departamento/nuevo-departamento.component';
import { EditarDepartamentoComponent } from '../editar-departamento/editar-departamento.component';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
    selector: 'app-admin-departamentos',
    templateUrl: './admin-departamentos.component.html',
    styleUrls: ['./admin-departamentos.component.css'],
    providers: [MessageService, DepartamentoService],
    standalone:true,
    imports:[
      ToastModule,
      TableModule,
      ButtonModule,
      NuevoDepartamentoComponent,
      EditarDepartamentoComponent,
      RouterLink,
      RouterModule
    ]
})
export class AdminDepartamentosComponent implements OnInit {

  departamentos: Array<Departamento> = []

  constructor(
    private servicioDepartamentos: DepartamentoService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.servicioDepartamentos.getDepartamentos()
      .subscribe({
        next: (departamentos: Array<Departamento>) => {
          this.departamentos = departamentos;
        },
        error: (err) => {
          this.messageService.add({severity:'error', summary:'Error', detail:'No se pudieron cargar los departamentos'});
        }
      });
  }

  /*formatearSrc() {
    for (let i = 0; i < this.departamentos.length; i++) {
      if (!this.departamentos[i].foto.includes('http')) {
        this.departamentos[i].foto = environment.baseUrl + environment.urlFotosDepartamentos + '/' + this.departamentos[i].foto;
      }
    }
  }*/
}