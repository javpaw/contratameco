'use strict';


/* Controllers */
function contratame($scope){

  $scope.trabajos = ['plomero','electricista','carpintero','Maestro de Construccion']

  $scope.personas = [
    {
    	'nombre':'Pepito Perez',
    	'descripcion':'Trabaje en wall street pero ahora me dedico a lo que mas me gusta: LA PLOMERIA!!!!!',
    	'trabajos':['fasf','fff','fdf','afsdf'],
    	'foto':'/app/img/media/fotos/plomero-1.jpg',
        'trabajo':'plomero'
    },

    {
    	'nombre':'Pepito Perez 2',
    	'descripcion':'Trabajo como plomero hace 150 anyos',
    	'trabajos':['fasf','fff','fdf','afsdf'],
    	'foto':'/app/img/media/fotos/plomero-2.jpg',
        'trabajo':'Electricista'
    },

    {
    	'nombre':'Pepito Perez 3',
    	'descripcion':'Trabajo como plomero hace 150 anyos',
    	'trabajos':['fasf','fff','fdf','afsdf'],
    	'foto':'/app/img/media/fotos/plomero-3.jpg',
        'trabajo':'Carpintero'
    },


    {
        'nombre':'Pepito Perez',
        'descripcion':'Trabaje en wall street pero ahora me dedico a lo que mas me gusta: LA PLOMERIA!!!!!',
        'trabajos':['fasf','fff','fdf','afsdf'],
        'foto':'/app/img/media/fotos/plomero-1.jpg',
        'trabajo':'Maestro'
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
