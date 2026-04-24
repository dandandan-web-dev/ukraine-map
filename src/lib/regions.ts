import type { Region } from '@/lib/types';

type RegionModule = { default: Region };

function assertRegion(region: Region, sourceFile: string): Region {
  if (!region.slug || !region.title || !region.map?.regionId) {
    throw new Error(`Invalid region JSON in ${sourceFile}: missing slug/title/map.regionId`);
  }

  return region;
}

const regionModules = import.meta.glob<RegionModule>('/src/data/regions/*.json', {
  eager: true
});

const regionRecords = Object.entries(regionModules).map(([file, mod]) =>
  assertRegion(mod.default, file)
);

export const regions: Region[] = regionRecords.sort((a, b) => a.title.localeCompare(b.title));

export const regionsBySlug: Record<string, Region> = Object.fromEntries(
  regions.map((region) => [region.slug, region])
);

export const regionsByMapId: Record<string, Region> = Object.fromEntries(
  regions.map((region) => [region.map.regionId, region])
);

export function getRegionBySlug(slug: string): Region | undefined {
  return regionsBySlug[slug];
}
