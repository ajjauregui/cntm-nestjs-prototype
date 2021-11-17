import { MigrationInterface, QueryRunner } from 'typeorm';

export class teachers1634869418613 implements MigrationInterface {
  name = 'teachers1634869418613';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "teachers" ("id" SERIAL NOT NULL, "name" character varying(25) NOT NULL, "last_name" character varying NOT NULL, "email" character varying(25) NOT NULL, "experiencia" character varying NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', CONSTRAINT "PK_a8d4f83be3abe4c687b0a0093c8" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "teachers"`);
  }
}
