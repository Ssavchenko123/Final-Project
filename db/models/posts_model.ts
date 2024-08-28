import {
  Column,
  Table,
  Model,
  BelongsTo,
  BelongsToMany,
  ForeignKey,
  AllowNull,
} from 'sequelize-typescript';
import { User } from './users_model';
import { Tags } from './tags_model';
import { PostTags } from './post_tags_model';

@Table({
  tableName: 'posts',
  underscored: true,
  timestamps: true,
})
export class Posts extends Model<Posts> {
  @BelongsTo(() => User)
  owner: User;

  @BelongsToMany(() => Tags, () => PostTags)
  tags: Tags[];

  @ForeignKey(() => User)
  @Column
  ownerId: number;

  @AllowNull(false)
  @Column
  title: string;

  @AllowNull(false)
  @Column
  text: string;

  @AllowNull(false)
  @Column
  image: string;
}
