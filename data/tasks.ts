export interface Task {
    id: string;
    title: string;
    description: string;
    status: string;
    person: string;
  }

  export const tasks: Task[] = [
    { id: "1", title: "Initial Task", description: "This is the initial task", status: "1", person: "John Doe" },
    { id: "2", title: "Second Task", description: "This is the second task", status: "2", person: "Jane Smith" },
    { id: "3", title: "Review Task", description: "This task is under review", status: "3", person: "Alice Johnson" },
    { id: "4", title: "Completed Task", description: "This task is completed", status: "4", person: "Bob Brown" }
  ];