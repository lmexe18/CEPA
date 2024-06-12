const alumnoCursoFactory = async (ctos=4) => {
    let factory = []
    for (let i=0 ; i<ctos ; i++){
        let alumnoCurso = {
            idCurso : i,
            idUsuario: i,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        factory.push(alumnoCurso)
    }
    return Promise.all(factory)
}

module.exports = {
    alumnoCursoFactory
}