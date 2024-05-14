const tipoNoticiaFactory = async (ctos = 4) => {
    let factory = [];
    for (let i = 1; i <= ctos; i++) {
        let tipoNoticia = {
            nombre: `Tipo de Noticia ${i}`,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        factory.push(tipoNoticia);
    }
    return Promise.all(factory);
};

module.exports = {
    tipoNoticiaFactory
};
