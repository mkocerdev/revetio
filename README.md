# Revetio Portfolio Website

A modern, professional portfolio website for the Revetio creative agency, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Dark Mode Support**: Built-in dark/light mode support
- **Performance Optimized**: Built with Next.js for optimal performance
- **SEO Ready**: Proper meta tags and structured data
- **Contact Form**: Functional contact form with validation
- **Portfolio Showcase**: Beautiful project grid with filtering
- **Professional Branding**: Consistent Revetio brand identity

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Headless UI
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── portfolio/        # Portfolio page
│   ├── services/         # Services page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/            # Reusable components
│   ├── Navigation.tsx    # Navigation component
│   ├── Hero.tsx          # Hero section
│   ├── Footer.tsx        # Footer component
│   ├── PortfolioGrid.tsx # Portfolio grid
│   ├── AboutContent.tsx  # About page content
│   ├── ContactContent.tsx # Contact page content
│   └── ServicesContent.tsx # Services page content
```

## 🎨 Design Features

- **Hero Section**: Eye-catching hero with floating icons and gradient text
- **Navigation**: Sticky navigation with smooth scroll effects
- **Portfolio Grid**: Interactive project cards with hover effects
- **Contact Form**: Modern form with validation and success states
- **Services Showcase**: Service cards with pricing and features
- **Team Section**: Team member profiles with animations
- **Responsive Design**: Mobile-first approach with breakpoint optimization

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd revetio-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📱 Pages

### Homepage (`/`)

- Hero section with call-to-action buttons
- Company statistics
- Floating animated elements

### Portfolio (`/portfolio`)

- Project showcase grid
- Category filtering
- Project details and technologies

### About (`/about`)

- Company story and mission
- Team member profiles
- Company values and statistics

### Services (`/services`)

- Service offerings with pricing
- Development process
- Feature comparisons

### Contact (`/contact`)

- Contact form with validation
- Company information
- FAQ section

## 🎭 Animations

The website features smooth animations powered by Framer Motion:

- **Page Transitions**: Smooth page-to-page navigation
- **Scroll Animations**: Elements animate as they come into view
- **Hover Effects**: Interactive hover states on buttons and cards
- **Floating Elements**: Subtle floating animations for visual interest
- **Staggered Animations**: Sequential animations for lists and grids

## 🎨 Customization

### Colors

The website uses a consistent color palette defined in Tailwind CSS:

- Primary: Blue gradient (`from-blue-600 to-purple-600`)
- Secondary: Gray scale for text and backgrounds
- Accent: Yellow for highlights and featured elements

### Typography

- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights (700-900)
- **Body Text**: Regular weights (300-400)

### Components

All components are built with reusability in mind and can be easily customized by modifying the component files in the `src/components/` directory.

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Development

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Import and use existing components
4. Add navigation links in `Navigation.tsx`

### Adding New Components

1. Create a new component file in `src/components/`
2. Export the component
3. Import and use in your pages

### Styling

- Use Tailwind CSS classes for styling
- Custom CSS can be added to `globals.css`
- Component-specific styles can be added inline or in separate CSS modules

## 🚀 Deployment

The website can be deployed to various platforms:

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload the .next folder to Netlify
```

### Other Platforms

The website can be deployed to any platform that supports Next.js static exports.

## 📄 License

This project is created for the Revetio creative agency. All rights reserved.

## 🤝 Contributing

This is a portfolio website for Revetio agency. For any suggestions or improvements, please contact the development team.

## 📞 Support

For support or questions about this website, please contact:

- Email: hello@revetio.com
- Phone: +1 (555) 123-4567

---

**Built with ❤️ by Revetio Team**
