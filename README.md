# Mauricio Ferraresi Website

A personal website built with React, Vite, and Tailwind CSS.

## 🚀 Deploy to GitHub Pages - Complete Tutorial

This tutorial will guide you through deploying this React website to GitHub Pages using terminal commands. The process involves setting up GitHub Pages, configuring the build process, and automating deployments.

### Prerequisites

Before starting, ensure you have:
- Git installed and configured
- Node.js (v16 or higher) installed
- A GitHub account
- This project already pushed to a GitHub repository

### Step 1: Install GitHub Pages Dependency

First, we need to install the `gh-pages` package which will help us deploy to GitHub Pages:

```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json Configuration

We need to add deployment scripts and update the homepage URL. The homepage should match your GitHub repository structure.

For a repository named `mauricio-ferraresi-website` under username `Fernando-Urbano`, the homepage would be:
`https://fernando-urbano.github.io/mauricio-ferraresi-website/`

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://fernando-urbano.github.io/mauricio-ferraresi-website/"
}
```

### Step 3: Configure Vite for GitHub Pages

Update your `vite.config.js` to include the base path for GitHub Pages:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/mauricio-ferraresi-website/',
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  publicDir: 'public',
});
```

### Step 4: Handle Client-Side Routing (Important!)

Since this React app uses client-side routing, we need to create a `404.html` file to handle direct URL access on GitHub Pages. Create this file in the `public` folder:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Mauricio Ferraresi Website</title>
    <script type="text/javascript">
      // Single Page Apps for GitHub Pages
      // MIT License
      // https://github.com/rafgraph/spa-github-pages
      var pathSegmentsToKeep = 1;

      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
  </body>
</html>
```

Also, add this script to your `index.html` file in the `<head>` section:

```html
<script type="text/javascript">
  // Single Page Apps for GitHub Pages
  // MIT License
  // https://github.com/rafgraph/spa-github-pages
  (function(l) {
    if (l.search[1] === '/' ) {
      var decoded = l.search.slice(1).split('&').map(function(s) { 
        return s.replace(/~and~/g, '&')
      }).join('?');
      window.history.replaceState(null, null,
          l.pathname.slice(0, -1) + decoded + l.hash
      );
    }
  }(window.location))
</script>
```

### Step 5: Initialize Git Repository (if not already done)

If this is a new project, initialize Git and connect to GitHub:

```bash
# Initialize Git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit"

# Add remote repository (replace with your actual repository URL)
git remote add origin https://github.com/Fernando-Urbano/mauricio-ferraresi-website.git

# Push to GitHub
git push -u origin main
```

### Step 6: Build and Deploy

Now you can build and deploy your website:

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

The `deploy` script will:
1. Run the build process (via predeploy)
2. Create a `gh-pages` branch
3. Push the built files to that branch
4. Configure GitHub Pages to serve from that branch

### Step 7: Configure GitHub Pages Settings

After running the deploy command, you need to configure GitHub Pages in your repository:

1. Go to your GitHub repository: `https://github.com/Fernando-Urbano/mauricio-ferraresi-website`
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **Deploy from a branch**
5. Choose **gh-pages** branch
6. Select **/(root)** folder
7. Click **Save**

### Step 8: Verify Deployment

Your website should be available at:
`https://fernando-urbano.github.io/mauricio-ferraresi-website/`

It may take a few minutes for the changes to propagate.

### Step 9: Set Up Automatic Deployment (Optional)

To automatically deploy when you push changes to the main branch, you can set up GitHub Actions:

Create a file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### Troubleshooting

#### Common Issues:

1. **404 Error on GitHub Pages**
   - Ensure the `base` path in `vite.config.js` matches your repository name
   - Check that the `homepage` in `package.json` is correct
   - Verify GitHub Pages is configured to use the `gh-pages` branch
   - Make sure the `404.html` file is in the `public` folder

2. **Build Fails**
   - Check for any console errors during build
   - Ensure all dependencies are installed: `npm install`
   - Verify Node.js version is compatible
   - Check for syntax errors in React components

3. **Assets Not Loading**
   - Make sure all asset paths are relative
   - Check that the `base` path is correctly configured
   - Verify that assets are in the `public` folder

4. **GitHub Pages Not Updating**
   - Clear browser cache
   - Wait 5-10 minutes for changes to propagate
   - Check GitHub Actions logs if using automatic deployment
   - Verify the `gh-pages` branch was updated

5. **Client-Side Routing Not Working**
   - Ensure the `404.html` file is properly configured
   - Check that the routing script is added to `index.html`
   - Verify the `pathSegmentsToKeep` variable matches your repository structure

#### Useful Commands:

```bash
# Check current branch
git branch

# Switch to gh-pages branch to verify deployment
git checkout gh-pages

# Return to main branch
git checkout main

# Check deployment status
npm run deploy

# Clean and rebuild
rm -rf dist node_modules
npm install
npm run build
npm run deploy

# Check if gh-pages branch exists
git branch -a

# Force push to gh-pages (if needed)
git push origin gh-pages --force

# Check build output
ls -la dist/

# Test build locally
npm run preview
```

### Development Workflow

For ongoing development:

1. Make changes to your code
2. Test locally: `npm run dev`
3. Build and deploy: `npm run deploy`
4. Push changes to main branch: `git push origin main`

### Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain
2. Configure DNS settings to point to GitHub Pages
3. Update the `homepage` in `package.json` to your custom domain
4. Remove the `base` path from `vite.config.js`
5. Update the `pathSegmentsToKeep` in `404.html` to 0

### Performance Optimization

After deployment, consider:

1. **Image Optimization**: Use WebP format and optimize images
2. **Code Splitting**: Implement lazy loading for components
3. **Caching**: Configure proper cache headers
4. **CDN**: Consider using a CDN for better global performance
5. **Bundle Analysis**: Use `npm run build -- --analyze` to check bundle size

### Security Considerations

1. **Environment Variables**: Never commit sensitive data to the repository
2. **Dependencies**: Regularly update dependencies to patch security vulnerabilities
3. **Content Security Policy**: Consider adding CSP headers for additional security

---

## 🛠️ Local Development

To run the project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
mauricio-ferraresi-website/
├── src/
│   ├── App.jsx          # Main application component
│   ├── Navbar.jsx       # Navigation component
│   ├── Sidebar.jsx      # Sidebar component
│   ├── Profile.jsx      # Profile information
│   ├── SocialButtons.jsx # Social media buttons
│   ├── main.jsx         # Application entry point
│   └── input.css        # Tailwind CSS imports
├── public/              # Static assets
│   ├── favicon.svg      # Website favicon
│   └── 404.html         # 404 page for client-side routing
├── dist/                # Build output (generated)
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── tailwind.config.js   # Tailwind CSS configuration
```

## 🎨 Technologies Used

- **React 19** - UI framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **GitHub Pages** - Hosting platform

## 📝 Notes

- This website uses client-side routing, which requires special configuration for GitHub Pages
- The `404.html` file handles direct URL access for single-page applications
- All assets should be placed in the `public` folder for proper deployment
- The base path configuration is crucial for GitHub Pages deployment

---

**Note**: This tutorial assumes you're deploying to a GitHub repository. If you're using a different hosting platform, the configuration may vary.