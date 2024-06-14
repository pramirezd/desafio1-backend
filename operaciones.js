const fs = require('fs');

const citasJSON = () => {
    return JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
};

const registrar = (nombre, edad, animal, color, enfermedad) => {
    let citas = citasJSON();
    let cita = { nombre, edad, animal, color, enfermedad };
    citas.push(cita);
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, ' '));
    console.log(`Se ha registrado la cita para ${nombre}`);
};

const leer = () => {
    if (citasJSON().length === 0) {
        console.log('No existen citas registradas');
    } else {
        citasJSON().forEach((cita, index) => {
            console.log(`Cita ${index + 1}:`);
            console.log(`Nombre: ${cita.nombre}`);
            console.log(`Edad: ${cita.edad}`);
            console.log(`Animal: ${cita.animal}`);
            console.log(`Color: ${cita.color}`);
            console.log(`Enfermedad: ${cita.enfermedad}`);
            console.log('------------------------');
        });
    }
};

module.exports = { registrar, leer };