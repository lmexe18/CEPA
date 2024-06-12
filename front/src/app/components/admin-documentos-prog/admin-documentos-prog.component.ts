import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { DocumentoProgramaticoService } from '../../services/documentoProgramatico.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DocumentoProgramatico } from '../../interface/documentoProgramatico';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { finalize } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { NuevoDocumentoComponent } from '../nuevo-documento/nuevo-documento.component';
import { EditarDocumentoComponent } from '../editar-documento/editar-documento.component';

@Component({
    selector: 'app-admin-documentos-prog',
    standalone: true,
    templateUrl: './admin-documentos-prog.component.html',
    styleUrls: ['./admin-documentos-prog.component.css'],
    imports: [
        ToastModule,
        TableModule,
        ButtonModule,
        NuevoDocumentoComponent,
        EditarDocumentoComponent,
        RouterLink,
        RouterModule
    ],
    providers: [
        MessageService,
        DocumentoProgramaticoService
    ]
})

export class AdminDocumentosProgComponent implements OnInit {

    documentos: Array<DocumentoProgramatico> = [];

    constructor(
        private documentoServicio: DocumentoProgramaticoService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.cargarDocumentos();
    }

    cargarDocumentos() {
        this.documentoServicio.getAllDocumentosProgramaticos().subscribe({
            next: (documentos: Array<DocumentoProgramatico>) => {
                this.documentos = documentos;
            },
            error: (err) => {
            }
        });
    }
}