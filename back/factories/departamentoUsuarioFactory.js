const departamentoUsuarioFactory = async (ctos=2) => {
    let factory = []
    for (let i=1 ; i<=ctos ; i++){
        var idUsuario = i+2
        let departamentoUsuario = {
            idUsuario : idUsuario,
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