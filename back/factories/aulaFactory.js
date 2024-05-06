const aulaFactory = async (ctos=4) => {
    let factory = []
    for (let i=0 ; i<ctos ; i++){
        let aula = {
            nombre:'Aula '+i,
            idTipo: i,
            activo: Math.random() < 0.5 ? true : false,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        factory.push(aula)
    }
    return Promise.all(factory)
}

module.exports = {
    aulaFactory
}