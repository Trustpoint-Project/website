# website
Trustpoint website built with Gatsby and deployed via Netlify. Content is managed in Git and deployed automatically from GitHub.

## Getting Started

### Prerequisites
- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Trustpoint-Project/website.git
   cd website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run develop
   ```

   The site will be available at `http://localhost:8000`.

### Building for Production

```bash
npm run build
```

The built files will be in the `public` directory.

## Content Management

Content is managed via Markdown files in the `content/` directory. Add your Markdown files there, and they will be processed by Gatsby.

## Deployment

The site is automatically deployed to Netlify on pushes to the `main` branch.

For local testing of the build:
```bash
npm run build
npm run serve
```

## Project Structure

- `src/pages/` - Gatsby pages
- `src/components/` - Reusable React components
- `content/` - Markdown content files
- `src/images/` - Static images
- `public/` - Built site (generated)
