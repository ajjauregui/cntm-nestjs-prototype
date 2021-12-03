import { IsOptional } from 'class-validator';
import { TeacherEntity } from 'src/modules/teacher/teacher.entity';

export class UpdateCourseDTO {
  @IsOptional()
  readonly title?: string;

  @IsOptional()
  readonly description?: string;

  @IsOptional()
  readonly teacher?: TeacherEntity;
}
