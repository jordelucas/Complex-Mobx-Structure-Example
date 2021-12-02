import { observable } from 'mobx';
import { createContext } from 'react';

class Dependent {
  @observable name: string;
  @observable relationship: string;

  constructor() {
    this.name = '';
    this.relationship = '';
  }
}

class Employee {
  @observable name: string;
  @observable role: string;
  @observable created_at: string;
  @observable dependents: Dependent[];

  constructor() {
    this.name = '';
    this.role = '';
    this.created_at = '';
    this.dependents = [];
  }
}

class EmployeeStore {
  @observable items: Employee[];

  constructor() {
    this.items = []
  }
}

export const EmployeeStoreContext = createContext(new EmployeeStore());
