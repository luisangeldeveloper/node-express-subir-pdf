const validarArchivo = require('../middlewares/validar-archivo');
const validFields = require('./valid-fields');
const validJWT = require('./valid-jwt');

module.exports = {
  ...validFields,
  ...validJWT,
  ...validarArchivo,
}