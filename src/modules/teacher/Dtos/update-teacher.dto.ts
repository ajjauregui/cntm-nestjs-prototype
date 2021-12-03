import { IsOptional } from 'class-validator';

export class UpdateTeacherDTO {
  @IsOptional()
  readonly name?: string;

  @IsOptional()
  readonly last_name?: string;

  @IsOptional()
  readonly email?: string;

  @IsOptional()
  readonly degree_of_instruction?: string;
}
