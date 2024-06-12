const bcrypt = require('bcrypt');
const usuarioFactory = async (ctos=4) => {
    
    let factory = []
    let lista=[
        {nombre:'Primer Usuario', email: 'example@example.com'},
        {nombre:'Segundo Usuario', email: 'example1@example.com'},
        {nombre:'Tercer Usuario', email: 'example2@example.com'},
        {nombre:'Cuarto Usuario', email: 'example3@example.com'}
    ]
    const password = await bcrypt.hash('1234', 10);
    for(let i = 0; i < ctos; i++) {
        let users = 
            {
            nombre: lista[i].nombre,
            email: lista[i].email,
            password: password,
            activo: true,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        factory.push(users)
    }
    return Promise.all(factory);
}

module.exports = {
    usuarioFactory
}