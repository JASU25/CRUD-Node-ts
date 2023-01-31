import { Router } from 'express';
import {check} from 'express-validator';
import {medicoGet,medicoIdGet,medicoPost,medicoDelete,medicoActivo,medicoPut}  from'../controllers/medicos' ;
import { validarCampos,validarPassword,validarJWT} from '../middlewares';


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


router.get('/:id',medicoIdGet);

router.get('/',medicoGet);

  router.delete('/:id',[validarJWT,], medicoDelete);

  router.put('/activo/:id',[
    validarJWT,
    check('activo').isBoolean(),
    validarCampos
  ], medicoActivo);

  router.put('/:id',[validarJWT], medicoPut);
  

export default  router;