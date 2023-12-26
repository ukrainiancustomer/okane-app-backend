import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { AppService } from './app.service';
import { CreateDto } from './dto/create.dto';

@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:id')
  getHello(@Param('id', ParseIntPipe) id: number): number {
    return id;
  }

  @UsePipes(new ValidationPipe())
  @Post('/')
  create(@Body() dto: CreateDto) {
    console.log(dto);

    return dto.num;
  }
}
