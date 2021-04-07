export type MenuItem = {
  label: string;
  target_id: string;
  active: Boolean;
};

export type Convenio = {
  name: string;
  logo: string;
  nome_empresa: string;
  banner: string;
  short_description?: string;
  descricao?: string;
  desconto?: string;
  link?: string;
  email?: string;
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
  description?: string;
  link?: string;
};

declare module "*.webp";
declare module "*.png";
declare module "*.jpg";
