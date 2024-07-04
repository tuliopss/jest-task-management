import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './../../src/tasks/tasks.controller';
import { TasksService } from './../../src/tasks/tasks.service';
import { v4 as uuid } from 'uuid';
import { TaskStatus } from './../../src/tasks/task.model';

describe('TaskController Test', () => {
  let taskController: TasksController;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [TasksService],
    }).compile();

    //taskController = moduleFixture.get<TasksController>(TasksController);
    taskController = moduleFixture.get<TasksController>(TasksController);
  });

  it('Should be defined', () => {
    expect(taskController).toBeDefined();
  });
});
