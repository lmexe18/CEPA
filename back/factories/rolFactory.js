const rolFactory = async (ctos=4) => {
    
    let factory = []
    let lista=[
        {nombre:process.env.ROL_ADMIN,},
        {nombre:process.env.ROL_JEFE_ESTUDIOS},
        {nombre:process.env.ROL_PROFESOR},
        {nombre:process.env.ROL_USER}
    ]
    for(let i = 0; i < ctos; i++) {
        let roles = 
            {
            nombre: lista[i].nombre,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        factory.push(roles)
    }
    return Promise.all(factory);
}

module.exports = {
    rolFactory
}