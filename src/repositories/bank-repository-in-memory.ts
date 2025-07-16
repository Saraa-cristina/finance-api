import { PrismaClient } from '@prisma/client'; 

const prisma = new PrismaClient();

export class BankRepository {
  async create(data: {
    ispb: string;
    name: string;
    code: string;
    fullName: string;
  }) {
    return await prisma.bank.create({ data });
  }

  async findAll() {
    return await prisma.bank.findMany({ include: { Transaction: true } });
  }

  async findById(id: string) {
    return await prisma.bank.findUnique({
      where: { id },
      include: { Transaction: true },
    });
  }

  async update(id: string, data: Partial<{
    ispb: string;
    name: string;
    code: string;
    fullName: string;
  }>) {
    return await prisma.bank.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return await prisma.bank.delete({
      where: { id },
    });
  }
}