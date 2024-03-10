export type Index = {
  links: {
    first: string | null;
    last: string | null;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    links: {
      url: string;
      active: boolean;
    }[];
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
};

export type SitemapItem = {
  slug: string;
  updated_at: string;
};

export type SitemapResponse = {
  data: SitemapItem[];
};
