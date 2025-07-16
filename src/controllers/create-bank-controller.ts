import { Request, Response } from 'express';
import * as BankService from '../services/create-bank-service';

export const create = async (req: Request, res: Response) => {
  const { ispb, name, code, fullName } = req.body;

  const bank = await BankService.createBank({ ispb, name, code, fullName });
  res.status(201).json(bank);
};

export const getAll = async (_req: Request, res: Response) => {
  const banks = await BankService.getBanks();
  res.json(banks);
};

export const getById = async (req: Request, res: Response) => {
  const bank = await BankService.getBankById(req.params.id);
  res.json(bank);
};

export const update = async (req: Request, res: Response) => {
  const bank = await BankService.updateBank(req.params.id, req.body);
  res.json(bank);
};

export const remove = async (req: Request, res: Response) => {
  await BankService.deleteBank(req.params.id);
  res.status(204).send();
};
