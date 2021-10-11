import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}
  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoRepository.save(createTodoDto);
  }

  async findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  async findOne(id: number): Promise<Todo> {
    return this.todoRepository.findOne(id);
  }

  async update(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    try {
      await this.todoRepository.update(id, updateTodoDto);
      return this.todoRepository.findOne(id);
    } catch (error) {
      return error;
    }
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.todoRepository.delete(id);
  }
}
