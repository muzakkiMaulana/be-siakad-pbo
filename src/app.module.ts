import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MahasiswaModule } from './mahasiswa/mahasiswa.module';
import { MahasiswaController } from './mahasiswa/mahasiswa.controller';
import { MahasiswaService } from './mahasiswa/mahasiswa.service';
import { MataKuliahModule } from './mata-kuliah/mata-kuliah.module';

@Module({
  imports: [MahasiswaModule, MataKuliahModule],
  controllers: [AppController, MahasiswaController],
  providers: [AppService, MahasiswaService],
})
export class AppModule {}
