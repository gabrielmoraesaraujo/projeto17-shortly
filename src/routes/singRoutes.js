import express from "express";
import {sign_in} from '../controllers/singControllers.js';
import {sign_in} from '../controllers/singControllers.js';


const router= express.router();

router.post('/sign_in', sign_in );
router.post('/sign_up', sign_up);


export default router;