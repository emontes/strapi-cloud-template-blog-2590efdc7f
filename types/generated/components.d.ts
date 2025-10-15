import type { Schema, Struct } from '@strapi/strapi';

export interface CelebrityKeyDetails extends Struct.ComponentSchema {
  collectionName: 'components_celebrity_key_details';
  info: {
    displayName: 'Key Details';
  };
  attributes: {
    dateOfBirth: Schema.Attribute.Date;
    ethnicity: Schema.Attribute.String;
    instagramUrl: Schema.Attribute.String;
    skinType: Schema.Attribute.String;
    skinUndertone: Schema.Attribute.String;
    tiktokUrl: Schema.Attribute.String;
    twitterUrl: Schema.Attribute.String;
  };
}

export interface CommonDropdownOption extends Struct.ComponentSchema {
  collectionName: 'components_common_dropdown_options';
  info: {
    description: '';
    displayName: 'Dropdown Option';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface EditorsCkEditor extends Struct.ComponentSchema {
  collectionName: 'components_editors_ck_editors';
  info: {
    displayName: 'Ck Editor';
  };
  attributes: {
    textCk: Schema.Attribute.RichText;
  };
}

export interface EditorsRichTextBlocks extends Struct.ComponentSchema {
  collectionName: 'components_editors_rich_text_blocks';
  info: {
    displayName: 'Rich Text Blocks';
  };
  attributes: {
    richTextBlocks: Schema.Attribute.Blocks;
  };
}

export interface EditorsTextMarkdown extends Struct.ComponentSchema {
  collectionName: 'components_editors_text_markdowns';
  info: {
    displayName: 'Text Markdown';
  };
  attributes: {
    textMd: Schema.Attribute.RichText;
  };
}

export interface HerosArticleHero extends Struct.ComponentSchema {
  collectionName: 'components_heros_article_heroes';
  info: {
    displayName: 'Article Hero';
  };
  attributes: {
    author: Schema.Attribute.String;
    bgColor: Schema.Attribute.String;
    category: Schema.Attribute.String;
    date: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    labels: Schema.Attribute.String;
    textColor: Schema.Attribute.String;
    title: Schema.Attribute.String;
    verticalText: Schema.Attribute.String;
  };
}

export interface ProductRetailer extends Struct.ComponentSchema {
  collectionName: 'components_product_retailer_s';
  info: {
    displayName: 'Retailer ';
  };
  attributes: {
    retailerName: Schema.Attribute.String;
    retailerUrl: Schema.Attribute.String;
  };
}

export interface ProductSighting extends Struct.ComponentSchema {
  collectionName: 'components_product_sightings';
  info: {
    displayName: 'Sighting';
  };
  attributes: {
    source: Schema.Attribute.String;
    timeline: Schema.Attribute.String;
  };
}

export interface Sections3ImagesSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_3_images_sections';
  info: {
    displayName: '3 Images Section';
  };
  attributes: {
    heading: Schema.Attribute.Component<'shared.heading', false>;
    image1Image: Schema.Attribute.Media<'images'>;
    image1Text: Schema.Attribute.Blocks;
    image2Image: Schema.Attribute.Media<'images'>;
    image2Text: Schema.Attribute.Blocks;
    image3Image: Schema.Attribute.Media<'images'>;
    image3Text: Schema.Attribute.Blocks;
  };
}

export interface SectionsArticlesGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_articles_grids';
  info: {
    displayName: 'Articles Grid';
    icon: 'bulletList';
  };
  attributes: {
    isHome: Schema.Attribute.Boolean;
    perPage: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<4>;
    sideBar: Schema.Attribute.Boolean;
    title: Schema.Attribute.Component<'shared.heading', false>;
  };
}

export interface SectionsBlogPost extends Struct.ComponentSchema {
  collectionName: 'components_sections_blog_posts';
  info: {
    displayName: 'blogPost';
    icon: 'layout';
  };
  attributes: {
    allowComments: Schema.Attribute.Boolean;
    content: Schema.Attribute.Component<'sections.rich-text-section', false>;
    sideBar: Schema.Attribute.Boolean;
  };
}

export interface SectionsRichTextSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_rich_text_sections';
  info: {
    displayName: 'Rich Text Section';
    icon: 'feather';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    heading: Schema.Attribute.Component<'shared.heading', false>;
    image: Schema.Attribute.Media<'images'>;
    imagePosition: Schema.Attribute.Enumeration<
      ['top', 'left', 'right', 'bottom']
    >;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    description: '';
    displayName: 'Button';
    icon: 'feather';
  };
  attributes: {
    color: Schema.Attribute.String;
    customClass: Schema.Attribute.String;
    disabled: Schema.Attribute.Boolean;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    iconPosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    iconText: Schema.Attribute.String;
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
    onClickEvent: Schema.Attribute.String;
    primary: Schema.Attribute.Boolean;
    size: Schema.Attribute.Enumeration<['small', 'medium', 'large']>;
    target: Schema.Attribute.Enumeration<['samePage', 'newPage']> &
      Schema.Attribute.DefaultTo<'samePage'>;
  };
}

export interface SharedDropdown extends Struct.ComponentSchema {
  collectionName: 'components_shared_dropdowns';
  info: {
    description: '';
    displayName: 'Dropdown';
  };
  attributes: {
    label: Schema.Attribute.String;
    options: Schema.Attribute.Component<'common.dropdown-option', true>;
    placeholder: Schema.Attribute.String;
  };
}

export interface SharedHeading extends Struct.ComponentSchema {
  collectionName: 'components_shared_headings';
  info: {
    description: '';
    displayName: 'Heading';
    icon: 'feather';
  };
  attributes: {
    decorationLine: Schema.Attribute.Boolean;
    decorationLineColor: Schema.Attribute.String;
    decorationLinePos: Schema.Attribute.Enumeration<['top', 'bottom']>;
    label: Schema.Attribute.String;
    labelAs: Schema.Attribute.Enumeration<
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div']
    > &
      Schema.Attribute.DefaultTo<'h1'>;
    labelColor: Schema.Attribute.String;
  };
}

export interface SharedMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_social';
  info: {
    description: '';
    displayName: 'Meta Social';
    icon: 'share-alt';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    socialNetwork: Schema.Attribute.Enumeration<
      ['Facebook', 'Twitter', 'LinkedIn', 'Instagram', 'Other']
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seo';
  info: {
    description: 'SEO component';
    displayName: 'Seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaSocial: Schema.Attribute.Component<'shared.meta-social', true>;
    metaTitle: Schema.Attribute.String;
    metaViewport: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SightingMultipleUrls extends Struct.ComponentSchema {
  collectionName: 'components_sighting_multiple_urls';
  info: {
    description: 'Multiple source URLs under one sighting title';
    displayName: 'Multiple URLs';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    urls: Schema.Attribute.JSON;
  };
}

export interface SightingSightingEntry extends Struct.ComponentSchema {
  collectionName: 'components_sighting_sighting_entries';
  info: {
    description: 'A verified sighting of a product being used';
    displayName: 'Sighting Entry';
  };
  attributes: {
    date: Schema.Attribute.Date;
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Media<'images', true>;
    sourceName: Schema.Attribute.String;
    sourceType: Schema.Attribute.Enumeration<
      ['article', 'video', 'social-media', 'interview', 'photo']
    >;
    sourceUrl: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SightingSource extends Struct.ComponentSchema {
  collectionName: 'components_sighting_sources';
  info: {
    displayName: 'Source';
  };
  attributes: {
    sourceName: Schema.Attribute.String;
    sourceUrl: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'celebrity.key-details': CelebrityKeyDetails;
      'common.dropdown-option': CommonDropdownOption;
      'editors.ck-editor': EditorsCkEditor;
      'editors.rich-text-blocks': EditorsRichTextBlocks;
      'editors.text-markdown': EditorsTextMarkdown;
      'heros.article-hero': HerosArticleHero;
      'product.retailer': ProductRetailer;
      'product.sighting': ProductSighting;
      'sections.3-images-section': Sections3ImagesSection;
      'sections.articles-grid': SectionsArticlesGrid;
      'sections.blog-post': SectionsBlogPost;
      'sections.rich-text-section': SectionsRichTextSection;
      'shared.button': SharedButton;
      'shared.dropdown': SharedDropdown;
      'shared.heading': SharedHeading;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'sighting.multiple-urls': SightingMultipleUrls;
      'sighting.sighting-entry': SightingSightingEntry;
      'sighting.source': SightingSource;
    }
  }
}
