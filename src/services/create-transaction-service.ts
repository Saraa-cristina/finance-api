import { TransactionRepository } from '../repositories/transaction-repository';

const repo = new TransactionRepository();

export const createTransaction = (data: {
  description?: string;
  amount: number;
  type: string;
  date: Date;
  categoryId?: string;
  bankId?: string;
}) => repo.create(data);

export const getTransactions = () => repo.findAll();
export const getTransactionById = (id: string) => repo.findById(id);
export const updateTransaction = (id: string, data: any) => repo.update(id, data);
export const deleteTransaction = (id: string) => repo.delete(id);
