//Info de los cursos
const{cursos}= require('./infoCursos');

//Función para imprimir la info de un curso
let info=(cursos,i)=>{
	setTimeout(function(){
		console.log('\nEl curso de '+cursos[i].nombre+' ('+cursos[i].alias+') con id N°'+cursos[i].id+ ' tiene un costo de $'+cursos[i].valor+' con una duración de '+cursos[i].duracion+' horas\n');
	},i*2000);
}

//Función para imprimir todos los cursos
let imprimirCursos=(cursos)=>{
	var i=0;
	while(i<cursos.length){
		info(cursos,i);
		i+=1;
	}
	return i;	
}

//Info del estudiante
const{opciones,argv}= require('./estudiante');

//Para el archivo
const express = require('express')
const app = express()

let crearArchivo=(argv,informacion)=>{
	textoArchivo= '<b> Nombre: </b>'+argv.n+'<br> <b> Cédula: </b> '+argv.x+'<br>'+
		   '<b> IdCurso: </b>'+argv.i+'<br> <b> Nombre del curso: </b>'+informacion.nombre+' <br>'+
		   '<b> Costo del Curso: </b>'+informacion.valor+' <br> <b> Duración del Curso:</b>'+informacion.duracion+' horas ';
	 
	app.get('/', function (req, res) {
		res.send(textoArchivo)
  	})
  	app.listen(3000)
}

//Presentar los cursos y opción de inscripción
let cursosPrincipal=(cursos)=>{
	imprimirCursos(cursos);

	setTimeout(function(){
		console.log('Si desea conocer los datos necesarios para inscribir un curso esriba sin comillas: "node principal inscribir"');	
	},4000);//Número de segundo que tarda en imprimirse el último curso
}

//PRINCIPAL

if(typeof(argv.i)!='undefined'){

	let informacion=cursos.find(function(identificacion){
		return identificacion.id==argv.i})

		let validador=typeof(informacion);

		if(validador=='object'){
			console.log('\n'+argv.n+' con cédula N°'+argv.x+' se ha inscrito en el curso de '+informacion.nombre+' con id N°'+informacion.id+' que cuesta $'+informacion.valor+' y tiene una duración de '+informacion.duracion+' horas');			
			console.log('\nSi desea visualizar la información completa escriba en su navegador: "localhost:3000"');
			console.log('Si desea ejecutar más comandos, presione las teclas "Ctrl+C"');
			console.log('\nNOTA IMPORTANTE: Una vez presione las teclas "Ctrl+C" la información almacenada dejará de existir');
			crearArchivo(argv,informacion);
		}
		else{
			console.log('El curso con id N°:'+ argv.i + ' no se ha encontrado');
			cursosPrincipal(cursos);
		}
	
}
else{
	cursosPrincipal(cursos);
}
