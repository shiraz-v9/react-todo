export interface ITask {
  id: number;
  task: string;
  created: string;
  createdTime: string;
  body?: ITaskBody;
  deadline?: any;
  duration?: number;
  priority: string;
}

export interface ITaskBody {
  type?: string;
  text?: string;
}

export interface RBC_Event {
  title: string;
  start: any;
  end: any;
  allDay?: boolean;
  resource?: any;
}

export interface IDeadline {
  id?: number;
  task: string;
  created?: string;
  createdTime?: string;
  deadline: Date;
}
