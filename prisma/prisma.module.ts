import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Цей декоратор зробить Prisma доступною всюди без повторних імпортів
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Обов'язково експортуємо, щоб інші бачили сервіс
})
export class PrismaModule {}
