import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DocumentoProgramatico } from '../../interface/documentoProgramatico';
import { DocumentoProgramaticoService } from '../../services/documentoProgramatico.service';

@Component({
  selector: 'app-plan-digitalizacion',
  standalone: true,
  imports: [
    CardModule
  ],
  providers:[
    DocumentoProgramaticoService
  ],
  templateUrl: './plan-digitalizacion.component.html',
  styleUrl: './plan-digitalizacion.component.css'
})
export class PlanDigitalizacionComponent implements OnInit {
  programaciones:Array<DocumentoProgramatico> = []
  constructor(
    private documentoService: DocumentoProgramaticoService
    ) { }

  ngOnInit() {
    this.documentoService.getAllDocumentosProgramaticos().subscribe({
      next: (data) => {
        if (data) {
          for (let i=0; i<data.length ; i++){
            let tipo = data[i].tipo.toLowerCase()
            if (tipo.includes('plan digitalizacion') || tipo.includes('plan de digitalizacion') || tipo.includes('plan digitalización') || tipo.includes('plan de digitalización')){
              this.programaciones.push(data[i])
            }
          }
        }
      },
      error: (error) => {
      }
    });
  }
}
