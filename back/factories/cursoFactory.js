const cursoFactory = async (ctos=4) => {
    let factory = []
    for (let i=0 ; i<ctos ; i++){
        let curso = {
            numeroCurso : i,
            horario: 'Horario '+i,
            fechaInicio: new Date(), 
            fechaFin: new Date(),
            idTipoCurso: i,
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