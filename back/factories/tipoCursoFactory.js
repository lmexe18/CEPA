const tipoCursoFactory = async (ctos = 4) => {
    let factory = [];
    for (let i = 1; i <= ctos; i++) {
        let tipoCurso = {
            nombre: `Tipo de Curso ${i}`,
            activo: Math.random() < 0.5 ? true : false,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        factory.push(tipoCurso);
    }
    return Promise.all(factory);
};

module.exports = {
    tipoCursoFactory
};
