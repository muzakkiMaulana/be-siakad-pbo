import { Module } from '@nestjs/common';
import { MataKuliahService } from './mata-kuliah.service';
import { MataKuliahController } from './mata-kuliah.controller';

@Module({
  controllers: [MataKuliahController],
  providers: [MataKuliahService],
})
export class MataKuliahModule {}
