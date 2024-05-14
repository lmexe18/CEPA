const rolUsuarioFactory = async (ctos = 4) => {
    let factory = [];

    for (let i = 0; i <= ctos; i++) {
        let usuario = {
            idUsuario: i+1,
            idRol: i+1,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        factory.push(usuario);
    }
    return Promise.all(factory)
};

module.exports = {
    rolUsuarioFactory
};
