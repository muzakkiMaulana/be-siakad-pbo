import { PartialType } from '@nestjs/mapped-types';
import { CreateMataKuliahDto } from './create-mata-kuliah.dto';

/* eslint-disable @typescript-eslint/no-unsafe-call */
export class UpdateMataKuliahDto extends PartialType(CreateMataKuliahDto) {}
