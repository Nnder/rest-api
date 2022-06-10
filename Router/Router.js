import { Router } from "express";
import controller from "../Controller/Controller.js";
const router = new Router();


router.get('/users');
router.get('/users/:id');
router.post('/users', controller.create);
router.put('/users');
router.delete('users/:id');

export default router;