import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LaptopsService } from './laptops.service';
import { Prisma } from '@prisma/client';

@Controller('laptops')
export class LaptopsController {
  constructor(private readonly laptopsService: LaptopsService) {}

  @Post()
  create(@Body() data: Prisma.LaptopCreateInput) {
    return this.laptopsService.create(data);
  }

  @Get()
  findAll() {
    return this.laptopsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.laptopsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Prisma.LaptopUpdateInput) {
    return this.laptopsService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.laptopsService.remove(+id);
  }
}
