import {MigrationInterface, QueryRunner} from "typeorm";

export class suscriptions1635256354950 implements MigrationInterface {
    name = 'suscriptions1635256354950'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "lessons" ("id" SERIAL NOT NULL, "name" character varying(25) NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_9b9a8d455cac672d262d7275730" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "suscriptions" ("id" SERIAL NOT NULL, "type" character varying(25) NOT NULL, CONSTRAINT "PK_bd4d306710ee28dcca9a84638aa" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "suscriptions"`);
        await queryRunner.query(`DROP TABLE "lessons"`);
    }

}
