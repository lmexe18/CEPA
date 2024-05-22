const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
// const { noticiasSocketController } = require('../controllers/noticiasSocketController');
// const { eventosSocketController } = require('../controllers/eventoSocketController')

class Server {
    constructor() {
        this.app = express();
        this.serverExpress = require('http').createServer(this.app);
        this.serverWebSocket = require('http').createServer(this.app);
        this.io = require('socket.io')(this.serverWebSocket, {
            cors: {
                origin:'*',
                methods: ["*"],
                allowedHeaders: [""],
                credentials: true
            }
        });
        this.alumnoCursoPath = '/api/alumnoCurso'
        this.asignaturaPath = '/api/asignatura'
        this.asignaturaProfeCursoPath = '/api/asignaturaProfeCurso'
        this.asistenciaEventoPath = '/api/asistenciaEvento'
        this.aulaPath = '/api/aula'
        this.rolUsuarioPath = '/api/rolUsuario'
        this.contactoPath = '/api/contacto'
        this.cursoPath = '/api/curso'
        this.departamentoPath = '/api/departamento'
        this.departamentoUsuarioPath = '/api/departamentoUsuario'
        this.documentoProgramaticoPath = '/api/documentoProgramatico'
        this.equipoDirectivoPath = 'api/equipoDirectivo'
        /*this.apiUsuarios = '/api/usuario';
        this.apiRoles = '/api/roles'
        
        this.categoriasPath = '/api/categorias';
        this.enlacesPath = '/api/enlaces'
        this.noticiasPath = '/api/noticias'
        this.seccionesPath = '/api/secciones'
        this.horariosPath = '/api/horarios'
        this.franjasPath = '/api/franjas'
        this.reservasPath = '/api/reservas'
        this.asistenciaPath = '/api/asistencia';
        this.galeriaPath = '/api/galeria';
    //    this.uploadsNoticiasPath = '/api/uploads/noticias';
    //    this.uploadsSeccionesPath = '/api/uploads/secciones';
        this.authPath = '/api/auth';
    //    this.uploadsFotoEventosPath = '/api/uploads/eventos';
    //    this.uploadsGaleriasPath = '/api/uploads/galerias'
        this.middlewares();
        this.routes();
        // this.sockets();*/
    }
    middlewares() {
        this.app.use(cors({origin:'*'}));
        this.app.use(express.json());
        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: '/tmp/',
            createParentPath: true
        }));
    }
    routes() {
        this.app.use(this.alumnoCursoPath, require('../routes/alumnoCursoRoutes'))
        this.app.use(this.asignaturaPath, require('../routes/asignaturaRoutes'))
        this.app.use(this.asignaturaProfeCurssPath, require('../routes/asignaturaProfeCursoRoutes'))
        this.app.use(this.asistenciaEventoPath, require('../routes/asistenciaEventoRoutes'));
        this.app.use(this.aulaPath, require('../routes/aulaRoutes'))
        this.app.use(this.rolUsuarioPath, require('../routes/rolUsuarioRoutes'))
        this.app.use(this.contactoPath, require('../routes/contactoRoutes'))
        this.app.use(this.cursoPath, require('../routes/cursoRoutes'))
        this.app.use(this.departamentoPath, require('../routes/departamentoRoutes'))
        this.app.use(this.departamentoUsuarioPath, require('../routes/departamentoUsuarioRoutes'))
        this.app.use(this.documentoProgramaticoPath, require('../routes/documentoProgramaticoRoutes'))
        this.app.use(this.equipoDirectivoPath, require('../routes/equipoDirectivoRoutes'))
        /*this.app.use(this.eventoPath, require('../routes/eventoRoutes'));
        this.app.use(this.apiUsuarios, require('../routes/usuarioRutas'))
        this.app.use(this.apiRoles, require('../routes/rolesRutas'))
        this.app.use(this.categoriasPath, require('../routes/categoriasRoutes'))
        this.app.use(this.enlacesPath, require('../routes/enlacesRoutes'))
        this.app.use(this.noticiasPath, require('../routes/noticiasRoutes'))
        this.app.use(this.seccionesPath, require('../routes/seccionesRoutes'))
        this.app.use(this.horariosPath, require('../routes/aulaHorarioRoutes'))
        this.app.use(this.franjasPath, require('../routes/aulaFranjaRoutes'))
        this.app.use(this.reservasPath, require('../routes/aulaReservaRoutes'))
        this.app.use(this.galeriaEventoPath, require('../routes/galeriaEventoRoutes'))*/
      //  this.app.use(this.uploadsNoticiasPath, require('../routes/uploadsNoticiasRoutes'));
       // this.app.use(this.uploadsSeccionesPath, require('../routes/updloadsSeccionesRoutes'));
        this.app.use(this.authPath, require('../routes/authRoutes'));
       // this.app.use(this.uploadsFotoEventosPath, require('../routes/uploadsFotoEventos'))
      //  this.app.use(this.uploadsGaleriasPath, require('../routes/uploadsGaleriaRoutes'))
    }
    /*
    sockets() {
         this.io.on('connection', noticiasSocketController);
         this.io.on('connection', eventosSocketController)
    }
    */


    listen() {
        this.serverExpress.listen(process.env.PORT, () => {
        });

        this.serverWebSocket.listen(process.env.WEBSOCKETPORT, () => {
        });
    }
}

module.exports = Server;