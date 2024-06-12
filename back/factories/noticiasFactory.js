const noticiasFactory = async (ctos,categorias) => {
    
    let factory = []
    let ejemplo={
        titulo: 'noticia',
        texto:'texto'
    }

    for(let i = 1; i <= categorias; i++) {
        for(let x = 0; x < ctos; x++) {
          
            let noticia = 
            {
                titulo: ejemplo.titulo,
                idCategoria: i,
                enlace: 'https://github.com/lmexe18/CEPA',
                foto: 'aula.jpg',
                publicada:true,
                tipo: 'Erasmus',
                createdAt: new Date(),
                updatedAt: new Date()
            }
     
            factory.push(noticia)
        }   
    }
    return Promise.all(factory);
}

module.exports = {
    noticiasFactory
}
