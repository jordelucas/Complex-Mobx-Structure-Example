import { createContext } from 'react';
import { action, makeAutoObservable, observable } from 'mobx';
import { v4 as uuid } from 'uuid';

class Dependent {
  @observable id: string;
  @observable name: string;
  @observable relationship: string;

  constructor(id: string, name: string, relationship: string) {
    this.id = id;
    this.name = name;
    this.relationship = relationship;
  }
}

class Employee {
  @observable id: string;
  @observable name: string;
  @observable role: string;
  @observable created_at: string;
  @observable dependents: Map<string, Dependent>;

  constructor(id: string, name: string, role: string, created_at: string) {
    this.id = id;
    this.name = name;
    this.role = role;
    this.created_at = created_at;
    this.dependents = new Map<string, Dependent>();
  }

  @action addDependent = (name: string, relationship: string) => {
    const newDependent = new Dependent(uuid(), name, relationship);

    this.dependents.set(newDependent.id, newDependent);
  }
}

class EmployeeStore {
  items = new Map<string, Employee>();

  constructor() {
    makeAutoObservable(this)
}

  addEmployee = (name: string, role: string, created_at: string) => {
    const newEmployee = new Employee(uuid(), name, role, created_at);

    this.items.set(newEmployee.id, newEmployee);
  }
  
  addDependent = (id: string, name: string, relationship: string) => {
    const temp = this.items.get(id);

    if (temp) temp.addDependent(name, relationship);
  }

  get employees() {
    return Array.from(this.items.values());
  }
}

export const EmployeeStoreContext = createContext(new EmployeeStore());
