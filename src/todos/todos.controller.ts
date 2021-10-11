import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Header,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  @Header('Access-Control-Allow-Origin', '*')
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }

  @Get()
  @Header('Access-Control-Allow-Origin', '*')
  findAll() {
    return this.todosService.findAll();
  }

  @Get(':id')
  @Header('Access-Control-Allow-Origin', '*')
  findOne(@Param('id') id: string) {
    return this.todosService.findOne(+id);
  }

  @Put(':id')
  @Header('Access-Control-Allow-Origin', '*')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todosService.update(+id, updateTodoDto);
  }

  @Delete(':id')
  @Header('Access-Control-Allow-Origin', '*')
  remove(@Param('id') id: string) {
    return this.todosService.remove(+id);
  }
}
