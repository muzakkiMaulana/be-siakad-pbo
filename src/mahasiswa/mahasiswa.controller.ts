import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { MahasiswaService } from './mahasiswa.service';
import { CreateMahasiswaDto } from './dto/create-mahasiswa.dto';
import { UpdateMahasiswaDto } from './dto/update-mahasiswa.dto';
@Controller('mahasiswa')
export class MahasiswaController {
  constructor(private readonly service: MahasiswaService) {}
  @Get()
  findAll() {
    return this.service.findAll();
  }
  @Get(':nim')
  findOne(@Param('nim') nim: string) {
    const mhs = this.service.findOne(nim);
    if (!mhs) {
      throw new NotFoundException(
        `Mahasiswa dengan NIM ${nim} tidak ditemukan`,
      );
    }
    return mhs;
  }
  @Post()
  create(@Body() dto: CreateMahasiswaDto) {
    return this.service.create(dto);
  }
  @Put(':nim')
  update(@Param('nim') nim: string, @Body() dto: UpdateMahasiswaDto) {
    try {
      const updated = this.service.update(nim, dto);
      if (!updated) {
        throw new NotFoundException(
          `Mahasiswa dengan NIM ${nim} tidak ditemukan`,
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
  @Delete(':nim')
  remove(@Param('nim') nim: string) {
    const deleted = this.service.remove(nim);
    if (!deleted) {
      throw new NotFoundException(
        `Mahasiswa dengan NIM ${nim} tidak ditemukan`,
      );
    }
    return deleted;
  }
}
