(function(){
  'use strict';

  angular.module('users')
         .service('userService', ['$q', UserService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q){
    var users = [
      {
        name: 'Lia Lugo',
        avatar: 'svg-1',
        content: 'Me encanta el queso, especialmente airedale queso. Queso y galletas coliflor halloumi queso requesón suizo caerphilly fondue boursin. Vaca port-salut Camembert de Normandie feta de queso macarrones que se mudó a mi queso babybel boursin. Red roquefort leicester squirty boursin queso jarlsberg azul castello caerphillyTiza y queso. Lancashire.'
      },
      {
        name: 'George Duke',
        avatar: 'svg-2',
        content: 'Reversus ipsum Zombie ab infierno viral, nam rick Grimes malum cerebro. De carne pesado animata corpus quaeritis. Cerebros summus sientan, morbo vel maleficia? De apocalypsi Gorger Omero muertos vivientes sobreviviente dictum mauris.'
      },
      {
        name: 'Gener Delosreyes',
        avatar: 'svg-3',
        content: "Denim crudo vertido sobre readymade Etsy Pitchfork. Cuatro dólar tostadas escabeche amargos locavore el blog de McSweeney. Trate de difícil partido del arte selfies Shoreditch. Odd Future carnicero VHS, interrumpir Thundercats chillwave vinilo pantalones cortos de jean emergentes taxidermia tipografía maestro de limpiar Wes Anderson bigote Helvetica. Derechos de bicicleta Schlitz lumberhungry ironía chillwave Kickstarter máquina de escribir sriracha siguiente nivel intelectualidad, migas kogi reliquia alborotado. Interrumpir 3 lobo luna lomo cuatro loko. Pug mlkshk riñonera medida, literalmente, sudadera con capucha, puso un pájaro en él Marfa bolsa de mensajero kogi VHS."
      },
      {
        name: 'Lawrence Ray',
        avatar: 'svg-4',
        content: 'Rayar los muebles escupir en la alfombra de color gris claro en lugar de linóleo adyacente por lo que comer una planta, matar a una piel de la mano alrededor de la casa y subir y bajar escaleras persiguiendo fantasmas correr en círculos, o garra cortinas. Siempre piel de hambre en la casa y subir y bajar escaleras persiguiendo fantasmas.'
      },
      {
        name: 'Ernesto Urbina',
        avatar: 'svg-5',
        content: 'Webtwo ipsum dolor sit amet, eskobo chumby Doostang de Bebo. Bubbli Greplin stypi Prezi Mzinga heroku Wakoopa, Shopify Airbnb dogster Dopplr gooru jumo, reddit plickers Edmodo stypi Zillow etsy.'
      },
      {
        name: 'Gani Ferrer',
        avatar: 'svg-6',
        content: "Lebowski ipsum sí? ¿Qué crees que sucede cuando usted consigue rad? Que a su vez en su tarjeta de la biblioteca? Obtenga una nueva licencia de conducir? Deja de ser impresionante? Dolor sit amet, consectetur adipiscing elit Praesent ac magna justo pellentesque ac lectus. Usted no salir y hacer la vida vestida así en el medio de un día laborable. Quis elit blandit fringilla una lígula felis Praesent turpis ut, malesuada malesuada suscipit."
      }
    ];

    // Promise-based API
    return {
      loadAllUsers : function() {
        // Simulate async nature of real remote calls
        return $q.when(users);
      }
    };
  }

})();
