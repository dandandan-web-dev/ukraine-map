import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true' && repositoryName.length > 0;
const isUserOrOrgPagesRepo = repositoryName.endsWith('.github.io');

export default defineConfig({
  site: isGitHubPagesBuild ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io` : 'http://localhost:4321',
  base: isGitHubPagesBuild && !isUserOrOrgPagesRepo ? `/${repositoryName}` : '/',
  output: 'static',
  integrations: [tailwind({ applyBaseStyles: false })],
  vite: {
    build: {
      target: 'es2022'
    }
  }
});
