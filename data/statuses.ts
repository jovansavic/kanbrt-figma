export interface Status {
    id: string;
    name: string;
    tasks: string[];
  }

  const STATUSES_FOR_MOCKUP: Status[] = [
    {
        "id": "1",
        "name": "Open",
        "tasks": ["1", "5", "9", "13", "17", "21"]
    },
    {
        "id": "2",
        "name": "In Progress",
        "tasks": ["2", "6", "10", "14", "18", "22"]
    },
    {
        "id": "3",
        "name": "In Review",
        "tasks": ["3", "7", "11", "15", "19", "23"]
    },
    {
        "id": "4",
        "name": "Done",
        "tasks": ["4", "8", "12", "16", "20", "24"]
    }
]

const STATUSES_FOR_DEV: Status[] = [
  { id: "1", name: "Open", tasks: ["1"] },
  { id: "2", name: "In Progress", tasks: ["2"] },
  { id: "3", name: "In Review", tasks: ["3"] },
  { id: "4", name: "Done", tasks: ["4"] }
];

export const statuses: Status[] = STATUSES_FOR_MOCKUP;
  