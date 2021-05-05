export type MenuItem = {
    label: string;
    target_id: string;
    active: Boolean;
};

export type Post = {
    title: string;
    content?: string;
    cover?: string;
    post_date: DateTime;
    special?: boolean;
    isBanner?: boolean;
    category: string;
    slug: string;
};

export type Project = {
    icon: string;
    name: string;
    short_description?: string;
    category: string;
    tags?: string[];
    description?: string;
    slug: string;
};

declare module "*.webp";
declare module "*.png";
declare module "*.jpg";
