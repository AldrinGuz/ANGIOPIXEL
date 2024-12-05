var especialidades = [
    { id: 1, nombre: "Cardiología"},
    { id: 2, nombre: "Dermatología"},
    { id: 3, nombre: "Oftanmología"},
    { id: 4, nombre: "Neurología"}
];

var centros = [
    { id: 1, nombre: "Hosp. Alicante"},
    { id: 2, nombre: "Hosp. Valencia"},
    { id: 3, nombre: "Hosp. Castellon"}
];

var medicos = [
    { id: 1, nombre: "usuario", apellidos:"1", login:"map1", password: "map1", especialidad:0, centro:1 },
    { id: 2, nombre: "usuario", apellidos:"2", login:"map2", password: "map2", especialidad:0, centro:1 },
    { id: 3, nombre: "usuario", apellidos:"3", login:"me1", password: "me1", especialidad:1, centro:1 },
    { id: 4, nombre: "usuario", apellidos:"4", login:"me2", password: "me2", especialidad:1, centro:2 },
    { id: 5, nombre: "usuario", apellidos:"5", login:"me3", password: "me3", especialidad:2, centro:3 },
    { id: 6, nombre: "usuario", apellidos:"6", login:"me4", password: "me4", especialidad:2, centro:3 }
];

var expedientes = [
    { id: 1, map: 1, me: 0,  especialidad: 1, sip: 11111111, nombre: "Homer", apellidos: "Simpson", fecha_nacimiento:"1970-02-15", genero:"H", observaciones:"Tiene una presión arterial elevada, episodio previo de enfermedad cardiaca y accidente cerebrovascular, cirrosis y otros problemas de hígado.", solicitud:"", respuestas:"", fecha_creacion:"10/3/2222", fecha_asignacion:"", fecha_resolucion:""},
    { id: 2, map: 1, me: 0,  especialidad: 2, sip: 11111111, nombre: "Homer", apellidos: "Simpson", fecha_nacimiento:"1970-02-15", genero:"H", observaciones:"Tiene una presión arterial elevada, episodio previo de enfermedad cardiaca y accidente cerebrovascular, cirrosis y otros problemas de hígado.", solicitud:"", respuestas:"", fecha_creacion:"10/3/2222", fecha_asignacion:"", fecha_resolucion:""},
    { id: 3, map: 1, me: 3,  especialidad: 1, sip: 11111111, nombre: "Homer", apellidos: "Simpson", fecha_nacimiento:"1970-02-15", genero:"H", observaciones:"Tiene una presión arterial elevada, episodio previo de enfermedad cardiaca y accidente cerebrovascular, cirrosis y otros problemas de hígado.", solicitud:"", respuestas:"", fecha_creacion:"10/3/2222", fecha_asignacion:"", fecha_resolucion:""},
    { id: 4, map: 1, me: 5,  especialidad: 2, sip: 11111111, nombre: "Homer", apellidos: "Simpson", fecha_nacimiento:"1970-02-15", genero:"H", observaciones:"Tiene una presión arterial elevada, episodio previo de enfermedad cardiaca y accidente cerebrovascular, cirrosis y otros problemas de hígado.", solicitud:"", respuestas:"", fecha_creacion:"10/3/2222", fecha_asignacion:"", fecha_resolucion:""},
    { id: 5, map: 2, me: 0,  especialidad: 1, sip: 11111111, nombre: "Homer", apellidos: "Simpson", fecha_nacimiento:"1970-02-15", genero:"H", observaciones:"Tiene una presión arterial elevada, episodio previo de enfermedad cardiaca y accidente cerebrovascular, cirrosis y otros problemas de hígado.", solicitud:"", respuestas:"", fecha_creacion:"10/3/2222", fecha_asignacion:"", fecha_resolucion:""},
    { id: 6, map: 2, me: 0,  especialidad: 2, sip: 11111111, nombre: "Homer", apellidos: "Simpson", fecha_nacimiento:"1970-02-15", genero:"H", observaciones:"Tiene una presión arterial elevada, episodio previo de enfermedad cardiaca y accidente cerebrovascular, cirrosis y otros problemas de hígado.", solicitud:"", respuestas:"", fecha_creacion:"10/3/2222", fecha_asignacion:"", fecha_resolucion:""},
    { id: 7, map: 2, me: 4,  especialidad: 1, sip: 11111111, nombre: "Homer", apellidos: "Simpson", fecha_nacimiento:"1970-02-15", genero:"H", observaciones:"Tiene una presión arterial elevada, episodio previo de enfermedad cardiaca y accidente cerebrovascular, cirrosis y otros problemas de hígado.", solicitud:"", respuestas:"", fecha_creacion:"10/3/2222", fecha_asignacion:"", fecha_resolucion:""},
    { id: 8, map: 2, me: 6,  especialidad: 2, sip: 11111111, nombre: "Homer", apellidos: "Simpson", fecha_nacimiento:"1970-02-15", genero:"H", observaciones:"Tiene una presión arterial elevada, episodio previo de enfermedad cardiaca y accidente cerebrovascular, cirrosis y otros problemas de hígado.", solicitud:"", respuestas:"", fecha_creacion:"10/3/2222", fecha_asignacion:"", fecha_resolucion:""}
];

var mensajes = [
    
];

module.exports.esp=especialidades;
module.exports.cent=centros;
module.exports.med=medicos;
module.exports.exp=expedientes;
module.exports.men=mensajes;