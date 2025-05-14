<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Bienvenidos a esta primera Unidad Secuencias didácticas y materiales didácticos, donde aprenderemos dos componentes esenciales en el ámbito educativo: las secuencias didácticas y los materiales didácticos. Ambos conceptos son fundamentales para el diseño y la implementación de experiencias efectivas de aprendizaje. También veremos la importancia del orden y la jerarquización en el aprendizaje y en la construcción de dichos materiales.
        P Al finalizar esta unidad, los estudiantes estarán en capacidad de:
    
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Reconocer la fundamentación pedagógica que permite establecer Secuencias didácticas en ambientes de aprendizaje asertivos e identificar la importancia del orden y la jerarquía en el aprendizaje significativo desde el enfoque de Ausubel.
        
        p La unidad se dividirá en las siguientes secciones:
    
    .bg-full-width.bg-h85
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").order-2
                ul.lista-ul--color.mt-5
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Definición y características de las secuencias didácticas.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Tipos y usos de los materiales didácticos.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Relación entre secuencias didácticas y materiales didácticos.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Orden y jerarquía en el aprendizaje significativo, según Ausubel.
                  li.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 Aplicación práctica: diseño de una secuencia didáctica utilizando materiales didácticos adecuados.
              .col-lg-4(data-aos="zoom-in").order-1.mb-3.mb-lg-0
                img.img-fluid(src='@/assets/curso/intro/2.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/3.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Se espera que los estudiantes participen activamente en las actividades propuestas y se comprometan con el desarrollo de cada sección de la unidad. No es necesario contar con conocimientos previos sobre teoría del aprendizaje y planificación educativa, para aprovechar al máximo los contenidos. La colaboración y el intercambio de ideas serán claves para enriquecer el proceso de aprendizaje.
</template>
