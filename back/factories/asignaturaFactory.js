const asignaturaFactory = async (ctos=4) => {
    let factory = []
    for (let i=0 ; i<ctos ; i++){
        let asignatura = {
            nombre : i,
            idDepartamento: i,
            idTipoCurso: i,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        factory.push(asignatura)
    }
    return Promise.all(factory)
}

module.exports = {
    asignaturaFactory
}