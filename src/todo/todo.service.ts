import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  async create(createTodoDto: CreateTodoDto) {
    
    const newTodo = Todo.create(createTodoDto);
    return await newTodo.save()
  }

  async findAll() {
    return await Todo.findAndCount();
  }

  async findOne(id: number) {
    return await Todo.findOne({id})
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    return await Todo.update(id, updateTodoDto);
  }

  async remove(id: number) {
    return Todo.delete({id});
  }
}
