import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.model';
import { CreateTaskDTO } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  // The modifier `private`allow us to create a property `tasksService`
  constructor(private tasksService: TasksService) {}

  // Get All Tasks
  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  // Create a Task
  @Post()
  createTask(@Body() createTaskDTO: CreateTaskDTO): Task {
    // console.log(createTaskDTO);
    return this.tasksService.createTask(createTaskDTO);
  }

  // Get a Task
  @Get('/:id')
  getTasksById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }
}
