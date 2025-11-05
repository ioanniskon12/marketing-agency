# Marketing Agency Website

A modern, responsive marketing agency website built with Next.js 14 and styled-components.

## Features

- 🎨 Modern, responsive design
- ⚡ Built with Next.js 14 (App Router)
- 💅 Styled with styled-components
- 📱 Mobile-friendly navigation
- 🎯 Smooth scroll navigation
- ✨ Animated hero section
- 📧 Contact form with validation
- 🎭 Beautiful gradient designs

## Sections

1. **Hero Section** - Eye-catching introduction with stats
2. **Services** - Showcase of 6 key services
3. **About** - Company information and features
4. **Contact** - Functional contact form
5. **Footer** - Company info and social links

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd marketing-agency
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
marketing-agency/
├── app/
│   ├── layout.tsx       # Root layout with styled-components registry
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/
│   ├── Navigation.tsx   # Navigation bar with mobile menu
│   ├── Hero.tsx        # Hero section with stats
│   ├── Services.tsx    # Services grid
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer with links
├── lib/
│   └── registry.tsx    # Styled-components registry
└── package.json
```

## Customization

### Colors

The main brand colors use a purple gradient. To change:

```typescript
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

Replace with your brand colors in the components.

### Content

- Edit company name in `Navigation.tsx` and `Footer.tsx`
- Update services in `Services.tsx`
- Modify stats in `Hero.tsx`
- Change contact information in `Footer.tsx`

### Styling

All styling is done with styled-components. Each component has its styled elements at the top of the file for easy customization.

## Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **styled-components** - CSS-in-JS styling
- **TypeScript** - Type safety

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

Build the project:
```bash
npm run build
```

Then deploy the `.next` folder to your hosting platform.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please open an issue on GitHub or contact support.

---

Built with ❤️ using Next.js and styled-components
