const asignaturaFactory = async (ctos=4) => {
    let factory = []
    for (let i=0 ; i<ctos ; i++){
        let asignatura = {
            nombre : i,
            departamentoId: i,
            activo: Math.random() < 0.5 ? true : false,
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