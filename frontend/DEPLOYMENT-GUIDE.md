# 🚀 Deployment Guide - Devsynx Website

This guide will help you deploy your Next.js website to production.

## 📦 Step 1: Build the Project

First, make sure you build the project for production:

```bash
cd frontend
npm run build
```

This will create a static export in the `out` folder.

## 🌐 Deployment Options

### Option 1: Vercel (Recommended - Free & Easy)

Vercel is the creator of Next.js and offers the best integration:

1. **Sign up/Login**: Go to [vercel.com](https://vercel.com) and sign up with GitHub
2. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```
3. **Deploy**:
   ```bash
   cd frontend
   vercel
   ```
4. **Follow prompts**: Vercel will guide you through the deployment
5. **Done**: Your site will be live with a URL like `your-site.vercel.app`

**Or use the dashboard:**
- Push your code to GitHub
- Import your repository in Vercel dashboard
- Vercel will automatically deploy on every push

### Option 2: Netlify (Free & Easy)

1. **Sign up**: Go to [netlify.com](https://netlify.com)
2. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```
3. **Build and Deploy**:
   ```bash
   cd frontend
   npm run build
   netlify deploy --prod --dir=out
   ```
4. **Follow prompts**: Netlify will guide you through the deployment

**Or drag & drop:**
- Build the project: `npm run build`
- Go to [app.netlify.com/drop](https://app.netlify.com/drop)
- Drag and drop the `out` folder
- Your site is live!

### Option 3: GitHub Pages (Free)

1. **Build the project**:
   ```bash
   cd frontend
   npm run build
   ```
2. **Create a GitHub repository** (if not already)
3. **Push the `out` folder**:
   ```bash
   cd out
   git init
   git add .
   git commit -m "Deploy website"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```
4. **Enable GitHub Pages**:
   - Go to repository Settings > Pages
   - Select `main` branch and `/` root
   - Save

### Option 4: Traditional Hosting (iHosting.pk, Hostinger, etc.)

1. **Build the project**:
   ```bash
   cd frontend
   npm run build
   ```
2. **Upload the `out` folder contents** to your hosting:
   - Upload all files from the `out` folder to `public_html` or `www` directory
3. **File structure should be**:
   ```
   public_html/
   ├── index.html
   ├── 404.html
   ├── _next/
   ├── icons/
   ├── logo.jpg
   └── ... (all other files)
   ```
4. **Create `.htaccess` file** (if not exists):
   ```apache
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule ^(.*)$ /index.html [L]
   ```
5. **Point your domain** to the hosting folder
6. **Enable SSL** in your hosting panel

## ✅ Quick Start Commands

### For Vercel (Recommended):
```bash
cd frontend
npm install -g vercel
vercel --prod
```

### For Netlify:
```bash
cd frontend
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=out
```

### For Traditional Hosting:
```bash
cd frontend
npm run build
# Then upload 'out' folder contents via FTP/SFTP to your hosting
```

## 🔧 Important Notes

1. **Environment Variables**: If you need any environment variables, set them in your hosting platform
2. **Custom Domain**: All platforms allow you to connect a custom domain
3. **SSL Certificate**: Enable HTTPS/SSL for all deployments
4. **Performance**: The site is optimized with static export for best performance

## 📊 Deployment Checklist

- [ ] Build completed successfully (`npm run build`)
- [ ] All images are in the `public` folder
- [ ] Test the build locally (`npm start` or serve the `out` folder)
- [ ] Choose a deployment platform
- [ ] Deploy the site
- [ ] Test the live site
- [ ] Connect custom domain (optional)
- [ ] Enable SSL/HTTPS

## 🆘 Need Help?

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **Next.js Deployment**: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)

---

**Your site is ready to go live! 🎉**
