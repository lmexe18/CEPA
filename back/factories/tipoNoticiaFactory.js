const tipoNoticiaFactory = async (ctos = 4) => {
    let factory = [];
    for (let i = 1; i <= ctos; i++) {
        let tipoNoticia = {
            nombre: `Tipo de Noticia ${i}`,
            activo: Math.random() < 0.5 ? true : false,
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
