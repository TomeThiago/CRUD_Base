import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export class createUsersTable1667578112715 implements MigrationInterface {
  private readonly tableName = 'users';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          new TableColumn({
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          }),
          new TableColumn({
            name: 'name',
            type: 'varchar',
            length: '50',
          }),
          new TableColumn({
            name: 'email',
            type: 'varchar',
            length: '50',
          }),
          new TableColumn({
            name: 'password',
            type: 'varchar',
          }),
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
