import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { EquipoDirectivoService } from '../../services/equipoDirectivo.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { EquipoDirectivo } from '../../interface/equipoDirectivo';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { finalize } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { NuevoEquipoDirectivoComponent } from '../nuevo-equipo-directivo/nuevo-equipo-directivo.component';
import { EditarEquipoDirectivoComponent } from '../editar-equipo-directivo/editar-equipo-directivo.component';

@Component({
    selector: 'app-equipo-directivo',
    standalone: true,
    templateUrl: './admin-equipo-directivo.component.html',
    styleUrls: ['./admin-equipo-directivo.component.css'],
    imports: [
        ToastModule,
        TableModule,
        ButtonModule,
        RouterLink,
        RouterModule,
        NuevoEquipoDirectivoComponent,
        EditarEquipoDirectivoComponent
    ],
    providers: [
      MessageService,
      EquipoDirectivoService
  ]
})

export class AdminEquipoDirectivoComponent implements OnInit {

  equipoDirectivo: Array<EquipoDirectivo> = [];

  constructor(
    private servicioEquipoDirectivo: EquipoDirectivoService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.servicioEquipoDirectivo.getEquiposDirectivos()
      .subscribe({
        next: (equipoDirectivo: Array<EquipoDirectivo>) => {
          this.equipoDirectivo = equipoDirectivo;
        },
        error: (err) => {
        }
      });
  }
}