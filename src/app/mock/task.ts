import { Task } from '@/types/task';

export const mockTask: Task[] = [
  {
    id: '1',
    title: 'Task 1',
    dueDate: new Date('2023-10-01'),
    description: 'This is the first task.',
    completed: false,
    userId: '1',
  },
  {
    id: '2',
    title: 'Task 2',
    dueDate: new Date('2023-10-02'),
    description: 'This is the second task.',
    completed: false,
    userId: '2',
  },
  {
    id: '3',
    title: 'Task 3',
    dueDate: new Date('2023-10-03'),
    description: 'This is the third task.',
    completed: false,
    userId: '1',
  },
  {
    id: '4',
    title: 'Task 4',
    dueDate: new Date('2023-10-04'),
    description: 'This is the fourth task.',
    completed: false,
    userId: '3',
  },
];
