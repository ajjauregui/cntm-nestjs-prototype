import {MigrationInterface, QueryRunner} from "typeorm";

export class arreglo21637201549314 implements MigrationInterface {
    name = 'arreglo21637201549314'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "status" SET DEFAULT 'ACTIVE'`);
        await queryRunner.query(`ALTER TABLE "teachers" ALTER COLUMN "status" SET DEFAULT 'ACTIVE'`);
        await queryRunner.query(`ALTER TABLE "courses" ALTER COLUMN "status" SET DEFAULT 'ACTIVE'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "courses" ALTER COLUMN "status" SET DEFAULT 'ACTVE'`);
        await queryRunner.query(`ALTER TABLE "teachers" ALTER COLUMN "status" SET DEFAULT 'ACTVE'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "status" SET DEFAULT 'ACTVE'`);
    }

}
