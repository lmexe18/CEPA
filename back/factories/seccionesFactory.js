const seccionesFactory = async (ctos,noticias) => {
  
    let factory = []
    let ejemplo={
        titulo: 'Seccion',
        texto:'texto'
    }

    for(let i = 1; i <= noticias; i++) {
        for(let x = 0; x < ctos; x++) {
         
            let seccion = 
            {
                titulo: ejemplo.titulo,
                texto: ejemplo.texto,
                idNoticia: i,
                foto: 'aula.jpg',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        
            factory.push(seccion)
        }   
    }
    return Promise.all(factory);
}

module.exports = {
    seccionesFactory
}
