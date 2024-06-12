import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Departamento } from '../../interface/departamento';
import { DepartamentoService } from '../../services/departamento.service';

@Component({
  selector: 'app-departamentos',
  standalone: true,
  imports: [CardModule],
  providers:[
    DepartamentoService
  ],
  templateUrl: './departamentos.component.html',
  styleUrl: './departamentos.component.css'
})
export class DepartamentosComponent {
  departamentos:Array<Departamento> = []
  constructor(
    private departamentoService: DepartamentoService
    ) { }

  ngOnInit() {
    this.departamentoService.getDepartamentos().subscribe({
      next: (data) => {
        if (data) {
          this.departamentos = data
        }
      },
      error: (error) => {
      }
    });
  }
}
