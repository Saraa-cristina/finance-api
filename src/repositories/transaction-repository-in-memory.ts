import { PrismaClient } from '@prisma/client'; 

const prisma = new PrismaClient();

export class TransactionRepository {
  async create(data: {
    description?: string;
    amount: number;
    type: string;
    date: Date;
    categoryId?: string;
    bankId?: string;
  }) {
    return await prisma.transaction.create({
      data,
      include: {
        category: true,
        bank: true,
      },
    });
  }

  async findAll() {
    return await prisma.transaction.findMany({
      include: {
        category: true,
        bank: true,
      },
      orderBy: {
        date: 'desc',
      },
    });
  }

  async findById(id: string) {
    return await prisma.transaction.findUnique({
      where: { id },
      include: {
        category: true,
        bank: true,
      },
    });
  }

  async update(id: string, data: Partial<{
    description?: string;
    amount?: number;
    type?: string;
    date?: Date;
    categoryId?: string;
    bankId?: string;
  }>) {
    return await prisma.transaction.update({
      where: { id },
      data,
      include: {
        category: true,
        bank: true,
      },
    });
  }

  async delete(id: string) {
    return await prisma.transaction.delete({
      where: { id },
    });
  }
}