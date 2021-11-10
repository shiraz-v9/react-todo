export interface ITask {
  id: number;
  task: string;
  created: string;
  createdTime: string;
  body?: ITaskBody;
  deadline?: string;
  duration?: number;
  priority: string;
}

export interface ITaskBody {
  type?: string;
  text?: string;
}

export interface RBC_Event {
  title: string;
  start: Date;
  end: Date;
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
