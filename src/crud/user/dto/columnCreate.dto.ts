import { IsString, IsNotEmpty, Length, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { v4 as uuidv4 } from 'uuid';


export class ColumnCreateDto {
  @IsUUID()
  id: uuidv4;
  
  @IsString()
  column_name: string;
}