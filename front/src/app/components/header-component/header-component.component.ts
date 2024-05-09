import { Component, OnInit } from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import { MatMenu, MatMenuItem, MatMenuTrigger } from "@angular/material/menu";
import { UsuarioSessionStorage } from "../../../interfaces/usuario/interfaz-usuario";
import { Departamento, Departamentos } from "../../../interfaces/departamento/interfaz-departamento";
import { DepartamentoServiceService } from "../../../services/departamentos/departamento-service.service";
import { HttpResponse } from "@angular/common/http";
import { GruposServiceService } from "../../../services/grupos/grupos-service.service";
import { Grupo, TiposGrupos } from "../../../interfaces/grupo/interfaz-grupo";
import { RouterLink } from "@angular/router";
import { env } from "../../../../environments/environment.development";
import { MatIcon } from "@angular/material/icon";
import { UtilesService } from "../../../services/utiles/utiles.service";
import { Router } from "@angular/router";
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [
    MatButton,
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatIcon,
    RouterLink,
    MatSidenavModule,
    MatIconButton
  ],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css'
})
export class HeaderComponentComponent implements OnInit {

  usuario?: UsuarioSessionStorage | null
  rol: string[] = []
  departamentos?: Departamento[] = []
  tiposGruposBasica?: Grupo[] = []
  tiposGruposGrado?: Grupo[] = []
  tiposGruposNoFormal?: Grupo[] = []
  tiposGruposSecundaria?: Grupo[] = []
  baseURL = ''
  estaLoegado?: boolean
  ngOnInit(): void {
    const token = sessionStorage.getItem('token');
    if (token) {
      this.usuario = this.utils.getUsuarioSession(token) as UsuarioSessionStorage
      this.baseURL = env.URL + 'usuario/imagen/' + this.usuario?.roles[0].id
      this.estaLoegado = true
    } else {
      this.estaLoegado = false
    }

    this.controlRoles()
    this.obtenerDepts()
    this.obtenerTiposGrupos()
  }

  controlRoles() {
    if (this.usuario?.roles[0].roles.some(rol => rol.nombre === 'usuario')) {
      this.rol.push('usuario')
    }
    if (this.usuario?.roles[0].roles.some(rol => rol.nombre === 'jefeDepartamento')) {
      this.rol.push('jefeDepartamento')
    }
    if (this.usuario?.roles[0].roles.some(rol => rol.nombre === 'admin')) {
      this.rol.push('admin')
    }
    if (this.usuario?.roles[0].roles.some(rol => rol.nombre === 'profesor')) {
      this.rol.push('profesor')
    }
  }

  obtenerDepts() {
    this.deptsService.peticionGetDepts().subscribe({
      next: (respuestaServidor: HttpResponse<Departamentos>) => {
        this.departamentos = respuestaServidor.body?.departamentos
      },
      error: (err) => {
      }
    })
  }

  obtenerTiposGrupos() {
    this.gruposService.peticionGetTipoGrupos().subscribe({
      next: (respuestaServidor: HttpResponse<TiposGrupos>) => {
        respuestaServidor.body?.grupos.forEach((grupo: Grupo) => {
          const primeraPalabra = grupo.nombre.split(' ')[0];
          switch (primeraPalabra) {
            case 'Básica':
              this.tiposGruposBasica?.push(grupo);
              break;
            case 'Grado':
              this.tiposGruposGrado?.push(grupo);
              break;
            case 'Secundaria':
              this.tiposGruposSecundaria?.push(grupo);
              break;
            default:
              this.tiposGruposNoFormal?.push(grupo);
          }
        })
      },
      error: (err) => {
      }
    })
  }

  tieneRolAdmin(): boolean | undefined {
    let retornar = this.rol.includes('admin');
    return retornar
  }

  puedeReservarAulas(): boolean {
    return this.rol.some(rol => ['profesor', 'jefeDepartamento', 'admin'].includes(rol));
  }

  navegarGrupos(id: number) {
    if (id == 0) {
    } else {
      this.router.navigate(['/inicio/grupo/' + id],{skipLocationChange:true})
    }
  }

  botonCerrarSesion() {
    sessionStorage.removeItem('token');
    this.estaLoegado = false;
    this.router.navigate(['/inicio'])
  }

  constructor(private deptsService: DepartamentoServiceService, private gruposService: GruposServiceService, private utils: UtilesService, private router: Router) {
  }

}
