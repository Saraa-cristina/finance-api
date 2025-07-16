import { Request, Response } from 'express';
import * as TransactionService from '../services/create-transaction-service';

export const create = async (req: Request, res: Response) => {
  const transaction = await TransactionService.createTransaction(req.body);
  res.status(201).json(transaction);
};

export const getAll = async (_req: Request, res: Response) => {
  const transactions = await TransactionService.getTransactions();
  res.json(transactions);
};

export const getById = async (req: Request, res: Response) => {
  const transaction = await TransactionService.getTransactionById(req.params.id);
  res.json(transaction);
};

export const update = async (req: Request, res: Response) => {
  const transaction = await TransactionService.updateTransaction(req.params.id, req.body);
  res.json(transaction);
};

export const remove = async (req: Request, res: Response) => {
  await TransactionService.deleteTransaction(req.params.id);
  res.status(204).send();
};
