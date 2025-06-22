/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let repo = '';
if (isGithubActions) {
  repo = 'Gaurav-Bhardwajj.github.io';
}

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '',
  assetPrefix: '',
};

module.exports = nextConfig;
