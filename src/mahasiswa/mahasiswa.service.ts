import { Injectable } from '@nestjs/common';
import { Mahasiswa } from './entities/mahasiswa.entity';
import { CreateMahasiswaDto } from './dto/create-mahasiswa.dto';
import { UpdateMahasiswaDto } from './dto/update-mahasiswa.dto';

@Injectable()
export class MahasiswaService {
  private data: Mahasiswa[] = [];
  create(dto: CreateMahasiswaDto): Mahasiswa {
    const newMhs = new Mahasiswa(
      dto.nim,
      dto.nama,
      dto.prodi,
      dto.angkatan,
      dto.email,
    );
    this.data.push(newMhs);
    return newMhs;
  }
  findAll(): Mahasiswa[] {
    return this.data;
  }
  findOne(nim: string): Mahasiswa | undefined {
    return this.data.find((m) => m.nim === nim);
  }
  update(nim: string, dto: UpdateMahasiswaDto): Mahasiswa | null {
    if (!dto.nim || !dto.nama || !dto.prodi || !dto.email || !dto.angkatan) {
      throw new Error('Semua field wajib diisi untuk update');
    }
    const index = this.data.findIndex((m) => m.nim === nim);
    if (index === -1) return null;
    const updated = new Mahasiswa(
      dto.nim,
      dto.nama,
      dto.prodi,
      dto.angkatan,
      dto.email,
    );
    this.data[index] = updated;
    return updated;
  }
  remove(nim: string): Mahasiswa | null {
    const index = this.data.findIndex((m) => m.nim === nim);
    if (index === -1) return null;
    const deleted = this.data[index];
    this.data.splice(index, 1);
    return deleted;
  }
}
