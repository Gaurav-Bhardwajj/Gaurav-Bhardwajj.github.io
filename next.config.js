/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let repo = '';
if (isGithubActions) {
  repo = 'portfolio'; // force lowercase repo name
}

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: repo ? `/${repo}` : '',
  assetPrefix: repo ? `/${repo}/` : '',
};

module.exports = nextConfig;
