import { IsOptional } from 'class-validator';

export class UpdateUserDTO {
  @IsOptional()
  readonly name?: string;

  @IsOptional()
  readonly last_name?: string;

  @IsOptional()
  readonly email?: string;

  @IsOptional()
  readonly gender?: string;
}
