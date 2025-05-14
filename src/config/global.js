export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Secuencias didácticas y materiales didácticos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Relación entre secuencias didácticas y materiales didácticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Estructura de una secuencia didáctica',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Qué son las competencias',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Características y funciones del material didáctico',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Relación',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Orden y jerarquía',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto de orden y jerarquía en el aprendizaje',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos de organizadores previos: mapa conceptual',
            hash: 't_2_2',
          },
        ],
      },

      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ministerio de Educación Nacional. (2020). Desarrollo infantil y competencias en la primera infancia. ',
      link:
        ' https://www.mineducacion.gov.co/1759/articles-339975_recurso_11.pdf',
    },
    {
      referencia:
        'Díaz-Barriga, Á. (2013). Guía para la elaboración de una secuencia didáctica. UNAM, México, consultada el, 10(04), 1-15.',
      link:
        ' http://envia3.xoc.uam.mx/envia-2-7/beta/uploads/recursos/xYYzPtXmGJ7hZ9Ze_Guia_secuencias_didacticas_Angel_Diaz.pdf',
    },
    {
      referencia:
        'Ferreiro, E. (2001). Los niños piensan sobre la escritura. México: Siglo XXI Editores.  ',
      link:
        'https://catedraemiliaferreiro.unr.edu.ar/los-ninos-piensan-sobre-la-escritura/',
    },
    {
      referencia:
        'Lifeder. (20 de diciembre, 2019). Material didáctico: características, funciones, tipos, importancia.',
      link: ' https://www.lifeder.com/material-didactico/',
    },
    {
      referencia:
        'López, L. G. (15 de marzo, 2023). Qué son las secuencias didácticas y cómo utilizarlas en el aula. EDUCACION 3.0. ',
      link:
        'https://www.educaciontrespuntocero.com/noticias/secuencias-didacticas/',
    },
    {
      referencia:
        'Luisa, M. (10 de diciembre, 2019). Qué es una secuencia didáctica. Materiales Educativos. ',
      link:
        'https://materialeseducativos.net/recursos/que-es-una-secuencia-didactica/',
    },
    {
      referencia:
        'Moreno Lucas, F. M., (2015). Función pedagógica de los recursos materiales en educación infantil. Vivat Academia, (133), 12-25. ',
      link: 'https://www.redalyc.org/pdf/5257/525752885002.pdf ',
    },
    {
      referencia:
        'Tobón, S. (2010). Diseño de Secuencias Didácticas. Instituto Tecnológico de Monterrey, ',
      link:
        'https://hacedr.wordpress.com/wp-content/uploads/2015/01/libro-tobon-secuencias-didc3a1cticas-aprendizaje-y-evaluacic3b3n-de-competencias.pdf',
    },
    {
      referencia:
        'Camargo Uribe, á., & hederich martínez, c. (2010). Jerome Bruner: dos teorías cognitivas, dos formas de significar, dos enfoques para la enseñanza de la ciencia. Psicogente, 13(24), 329-346. ',
      link: 'https://www.redalyc.org/pdf/4975/497552357008.pdf',
    },
    {
      referencia:
        'Coutinho, E. (2014). Mapas conceptuales: modelos de evaluación para educadores. Revista de Ciencias Empresariales y de la Administración, 2(5), 111-117. ',
      link: 'https://pubs.sciepub.com/jbms/2/5/4/index.html#',
    },
    {
      referencia:
        'Molina, X. (1 de abril 2018). Los 18 filósofos griegos más importantes y famosos. pymOrganization.',
      link: ' https://psicologiaymente.com/cultura/filosofos-griegos',
    },
    {
      referencia:
        'Moreira, M. A. (2012). Aprendizaje Significativo, O. P. Ufrgs.br.',
      link: ' http://moreira.if.ufrgs.br/ORGANIZADORESesp.pdf',
    },
    {
      referencia:
        'Orellana Valdés, R. (2009). Mapas conceptuales y aprendizaje significativo: (ed.). El Cid Editor | apuntes. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/31272?page=9',
    },
    {
      referencia:
        'Pérez, M. (10 de julio 2014). Orden. Concepto de - Definición de. ',
      link: 'https://conceptodefinicion.de/orden/',
    },
    {
      referencia:
        'Raffino, Equipo editorial, Etecé (10 de enero de 2024). Jerarquía. Enciclopedia. ',
      link: 'https://concepto.de/jerarquia/',
    },
    {
      referencia:
        'Regader, B. (1 de junio, 2015). La Teoría del Aprendizaje de Jean Piaget. pymOrganization. ',
      link:
        'https://psicologiaymente.com/desarrollo/teoria-del-aprendizaje-piaget',
    },
    {
      referencia:
        'Wood, D. J., Bruner, J. S., & Ross, G. (1976). The role of tutoring in problem solving. Journal of Child Psychology and Psychiatry, 17(2), 89-100. ',
      link: 'https://www.teachthought.com/learning/jerome-bruner/',
    },
  ],
  glosario: [
    {
      termino: 'Competencia',
      significado:
        'Capacidad y disposición para actuar de manera eficaz en contextos educativos y profesionales, combinando conocimientos, habilidades y actitudes.',
    },
    {
      termino: 'Currículo',
      significado:
        'Conjunto de objetivos, contenidos, métodos pedagógicos y criterios de evaluación que guían la enseñanza y el aprendizaje en una institución educativa.',
    },
    {
      termino: 'Didáctica',
      significado:
        'Disciplina que estudia y propone técnicas y métodos para facilitar la enseñanza y el aprendizaje de manera eficaz.  ',
    },
    {
      termino: 'Evaluación',
      significado:
        'Proceso de recopilación y análisis de datos para medir el progreso y el desempeño de los estudiantes en relación con los objetivos educativos establecidos.',
    },
    {
      termino: 'Jerarquía',
      significado:
        'Organización estructurada de conceptos o elementos en niveles de importancia o prioridad, facilitando la comprensión y el aprendizaje progresivo.',
    },
    {
      termino: 'Materiales',
      significado:
        'Recursos y herramientas utilizados para apoyar el proceso de enseñanza y aprendizaje, como libros, audiovisuales, y recursos digitales.',
    },
    {
      termino: 'Organizadores previos',
      significado:
        'Estrategias utilizadas para presentar información nueva de manera que se conecte con los conocimientos previos del estudiante, facilitando la integración y comprensión.',
    },
    {
      termino: 'Secuencia didáctica',
      significado:
        'Planificación de actividades y contenidos de enseñanza en un orden lógico y progresivo, considerando el desarrollo y las necesidades de los estudiantes.',
    },
    {
      termino: 'Significativo',
      significado:
        'Tipo de aprendizaje que se caracteriza por la conexión de nueva información con conocimientos previos, permitiendo una comprensión profunda y duradera.',
    },
    {
      termino: 'Proceso de enseñanza-aprendizaje',
      significado:
        'Secuencia de actividades planificadas y ejecutadas para facilitar la adquisición de conocimientos, habilidades y actitudes por parte de los estudiantes.',
    },
  ],
}
