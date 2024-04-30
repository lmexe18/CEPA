const cursoFactory = async (ctos=4) => {
    let factory = []
    for (let i=0 ; i<ctos ; i++){
        let curso = {
            numeroCurso : i,
            fechaInicio: new Date(), 
            fechaFinalizacion: new Date(),
            idHorario: i,
            idTipoGrupo: i,
            idTutor: i,
            activo: Math.random() < 0.5 ? true : false,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        factory.push(curso)
    }
    return Promise.all(factory)
}

module.exports = {
    cursoFactory
}