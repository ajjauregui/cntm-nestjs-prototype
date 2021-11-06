import {MigrationInterface, QueryRunner} from "typeorm";

export class relaciones1636169607138 implements MigrationInterface {
    name = 'relaciones1636169607138'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lessons" ADD "fk_course" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "suscriptions" ADD "fk_user" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "suscriptions" ADD "fk_course" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "courses" ADD "fk_teacher" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "lessons" ADD CONSTRAINT "FK_7be9732ace809d5ba4871004460" FOREIGN KEY ("fk_course") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "suscriptions" ADD CONSTRAINT "FK_a367ded9901014cd52c21471c88" FOREIGN KEY ("fk_user") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "suscriptions" ADD CONSTRAINT "FK_43b60347adbdff75834e7b33740" FOREIGN KEY ("fk_course") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "courses" ADD CONSTRAINT "FK_4a3a8ff5e4fa606cfb6be683ad4" FOREIGN KEY ("fk_teacher") REFERENCES "teachers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "courses" DROP CONSTRAINT "FK_4a3a8ff5e4fa606cfb6be683ad4"`);
        await queryRunner.query(`ALTER TABLE "suscriptions" DROP CONSTRAINT "FK_43b60347adbdff75834e7b33740"`);
        await queryRunner.query(`ALTER TABLE "suscriptions" DROP CONSTRAINT "FK_a367ded9901014cd52c21471c88"`);
        await queryRunner.query(`ALTER TABLE "lessons" DROP CONSTRAINT "FK_7be9732ace809d5ba4871004460"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP COLUMN "fk_teacher"`);
        await queryRunner.query(`ALTER TABLE "suscriptions" DROP COLUMN "fk_course"`);
        await queryRunner.query(`ALTER TABLE "suscriptions" DROP COLUMN "fk_user"`);
        await queryRunner.query(`ALTER TABLE "lessons" DROP COLUMN "fk_course"`);
    }

}
