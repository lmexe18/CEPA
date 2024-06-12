import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { EquipoDirectivo } from '../../interface/equipoDirectivo';
import { EquipoDirectivoService } from '../../services/equipoDirectivo.service';

@Component({
  selector: 'app-equipo-directivo',
  standalone: true,
  imports: [
    CardModule,
  ],
  providers:[
    EquipoDirectivoService
  ],
  templateUrl: './equipo-directivo.component.html',
  styleUrl: './equipo-directivo.component.css'
})
export class EquipoDirectivoComponent {
  equiposDirectivos:Array<EquipoDirectivo> = []
  constructor(
    private equipoDirectivoService: EquipoDirectivoService
    ) { }

  ngOnInit() {
    this.equipoDirectivoService.getEquiposDirectivos().subscribe({
      next: (data) => {
        if (data) {
          this.equiposDirectivos = data;
        }
      },
      error: (error) => {
      }
    });
  }

}
