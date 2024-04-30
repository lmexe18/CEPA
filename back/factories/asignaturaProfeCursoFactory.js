const asignaturaProfeCursoFactory = async (ctos=4) => {
    let factory = []
    for (let i=0 ; i<ctos ; i++){
        let curso = {
            idAsignatura: i,
            idUsuario: i,
            idCurso: i,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        factory.push(curso)
    }
    return Promise.all(factory)
}

module.exports = {
    asignaturaProfeCursoFactory
}