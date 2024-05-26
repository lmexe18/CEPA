const noticiaFactory = async (ctos) => {
    let factory = []

    for (let i = 1; i <= ctos; i++) {

        let noticia =
        {
            titulo: "Noticia "+i,
            noticia: "Texto de la noticia "+i,
            enlace: 'https://github.com/lmexe18/CEPA',
            foto: 'CEPA.jpg',
            visibilidad: true,
            idTipoNoticia: i,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        factory.push(noticia)

    }
    return Promise.all(factory);
}

module.exports = {
    noticiaFactory
}