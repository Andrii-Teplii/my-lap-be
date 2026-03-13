import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, Laptop } from '@prisma/client';

@Injectable()
export class LaptopsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.LaptopCreateInput): Promise<Laptop> {
    return this.prisma.laptop.create({ data });
  }

  async findAll(): Promise<Laptop[]> {
    return this.prisma.laptop.findMany();
  }

  async findOne(id: number): Promise<Laptop> {
    const laptop = await this.prisma.laptop.findUnique({
      where: { id },
    });

    if (!laptop) {
      throw new NotFoundException(`Ноутбук з ID ${id} не знайдено`);
    }

    return laptop;
  }

  async update(id: number, data: Prisma.LaptopUpdateInput): Promise<Laptop> {
    return this.prisma.laptop.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.laptop.delete({
      where: { id },
    });
  }
}
