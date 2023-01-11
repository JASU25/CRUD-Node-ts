

import { Router } from 'express';
import {check} from 'express-validator';
import { validarCampos} from '../middlewares';
import { login } from '../controllers/auth';

const router = Router();

router.post('/',[
    check('correo', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
], login  );


export default router;