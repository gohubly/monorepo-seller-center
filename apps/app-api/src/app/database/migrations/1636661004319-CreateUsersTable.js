const { Table, MigrationInterface } = require('typeorm')

export class CreateUsersTable1636661004319 extends MigrationInterface {
    async up(queryRunner) {
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
                    name: 'organizationId',
                    type: 'varchar',
                },
                {
                    name: 'createdAt',
                    type: 'varchar',
                },
                // {
                //     name: 'address_street',
                //     type: 'varchar',
                // },
                // {
                //     name: 'address_number',
                //     type: 'varchar',
                // },
                // {
                //     name: 'address_complement',
                //     type: 'varchar',
                // },
                // {
                //     name: 'address_neighborhood',
                //     type: 'varchar',
                // },
                // {
                //     name: 'address_zipcode',
                //     type: 'varchar',
                // },
                // {
                //     name: 'address_city',
                //     type: 'varchar',
                // },
                // {
                //     name: 'address_state',
                //     type: 'varchar',
                // },
                // {
                //     name: 'address_country',
                //     type: 'varchar',
                // },
            ],

        })
        await queryRunner.createTable(table)
    }

    async down(queryRunner) {
        await queryRunner.dropTable('users')
        await queryRunner.query('DROP EXTENSION "uuid-ossp"')
    }
}
