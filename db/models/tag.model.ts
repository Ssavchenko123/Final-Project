import {
  Column,
  Table,
  Model,
  AllowNull,
  BelongsToMany,
} from 'sequelize-typescript';
import { Posts } from './post.model';
import { PostTags } from './post_tag.model';

@Table({
  tableName: 'tags',
  underscored: true,
  timestamps: true,
})
export class Tags extends Model<Tags> {
  @AllowNull(false)
  @Column({
    validate: {
      unique: true,
      notEmpty: true,
      isNull: false,
    },
  })
  title: string;

  @BelongsToMany(() => Posts, () => PostTags)
  posts: Posts[];
}
