import {
  Column,
  Table,
  Model,
  AllowNull,
  BelongsToMany,
} from 'sequelize-typescript';

import { Posts } from './post.model';
import { PostTags } from './post-tag.model';

@Table({
  tableName: 'tags',
  underscored: true,
  timestamps: true,
})
export class Tags extends Model<Tags> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @AllowNull(false)
  @Column({ unique: true })
  title: string;

  @BelongsToMany(() => Posts, () => PostTags)
  posts: Posts[];
}
