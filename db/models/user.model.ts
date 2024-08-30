import {
  Column,
  Table,
  Model,
  AllowNull,
  BelongsTo,
} from 'sequelize-typescript';
import { Posts } from './post.model';

@Table({
  tableName: 'users',
  underscored: true,
  timestamps: true,
})
export class User extends Model<User> {
  @AllowNull(false)
  @Column({
    validate: {
      notEmpty: true,
      isNull: false,
    },
  })
  name: string;

  @AllowNull(false)
  @Column
  password: string;
  @Column({
    validate: {
      IsEmail: true,
      unique: true,
      isNull: false,
      notEmpty: true,
    },
  })
  email: string;

  @AllowNull(false)
  @Column
  avatar: string;

  @BelongsTo(() => Posts)
  posts: Posts[];
}
