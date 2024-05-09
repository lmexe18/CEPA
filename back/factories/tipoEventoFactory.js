const tipoEventoFactory = async (ctos=4) => {
    
    let factory = []

    for(let i = 1; i < ctos; i++) {
        let tipo = 
            {
            nombre: "Tipo "+i,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        factory.push(tipo)
    }
    return Promise.all(factory);
}

module.exports = {
    tipoEventoFactory
}