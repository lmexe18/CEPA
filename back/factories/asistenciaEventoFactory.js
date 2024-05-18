const asistenciaEventoFactory = async (ctos=4) => {
    let factory = []
    for (let i=1 ; i<ctos ; i++){
        let asistencia = {
            idEvento: i,
            idUsuario: i,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        factory.push(asistencia)
    }
    return Promise.all(factory)
}

module.exports = {
    asistenciaEventoFactory
}