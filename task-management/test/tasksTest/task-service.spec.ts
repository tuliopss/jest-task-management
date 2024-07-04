import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './../../src/tasks/tasks.service';
import { TaskStatus } from './../../src/tasks/task.model';
import { v4 as uuid } from 'uuid';

describe('TaskService Tests', () => {
  let tasksService: TasksService;

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

    expect(result).toEqual(taskList);
  });

  it('should get a task by id', () => {
    const newTask = tasksService.createTask({
      title: 'testing',
      description: 'describe',
      // status: TaskStatus.OPEN,
    });

    const task = tasksService.getTaskById(newTask.id);

    expect(task).toBe(newTask);
  });

  it('should update a task status', () => {
    const newTask = tasksService.createTask({
      title: 'testing',
      description: 'describe',
    });

    const taskUpdatedDone = tasksService.updateTaskStatus(
      newTask.id,
      TaskStatus.DONE,
    );

    expect(taskUpdatedDone.status).toBe(TaskStatus.DONE);

    const taskUpdatedInProgress = tasksService.updateTaskStatus(
      newTask.id,
      TaskStatus.IN_PROGRESS,
    );
    expect(taskUpdatedInProgress.status).toBe(TaskStatus.IN_PROGRESS);
  });

  it('Should delete a task', () => {
    const newTask = tasksService.createTask({
      title: 'testing',
      description: 'describe',
    });

    const taskToDelete = tasksService.deleteTaskById(newTask.id);

    expect(taskToDelete).toBeUndefined();
  });
});
