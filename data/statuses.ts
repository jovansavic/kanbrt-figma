export interface Status {
    id: string;
    name: string;
    tasks: string[];
  }
  
  export const statuses: Status[] = [
    { id: "1", name: "Open", tasks: ["1"] },
    { id: "2", name: "In Progress", tasks: ["2"] },
    { id: "3", name: "In Review", tasks: ["3"] },
    { id: "4", name: "Done", tasks: ["4"] }
  ];
  