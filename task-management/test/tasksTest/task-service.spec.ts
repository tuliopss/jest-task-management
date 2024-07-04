import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './../../src/tasks/tasks.service';
import { TaskStatus } from './../../src/tasks/task.model';
import { v4 as uuid } from 'uuid';

describe('TaskService Tests', () => {
  let tasksService: TasksService;

  // let tasksList = [
  //   {
  //     id: uuid(),
  //     title: 'test1',
  //     description: 'description test',
  //     status: TaskStatus.OPEN,
  //   },
  //   {
  //     id: uuid(),
  //     title: 'test2',
  //     description: 'description test',
  //     status: TaskStatus.OPEN,
  //   },
  //   {
  //     id: uuid(),
  //     title: 'tes3t',
  //     description: 'description test',
  //     status: TaskStatus.OPEN,
  //   },
  // ];

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      providers: [TasksService],
    }).compile();

    tasksService = moduleFixture.get<TasksService>(TasksService);

    tasksService.clearTasks();
  });

  it('Should be defined', () => {
    expect(tasksService).toBeDefined();
  });

  it('should create a task', () => {
    const newTask = {
      title: 'testing',
      description: 'describe',
      // status: TaskStatus.OPEN,
    };

    const taskCreated = tasksService.createTask(newTask);

    expect(taskCreated).toHaveProperty('id');
    expect(taskCreated.title).toBe(newTask.title);
    expect(taskCreated.description).toBe(newTask.description);
    expect(taskCreated.status).toBe(TaskStatus.OPEN);
  });

  it('should get all tasks', () => {
    const taskList = [
      tasksService.createTask({
        title: 'testing',
        description: 'describe',
      }),
      tasksService.createTask({
        title: 'testing2',
        description: 'describe2',
      }),
    ];
    const result = tasksService.getAllTasks();
    console.log('resul: ', result);
    console.log('taskList: ', taskList);

    expect(result).toEqual(taskList);
  });
});
