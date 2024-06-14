const { registrar, leer } = require('./operaciones');

const [, , operacion, ...args] = process.argv;

switch (operacion) {
    case 'registrar':
        const [nombre, edad, animal, color, enfermedad] = args;
        registrar(nombre, edad, animal, color, enfermedad);
        break;
    case 'leer':
        leer();
        break;
    default:
        console.log('Operación no válida');
        break;
};