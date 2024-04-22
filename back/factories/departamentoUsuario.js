const departamentoUsuarioFactory = async (ctos=4) => {
    let factory = []
    for (let i=2 ; i<ctos ; i++){
        let departamentoUsuario = {
            usuarioId : i,
            departamentoId : i
        }
        factory.push(departamentoUsuario)
    }
    return Promise.all(factory)
}

module.exports = {
    departamentoUsuarioFactory
}