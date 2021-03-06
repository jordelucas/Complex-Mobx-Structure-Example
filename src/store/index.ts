import { createContext } from 'react';
import { makeAutoObservable, observable } from 'mobx';
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
  id: string;
  name: string;
  role: string;
  created_at: string;
  dependents: Map<string, Dependent>;

  constructor(id: string, name: string, role: string, created_at: string) {
    makeAutoObservable(this)

    this.id = id;
    this.name = name;
    this.role = role;
    this.created_at = created_at;
    this.dependents = new Map<string, Dependent>();
  }

  addDependent = (name: string, relationship: string) => {
    const newDependent = new Dependent(uuid(), name, relationship);

    this.dependents.set(newDependent.id, newDependent);
  }

  updateDependent = (id: string, name: string, relationship: string) => {
    const updatedDependent = new Dependent(id, name, relationship);

    this.dependents.set(id, updatedDependent);
  }

  deleteDependent = (id: string) => {
    this.dependents.delete(id);
  }

  get dependentsList() {
    return Array.from(this.dependents.values());
  }
}

class EmployeeStore {
  employees = new Map<string, Employee>();

  constructor() {
    makeAutoObservable(this)
  }

  addEmployee = (name: string, role: string, created_at: string) => {
    const newEmployee = new Employee(uuid(), name, role, created_at);

    this.employees.set(newEmployee.id, newEmployee);
  }
  
  addDependent = (id: string, name: string, relationship: string) => {
    const filteredEmployee = this.employees.get(id);

    if (filteredEmployee) filteredEmployee.addDependent(name, relationship)
  }

  updateDependent = (
    idEmployee: string,
    idDependent: string,
    name: string,
    relationship: string,
  ) => {
    const filteredEmployee = this.employees.get(idEmployee);

    if (filteredEmployee) 
      filteredEmployee.updateDependent(idDependent, name, relationship)
  }
  
  deleteDependent = (idEmployee: string, idDependent: string) => {
    const filteredEmployee = this.employees.get(idEmployee);

    if (filteredEmployee) filteredEmployee.deleteDependent(idDependent);
  }

  getEmployee = (id: string) => {
    return this.employees.get(id);
  }

  get employeesList() {
    return Array.from(this.employees.values());
  }
}

export const EmployeeStoreContext = createContext(new EmployeeStore());
