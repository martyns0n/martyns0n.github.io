/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Description } from './blog-item-description';
import { CoverImage } from './blog-item-cover-image';
import { Date } from './blog-item-date';
import { BlogItemType } from './blog-item-type';
import { Title } from './blog-item-title';
import { Tags } from './blog-item-tags';

export const BlogArticle = ({ item }) => {
  const {
    name,
    tags,
    desc,
    publish_date,
    content_type,
    cover_image,
    slug
  } = item;

  return (
    <>
      <CoverImage image={cover_image} slug={slug} />
      <Date date={publish_date?.startDate} />
      <BlogItemType type={content_type} />
      <Title title={name} />
      <Description description={desc} />
      <Tags tags={tags} />
    </>
  );
};
