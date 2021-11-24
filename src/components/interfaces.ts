export interface ITask {
  id: string;
  task: string;
  created: ITaskTime;
  body?: ITaskBody;
  deadline?: Date | string;
  duration?: number;
  priority: string;
  completed: boolean;
}

export interface ITaskTime {
  Day: string;
  Time: string;
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
