import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1636576013980 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        
        const table = new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'email',
                    type: 'varchar',
                },
                {
                    name: 'password',
                    type: 'varchar',
                },
                {
                    name: 'phone',
                    type: 'varchar',
                },
                {
                    name: 'birthdateIso',
                    type: 'varchar',
                },
                {
                    name: 'gender',
                    type: 'varchar',
                },
                {
                    name: 'address_street',
                    type: 'varchar',
                },
                {
                    name: 'address_number',
                    type: 'varchar',
                },
                {
                    name: 'address_complement',
                    type: 'varchar',
                },
                {
                    name: 'address_neighborhood',
                    type: 'varchar',
                },
                {
                    name: 'address_zipcode',
                    type: 'varchar',
                },
                {
                    name: 'address_city',
                    type: 'varchar',
                },
                {
                    name: 'address_state',
                    type: 'varchar',
                },
                {
                    name: 'address_country',
                    type: 'varchar',
                },
                {
                    name: 'documentType',
                    type: 'varchar',
                },
                {
                    name: 'documentValue',
                    type: 'varchar',
                },
                {
                    name: 'status',
                    type: 'varchar',
                },
                {
                    name: 'created_at',
                    type: 'varchar',
                },
            ],

        })
        await queryRunner.createTable(table)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
        await queryRunner.query('DROP EXTENSION "uuid-ossp"')
    }
}
