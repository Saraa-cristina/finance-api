import { Router } from 'express';
import * as TransactionController from '../controllers/create-transaction-controller';

const router = Router();

router.post('/', TransactionController.create);
router.get('/', TransactionController.getAll);
router.get('/:id', TransactionController.getById);
router.put('/:id', TransactionController.update);
router.delete('/:id', TransactionController.remove);

export default router;
