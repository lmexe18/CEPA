const {Aula} =require('../models/aula')
const aulaFactory = async (ctos=2) => {
    let factory = []
    for (let i=1 ; i<=ctos ; i++){
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