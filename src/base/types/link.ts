export interface HrefModel {
  url?: string;
  cached_url?: string;
}

export interface LinkModel {
  label?: string;
  href?: HrefModel;
}
