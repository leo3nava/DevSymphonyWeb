/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    $('#agregar').click(function () {
        agregarPersona();
    });
    
    $('#consultar').click(function () {
        consultarPersona();
    });
    
    personasGrid();
});


function agregar() {
    var clave = '';

    url = '/home/resultJSON';

    $.ajax({
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        url: url,
        cache: false,
        data: clave,
        success: function (result) {
            alert('succes');

        },
        error: function (result) {
            alert('error');

        }
    });
}

function agregarPersona() {

    var persona = {
        id: $('#id').val(),
        nombre: $('#nombre').val(),
        apellido: $('#apellido').val(),
        direccion: $('#direccion').val()
    };

    var url = '/persona/agregarPersona';
    $.ajax({
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        url: url,
        cache: false,
        data: JSON.stringify(persona),
        success: function (persona) {
            $('#id').val(persona.id);
            alert("Se inserto producto correctamente");
        },
        error: function () {
            alert('Error while request..');
        }

    });
    
}

function consultarPersona() {

    var id = $('#id').val();

    var url = '/persona/consultaPersonaPorId';
    $.ajax({
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        url: url,
        cache: false,
        data: JSON.stringify(id),
        success: function (persona) {
            $('#id').val(persona.id);
            $('#nombre').val(persona.nombre);
            $('#apellido').val(persona.apellido);
            $('#direccion').val(persona.direccion);
            alert("Se inserto producto correctamente");
        },
        error: function () {
            alert('Error while request..');
        }

    });
}

function personasGrid(){
    
    $("#personasGrid").jqGrid({
   	url:'/persona/consultarPersonas',
	datatype: "json",
   	colNames:['ID','Nombre', 'Apellido', 'Direccion'],
   	colModel:[
   		{name:'id', width:55},
   		{name:'nombre', width:90},
   		{name:'apellido', width:100},
   		{name:'direccion', width:80, align:"right"}		
   	],
        pager: '#paginadorPersonas',
   	rowNum:5,
        width: 400,
   	rowList:[5,10,15],
        loadonce: true,
        caption:"Consultar Personas"
    });
    //$("#personasGrid").jqGrid('navGrid','#paginadorPersonas',{edit:false,add:false,del:false});
}


