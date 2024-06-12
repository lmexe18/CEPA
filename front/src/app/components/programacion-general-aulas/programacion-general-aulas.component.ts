import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DocumentoProgramatico } from '../../interface/documentoProgramatico';
import { DocumentoProgramaticoService } from '../../services/documentoProgramatico.service';

@Component({
  selector: 'app-programacion-general-aulas',
  standalone: true,
  imports: [
    CardModule
  ],
  providers:[
    DocumentoProgramaticoService
  ],
  templateUrl: './programacion-general-aulas.component.html',
  styleUrl: './programacion-general-aulas.component.css'
})
export class ProgramacionGeneralAulasComponent implements OnInit {
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
            if (tipo == 'programación general anual' || tipo == 'programacion general anual'){
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
