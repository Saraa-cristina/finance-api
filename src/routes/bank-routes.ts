import { Router } from 'express';
import * as BankController from '../controllers/create-bank-controller';

const router = Router();

router.post('/', BankController.create);
router.get('/', BankController.getAll);
router.get('/:id', BankController.getById);
router.put('/:id', BankController.update);
router.delete('/:id', BankController.remove);

export default router;
