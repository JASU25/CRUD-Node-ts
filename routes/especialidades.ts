import { Router } from 'express';
import {check} from 'express-validator';
import {especialidadIdGet,especialidadGet,especialidadPost,especialidadDelete,especialidadPut}  from'../controllers/especialidades' ;
import { validarCampos,validarJWT} from '../middlewares';


const router = Router();

router.post('/',[
    validarJWT,
    check('nombreEspecialidad', 'El nombre es obligatorio').isString().not().isEmpty(),
    validarCampos
],especialidadPost);

router.get('/:id',especialidadIdGet);

router.get('/',especialidadGet);

router.delete('/:id',[validarJWT,],especialidadDelete);


  router.put('/:id',[validarJWT], especialidadPut);
  

export default  router;