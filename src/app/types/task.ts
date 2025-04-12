export type Task = {
  id: string;
  title: string;
  dueDate: Date;
  description: string;
  completed: boolean;
  userId: string;
};

export type TaskFormData = {
  title: string;
  description: string;
  dueDate: Date;
};
