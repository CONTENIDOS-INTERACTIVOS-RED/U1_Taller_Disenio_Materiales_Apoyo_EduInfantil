<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Orden y jerarquía'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Los conceptos de <b>orden y jerarquía</b> en el aprendizaje, son fundamentales para organizar y estructurar los conocimientos de manera que faciliten el desarrollo cognitivo. Este enfoque permite a los estudiantes progresar desde conceptos simples, hacia ideas más complejas, creando conexiones significativas entre lo que ya saben y lo que están aprendiendo. La secuenciación adecuada de los contenidos y el uso de organizadores previos, juegan un papel crucial en este proceso. Pero:
    
        .bg-color-3.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 ¿Cómo afecta realmente la estructura jerárquica al aprendizaje de los estudiantes? ¿De qué manera la organización y el orden influyen en nuestra capacidad para comprender y retener la información? ¿Pueden pensar en un momento en el que la falta de estructura les haya dificultado el aprendizaje? ¿Cómo lo superaron?
        p En el transcurso del tema, estaremos estudiando estos dos conceptos aplicados al aprendizaje y a las secuencias didácticas y materiales; veremos algunos autores con teorías que lo sustentan y que aún en la actualidad, siguen estando vigentes.
        h5 Empecemos definiendo estos conceptos: 

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/3.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="La jerarquía")
            p Es una forma de organización en la que los elementos se ordenan, según un nivel de importancia o autoridad. Este concepto se aplica en diversas áreas, como la sociedad, las empresas y la clasificación de objetos. La jerarquía implica una subordinación de los elementos inferiores a los superiores (Raffino, 2024). La noción de jerarquía ha estado presente en las organizaciones humanas desde tiempos antiguos. En la antigua Grecia, por ejemplo, la jerarquía se entendía como el mandato divino, ejercido por los clérigos encargados de los ritos sagrados. Con el tiempo, la jerarquía se ha aplicado en la construcción de sociedades, organizaciones empresariales y clasificaciones científicas.
    
          .div(titulo="El orden")
            p Se refiere a la disposición y organización de elementos en un patrón o secuencia lógica. Es una estructura que facilita la comprensión, el acceso y el uso de información o recursos (Pérez, (2014). El orden es fundamental en diversos campos, como la ciencia, la educación, la sociedad y la tecnología, dado que permite una mejor organización y eficiencia. Filósofos griegos, como Aristóteles, exploraron la idea del orden en el cosmos y la naturaleza. Aristóteles propuso que el universo tenía un orden natural y jerárquico, donde cada elemento tenía un propósito y lugar específico (Molina, 2018). También los romanos adoptaron el concepto de orden en sus leyes, arquitectura y organización social, destacando la importancia de la disciplina y la estructura.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Concepto de orden y jerarquía en el aprendizaje
    
    p.mb-4 Ahora bien, el orden y la jerarquía en el aprendizaje, se refieren a la organización sistemática de contenidos y experiencias educativas que permiten al estudiante desarrollar operaciones mentales de manera progresiva. Según Piaget citado por Regader (2015), estas estructuras cognitivas se construyen de manera secuencial, partiendo de lo simple a lo complejo. Este enfoque sistemático permite que los estudiantes construyan y expandan sus conocimientos de manera lógica y efectiva.
  
    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Orden en el aprendizaje" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-3.mb-md-0
            h4 Orden en el aprendizaje
            p Se refiere a la secuenciación organizada y lógica de los contenidos educativos. Esto implica presentar los temas de una manera que los estudiantes puedan seguir de forma coherente y significativa. La presentación ordenada de los contenidos facilita la comprensión y retención de la información, permitiendo a los estudiantes conectar nuevos conocimientos, con lo que ya saben.
    
          .col-md-8.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/4.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Jerarquía en el aprendizaje" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-3.mb-md-0
            h4 Jerarquía en el aprendizaje
            p Implica la organización de los contenidos educativos en niveles de complejidad creciente. Los estudiantes comienzan con conceptos básicos y simples, y a medida que avanzan, se les presentan conceptos más complejos y abstractos. Esta progresión jerárquica es esencial para el desarrollo de habilidades cognitivas avanzadas y la construcción de conocimientos profundos.

          .col-md-8.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/5.png', alt='')
    
    .bg-full-width.bg-color-5
      .p-4.p-md-5
        p.mb-4 Para Jean Piaget, citado por Regader (2015), un destacado psicólogo del desarrollo, propuso que el aprendizaje se realiza de manera secuencial y progresiva, las estructuras cognitivas se construyen partiendo de lo simple a lo complejo, siguiendo etapas específicas de desarrollo cognitivo:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/6.svg" alt="" style="width: 90px")
              h5.text-center Etapa sensoriomotora (0-2 años)
              p.mb-0.text-center Los niños aprenden a través de la manipulación de objetos y la experiencia sensorial.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/7.svg" alt="" style="width: 90px")
              h5.text-center Etapa preoperacional (2-7 años)
              p.mb-0.text-center Los niños comienzan a usar el lenguaje y a desarrollar representaciones simbólicas.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/8.svg" alt="" style="width: 90px")
              h5.text-center Etapa de las operaciones concretas (7-11 años)
              p.mb-0.text-center Los niños desarrollan habilidades de clasificación, ordenamiento y conservación.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/9.svg" alt="" style="width: 90px")
              h5.text-center Etapa de las operaciones formales (11 años en adelante)
              p.mb-0.text-center Los adolescentes y adultos jóvenes, desarrollan la capacidad de pensamiento abstracto y razonamiento lógico.
    
    p.mb-4 Estas etapas reflejan cómo los niños construyen y organizan su conocimiento, de manera jerárquica y ordenada.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Otros autores
            p.mb-4(data-aos="fade-right") El estudio de las teorías del aprendizaje ha sido enriquecido por diversos autores que han aportado enfoques innovadores sobre la construcción del conocimiento. En el PDF <b>Otros autores</b>, se analizan las contribuciones de Jerome Bruner y David Ausubel, quienes desarrollaron teorías fundamentales como el andamiaje y el aprendizaje significativo. A través de este análisis, se comprenderá cómo sus planteamientos han influido en la educación moderna y en la manera en que los docentes diseñan estrategias para facilitar el aprendizaje en distintos contextos.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Otros autores.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/10.png', alt='')
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Tipos de organizadores previos: mapa conceptual
    
    p.mb-4 Para Moreira (2012), según los aportes de Ausubel, existen diferentes tipos de organizadores previos: 

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/11.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="8%" y="8%" numero="+")
                h5 1. Mapas conceptuales
                p Representaciones gráficas que muestran las relaciones entre conceptos. Los mapas conceptuales permiten a los estudiantes visualizar cómo se conectan los nuevos contenidos con lo que ya saben.
    
              .bg-color-white.box-shadow.p-3(x="8%" y="56%" numero="+")
                h5 2. Esquemas o diagramas
                p Estructuras visuales que organizan la información de manera lógica. Por ejemplo, diagramas de flujo que ilustran procesos o secuencias.
    
              .bg-color-white.box-shadow.p-3(x="91%" y="8%" numero="+")
                h5 3. Analogías y metáforas
                p Comparaciones que relacionan nuevos conceptos con ideas familiares para los estudiantes. Las analogías y las metáforas, facilitan la comprensión de conceptos abstractos.
    
              .bg-color-white.box-shadow.p-3(x="91%" y="56%" numero="+")
                h5 4. Preguntas guía
                p Preguntas que orientan el pensamiento de los estudiantes hacia los temas que se van a tratar, incentivando la reflexión y el análisis previo.
    
    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5
        .row.mb-5
          .col-lg-4.order-2
            figure
              img(src="@/assets/curso/tema2/12.png", data-aos="zoom-in")
          .col-lg-8.order-1.mb-3.mb-lg-0
            p(data-aos="fade-left") Orellana Valdés (2009), por su parte, hace especial énfasis en los mapas conceptuales, puesto que da respuesta a la teoría de Ausubel aquí expuesta; entonces, los mapas conceptuales, desarrollados en la Universidad de Cornell a partir de la teoría del aprendizaje significativo de Ausubel, se han convertido en una herramienta valiosa para profesores, investigadores y estudiantes. Su objetivo principal es representar relaciones significativas entre conceptos, en forma de proposiciones, facilitando la comprensión y asimilación de la información. Un mapa conceptual básico consta de dos o más conceptos unidos por palabras de enlace, formando una proposición con significado específico. Por ejemplo, "el cielo es azul" representa una proposición válida que relaciona los conceptos "cielo" y "azul".
        
            .bg-color-2.p-4(data-aos="fade-left")
              p.mb-0 Los mapas conceptuales se caracterizan por su estructura jerárquica, donde los conceptos más generales e inclusivos se sitúan en la parte superior, mientras que los conceptos más específicos se ubican en la parte inferior. Esta organización facilita la comprensión de cómo se relacionan los conceptos entre sí y cómo se construye el conocimiento, de manera progresiva. Los mapas conceptuales no solo representan un conjunto de significados conceptuales, sino que también reflejan la estructura de proposiciones que subyacen a la comprensión de un tema.
        
        h2(data-aos="fade-left") El uso de mapas conceptuales como estrategia de aprendizaje
        p.mb-5 Según diversos autores como Beltrán, Ontoria y Novak, citados por Orellana Valdés (2009), los mapas conceptuales:

        div.row.justify-content-center.align-items-stretch
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/13.svg" alt="" style="width: 90px")
              h5.text-center Primero
              p.mb-0.text-center Son una herramienta eficaz para promover el aprendizaje significativo.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/13.svg" alt="" style="width: 90px")
              h5.text-center Segundo
              p.mb-0.text-center Facilitan la organización de los contenidos, la conexión entre conceptos y la asimilación de nueva información. 
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/13.svg" alt="" style="width: 90px")
              h5.text-center Tercero
              p.mb-0.text-center Fomentan el desarrollo de destrezas cognitivas y metacognitivas en los estudiantes, como la capacidad de analizar, sintetizar y relacionar información.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/14.png", data-aos="zoom-in")
      .col-lg-8
        p Su uso se centra en el alumno, promoviendo un aprendizaje activo y autónomo.
        p(data-aos="fade-left") La investigación sobre el aprendizaje, ha revelado que los individuos combinan conceptos y procedimientos en forma de reglas para la acción, lo que se conoce como <b>conocimiento estratégico</b>. Este tipo de conocimiento implica la capacidad de activar estrategias cognitivas para resolver problemas y alcanzar metas. Los mapas conceptuales, al representar las relaciones entre conceptos y proposiciones, pueden ser una herramienta útil para desarrollar el conocimiento estratégico, puesto que permiten a los estudiantes visualizar y comprender cómo aplicar sus conocimientos en diferentes situaciones.
    
        .bg-color-3.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/15.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 A pesar de su utilidad y potencial, los mapas conceptuales no son ampliamente utilizados en el ámbito educativo. Esto puede deberse a la falta de conocimiento sobre su aplicación y beneficios. Sin embargo, esta estrategia de aprendizaje y evaluación, ofrece numerosas ventajas, porque permite a los estudiantes comprender los conocimientos de manera más profunda y significativa. Además, facilita la identificación de errores conceptuales y la evaluación del progreso individual.
      
   
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/16.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-7.p-4.mb-3(data-aos="fade-left")
          p.mb-0 En otras palabras, los mapas conceptuales son una herramienta poderosa para el aprendizaje significativo, el desarrollo del conocimiento estratégico y la evaluación del aprendizaje. Su estructura jerárquica y su capacidad para representar relaciones entre conceptos, los convierten en un recurso valioso para estudiantes y docentes. A pesar que su uso no está muy extendido, los mapas conceptuales tienen el potencial de transformar la forma en que se enseña y se aprende.
        p(data-aos="fade-left") Ahora bien, en este punto podemos mencionar procesos mentales que son necesarios para el aprendizaje y que se estimulan con estas estrategias mencionadas desde las miradas de diferentes autores como Camargo y Hederich (2010), Coutinho, E. (2014), cita a Novak y Gowin (1984), y por Orellana Valdés (2009), que continúa citando a Ausubel y Piaget.

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/17.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="La observación")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Proceso inicial de contacto directo con objetos y fenómenos.</b> La observación es el primer paso en el proceso de aprendizaje. Involucra la interacción directa con el entorno, permitiendo a los estudiantes recopilar información a través de sus sentidos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Base para el desarrollo de habilidades cognitivas superiores.</b> A través de la observación, los estudiantes desarrollan habilidades cognitivas como la atención, la percepción y la memoria.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Implica el uso consciente de los sentidos.</b> La observación efectiva requiere la atención consciente y el uso intencional de los sentidos (vista, oído, tacto, etc.).
    
          .div(titulo="La comparación")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Establecimiento de similitudes y diferencias.</b> La comparación permite a los estudiantes identificar y analizar las similitudes y diferencias entre objetos y fenómenos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Desarrollo de criterios de clasificación.</b> A través de la comparación, los estudiantes desarrollan criterios para organizar y clasificar información.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Fundamento para el pensamiento analítico.</b> La habilidad para comparar, es esencial para el pensamiento analítico y crítico, permitiendo a los estudiantes evaluar y sintetizar información.
    
          .div(titulo="La clasificación")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Organización de elementos, según características comunes.</b> La clasificación implica agrupar objetos o información, según características comunes.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Desarrollo de categorías conceptuales.</b> A través de la clasificación, los estudiantes desarrollan categorías conceptuales que les permiten organizar y comprender mejor el mundo.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-9
                p.mb-0 <b>Base para la construcción de esquemas mentales.</b> La clasificación ayuda a construir y organizar esquemas mentales, facilitando el aprendizaje y la retención de información.
    
    p.mb-4 Ahora, conozcamos el proceso de construcción del conocimiento:

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Fase concreta" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-3.mb-md-0
            h4 Fase concreta
            ul.lista-ul--color
              li.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Manipulación directa de materiales.</b> Los estudiantes interactúan directamente con objetos y materiales, lo que les permite comprender conceptos de manera tangible.
              li.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Experiencias sensoriales.</b> La manipulación de materiales ofrece experiencias sensoriales que enriquecen el aprendizaje.
              li.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Exploración activa.</b> Los estudiantes exploran activamente su entorno, lo que fomenta la curiosidad y el descubrimiento.
    
          .col-md-8.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/18.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Fase representativa" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-3.mb-md-0
            h4 Fase representativa
            ul.lista-ul--color
              li.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Elaboración de dibujos y esquemas.</b> Los estudiantes crean representaciones gráficas de lo que han aprendido.
              li.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Representaciones gráficas.</b> Utilizan gráficos, diagramas y esquemas para organizar y visualizar la información.
              li.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Construcción de modelos.</b> Los estudiantes construyen modelos que representan conceptos abstractos. 

    
          .col-md-8.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/19.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Fase simbólica" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-3.mb-md-0
            h4 Fase simbólica
            ul.lista-ul--color
              li.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Uso de símbolos y signos.</b> Los estudiantes utilizan símbolos y signos para representar ideas complejas.
              li.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Abstracción de conceptos.</b> A través del uso de símbolos, los estudiantes desarrollan la capacidad de pensar de manera abstracta.
              li.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Generalización de aprendizajes.</b> Aplican los conocimientos adquiridos a nuevas situaciones y contextos.

    
          .col-md-8.col-lg-5.col-xl-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/20.png', alt='')
        
            

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>
          
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://www.journalalphacentauri.com/index.php/revista/article/download/76/78" target="_blank" rel="noopener noreferrer") Reátegui, P. V., Burga, L. A. D. Á., & Pinedo, G. S. (2022). Los organizadores gráficos como estrategia en la comprensión lectora: una revisión de la literatura científica del 2015-2021. Alpha Centauri, 3(2), 31-36.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/111553?page=14 " target="_blank" rel="noopener noreferrer") Pontalti, B. (2018). Taller de mapas conceptuales y mentales: para aprender a pensar y organizar ideas: ( ed.). Narcea Ediciones. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.understood.org/es-mx/articles/common-advance-organizers-and-why-they-work " target="_blank" rel="noopener noreferrer") Osewalt, G. (22, octubre 2020). Qué son los organizadores previos y por qué funcionan. Understood.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=f40xS7bsItY" target="_blank" rel="noopener noreferrer") Sprouts Español. (2023, 18 de agosto). Los 3 pasos de aprendizaje en el currículum en espiral de Bruner. [Vídeo]. Youtube.  

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: '¿Qué es el aprendizaje significativo?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Memorizar información sin comprenderla.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Aprender de manera mecánica y repetitiva',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Conectar la nueva información con los conocimientos previos.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Olvidar rápidamente lo que se ha aprendido.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué papel juegan los mapas conceptuales en el aprendizaje significativo?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'No tienen ninguna relación con el aprendizaje significativo.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Facilitan la organización y conexión de conceptos, favoreciendo el aprendizaje significativo',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Solo sirven para memorizar información.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Dificultan la comprensión de los temas.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto: '¿Cómo se construye un mapa conceptual?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Se copian conceptos de un libro de texto',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Se ordenan los conceptos al azar.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Se identifican los conceptos clave, se jerarquizan y se conectan con enlaces.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'Se dibuja un diagrama sin seguir ninguna estructura lógica.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: '¿Qué son las palabras de enlace en un mapa conceptual?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Palabras que se utilizan para definir conceptos.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Palabras que se escriben en los enlaces para mostrar la relación entre conceptos.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Palabras que se utilizan para decorar el mapa conceptual.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Palabras que se escriben dentro de los conceptos.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué beneficios aportan los mapas conceptuales al aprendizaje?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Facilitan la comprensión, el recuerdo, la organización de la información y la creatividad.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Solo sirven para aprobar exámenes.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'No tienen ningún impacto en el aprendizaje.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Dificultan la comprensión de los temas.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
