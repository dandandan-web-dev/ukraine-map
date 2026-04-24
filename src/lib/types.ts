export type RegionSourceType = 'academic' | 'official' | 'media';

export type Region = {
  slug: string;
  title: string;
  shortDescription: string;
  seo: {
    title: string;
    description: string;
  };
  hero: {
    image: string;
    alt: string;
    intro: string;
    tags: string[];
  };
  map: {
    regionId: string;
  };
  identity: {
    summary: string;
    relatedModernOblasts: string[];
    notes?: string[];
  };
  history: {
    summary: string;
    highlights: string[];
  };
  landscape: {
    summary: string;
    features: string[];
  };
  ecology: {
    summary: string;
    protectedAreas: string[];
    issues: string[];
  };
  economy: {
    summary: string;
    sectors: string[];
  };
  famousPeople: {
    name: string;
    role: string;
    description: string;
    image?: string;
    sourceUrl?: string;
  }[];
  places: {
    title: string;
    description: string;
  }[];
  sources: {
    title: string;
    url: string;
    type: RegionSourceType;
  }[];
};
