import { Injectable } from '@nestjs/common';
import { CreateMataKuliahDto } from './dto/create-mata-kuliah.dto';
import { UpdateMataKuliahDto } from './dto/update-mata-kuliah.dto';
import { MataKuliah } from './entities/mata-kuliah.entity';

@Injectable()
export class MataKuliahService {
  private data: MataKuliah[] = [];
  create(dto: CreateMataKuliahDto) {
    const newMatkul = new MataKuliah(
      dto.kode,
      dto.nama,
      dto.sks,
      dto.semester,
      dto.jurusan,
    );
    this.data.push(newMatkul);
    return newMatkul;
  }

  findAll() {
    return this.data;
  }

  findOne(kode: string): MataKuliah | undefined {
    return this.data.find((m) => m.kode === kode);
  }

  update(kode: string, dto: UpdateMataKuliahDto): MataKuliah | null {
    if (!dto.kode || !dto.nama || !dto.sks || !dto.semester || !dto.jurusan) {
      throw new Error('Semua field wajib diisi untuk update');
    }
    const index = this.data.findIndex((m) => m.kode === kode);
    if (index === -1) return null;
    const updated = new MataKuliah(
      dto.kode,
      dto.nama,
      dto.sks,
      dto.semester,
      dto.jurusan,
    );
    this.data[index] = updated;
    return updated;
  }

  remove(kode: string): MataKuliah | null {
    const index = this.data.findIndex((m) => m.kode === kode);
    if (index === -1) return null;
    const deleted = this.data[index];
    this.data.splice(index, 1);
    return deleted;
  }
}
