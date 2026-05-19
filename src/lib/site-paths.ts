export const siteBasePath = import.meta.env.BASE_URL;

export function withBasePath(path = ''): string {
  const basePath = siteBasePath.endsWith('/') ? siteBasePath : `${siteBasePath}/`;
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;

  return `${basePath}${normalizedPath}`;
}

export function getCanonicalUrl(path: string, site: URL | undefined): string {
  const basePath = siteBasePath === '/' ? '' : siteBasePath.replace(/\/$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  return new URL(`${basePath}${normalizedPath}`, site ?? 'http://localhost:4321').toString();
}
