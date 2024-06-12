const departamentoFactory = async (ctos = 4) => {
  let factory = [];
  for (let i = 0; i < ctos; i++) {
    let departamento = {
      nombre: `Departamento ${i}`,
      nombreFoto: `foto${i}.jpg`,
      extensionFoto: 'jpg',
      descripcion: `Descripción del departamento ${i}`,
      idJefeDepartamento: i,
      activo: Math.random() < 0.5 ? true : false,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    factory.push(departamento);
  }
  return Promise.all(factory);
};

module.exports = {
  departamentoFactory
};s