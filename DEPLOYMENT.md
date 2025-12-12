# Deployment Guide

## Netlify Deployment

This luxury hair care marketplace is optimized for deployment on Netlify. Follow these steps to deploy your site:

### Prerequisites

1. A Netlify account (sign up at https://netlify.com if you don't have one)
2. Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)

### Deployment Steps

#### Option 1: Deploy via Netlify UI

1. **Push to Git Repository**
   ```bash
   git add .
   git commit -m "Initial commit: Luxury hair care marketplace"
   git push origin main
   ```

2. **Connect to Netlify**
   - Log in to your Netlify account
   - Click "Add new site" → "Import an existing project"
   - Choose your Git provider and authorize Netlify
   - Select your repository

3. **Configure Build Settings**
   Netlify should auto-detect Next.js, but verify these settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
   - **Node version**: 18 or higher

4. **Deploy**
   - Click "Deploy site"
   - Netlify will build and deploy your site
   - Your site will be live at a generated URL (e.g., `random-name-123.netlify.app`)

#### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize and Deploy**
   ```bash
   netlify init
   # Follow the prompts to link your site

   netlify deploy --prod
   ```

### Post-Deployment

1. **Custom Domain** (Optional)
   - In Netlify dashboard, go to "Domain settings"
   - Click "Add custom domain"
   - Follow instructions to configure your domain DNS

2. **Environment Variables** (For future Square integration)
   - Go to "Site settings" → "Environment variables"
   - Add any necessary environment variables
   - Redeploy for changes to take effect

### Build Configuration

The project is already configured for Netlify with:

- **`next.config.js`**: Configured for static export
- **`netlify.toml`**: Contains build settings and headers
- **Static Export**: All pages are pre-rendered as static HTML

### Troubleshooting

**Build Fails**
- Check Node.js version (should be 18+)
- Ensure all dependencies are in `package.json`
- Review build logs in Netlify dashboard

**Images Not Loading**
- Verify Unsplash URLs are accessible
- Check Next.js image configuration in `next.config.js`

**404 Errors**
- Ensure `trailingSlash: true` is set in `next.config.js`
- Check that all links use proper Next.js Link components

### Performance

The site is optimized for performance with:

- Static site generation (SSG)
- Next.js Image optimization
- Font optimization via `next/font`
- CSS purging with Tailwind
- Responsive images with proper sizing

Expected Lighthouse scores:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

## Local Development

To run the site locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npx serve@latest out
```

Visit `http://localhost:3000` to view the site.

## Future Enhancements

When adding Square integration or other backend features:

1. Consider using Netlify Functions for serverless API routes
2. Add environment variables for API keys
3. Update `next.config.js` if switching from static export to server-side rendering
4. Implement proper error boundaries and loading states

## Support

For issues specific to:
- **Next.js**: https://nextjs.org/docs
- **Netlify**: https://docs.netlify.com
- **Tailwind CSS**: https://tailwindcss.com/docs
