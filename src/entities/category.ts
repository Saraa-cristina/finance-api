import { randomUUID } from "node:crypto";


type TransactionCategory = 'income' | 'expense';

export class Entity {
  id: string;
  updatedAt: Date | null;
  constructor(id?: string, updatedAt?: Date | null) {
    this.id = id || randomUUID();
    this.updatedAt = updatedAt || null;
  }
}



export class Category extends Entity {
  icon?: string | null;
  name: string;
  constructor(name: string, icon?: string | null, id?: string, updatedAt?: Date | null) {
    super(id, updatedAt);
    this.icon = icon;
    this.name = name;
  }
}

