/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString, IsEmail, IsNumber, Length } from 'class-validator';
export class UpdateMahasiswaDto {
  @IsString({ message: 'NIM harus berupa teks' })
  @Length(8, 10, { message: 'NIM harus terdiri dari 8 hingga 10 karakter' })
  nim: string;

  @IsString({ message: 'Nama tidak boleh kosong' })
  nama: string;

  @IsString({ message: 'Program studi harus berupa teks' })
  prodi: string;

  @IsNumber({}, { message: 'Angkatan harus berupa angka' })
  angkatan: number;

  @IsEmail({}, { message: 'Format email tidak valid' })
  email: string;
}
