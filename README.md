# Revlek Landing Page

A modern, responsive landing page for Revlek - a technology company building future's technology with innovative digital solutions.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Fully Responsive**: Optimized for all devices and screen sizes
- **SEO Optimized**: Comprehensive SEO setup with meta tags, sitemap, and robots.txt
- **Fast Performance**: Built with Next.js 14 and optimized for speed
- **Smooth Animations**: Framer Motion powered animations and interactions
- **Accessibility**: WCAG compliant with proper semantic HTML
- **TypeScript**: Full TypeScript support for better development experience

## 🛠️ Technologies Used

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **SEO**: Next.js built-in SEO + next-seo
- **TypeScript**: For type safety

## 📋 Sections

1. **Navigation**: Responsive navigation with smooth scrolling
2. **Hero**: Eye-catching hero section with animated elements
3. **Services**: Comprehensive service offerings showcase
4. **Portfolio**: Project showcase with hover effects
5. **About**: Company information, mission, and values
6. **CTA**: Strategic call-to-action sections
7. **Contact**: Contact form and company information
8. **Footer**: Comprehensive footer with links and social media

## 🎨 Design Features

### Color Scheme
- **Primary**: #7DF9FF (Electric Cyan)
- **Secondary**: #3A68FF (Bright Blue)
- **Gradient**: #0B8CC7 → #005892 → #012C59

### Key Design Elements
- Custom gradient backgrounds
- Smooth scroll animations
- Hover effects and micro-interactions
- Responsive grid layouts
- Professional typography
- Glass morphism effects

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/revlek-landing.git
cd revlek-landing
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO
│   ├── page.tsx           # Main page component
│   └── globals.css        # Global styles
├── components/
│   ├── Navigation.tsx      # Responsive navigation
│   ├── Hero.tsx           # Hero section
│   ├── Services.tsx       # Services showcase
│   ├── Portfolio.tsx      # Project portfolio
│   ├── About.tsx          # Company about section
│   ├── CTA.tsx            # Call-to-action component
│   ├── Contact.tsx        # Contact section
│   └── Footer.tsx         # Footer component
└── public/
    ├── sitemap.xml        # XML sitemap
    └── robots.txt         # Robots file
```

## 🔧 Customization

### Updating Content
- Edit the text content in each component file
- Update images in the Portfolio section
- Modify service offerings in Services.tsx
- Update contact information in Contact.tsx

### Changing Colors
- Update the color scheme in `tailwind.config.js`
- Modify the gradient backgrounds in components
- Update the CSS custom properties in `globals.css`

### Adding New Sections
1. Create a new component in the `components` folder
2. Import and add it to `page.tsx`
3. Update navigation if needed

## 📱 Responsive Design

The landing page is fully responsive with breakpoints for:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔍 SEO Features

- Comprehensive meta tags
- Open Graph tags for social media
- Twitter Card tags
- XML sitemap
- Robots.txt file
- Semantic HTML structure
- Fast loading performance

## 🎯 Performance Optimization

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- CSS and JavaScript minification
- Font optimization
- Compression enabled

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: hello@revlek.com
- **Website**: https://revlek.com
- **Phone**: +1 (555) 123-4567

---

Built with ❤️ by the Revlek Team