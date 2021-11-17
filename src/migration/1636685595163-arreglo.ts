import {MigrationInterface, QueryRunner} from "typeorm";

export class arreglo1636685595163 implements MigrationInterface {
    name = 'arreglo1636685595163'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teachers" RENAME COLUMN "experiencia" TO "degree_of_instruction"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teachers" RENAME COLUMN "degree_of_instruction" TO "experiencia"`);
    }

}
