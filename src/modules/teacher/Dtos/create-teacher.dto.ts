import { IsNotEmpty } from 'class-validator';

export class CreateTeacherDTO {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly last_name: string;

  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  readonly degree_of_instruction: string;
}
