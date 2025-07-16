import { PrismaClient } from '@prisma/client'; 

const prisma = new PrismaClient();

export class CategoryRepository {
  async create(name: string, icon?: string) {
    return await prisma.category.create({
      data: { name, icon },
    });
  }

  async findAll() {
    return await prisma.category.findMany({
      include: { Transaction: true },
    });
  }

  async findById(id: string) {
    return await prisma.category.findUnique({
      where: { id },
      include: { Transaction: true },
    });
  }

  async update(id: string, data: { name?: string; icon?: string }) {
    return await prisma.category.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return await prisma.category.delete({
      where: { id },
    });
  }
}