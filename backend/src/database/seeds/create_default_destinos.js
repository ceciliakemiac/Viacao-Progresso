const knex = require('knex');

module.exports = {
  async seed(knex) {
    try {
      await knex('destinos').del();

      await knex('destinos').insert([
        {descricao: 'Entre todos os planetas terrestres Mercúrio é um extremo: ele é o menor de todos, o mais denso entre eles (após corrigirmos a auto-compressão), aquele com a mais velha superfície, aquele com a maior de todas as variações diárias na temperatura da superfície, e o menos explorado entre eles.',
         nota: 0.0, periculosidade: 7.6, distanciaTerra: 0.39, temETs: false, image1: 'mercurio1.png', image2: 'mercurio2.png', image3: 'mercurio3.png', image4: 'mercurio4.png', nome: 'Mercúrio', tipo: 1 },
        {descricao: 'Vênus é o segundo planeta a partir do Sol e o quarto menor planeta do Sistema Solar. Somente Mercúrio, Marte, e o anão Plutão são menores do que Vênus. De todos os planetas do Sistema Solar Vênus é o que mais se aproxima da Terra. Durante o seu movimento em torno do Sol, Vênus se aproxima a cerca de 40 milhões de quilômetros do nosso planeta. Vênus sempre chamou a atenção dos povos antigos devido à sua intensa presença no céu. Visto da Terra, Vênus pode superar em brilho todos os corpos celestes com excessão do Sol e da Lua. Deste modo Vênus situa-se como o terceiro objeto mais brilhante no céu. Sua luz fraca é suficiente para, em certas ocasiões, criar sombras de objetos no chão durante a noite. Vênus, quando está no máximo de seu brilho, pode ser visto no céu diurno.',
         nota: 0.0, periculosidade: 8.7, distanciaTerra: 0.72, temETs: true, image1: 'venus1.jpg', nome: 'Vênus', tipo: 1},
        {descricao: 'Antares é uma estrela supergigante vermelha que está chegando ao fim de sua vida. Quando não houver mais combustível para queimar, a estrela entrará em colapso e explodirá em uma supernova - "quando seu brilho rivalizar com o resto da galáxia", observaram os astrofísicos Paul Butterworth e Mike Arida. A estrela está entre as 20 mais brilhantes visíveis no céu noturno da Terra, embora seu brilho varie. Observadores amadores estimaram sua magnitude aparente entre 0,88 e 1,16. Os nomes em árabe e latino da estrela Antares significam "coração do Escorpião". Se você ver esta constelação no céu, descobrirá que Antares realmente parece residir no coração do Escorpião.',
         nota: 0.0, periculosidade: 9.7, distanciaTerra: 600.0, temETs: true, image1: 'antares1.jpg', image2: 'antares2.jpg', nome: 'Antares', tipo: 2},
        {descricao: 'Arcturus é uma estrela gigante vermelha no céu do Hemisfério Norte da Terra e a estrela mais brilhante da constelação de Boötes (o pastor). Arcturus também está entre as estrelas mais brilhantes que podem ser vistas da Terra. Os astrônomos dizem que Arcturus terminará como uma anã branca no final de sua vida. A maneira mais fácil de detectar Arcturus é seguindo a curva do "punho" da Ursa Maior. Hoje, os astrônomos sabem que Arcturus tem muito impacto, apesar de ser apenas cerca de 1,5 vezes a massa do sol. A olho nu, Arcturus parece brilhar cerca de 113 vezes mais que o sol, de acordo com Jim Kaler, professor emérito da Universidade de Illinois em Urbana-Champaign. Arcturus, no entanto, tem uma temperatura mais baixa que o sol, o que significa que grande parte da energia da estrela gigante vermelha é irradiada como calor.',
         nota: 0.0, periculosidade: 9.6, distanciaTerra: 36.6, temETs: true, image1: 'arcturus1.jpg', nome: 'Arcturus', tipo: 2}
      ]);
    } catch(err) {
      console.error(err);
    }
  }
}