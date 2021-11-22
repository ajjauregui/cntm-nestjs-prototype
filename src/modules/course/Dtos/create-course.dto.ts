import { IsNotEmpty } from 'class-validator';
import { TeacherEntity } from 'src/modules/teacher/teacher.entity';

export class CreateCourseDTO {
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  readonly description: string;

  @IsNotEmpty()
  readonly teacher: TeacherEntity;
}
