import { BankRepository } from '../repositories/bank-repository';

const repo = new BankRepository();

export const createBank = (data: {
  ispb: string;
  name: string;
  code: string;
  fullName: string;
}) => repo.create(data);

export const getBanks = () => repo.findAll();
export const getBankById = (id: string) => repo.findById(id);
export const updateBank = (id: string, data: Partial<{
  ispb: string;
  name: string;
  code: string;
  fullName: string;
}>) => repo.update(id, data);
export const deleteBank = (id: string) => repo.delete(id);
