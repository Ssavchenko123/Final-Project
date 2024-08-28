import { Column, Table, Model, AllowNull } from 'sequelize-typescript';

@Table({
  tableName: 'users',
  underscored: true,
  timestamps: true,
})
export class User extends Model<User> {
  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Column
  password: string;
  @Column({
    validate: { IsEmail: true },
  })
  email: string;

  @AllowNull(false)
  @Column
  image: string;
}
