const rolUsuarioFactory = async (ctos=4) => {
    
    let factory = []

    for(let i = 1; i < ctos; i++) {
        let users = 
            {
            idUsuario:i,
            idRol:i,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        factory.push(users)
    }
    return Promise.all(factory);
}

module.exports = {
    rolUsuarioFactory
}