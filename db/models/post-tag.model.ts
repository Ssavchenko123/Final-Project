import {
  Column,
  Table,
  Model,
  AllowNull,
  ForeignKey,
} from 'sequelize-typescript';

import { Posts } from './post.model';
import { Tags } from './tag.model';

@Table({
  tableName: 'post_tags',
  underscored: true,
  timestamps: true,
})
export class PostTags extends Model<PostTags> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @AllowNull(false)
  @ForeignKey(() => Posts)
  @Column
  postId: number;

  @AllowNull(false)
  @ForeignKey(() => Tags)
  @Column
  tagId: number;
}
