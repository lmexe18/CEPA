const departamentoUsuarioFactory = async (ctos=4) => {
    let factory = []
    for (let i=2 ; i<ctos ; i++){
        let departamentoUsuario = {
            idUsuario : i,
            idDepartamento : i,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        factory.push(departamentoUsuario)
    }
    return Promise.all(factory)
}

module.exports = {
    departamentoUsuarioFactory
}