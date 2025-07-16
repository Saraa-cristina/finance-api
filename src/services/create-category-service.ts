import { CategoryRepository } from '../repositories/category-repository';

const repo = new CategoryRepository();

export const createCategory = async (name: string, icon?: string) => {
  return await repo.create(name, icon);
};

export const getCategories = async () => {
  return await repo.findAll();
};

export const getCategoryById = async (id: string) => {
  return await repo.findById(id);
};

export const updateCategory = async (
  id: string,
  data: { name?: string; icon?: string }
) => {
  return await repo.update(id, data);
};

export const deleteCategory = async (id: string) => {
  return await repo.delete(id);
};
