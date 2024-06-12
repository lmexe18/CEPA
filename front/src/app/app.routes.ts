import { Routes } from '@angular/router';
import { AdminCategoriasComponent } from './components/admin-categorias/admin-categorias.component';
import { AdminEventosComponent } from './components/admin-eventos/admin-eventos.component';
import { NoticiasCategoriaComponent } from './components/noticias-categoria/noticias-categoria.component';
import { AdminNoticiaComponent } from './components/admin-noticia/admin-noticia.component';
import { EditContentNoticiaComponent } from './components/edit-content-noticia/edit-content-noticia.component';
import { accesoGuard } from './guards/acceso.guard';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { ListaAulasComponent } from './components/lista-aulas/lista-aulas.component';
import { ListaFranjasComponent } from './components/lista-franjas/lista-franjas.component';
import { ListaHorariosAulaComponent } from './components/lista-horarios-aula/lista-horarios-aula.component';
import { AdminAsistenciasComponent } from './components/admin-asistencias/admin-asistencias.component';
import { ListaReservasComponent } from './components/lista-reservas/lista-reservas.component';
import { ReservarAulaComponent } from './components/reservar-aula/reservar-aula.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { TusEventosComponent } from './components/tus-eventos/tus-eventos.component';
import { AdminGaleriaComponent } from './components/admin-galeria/galeria.component';
import { NoticiaComponent } from './components/noticia/noticia.component';
import { VistaEventosComponent } from './components/vista-eventos/vista-eventos.component';
import { AdminCursosComponent } from './components/admin-cursos/admin-cursos.component';
import { AdminDepartamentosComponent } from './components/admin-departamentos/admin-departamentos.component';
import { AdminTipoCursosComponent } from './components/admin-tipo-cursos/admin-tipo-cursos.component';
import { AdminContactosComponent } from './components/admin-contactos/admin-contactos.component';
import { AdminDocumentosProgComponent } from './components/admin-documentos-prog/admin-documentos-prog.component';
import { AdminAsignaturasComponent } from './components/admin-asignaturas/admin-asignaturas.component';
import { AdminTemarioComponent } from './components/admin-temario/admin-temario.component';
import { AdminEquipoDirectivoComponent } from './components/admin-equipo-directivo/admin-equipo-directivo.component';
import { EquipoDirectivoComponent } from './components/equipo-directivo/equipo-directivo.component';
import { ProgramacionGeneralAulasComponent } from './components/programacion-general-aulas/programacion-general-aulas.component';
import { PlanDigitalizacionComponent } from './components/plan-digitalizacion/plan-digitalizacion.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { EnsenanzasBasicasComponent } from './components/ensenanzas-basicas/ensenanzas-basicas.component';
import { SecundariaPresencialComponent } from './components/secundaria-presencial/secundaria-presencial.component';
import { SecundariaDistanciaComponent } from './components/secundaria-distancia/secundaria-distancia.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { MedioFpComponent } from './components/medio-fp/medio-fp.component';
import { ErasmusComponent } from './components/erasmus/erasmus.component';
import { PlanGarantiaJuvenilComponent } from './components/plan-garantia-juvenil/plan-garantia-juvenil.component';
import { PruebasCursosPreparatoriosComponent } from './components/pruebas-cursos-preparatorios/pruebas-cursos-preparatorios.component';
import { AulaMentorComponent } from './components/aula-mentor/aula-mentor.component';
import { AmigosCepaComponent } from './components/amigos-cepa/amigos-cepa.component';
import { ElCentroComponent } from './components/el-centro/el-centro.component';
import { DocumentoProgramaticoService } from './services/documentoProgramatico.service';
import { DocumentosProgramaticosComponent } from './components/documentos-programaticos/documentos-programaticos.component';
import { EnsenanzasComponent } from './components/ensenanzas/ensenanzas.component';
import { SecundariaComponent } from './components/secundaria/secundaria.component';


export const routes: Routes = [
{path: '', component:HomeComponent },
{path: 'administrador', pathMatch: 'full', redirectTo: '/users'},
{path:'admin',component: AdminCategoriasComponent ,
 canActivate: [accesoGuard],data: { rol: ['Administrador'] }},
 {path: 'jefedeestudios', pathMatch: 'full', redirectTo: '/aulas'},

{path:'aulas',component:ListaAulasComponent,
 canActivate: [accesoGuard],data: { rol: ['Jefe de estudios'] } },

 {path:'users',component:UsersComponent,
 canActivate: [accesoGuard],data: { rol: ['Administrador'] } },

 {path:'aulas/franjas',component:ListaFranjasComponent,
 canActivate: [accesoGuard],data: { rol: ['Jefe de estudios'] } },

 {path:'aulas/:id/horarios',component:ListaHorariosAulaComponent,
 canActivate: [accesoGuard],data: { rol: ['Jefe de estudios'] } },

 {path:'aulas/reservas',component:ListaReservasComponent,
 canActivate: [accesoGuard],data: { rol: ['Jefe de estudios'] } },

 {path:'aulas/:id/reservas',component:ListaReservasComponent,
 canActivate: [accesoGuard],data: { rol: ['Jefe de estudios'] } },


 {path: 'profesor', pathMatch: 'full', redirectTo: '/reservas'},
 {path:'reservas',component:ListaReservasComponent,
 canActivate: [accesoGuard],data: { rol: ['Profesor'] } },

 {path:'reservas/aulas',component:ListaAulasComponent,
 canActivate: [accesoGuard],data: { rol: ['Profesor'] } },
 
 {path:'reservas/aulas/:id/horarios',component:ReservarAulaComponent,
 canActivate: [accesoGuard],data: { rol: ['Profesor'] } },

{path:'noticias',component: NoticiasCategoriaComponent},

{path:'noticia/:noticia',component: NoticiaComponent},

{path:'noticia/contenido/:id',component: EditContentNoticiaComponent,
canActivate: [accesoGuard],data: { rol: ['Administrador'] }},

{path:'admin/noticias',component: AdminNoticiaComponent,
canActivate: [accesoGuard],data: { rol: ['Administrador'] }},

/*{path:'admin/categorias',component:AdminCategoriasComponent,
 canActivate: [accesoGuard],data: { rol: ['Administrador'] }},*/

{path:'admin/eventos', component:AdminEventosComponent,
canActivate:[accesoGuard], data:{rol:['Administrador']}},

{path:'admin/asistencias/:id', component:AdminAsistenciasComponent,
canActivate:[accesoGuard], data:{rol:['Administrador']}},

{path:'eventos/:id', component:EventosComponent},

{path:'eventos/tus-eventos/:id', component:TusEventosComponent},

{path:'admin/galeria/:id', component:AdminGaleriaComponent,
canActivate: [accesoGuard], data:{rol:['Administrador']}},

{path:'eventos', component:VistaEventosComponent},

{path:'admin/contacto',  component: AdminContactosComponent,
canActivate: [accesoGuard], data:{rol:['Administrador']}},

{path: 'admin/documentos-programaticos', component: AdminDocumentosProgComponent,
canActivate: [accesoGuard], data:{rol:['Administrador']}},

{path: 'admin/departamentos', component: AdminDepartamentosComponent,
canActivate: [accesoGuard], data:{rol:['Administrador']}},

{path: 'admin/cursos', component: AdminCursosComponent,
canActivate:[accesoGuard], data:{rol:['Administrador']}},

{path: 'admin/tipo-cursos', component: AdminTipoCursosComponent,
canActivate: [accesoGuard], data:{rol:['Administrador']}},

{path: 'admin/tipo-cursos/asignaturas/:id', component: AdminAsignaturasComponent,
canActivate: [accesoGuard], data:{rol:['Administrador']}},

{path: 'admin/tipo-cursos/asignaturas/temarios/:id', component: AdminTemarioComponent,
canActivate: [accesoGuard], data:{rol:['Admimistrador']}},

{path: 'admin/equipo-directivo', component: AdminEquipoDirectivoComponent,
canActivate: [accesoGuard], data:{rol:['Administrador']}},

{path: 'categoria/8', component:EquipoDirectivoComponent},

{path: 'categoria/15', component:ProgramacionGeneralAulasComponent},

{path: 'categoria/16', component:PlanDigitalizacionComponent},

{path:'categoria/12', component:DepartamentosComponent},

{path: 'categoria/10', component:EnsenanzasBasicasComponent},

{path:'categoria/17', component:SecundariaPresencialComponent},

{path: 'categoria/18', component:SecundariaDistanciaComponent},

{path: 'categoria/13', component:CursosComponent},

{path: 'categoria/14', component:MedioFpComponent},

{path: 'categoria/3', component:ErasmusComponent},

{path:'categoria/4', component:PlanGarantiaJuvenilComponent},

{path: 'categoria/5', component: PruebasCursosPreparatoriosComponent},

{path: 'categoria/6', component: AulaMentorComponent},

{path: 'categoria/7', component:AmigosCepaComponent},

{path:'categoria/1', component:ElCentroComponent},

{path: 'categoria/9', component:DocumentosProgramaticosComponent},

{path:'categoria/2', component:EnsenanzasComponent},

{path:'categoria/11', component:SecundariaComponent},

{path: '**', component: NotFoundComponent},

];
