const documentoProgramaticoFactory = async (ctos=4) => {
    let factory = []
    for (let i=2 ; i<ctos ; i++){
        let documento = {
            nombre: "Documento "+i,
            link: "https://sites.google.com/view/antoniogalacepa/inicio",
            tipo: "web",
            activo: false,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        factory.push(documento)
    }
    return Promise.all(factory)
}

module.exports = {
    departamentoUsuarioFactory
}