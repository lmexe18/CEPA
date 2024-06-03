import { Component, Input, OnInit } from '@angular/core';
import { TemarioService } from '../../services/temario.service';
import { Temario } from '../../interface/temario';
import { TableModule } from 'primeng/table';
import { ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmComponent } from '../confirm/confirm.component';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-admin-temario',
  standalone:true,
  templateUrl: './admin-temario.component.html',
  styleUrls: ['./admin-temario.component.css'],
  imports:[
    TableModule,
    ButtonModule,
    InputTextModule,
    ConfirmComponent,
    DialogModule,
    ToastModule
  ],
  providers:[
    TemarioService,
    MessageService
  ]
})
export class AdminTemarioComponent implements OnInit {
  
  asignaturaId: number = 0
  temarios: Temario[] = [];

  constructor(
    private temarioService: TemarioService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.asignaturaId= +idParam
      this.temarioService.getTemarioDeAsignatura(this.asignaturaId).subscribe({
        next: (temarios: Temario[]) => {
          this.temarios = temarios;
        },
        error: (error) => {
          console.error('Error al cargar los temarios:', error);
        }
      });
    }
  }
}