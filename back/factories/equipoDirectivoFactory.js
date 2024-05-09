const {fakerES} = require('@faker-js/faker');

const equipoDirectivoFactory = async (ctos=4) => {
    let factory = []
    for (let i=2 ; i<ctos ; i++){
        let equipoDirectivo = {
            puesto: "Puesto "+i,
            nombre: 'Usuario '+i,
            email: fakerES.internet.email(),
            createdAt: new Date(),
            updatedAt: new Date()
        }
        factory.push(equipoDirectivo)
    }
    return Promise.all(factory)
}

module.exports = {
    equipoDirectivoFactory
}