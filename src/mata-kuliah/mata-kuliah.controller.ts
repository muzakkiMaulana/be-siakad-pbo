import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { MataKuliahService } from './mata-kuliah.service';
import { CreateMataKuliahDto } from './dto/create-mata-kuliah.dto';
import { UpdateMataKuliahDto } from './dto/update-mata-kuliah.dto';

@Controller('matakuliah')
export class MataKuliahController {
  constructor(private readonly mataKuliahService: MataKuliahService) {}

  @Post()
  create(@Body() createMataKuliahDto: CreateMataKuliahDto) {
    return this.mataKuliahService.create(createMataKuliahDto);
  }

  @Get()
  findAll() {
    return this.mataKuliahService.findAll();
  }

  @Get(':kode')
  findOne(@Param('kode') kode: string) {
    const matkul = this.mataKuliahService.findOne(kode);
    if (!matkul) {
      throw new NotFoundException(
        `Matakuliah dengan Kode ${kode} tidak ditemukan`,
      );
    }
    return matkul;
  }

  @Put(':kode')
  update(@Param('kode') kode: string, @Body() dto: UpdateMataKuliahDto) {
    try {
      const updated = this.mataKuliahService.update(kode, dto);
      if (!updated) {
        throw new NotFoundException(
          `Matakuliah dengan kode ${kode} tidak ditemukan`,
        );
      }

      return updated;
    } catch (error) {
      if (error instanceof Error) {
        throw new BadRequestException(error.message);
      }
      throw new BadRequestException('Terjadi kesalahan tak dikenal');
    }
  }

  @Delete(':kode')
  remove(@Param('kode') kode: string) {
    const deleted = this.mataKuliahService.remove(kode);
    if (!deleted) {
      throw new NotFoundException(
        `Matakuliah dengan kode ${kode} tidak ditemukan`,
      );
    }
    return deleted;
  }
}
