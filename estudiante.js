//Información de estudiantes
const opciones={

	//Identificación del curso
	idCurso:{
		demand:true,
		alias:'i'
	},

	//Nombre del estudiante
	nombre:{
		demand:true,
		alias:'n'
	},

	//Cédula del estudiante
	cedula:{
		demand:true,
		alias:'x'
	}
}

const argv = require('yargs')
			.command('inscribir','Inscribir un curso',opciones)
			.argv

module.exports={
	opciones,
	argv
};
