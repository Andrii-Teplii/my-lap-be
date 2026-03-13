import { Module } from '@nestjs/common';
import { LaptopsService } from './laptops.service';
import { LaptopsController } from './laptops.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [LaptopsController],
  providers: [LaptopsService, PrismaService],
})
export class LaptopsModule {}
