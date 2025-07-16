import { Router } from 'express';
import * as CategoryController from '../controllers/create-category-controller';

const router = Router();

router.post('/', CategoryController.create);
router.get('/', CategoryController.getAll);
router.get('/:id', CategoryController.getById);
router.put('/:id', CategoryController.update);
router.delete('/:id', CategoryController.remove);

export default router;

