export interface TodoModel {
  id: number;
  content: string;
  state: TodoState;
}

export enum TodoState {
  Active,
  Completed
}
