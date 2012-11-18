'use strict';


/* Controllers */
function contratame($scope){

  $scope.trabajos = ['plomero','electricista','carpintero','Maestro de Construccion']

  $scope.personas = [
    {
    	'nombre':'Andres Reyes',
    	'descripcion':'Trabaje en wall street pero ahora me dedico a lo que mas me gusta: LA PLOMERIA!!!!!',
    	'trabajos':['chapinero alto','Alameda'],
    	'foto':'/app/img/media/fotos/plomero-1.jpg',
        'trabajo':'plomero'
    },

    {
    	'nombre':'Juan Perez',
    	'descripcion':'Trabajo como plomero hace 150 anyos',
    	'trabajos':['chapinero alto','Alameda'],
    	'foto':'/app/img/media/fotos/plomero-2.jpg',
        'trabajo':'plomero'
    },

    {
    	'nombre':'Ivan Roa',
    	'descripcion':'Trabajo como plomero hace 150 anyos',
    	'trabajos':['chapinero alto','Alameda'],
    	'foto':'/app/img/media/fotos/plomero-3.jpg',
        'trabajo':'plomero'
    },


    {
        'nombre':'Julian Cruz',
        'descripcion':'10 años de Experiencia',
        'trabajos':['chapinero alto','Alameda'],
        'foto':'/app/img/media/fotos/electricista-1.jpg',
        'trabajo':'electricista'
    },

    {
        'nombre':'Oscar Cortes',
        'descripcion':'Serio, Tecnico del Sena',
        'trabajos':['chapinero alto','Alameda'],
        'foto':'/app/img/media/fotos/electricista-2.jpg',
        'trabajo':'electricista'
    },

    {
        'nombre':'Carlos Poveda',
        'descripcion':'Me gusta la Electricidad y la Electronica',
        'trabajos':['chapinero alto','Alameda'],
        'foto':'/app/img/media/fotos/electricista-3.jpg',
        'trabajo':'electricista'
    },


    {
        'nombre':'Andres Angulo',
        'descripcion':'La madera es mi vida',
        'trabajos':['chapinero alto','Alameda'],
        'foto':'/app/img/media/fotos/carpintero-1.jpg',
        'trabajo':'carpintero'
    },

    {
        'nombre':'Andrea Marquez',
        'descripcion':'Toda mi familia ha sido carpinteros, soy el legado de una tradicion',
        'trabajos':['chapinero alto','Alameda'],
        'foto':'/app/img/media/fotos/carpintero-2.jpg',
        'trabajo':'carpintero'
    },

    {
        'nombre':'Vicente Rodriguez',
        'descripcion':'Trabajo con Madera y Metal',
        'trabajos':['chapinero alto','Alameda'],
        'foto':'/app/img/media/fotos/carpintero-3.jpg',
        'trabajo':'carpintero'
    },


    {
        'nombre':'Pedro Perez',
        'descripcion':'Cumplido',
        'trabajos':['chapinero alto','Alameda'],
        'foto':'/app/img/media/fotos/maestro-1.jpg',
        'trabajo':'Maestro de Construccion'
    },

    {
        'nombre':'Mario Bernal',
        'descripcion':'Quedara muy satisfecho con mi trabajo',
        'trabajos':['chapinero alto','Alameda'],
        'foto':'/app/img/media/fotos/maestro-2.jpg',
        'trabajo':'Maestro de Construccion'
    },

    {
        'nombre':'Roberto Mercado',
        'descripcion':'Muy Puntial',
        'trabajos':['chapinero alto','Alameda'],
        'foto':'/app/img/media/fotos/maestro-3.jpg',
        'trabajo':'Maestro de Construccion'
    },
  ]

}
MyCtrl1.$inject = ['$scope'];




/* Controllers */
function MyCtrl1() {}
MyCtrl1.$inject = [];


function MyCtrl2() {
}
MyCtrl2.$inject = [];
