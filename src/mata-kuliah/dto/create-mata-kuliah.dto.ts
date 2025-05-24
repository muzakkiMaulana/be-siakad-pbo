/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsString,
  IsNotEmpty,
  Length,
  MaxLength,
  IsInt,
  Min,
  IsDefined,
} from 'class-validator';
export class CreateMataKuliahDto {
  @IsDefined({ message: 'Kode harus disertakan' })
  @IsString({ message: 'Kode harus berupa teks' })
  @Length(2, 10, { message: 'Kode harus terdiri dari 2 hingga 10 karakter' })
  @IsNotEmpty({ message: 'Kode tidak boleh kosong' })
  kode: string;

  @IsString({ message: 'Nama harus berupa teks' })
  @MaxLength(100, { message: 'Nama maksimal 100 karakter' })
  @IsNotEmpty({ message: 'Nama tidak boleh kosong' })
  nama: string;

  @IsInt({ message: 'SKS harus berupa angka bulat' })
  @Min(1, { message: 'SKS minimal 1' })
  sks: number;

  @IsString({ message: 'Semester harus berupa teks' })
  @IsNotEmpty({ message: 'Semester tidak boleh kosong' })
  semester: string;

  @IsString({ message: 'Jurusan harus berupa teks' })
  @IsNotEmpty({ message: 'Jurusan tidak boleh kosong' })
  jurusan: string;
}
