import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { User } from '../entity/User';
import { Role } from 'enums/role.enum';

export default class UserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const factory = await factoryManager.get(User);
    await factory.save({
      role: Role.ADMIN,
      username: 'kaboo_admin',
      email: 'kaboo.bear@gmail.com',
    });
    await factory.save({
      role: Role.USER,
      username: 'kaboo_user',
      email: 'kaboo.user@gmail.com',
    });
  }
}
