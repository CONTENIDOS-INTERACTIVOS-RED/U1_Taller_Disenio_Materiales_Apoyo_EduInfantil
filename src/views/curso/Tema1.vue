<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Relación entre secuencias didácticas y materiales didácticos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.align-items-start.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/1.png", alt="").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0.order-1
    
        AcordionA(tipo="b")
          .div(titulo="Primero")
            p Laura Frade describe la <b>secuencia didáctica</b> como un conjunto de actividades interrelacionadas que tienen un inicio y un final, y que son fundamentales para desarrollar la competencia del estudiante. Según Frade (2008), citada por la Luisa, M. (2019), en su Sitio web, estas actividades no solo son antecedentes sino también consecuencias dentro del proceso educativo
    
          .div(titulo="Segundo")
            p De manera similar, Sergio Tobón define <b>esta secuencia</b> como un "conjunto articulado de actividades de aprendizaje y evaluación" que, con la mediación del docente, busca alcanzar metas educativas específicas, considerando diversos recursos (Tobón et al., 2010). Citado por Luisa, M. (2019), ambos autores coinciden en la importancia de la articulación y la finalidad de estas actividades en el contexto educativo.
    
          .div(titulo="Tercero")
            p Por otra parte, López (2023), expresa que, la preparación de clases y materiales didácticos, es un proceso que requiere dedicación y tiempo por parte de los docentes. Sin embargo, las <b>secuencias didácticas</b> pueden simplificar esta tarea al ofrecer una serie de actividades relacionadas que abordan un tema o parte de él.
    
          .div(titulo="Cuarto")
            p Según el Centro Nacional de Desarrollo Curricular en Sistemas no Propietarios (CEDEC), <b>estas secuencias</b> permiten trabajar un tema a lo largo del curso, incorporando todos los materiales necesarios para el desarrollo del proyecto educativo correspondiente.
    
    p.mb-4 Además de facilitar el aprendizaje, las secuencias didácticas persiguen una variedad de objetivos, como mejorar la eficacia de la enseñanza y permitir una planificación y evaluación sistemática del aprendizaje. El CEDEC destaca beneficios como una mejor planificación, aumento de la motivación y participación activa del alumnado, desarrollo de habilidades de pensamiento crítico y fomento de la colaboración y el trabajo en equipo (López, 2023).

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Estas secuencias también tienen la capacidad de abordar el mismo tema en diferentes niveles académicos, mediante actividades con variados grados de dificultad. El Instituto Tecnológico de Monterrey, citado por Tobón (2010), señala que, por ejemplo, los temas relacionados con numeración y operaciones matemáticas, pueden ser abordados de manera diferenciada, utilizando materiales adaptados a la edad y el nivel de los estudiantes.
    
        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Es decir, las secuencias didácticas son herramientas valiosas en el ámbito educativo, que no solo estructuran el aprendizaje, sino que también permiten a los docentes optimizar su planificación y evaluación. Al articular actividades con un propósito claro, estas secuencias contribuyen significativamente, al desarrollo de competencias en los estudiantes y facilitan una enseñanza más efectiva y motivadora.
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") En este mismo sentido, Díaz-Barriga (2013), aporta que las secuencias didácticas son fundamentales para organizar las actividades de aprendizaje que se llevarán a cabo con los alumnos, con el objetivo de fomentar un aprendizaje significativo. Es esencial entender que estas secuencias no deben ser vistas como simples formularios para llenar, sino como herramientas que requieren del conocimiento profundo de la materia, la comprensión del programa de estudios y la experiencia pedagógica del docente. Este enfoque permite a los educadores diseñar actividades que realmente favorezcan el aprendizaje de los estudiantes.
    
        .bg-color-3.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Es fundamental que cada docente adapte su planificación a su propia visión y propósitos educativos. Los elementos presentados tienen un carácter indicativo, lo que significa que cada educador debe estructurar su trabajo, de acuerdo con sus objetivos y el contexto de su aula. Así, las secuencias didácticas pueden convertirse en un recurso efectivo para potenciar el aprendizaje y el desarrollo de los estudiantes.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Estructura de una secuencia didáctica
    
    p.mb-4 La secuencia didáctica es una herramienta clave en el proceso de enseñanza-aprendizaje, permitiendo organizar actividades de manera estructurada para facilitar la construcción del conocimiento.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Estructura de una secuencia didáctica 
            p.mb-4(data-aos="fade-right") En el PDF <b>Estructura de una secuencia didáctica</b>, se analiza cómo diseñar secuencias efectivas, integrando estrategias de aprendizaje significativo y evaluación formativa. A través de este estudio, se comprenderá la importancia de alinear las actividades de enseñanza con los objetivos educativos, garantizando una experiencia de aprendizaje coherente y enriquecedora para los estudiantes.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Estructura de una secuencia didáctica .
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/5.png', alt='')
    
    p.mb-4 Ahora bien, antes de desarrollar una secuencia didáctica, es fundamental que los docentes verifiquen que las competencias planteadas, son efectivamente las mismas. Este análisis previo permitirá identificar o adaptar las competencias, de acuerdo con el contexto y sus problemáticas. Una vez que se tienen claras las competencias del módulo o asignatura, se pueden enfrentar dos situaciones en el diseño de la secuencia didáctica:

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Primera situación" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-3.mb-md-0
            h4 Primera situación
            p Es cuando la secuencia didáctica permite el desarrollo de competencias completas en un nivel de dominio específico, lo cual generalmente ocurre en el marco de un curso completo o al abordar un número significativo de sesiones.
    
          .col-md-8.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/6.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Segunda situación" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-3.mb-md-0
            h4 Segunda situación
            p Se refiere a la formación de aspectos parciales de competencias, lo que ocurre cuando la secuencia se centra en una parte específica de la asignatura, requiriendo otras secuencias para completar el proceso de aprendizaje (tobón, 2010).
            p Es importante evitar la tendencia de asignar una competencia para cada secuencia, especialmente si estas son muy breves, dado que esto no permite un desarrollo profundo. 

    
          .col-md-8.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/7.png', alt='')
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/8.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 En la elaboración de una secuencia didáctica, se deben considerar las competencias específicas a abordar, así como las competencias genéricas que se integrarán de manera transversal. Se recomienda que primero se definan las competencias específicas y, posteriormente, se articulen las competencias genéricas que apoyarán el aprendizaje, asegurando así una formación integral y coherente.
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Qué son las competencias
    
    .bg-full-width.bg-color-5
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/9.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") En este punto, se estarán preguntando de cuáles competencias se está hablando; partamos entonces de lo que es una competencia para el Ministerio de Educación Nacional (MEN) y cuáles son. Los lineamientos "Desarrollo infantil y competencias en la primera infancia" del Ministerio de Educación Nacional de Colombia (2020), las competencias se definen como capacidades generales que permiten a los niños y niñas realizar "haceres", "saberes" y "poder hacer" en diversas situaciones cotidianas y estructuradas Estas competencias no se observan directamente, sino a través de los desempeños y actuaciones de los niños en diferentes contextos.
            h5 Para mayor comprensión, teniendo en cuenta estos factores:
        
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/10.svg" alt="" style="width: 90px")
              h5.text-center Saber
              p.mb-0.text-center Son conocimientos teóricos que los niños adquieren. En el contexto de las competencias, esto incluye la comprensión de conceptos y hechos.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/11.svg" alt="" style="width: 90px")
              h5.text-center Saber hacer
              p.mb-0.text-center Se refiere a la capacidad de aplicar los conocimientos adquiridos en situaciones prácticas. Incluye habilidades y destrezas, tanto físicas como mentales.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/12.svg" alt="" style="width: 90px")
              h5.text-center Ser
              p.mb-0.text-center Se fundamenta en las actitudes y valores que los niños desarrollan. Incluye la capacidad de actuar con autonomía, la responsabilidad y la integración de valores éticos y sociales.
     
    p.mb-4 Observemos los siguientes ejemplos: 

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/13.png")
            .col-lg-7
              h5 Competencias cognitivas
              p Se refieren al desarrollo de habilidades relacionadas con el pensamiento, la comprensión, la memoria, la resolución de problemas y la creatividad.
              p <b>Ejemplo.</b> Un niño que participa en actividades de construcción, con bloques, está desarrollando su capacidad de resolver problemas y su pensamiento espacial. Al intentar construir una torre alta sin que se caiga, el niño experimenta con diferentes maneras de apilar los bloques, usando el pensamiento crítico para ajustar su estrategia.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/14.png")
            .col-lg-7
              h5 Competencias sociales y emocionales
              p Involucran la capacidad de reconocer y gestionar emociones propias y ajenas, desarrollar habilidades de interacción social y establecer relaciones positivas.
              p <b>Ejemplo.</b> Durante el juego en grupo, un niño que toma turnos y comparte juguetes, está aprendiendo habilidades de empatía y cooperación. Cuando otro niño se siente triste, el primer niño muestra preocupación y ofrece consuelo, demostrando empatía y habilidades emocionales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/15.png")
            .col-lg-7
              h5 Competencias lingüísticas
              p Se refieren al desarrollo de habilidades comunicativas, tanto verbales como no verbales, que permiten la expresión y comprensión de ideas y emociones.
              p <b>Ejemplo.</b> En una actividad de lectura en voz alta, los niños escuchan y participan haciendo preguntas sobre la historia. Esta interacción ayuda a mejorar su vocabulario, comprensión lectora y habilidades de comunicación.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/16.png")
            .col-lg-7
              h5 Competencias físicas
              p Implican el desarrollo de habilidades motoras gruesas y finas, así como la coordinación y el control del cuerpo.
              p <b>Ejemplo.</b> Un niño que participa en juegos al aire libre, como correr, saltar y trepar, está desarrollando sus habilidades motoras gruesas. Actividades como dibujar y recortar ayudan a mejorar las habilidades motoras finas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/17.png")
            .col-lg-7
              h5 Competencias artísticas
              p Fomentan la creatividad y la expresión, a través de diversas formas de arte como la música, la pintura, el baile y el teatro.
              p <b>Ejemplo.</b> Al participar en una clase de arte, los niños experimentan con diferentes materiales y técnicas para crear sus propias obras. Esta exploración artística permite a los niños expresar sus emociones e ideas de manera creativa.
    
    p.mb-4 Continuando con lo anterior y con mayor claridad de los elementos teóricos de la estructura, veamos un ejemplo del formato estándar de una secuencia didáctica, según Tobón (2010).

    .row.align-items-start.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/18.png", alt="").mb-4.mb-lg-0
      .col-lg-8.mb-3.mb-lg-0.order-1
    
        AcordionA(tipo="b")
          .div(titulo="Datos generales")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-circle
                p.mb-0 <b>Asignatura o asignaturas.</b> En la primera infancia, esto se refiere a las dimensiones del desarrollo: socioafectiva, cognitiva, comunicativa, corporal, estética. 
              li.mb-0.d-flex
                i.fas.fa-circle
                p.mb-0 <b>Docente(s).</b> Nombre del educador o equipo educativo.
              li.mb-0.d-flex
                i.fas.fa-circle
                p.mb-0 <b>Fechas.</b> Duración de la secuencia didáctica; por ejemplo, del 15 de mayo al 30 de junio.
              li.mb-0.d-flex
                i.fas.fa-circle
                p.mb-0 <b>Horas o créditos.</b> Número de horas semanales dedicadas a la secuencia.
              li.mb-0.d-flex
                i.fas.fa-circle
                p.mb-0 <b>Bloque, temas, etc.</b> Tema general de la secuencia, por ejemplo, "Descubriendo mi cuerpo y el mundo que me rodea".
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                h5.mb-0 Problema significativo del contexto:
            ul.lista-ul--color.ms-3
              li.mb-0.d-flex
                i.fas.fa-circle
                p.mb-0 Describe una situación real del entorno del niño que se abordará en la secuencia. Por ejemplo: "Los niños muestran poco interés por explorar su entorno natural y tienen dificultades para reconocer las partes de su cuerpo".
             
    
          .div(titulo="Competencias")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Competencia específica 1.</b> Meta de aprendizaje en una dimensión del desarrollo.
            ul.lista-ul--color.ms-3
              li.mb-0.d-flex
                i.fas.fa-circle
                p.mb-0 <b>Saber conocer.</b> Conceptos que los niños aprenderán; por ejemplo, "Partes del cuerpo, animales y plantas del entorno".
              li.mb-0.d-flex
                i.fas.fa-circle
                p.mb-0 <b>Saber hacer.</b> Habilidades que desarrollarán; por ejemplo, "Identificar y nombrar las partes del cuerpo, clasificar animales y plantas".
              li.mb-0.d-flex
                i.fas.fa-circle
                p.mb-0 <b>Saber ser.</b> Actitudes que fomentarán; por ejemplo, "Respeto por la diversidad, curiosidad por aprender".
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Competencia específica 2.</b> Meta de aprendizaje en otra dimensión del desarrollo, si aplica.
            ul.lista-ul--color.ms-3
              li.mb-0.d-flex
                i.fas.fa-circle
                p.mb-0 Saber conocer, saber hacer, saber ser. Igual que en la competencia 1.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Competencias genéricas.</b> Habilidades transversales que se promueven en todas las áreas.
            ul.lista-ul--color.ms-3
              li.mb-0.d-flex
                i.fas.fa-circle
                p.mb-0 <b>Competencia genérica 1.</b> Por ejemplo, "Pensamiento crítico". 
            ul.lista-ul--color.ms-5
              li.mb-0.d-flex
                i.far.fa-circle
                p.mb-0 <b>Criterios.</b> Indicadores de logro; por ejemplo, "Hace preguntas sobre lo que observa, compara objetos y situaciones".
            ul.lista-ul--color.ms-3
              li.mb-0.d-flex
                i.fas.fa-circle
                p.mb-0 <b>Competencia genérica 2.</b> Por ejemplo, "Comunicación". 
            ul.lista-ul--color.ms-5
              li.mb-0.d-flex
                i.far.fa-circle
                p.mb-0 <b>Criterios.</b> Por ejemplo, "Expresa sus ideas con claridad, escucha a los demás".
            ul.lista-ul--color.ms-3
              li.mb-0.d-flex
                i.fas.fa-circle
                p.mb-0 <b>Competencia genérica 3.</b> Por ejemplo, "Trabajo en equipo".  
            ul.lista-ul--color.ms-5
              li.mb-0.d-flex
                i.far.fa-circle
                p.mb-0 <b>Criterios.</b> Por ejemplo, "Colabora con otros niños, comparte materiales".
            ul.lista-ul--color.ms-3
              li.mb-0.d-flex
                i.fas.fa-circle
                p.mb-0 <b>Competencia genérica 4.</b> Por ejemplo, "Autonomía". 
            ul.lista-ul--color.ms-5
              li.mb-0.d-flex
                i.far.fa-circle
                p.mb-0 <b>Criterios.</b> Por ejemplo, "Toma decisiones, resuelve problemas sencillos".
    
          .div(titulo="Ejemplo concreto en primera infancia (0-3 años)")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Tema.</b> "explorando los colores".
              li.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Problema:</b> los niños no reconocen los colores básicos y tienen dificultades para diferenciarlos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Competencias:</b>
            ul.lista-ul--color.ms-3
              li.mb-0.d-flex
                i.fas.fa-circle
                p.mb-0 <b>Dimensión cognitiva.</b>  
            ul.lista-ul--color.ms-5
              li.mb-0.d-flex
                i.far.fa-circle
                p.mb-0 <b>Saber conocer:</b> nombres de los colores primarios (rojo, amarillo, azul).
              li.mb-0.d-flex
                i.far.fa-circle
                p.mb-0 <b>Saber hacer:</b> identificar y clasificar objetos por color.
              li.mb-0.d-flex
                i.far.fa-circle
                p.mb-0 <b>Saber ser:</b> curiosidad por explorar el mundo, aprecio por la diversidad de colores.
            ul.lista-ul--color.ms-3
              li.mb-0.d-flex
                i.fas.fa-circle
                p.mb-0 <b>Dimensión comunicativa. </b>  
            ul.lista-ul--color.ms-5
              li.mb-0.d-flex
                i.far.fa-circle
                p.mb-0 <b>Saber conocer:</b> vocabulario relacionado con los colores.
              li.mb-0.d-flex
                i.far.fa-circle
                p.mb-0 <b>Saber hacer:</b> describir objetos utilizando los nombres de los colores.
              li.mb-0.d-flex
                i.far.fa-circle
                p.mb-0 <b>Saber ser:</b> disfrutar al comunicarse y compartir descubrimientos.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Competencias genéricas:</b>
            ul.lista-ul--color.ms-5
              li.mb-0.d-flex
                i.fas.fa-circle
                p.mb-0 <b>Pensamiento crítico:</b> hace preguntas sobre los colores que ve.
              li.mb-0.d-flex
                i.fas.fa-circle
                p.mb-0 <b>Comunicación:</b> expresa sus ideas sobre los colores.
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Actividades posibles:</b>
            ul.lista-ul--color.ms-5
              li.mb-0.d-flex
                i.fas.fa-circle
                p.mb-0 <b>Exploración de objetos de diferentes colores:</b> (bloques, juguetes, telas).
              li.mb-0.d-flex
                i.fas.fa-circle
                p.mb-0 <b>Juegos de clasificación:</b> (ordenar objetos por color).
              li.mb-0.d-flex
                i.fas.fa-circle
                p.mb-0 <b>Canciones y rimas:</b> (que mencionen los colores).
              li.mb-0.d-flex
                i.fas.fa-circle
                p.mb-0 <b>Actividades de arte:</b> (pintar con témperas de colores).
              li.mb-0.d-flex
                i.fas.fa-circle
                p.mb-0 <b>Salidas al jardín:</b> (identificar colores en la naturaleza).
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Evaluación:</b>
            ul.lista-ul--color.ms-5
              li.mb-0.d-flex
                i.fas.fa-circle
                p.mb-0 Se realizará a través de la observación directa del niño, durante las actividades, teniendo en cuenta los criterios de logro establecidos para cada competencia.
    
    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Características y funciones del material didáctico
    
    p.mb-4 Ahora bien, ¿qué son los materiales didácticos? 

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Material didáctico 
            p.mb-4(data-aos="fade-right") El material didáctico es un recurso esencial en el proceso de enseñanza-aprendizaje, ya que facilita la comprensión de los contenidos y estimula el interés de los estudiantes. En el PDF <b>Material didáctico</b>, se exploran los diferentes tipos de materiales utilizados en la educación, sus características y su impacto en el aprendizaje. A través de este análisis, se comprenderá cómo estos recursos pueden ser adaptados a distintos contextos educativos para potenciar la enseñanza y mejorar la experiencia de los estudiantes.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Material didáctico.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/19.png', alt='')
    

    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Relación
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/20.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Después de tener claridad sobre lo qué es una secuencia didáctica y a qué nos referimos con materiales didácticos, abordemos en qué consiste esta relación.
    
        .bg-color-3.p-4.mb-5(data-aos="fade-left")
          p.mb-0 Las secuencias didácticas y los materiales didácticos, mantienen una relación simbiótica en el proceso educativo. Esta relación se fundamenta en la necesidad de crear experiencias de aprendizaje significativas y efectivas, para los estudiantes, además de cómo lo dice Ferreiro (2021), los materiales auténticos y significativos para los niños, son aquellos que se encuentran en su entorno cotidiano y que les permiten construir su propio conocimiento y allí radica su importancia. 
        p ¿Qué son materiales auténticos y significativos?
    
    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Auténticos" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.order-2
            h4 Auténticos
            p Son objetos reales que forman parte del entorno cotidiano de los niños, como utensilios de cocina, herramientas, ropa, plantas, animales, etc. No son juguetes diseñados específicamente para un fin educativo, sino objetos con un uso real, en la vida diaria.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/21.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Significativos" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.order-2
            h4 Significativos
            p Son aquellos objetos que tienen un significado personal o cultural para los niños, que están relacionados con sus experiencias, intereses y conocimientos previos. Pueden ser objetos que hayan utilizado en casa, en la calle, en el mercado, o que hayan visto en libros o películas. 

    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/22.png', alt='')
    
    p.mb-4 Es decir, imaginen la secuencia didáctica como el plano de una casa y los materiales didácticos como los ladrillos, el cemento, las ventanas y las puertas:

    .bg-full-width.bg-color-6
      .p-4.p-md-5
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/23.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center El plano (secuencia didáctica)
                p.mb-0 Nos dice dónde va cada cosa, cómo se conecta y qué función cumple. Define el orden de las actividades, los objetivos de aprendizaje y cómo se evaluará el progreso de los niños.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/24.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Los materiales (didácticos)
                p.mb-0 Son los elementos concretos que se utilizan para construir la experiencia de aprendizaje. Hacen que el plano cobre vida, permitiendo a los niños interactuar, explorar y descubrir.
        
        p ¿Por qué esta relación es tan importante?

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/25.png")
            .col-lg-7
              h5 Sin un plano (secuencia), los materiales pierden sentido
              p Serían solo objetos sin un propósito claro, como ladrillos amontonados sin orden. La secuencia didáctica, le aporta dirección y sentido a los materiales, conectándonos con objetivos de aprendizaje específicos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/26.png")
            .col-lg-7
              h5 Sin materiales, el plano se queda en teoría
              p Sería como un diseño bonito pero inútil. Los materiales didácticos son los que permiten a los niños interactuar, manipular, experimentar y construir su propio conocimiento.
    
    p.mb-4 En la práctica, Emilia Ferreiro nos invita a reflexionar sobre cómo elegimos y utilizamos los materiales en nuestras secuencias didácticas:

    .bg-full-width.bg-h85
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
                ul.lista-ul--color.mt-5
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>¿Estamos utilizando "ladrillos" (materiales) auténticos y significativos?</b> ¿O solo estamos usando "ladrillos de juguete" (materiales educativos genéricos) que no conectan con la realidad de los niños?
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>¿Nuestro "plano" (secuencia) permite la exploración y el descubrimiento?</b> ¿O solo indica un uso rígido y predefinido de los materiales?
              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema1/27.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0 
    
    .bg-full-width.bg-color-5
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/28.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") Al considerar estas preguntas, podemos crear secuencias didácticas más efectivas, donde los materiales sean herramientas poderosas para el aprendizaje significativo y el desarrollo integral de los niños.
            p Para Díaz-Barriga (2020), la secuencia didáctica, como estructura organizativa del proceso de enseñanza-aprendizaje, requiere de materiales didácticos que:
        
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/29.svg" alt="" style="width: 90px")
              h5.text-center Primero
              p.mb-0.text-center Apoyen la consecución de los objetivos de aprendizaje.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/30.svg" alt="" style="width: 90px")
              h5.text-center Segundo
              p.mb-0.text-center Faciliten la comprensión de contenidos.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/31.svg" alt="" style="width: 90px")
              h5.text-center Tercero
              p.mb-0.text-center Promuevan la participación activa.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/32.svg" alt="" style="width: 90px")
              h5.text-center Cuarto
              p.mb-0.text-center Generen interés y motivación.
    
    p.mb-4 Para ello, describe que hay unos aspectos claves: 

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Coherencia pedagógica" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-3.mb-md-0
            h4 Coherencia pedagógica
            ul.lista-ul--color
              li.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Los materiales deben alinearse con la metodología planteada.
              li.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Deben responder a los momentos específicos de la secuencia.
              li.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Necesitan adaptarse al nivel de complejidad de cada fase.
    
          .col-md-8.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/33.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Funcionalidad" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-3.mb-md-0
            h4 Funcionalidad
            ul.lista-ul--color
              li.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Cada material debe cumplir un propósito específico.
              li.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Debe facilitar la transición entre las diferentes etapas.
              li.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Tiene que promover el desarrollo de competencias. 

    
          .col-md-8.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/34.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Temporalidad" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-3.mb-md-0
            h4 Temporalidad
            ul.lista-ul--color
              li.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Los materiales se integran en momentos específicos.
              li.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Deben considerar el tiempo disponible.
              li.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 Requieren una planificación previa.

    
          .col-md-8.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/35.png', alt='')
    
    p.mb-4 Una relación adecuada entre secuencias didácticas y materiales didácticos, trae consigo múltiples beneficios que optimizan el proceso de enseñanza-aprendizaje. Cuando las secuencias didácticas están bien planificadas y los materiales didácticos se eligen cuidadosamente para apoyar cada fase de la secuencia, se crea un ambiente educativo cohesionado y efectivo. Esta armonía facilita una mejor comprensión de los contenidos, porque los estudiantes pueden relacionar los conceptos teóricos con ejemplos prácticos y recursos tangibles. Además, al utilizar materiales didácticos que capturan el interés y la atención de los estudiantes, se fomenta un mayor compromiso y participación en las actividades educativas, lo que a su vez potencia el aprendizaje.

    .bg-full-width.bg-color-5
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/36.png", data-aos="zoom-in")
          .col-lg-8
            .bg-color-1.p-4.mb-3(data-aos="fade-left")
              p.mb-0 Otro beneficio clave es el desarrollo efectivo de habilidades, tanto cognitivas como socioemocionales. Los materiales didácticos adecuados, no solo enriquecen las actividades de aprendizaje, sino que también permiten a los estudiantes aplicar y practicar lo que han aprendido en contextos significativos. Esto conduce a una evaluación más precisa del aprendizaje, debido a que los docentes pueden observar y medir el progreso de los estudiantes, de manera más concreta y detallada. En resumen, una relación adecuada entre secuencias didácticas y materiales didácticos, es fundamental para crear experiencias de aprendizaje integrales y significativas, que preparen a los estudiantes para enfrentar desafíos académicos y de la vida cotidiana. 
            p(data-aos="fade-left") Para Moreno Lucas (2015), citando a Ruiz y García (2001), que destacan la importancia de los recursos materiales en el proceso educativo y, por ende, en la planificación de una secuencia didáctica, afirmando que estos pueden desempeñar múltiples funciones como materiales curriculares. Para que cualquier recurso se convierte en educativo, debe cumplir ciertos criterios que garanticen aprendizajes específicos. Rodríguez (2005), citado por Moreno, identifica tres funciones esenciales que deben cumplir los materiales en estas secuencias para la educación: 

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/37.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center La función de apoyo al aprendizaje
                p.mb-0 Facilita la interiorización de contenidos, especialmente relevante en la etapa infantil.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/38.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center La función estructuradora
                p.mb-0 Ayuda a organizar y transformar información abstracta en conocimientos concretos.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/39.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center La función motivadora
                p.mb-0 Asegura que los recursos sean atractivos y fomenten un aprendizaje placentero.
    
    p.mb-4 Además, Abengoechea y Romero (1991), citados también por Moreno, proponen dos funciones adicionales para los materiales educativos en este sentido: 


    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/40.png")
            .col-lg-7
              h5 La función innovadora
              p Se refiere a la capacidad de los materiales para ofrecer estímulos novedosos y creativos que capten la atención del alumno
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/41.png")
            .col-lg-7
              h5 La función condicionadora del aprendizaje
              p Se relaciona con cómo los materiales influyen en el procesamiento de la información.
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/42.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Estas funciones permiten diversificar el uso de materiales en el aula, adaptándose a las distintas áreas de desarrollo que se deseen potenciar en los estudiantes.
    
        .bg-color-3.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/43.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En conjunto, estas diversas funciones de los materiales educativos, subrayan su papel crucial en el aprendizaje infantil. Al incorporar objetos novedosos y creativos que no forman parte de la vida cotidiana de los alumnos, se pueden generar nuevos estímulos que fomenten la curiosidad y la creatividad. Así, los recursos materiales no solo facilitan el aprendizaje, sino que también enriquecen la experiencia educativa, al conectar con el entorno cultural y profesional de los estudiantes.
        
    
    
         

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.mineducacion.gov.co/1759/articles-339975_recurso_11.pdf " target="_blank" rel="noopener noreferrer") Ministerio de Educación Nacional. (2020). Desarrollo infantil y competencias en la primera infancia. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/67059?page=110" target="_blank" rel="noopener noreferrer") Pitluk, L. (2012). La planificación didáctica en el Jardín de Infantes: las unidades didácticas, los proyectos y las secuencias didácticas: el juego trabajo: ( ed.). Homo Sapiens Ediciones. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.scribd.com/document/83437021/Formato-Est%C6%92A-ndar-de-secuencia-did%C6%92A-ctica  " target="_blank" rel="noopener noreferrer") Autor desconocido. (s.f.). Formato estándar de secuencia didáctica. Scribd. 



            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=EFAy8LbfY2g " target="_blank" rel="noopener noreferrer") Mas Puentes, menos muros. (2020, 4 de agosto). MATERIAL DIDÁCTICO PARA ENSEÑAR A LEER | APRENDER M - L - S - P | iniciación a la lectura | AMB. [Vídeo]. Youtube

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
