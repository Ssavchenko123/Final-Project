import {
  Column,
  Table,
  Model,
  AllowNull,
  ForeignKey,
} from 'sequelize-typescript';
import { Posts } from './posts_model';
import { Tags } from './tags_model';

@Table({
  tableName: 'post_tags',
  underscored: true,
  timestamps: true,
})
export class PostTags extends Model<PostTags> {
  @AllowNull(false)
  @ForeignKey(() => Posts)
  @Column
  postId: number;

  @AllowNull(false)
  @ForeignKey(() => Tags)
  @Column
  tagId: number;
}
