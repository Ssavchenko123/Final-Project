import { Column, Table, Model, AllowNull, HasMany } from 'sequelize-typescript';
import { Posts } from './post.model';

@Table({
  tableName: 'users',
  underscored: true,
  timestamps: true,
})
export class Users extends Model<Users> {
  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Column
  password: string;
  @Column({
    validate: {
      IsEmail: true,
      unique: true,
    },
  })
  email: string;

  @AllowNull(false)
  @Column
  avatar: string;

  @HasMany(() => Posts)
  posts: Posts[];
}
