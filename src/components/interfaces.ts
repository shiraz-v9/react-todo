export interface ITask {
  id: number;
  task: string;
  body?: ITaskBody;
  deadline: string;
  priority: string;
}

export interface ITaskBody {
  type?: string;
  text?: string;
}
