'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(process.env.TABLA_DEPARTAMENTOS, [{
      nombre: 'Ámbito Científico-Tecnológico',
      descripcion: 'Incluye los aspectos básicos del currículo de la Educación Secundaria Obligatoria (ESO) de las materias de Biología y Geología, Física y Química, Matemáticas, Matemáticas orientadas a las enseñanzas académicas y Matemáticas orientadas a las enseñanzas aplicadas, Tecnología, Ciencias Aplicadas a la Actividad Profesional y aquellos relacionados con la salud y el medio natural recogidos de la materia de Educación Física.',
      nombreFoto: "tecnologico",
      extensionFoto:".webp",
      createdAt: new Date(),
      updatedAt: new Date()
  }, {
      nombre: 'Ámbito Comunicación',
      descripcion: 'Incluye los aspectos básicos del currículo de la Educación Secundaria Obligatoria (ESO) correspondientes a las materias de Lengua castellana y literatura y primera Lengua extranjera.',
      nombreFoto: "comunicacion",
      extensionFoto:".webp",
      createdAt: new Date(),
      updatedAt: new Date()
  }, {
      nombre: 'Ámbito Social',
      descripcion: 'Incluye los aspectos básicos del currículo de la Educación Secundaria Obligatoria (ESO) de las materias de Geografía e Historia, Iniciación a la Actividad Emprendedora y Empresarial, Economía, Cultura Clásica y los aspectos de percepción recogidos en el currículo de Educación Plástica, Visual y Audiovisual y Música.',
      nombreFoto: "social",
      extensionFoto:".webp",
      createdAt: new Date(),
      updatedAt: new Date()
  }, {
      nombre: 'Orientación Educativa',
      descripcion: 'La orientación educativa y profesional forma parte de la función docente e integra todas las acciones realizadas desde la tutoría y el asesoramiento especializado. Se prestará una atención especial a la orientación educativa y laboral con el fin de facilitar a las personas adultas que las cursen, además de su desarrollo integral y equilibrado como ciudadanos y ciudadanas de pleno derecho, la continuación de sus estudios y su inserción y promoción profesional. La orientación educativa que se desarrollará a lo largo de toda la etapa de Educación Secundaria para personas adultas, adquirirá especial importancia al comienzo de las enseñanzas, con el proceso de Valoración Inicial del Alumnado y al término de estas enseñanzas, el profesorado responsable de la tutoría, con el asesoramiento del Departamento de Orientación, emitirá un consejo orientador a fin de informar al alumnado sobre las opciones y posibilidades existentes para su futuro académico y profesional. Este informe tendrá carácter confidencial.',
      nombreFoto: "educativa",
      extensionFoto:".webp",
      createdAt: new Date(),
      updatedAt: new Date()
  }, {
      nombre: 'Coordinación Enseñanzas Básicas',
      descripcion: 'Uno de los principios en los que se inspira el sistema educativo español es la concepción de la educación como un aprendizaje permanente que se desarrolla a lo largo de la vida. Para ello, se establecen como principios básicos para la educación de personas adultas los siguientes:\n' +
          '\n' +
          '1. Su incorporación a las distintas enseñanzas, favoreciendo la conciliación del aprendizaje con otras responsabilidades y actividades.\n' +
          '\n' +
          '2. La flexibilidad de la oferta que permita adquirir las competencias básicas y, en su caso, las correspondientes titulaciones a aquellas personas que abandonaron el sistema educativo sin ninguna titulación.\n' +
          '\n' +
          '3. La posibilidad de realizar actividades educativas en el ámbito de la educación formal y no formal y la adopción de medidas para el reconocimiento de esos aprendizajes.\n' +
          '\n' +
          '4. El acceso a la información y a la orientación sobre todas las posibilidades de educación y formación para la mejora de la inserción social y laboral.\n' +
          '\n' +
          'La enseñanza básica para personas adultas tendrá que facilitar que:\n' +
          '\n' +
          'a) adquieran una formación básica, amplíen y renueven sus conocimientos, habilidades y destrezas de modo permanente posibilitando el acceso a las distintas enseñanzas del sistema educativo;\n' +
          '\n' +
          'b) mejoren su cualificación profesional o adquieran la preparación necesaria para el ejercicio de otras profesiones;\n' +
          '\n' +
          'c) desarrollen sus capacidades personales de expresión, comunicación, relación interpersonal y de construcción del conocimiento;\n' +
          '\n' +
          'd) desarrollen su capacidad de participación en la vida social, cultural, política y económica para hacer efectivo su derecho a la ciudadanía democrática;\n' +
          '\n' +
          'e) adquieran las competencias y los conocimientos correspondientes a la educación básica y obtengan el título de Graduado en Educación Secundaria Obligatoria.',
      nombreFoto: "basica",
      extensionFoto:".webp",
      createdAt: new Date(),
      updatedAt: new Date()
  }, {
      nombre: 'Coordinación Cursos',
      descripcion: 'Entre los objetivos de los programas no formales se pueden destacar:\n' +
          '\n' +
          'La compensación educativa, la igualdad de oportunidades y la no discriminación.\n' +
          '\n' +
          'El enriquecimiento personal mediante el tratamiento de la información y la competencia digital. \n' +
          '\n' +
          'La introducción al conocimiento de la lengua y la cultura de otros países, la participación social y el ejercicio de la ciudadanía responsable y democrática.\n' +
          '\n' +
          'Para la consecución de los objetivos, los centros y aulas de Educación de Personas Adultas podrán impartir, entre otros, los siguientes programas no formales:\n' +
          '\n' +
          'Programas dirigidos específicamente a colectivos desfavorecidos para compensar las carencias básicas de formación, incluyendo la enseñanza del español a las personas extranjeras, como medio de participación, expresión y actuación en el medio social.\n' +
          '\n' +
          'Programas para la iniciación en el tratamiento de la información y la competencia digital. Estos programas suponen un medio para facilitar el acceso a la sociedad de la información y la comunicación, la eliminación o disminución de la brecha digital, así como el fomento de la motivación para seguir aprendiendo. \n' +
          '\n' +
          'Programas destinados a la iniciación en el aprendizaje de los idiomas.',
      nombreFoto: "cursos",
      extensionFoto:".webp",
      createdAt: new Date(),
      updatedAt: new Date()
  },
      {
          nombre: 'Coordinación Formación',
          descripcion: 'El centro de adultos Antonio Gala ha participado con regularidad en las actividades programadas por el Centro Regional de Formación del Profesorado (CRFP) desde su constitución. \n' +
              '\n' +
              'La participación se ha realizado tanto de forma individual y como centro. En el primero de los casos, los profesores dependiendo su especialidad y según las materias que han impartido han participado en cursos programados. Concretamente, en los inicio de curso y, debido a los cambios que todos los años se producen en la plantilla, se ha venido realizando el Curso de Iniciación al trabajo en un Centro de Adultos que organizamos en el propio centro, así como el que convoca la Consejería de forma centralizada a través de CRFP.\n' +
              '\n' +
              'En cuanto a la formación como Centro, y teniendo como objetivo la repercusión de la misma en las aulas, todos los cursos escolares de forma colectiva el centro ha participado en las convocatorias de Grupos de Trabajo o Seminarios que el CRFP ha convocado.\n' +
              '\n' +
              'Teniendo en cuenta las líneas prioritarias definidas en el Plan Regional de Formación Permanente del Profesorado y por el Centro Regional de Formación y después de realizar una detección de necesidades a través de los cuestionarios y de la autoevaluación,  hemos obtenido las siguientes conclusiones:\n' +
              '\n' +
              '-\tPrimero, que cuando hablamos de un Centro de Educación de Personas Adultas, contamos con gran diversidad en el alumnado y en el profesorado. \n' +
              '\n' +
              '-\tSegundo, que esta diversidad debemos tenerla en cuenta a la hora de plantear la participación en diferentes actividades formativas. \n' +
              '\n' +
              '-\tTercero, que la realidad de la pandemia del Covid-19 en la que estamos inmersos requiere de una nueva forma de abordar los procesos de enseñanza y aprendizaje, dónde el trabajo on-line, a través de la multitud de plataformas que se ofrecen, nos abre nuevos caminos y nuevos retos.\n' +
              '\n' +
              '-\tCuarto, que la línea temática de nuestras actividades formativas será la utilización adecuada y rentable de las Tecnologías de la Innovación y la Comunicación, en todos sus ámbitos. Nos centraremos este curso en la formación de todo nuestro profesorado en el manejo de las plataformas que la Consejería ha puesto a disposición del profesorado, aprovecharemos la formación que tienen o han recibido determinado compañeros y compañeras del centro, para realizar una formación a través de formadores. Intentaremos encuadrar estas líneas programáticas de formación en la participación en la convocatoria de Grupos de Trabajo y/o Seminarios que cada curso académico realiza la Consejería a través del CRFP.\n' +
              '\n' +
              '-\tY en quinto lugar, y no menos importante, queremos seguir potenciando el Trabajo por Proyectos como modalidad formativa de nuestro alumnado. Para ello, es necesario implicar, en mayor número, al profesorado de nuestro centro, ya que actualmente son seis, de un total de veinticinco profesores y profesoras, los que participan de esta modalidad formativa y de desarrollo del conocimiento.',
          nombreFoto: "formacion",
          extensionFoto:".webp",
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          nombre: 'Riesgos Laborales',
          descripcion: 'La normativa sobre prevención de riesgos laborales está constituida en nuestro país mediante la Ley 31/1995, de 8 de noviembre, de prevención de riesgos laborales, la cual contempla prescripciones relativas a la adopción de medidas preventivas en el ámbito laboral o susceptibles de producirlas en dicho ámbito. Su objetivo es el de promover la seguridad y la salud de los trabajadores mediante la aplicación de medidas y el desarrollo de las actividades necesarias para la prevención de riesgos derivados del trabajo, para cuyo cumplimiento regulará las actuaciones a desarrollar por las Administraciones públicas, así como por los empresarios, los trabajadores y sus respectivas organizaciones representativas. La profesión docente, lejos de lo que pueda considerarse a simple vista, está sometida a continuos riesgos que, si bien no son como aquellos bajo los que se encuentran profesiones de sectores más peligrosos como la agricultura o construcción, no dejan de ser igualmente importantes. A modo de ejemplo, podemos citar como factores de riesgo de la profesión docente:\n' +
              '\n' +
              '-Caídas al mismo nivel.\n' +
              '\n' +
              '-Caídas a distinto nivel.\n' +
              '\n' +
              '-Choques y golpes.\n' +
              '\n' +
              '-Sobreesfuerzos físicos y trastornos músculo-esqueléticos: muchas horas de pie, muchas horas sentado, agacharse demasiadas veces, etc.\n' +
              '\n' +
              '-Problemas vocales: ronquera, afonía, nódulos en las cuerdas vocales, etc.\n' +
              '\n' +
              '-Problemas de visión, derivados de la mala iluminación, el uso de ordenador…\n' +
              '\n' +
              '-Ansiedad y estrés, debido al excesivo número de alumnos por aula, a la mala coordinación entre profesores, por la presión de los familiares, etc. Que se traduce en síndromes tales como el Burn-out.\n' +
              '\n' +
              '-Problemas psicológicos causados por el trato hostil recibido por parte de los alumnos, como el mobbing.\n' +
              '\n' +
              'Por estos y otros muchos factores, destacamos la importancia, y a la vez obligación, de contar en el centro con un Plan de Prevención de Riesgos Laborales, el cual ha de ser integrado en el sistema de gestión del centro educativo.',
          nombreFoto: "riesgos",
          extensionFoto:".webp",
          createdAt: new Date(),
          updatedAt: new Date()
      }, {
          nombre: 'Biblioteca',
          descripcion: 'La biblioteca escolar se entiende como un centro de recursos para la lectura en todas sus facetas, que va más allá de un conjunto de libros, y alrededor del cual se arma y diseña un plan formativo que da sentido a los materiales que lo componen. En este punto es importante insistir en lo imprescindible que resulta que la lectura sea considerada como objetivo clave y compartido por todas las áreas y materias curriculares; solo así la biblioteca escolar podrá desempeñar eficazmente su papel de herramienta y servicio que proporciona a todos los escolares espacios, tiempos y la posibilidad real de múltiples experiencias de lectura.\n' +
              '\n' +
              'Y hablar de lectura es hablar de finalidades e intereses diversos que requieren contar con textos de distinto carácter a los que acudir para obtener respuesta a lo que el lector busca en cada momento con una determinada lectura; textos que a su vez requieren, para su mejor uso y comprensión, el desarrollo de estrategias de búsqueda y lectura diferenciales según el tipo de obra de la que se trate.\n' +
              '\n' +
              'El CEPA Antonio Gala, con la biblioteca como aliada, es la encargada de aportar conocimientos, desarrollar habilidades y cultivar actitudes positivas en los alumnos respecto a la lectura, la escritura y el manejo de la información. Y esta labor cobra especial significado en la sociedad actual, en la que la alfabetización pasa por el desarrollo de las capacidades y competencias básicas de lectura y escritura en el entorno actual y con los recursos hoy disponibles, lo que se conoce como alfabetización informacional. \n' +
              '\n' +
              'La biblioteca escolar, desde la perspectiva apuntada, no puede considerarse como un fin en sí mismo sino como medio y apoyo imprescindible para alumnos y profesores en relación con:\n' +
              '\n' +
              '• Los déficits de lectura y escritura, en un momento de encrucijada, de redefinición y de aumento del grado de importancia de saber leer y escribir.\n' +
              '\n' +
              '• El uso apropiado de la información y su restitución para un proyecto académico o personal.\n' +
              '\n' +
              '• La formación de ciudadanos y el cultivo de los valores democráticos y de respeto que propugna nuestra sociedad y nuestro ordenamiento constitucional.\n' +
              '\n' +
              '• La igualdad de oportunidades y la compensación de las desigualdades de base.',
          nombreFoto: "biblioteca",
          extensionFoto:".webp",
          createdAt: new Date(),
          updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(process.env.TABLA_DEPARTAMENTOS, null, {});
  }
};
