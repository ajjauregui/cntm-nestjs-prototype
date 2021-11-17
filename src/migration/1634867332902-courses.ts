import { MigrationInterface, QueryRunner } from 'typeorm';

export class courses1634867332902 implements MigrationInterface {
  name = 'courses1634867332902';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "courses" ("id" SERIAL NOT NULL, "title" character varying(25) NOT NULL, "description" character varying NOT NULL, "status" character varying(8) NOT NULL DEFAULT 'ACTIVE', CONSTRAINT "PK_3f70a487cc718ad8eda4e6d58c9" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "courses"`);
  }
}
