import { Request, Response } from 'express';
import * as CategoryService from '../services/create-category-service';

export const create = async (req: Request, res: Response) => {
  const { name, icon } = req.body;
  const category = await CategoryService.createCategory(name, icon);
  res.status(201).json(category);
};

export const getAll = async (_req: Request, res: Response) => {
  const categories = await CategoryService.getCategories();
  res.json(categories);
};

export const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const category = await CategoryService.getCategoryById(id);
  res.json(category);
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, icon } = req.body;
  const category = await CategoryService.updateCategory(id, { name, icon });
  res.json(category);
};

export const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  await CategoryService.deleteCategory(id);
  res.status(204).send();
};
