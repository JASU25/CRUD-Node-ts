const { Router} = require('express');
const {check} = require('express-validator');
const {medicoGet,medicoPost,medicoDelete,medicoActivo,medicoPut,medicoIdGet} = require('../controllers/medicos');
const { validarCampos,validarPassword,validarJWT } = require('../middlewares');
const {existeMedicoPorId} = require('../helpers/db-validators')


const router = Router();

router.post('/',[
    validarJWT,
    check('nombres', 'El nombre es obligatorio').isString().not().isEmpty(),
    check('apellidos', 'El apellidos es obligatorio').isString().not().isEmpty(),
    check('correo', 'El correo es obligatorio').isEmail(),
    check('sexo').isIn(['F', 'M']),
    check('activo', 'El nombre es obligatorio').isBoolean(),
    check('cedula', 'La cedula es obligatorio').not().isEmpty(),
    check('especialidad', 'La especialidad es obligatorio').isString().not().isEmpty().isLength({min:6}),
    validarPassword,
    validarCampos
],medicoPost);


router.get('/',[validarJWT],medicoGet);

router.get('/:id',[
  validarJWT,
  check('id', 'El id es obligatorio').not().isEmpty(),
  validarCampos
],medicoIdGet);

  router.delete('/:id',[
    validarJWT,
    // check('id', 'El id es obligatorio').not().isEmpty(),
    // check('id').custom(existeMedicoPorId),
    // validarCampos
  ], medicoDelete);

  router.put('/activo/',[
    validarJWT,
    check('id', 'El id es obligatorio').not().isEmpty(),
    check('id').custom(existeMedicoPorId),
    check('activo').isBoolean(),
    validarCampos
  ], medicoActivo);

  router.put('/:id',[
    validarJWT,
    // check('id', 'El id es obligatorio').not().isEmpty(),
    // check('id').custom(existeMedicoPorId),
    // validarCampos
  ], medicoPut);
  




module.exports = router;
