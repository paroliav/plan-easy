# PlanEasy

> A modern, AI-powered travel planning platform for discovering and booking campsites across Australia and New Zealand.

PlanEasy is a full-stack web application that reimagines how travelers discover and plan camping adventures. Built with performance, scalability, and user experience at its core, the platform combines powerful search capabilities with intelligent itinerary planning to help users find their perfect road trip destinations.

## 🎯 Project Overview

PlanEasy serves as a comprehensive travel planning ecosystem, featuring:

- **Advanced Search & Discovery**: Real-time search across 15,000+ campsites and points of interest with intelligent filtering
- **Interactive Map Integration**: Split-view interface combining list and map visualizations for spatial exploration
- **AI-Powered Itinerary Builder**: Smart route planning with contextual suggestions and optimization
- **Curated Collections**: Expert-curated destination collections for different travel styles and preferences
- **Rich Detail Pages**: Comprehensive POI information with galleries, reviews, amenities, and booking integration

## 🏗️ Architecture & Technology

### Frontend Stack
- **Next.js 16** (App Router) - Server-side rendering, route optimization, and API routes
- **React 19** - Modern React patterns with server and client components
- **TypeScript** - Full type safety across the application
- **Tailwind CSS** - Utility-first styling with custom design system
- **Radix UI** - Accessible, unstyled component primitives
- **shadcn/ui** - Customizable component library built on Radix

### Backend & Services
- **Algolia Search** - High-performance search infrastructure with faceted filtering
- **AWS Amplify** - Cloud hosting and backend services (configured)
- **Server Components** - Optimized data fetching and rendering

### Key Features
- **Real-time Search**: Instant results with debounced queries and pagination
- **Advanced Filtering**: Multi-faceted filters with dynamic result counts
- **Image Optimization**: Next.js Image component with remote pattern support
- **Accessibility**: WCAG AA compliant with proper ARIA labels and keyboard navigation
- **Responsive Design**: Mobile-first approach supporting desktop, tablet, and mobile breakpoints
- **Performance**: Optimized bundle sizes, code splitting, and lazy loading

## 📁 Project Structure

```
plan-easy/
├── app/                    # Next.js App Router pages
│   ├── campsite/[id]/     # Dynamic POI detail pages
│   ├── collections/        # Curated collections hub
│   ├── search/             # Search results with map/list view
│   └── itinerary/          # AI-powered itinerary builder
├── components/              # React components
│   ├── ui/                 # Reusable UI component library
│   └── [feature]/          # Feature-specific components
├── lib/                    # Utilities and configurations
│   ├── algolia/            # Search client and server utilities
│   └── utils/              # Shared helper functions
└── public/                 # Static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Algolia account with search index configured
- (Optional) AWS Amplify account for deployment

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd plan-easy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Fill in your Algolia credentials:
   ```env
   NEXT_PUBLIC_ALGOLIA_APP_ID=your_app_id
   NEXT_PUBLIC_ALGOLIA_SEARCH_KEY=your_search_key
   NEXT_PUBLIC_ALGOLIA_INDEX=your_index_name
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

The application uses a custom design system built on:
- **Design Tokens**: Centralized color, typography, and spacing variables
- **Component Variants**: Consistent component styling with CVA (Class Variance Authority)
- **Theme Support**: Light/dark mode ready (via next-themes)
- **Responsive Grid**: 8pt spacing system with breakpoint utilities

## 🔍 Search Implementation

The search functionality leverages Algolia's powerful features:
- **Faceted Search**: Multi-dimensional filtering by category, amenities, location, etc.
- **Geolocation**: Distance-based sorting and filtering
- **Typo Tolerance**: Intelligent query handling
- **Result Highlighting**: Search term highlighting in results
- **Analytics Ready**: Event tracking for search behavior

## 🗺️ Key Pages & Features

### Homepage
- Hero search interface with quick filters
- Featured collections carousel
- AI concierge integration
- Trust indicators and social proof

### Search & Discovery
- Split-view layout (list + map)
- Sticky filter bar with active filter counts
- Advanced filter drawer with accordion sections
- Sort options (relevance, rating, distance, price)
- Infinite scroll pagination

### POI Detail Pages
- Image gallery with lightbox
- Comprehensive amenity listings
- Review system with ratings breakdown
- Interactive map integration
- Booking/reservation interface
- Nearby recommendations

### Collections
- Curated destination collections
- Filterable by category (coastal, off-grid, family, etc.)
- Collection detail pages with embedded search
- Social sharing capabilities

### Itinerary Builder
- Drag-and-drop route planning
- Smart insert suggestions along route
- Travel time and distance calculations
- Budget and time sliders
- Export and sharing functionality

## 🛠️ Development

### Type Checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

### Code Structure
- **Server Components** by default for optimal performance
- **Client Components** (`"use client"`) only where interactivity is needed
- **Type Safety**: Full TypeScript coverage with strict mode
- **Component Composition**: Reusable, composable component architecture

## 📊 Performance Considerations

- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Next.js Image with WebP/AVIF support
- **Bundle Analysis**: Optimized imports and tree-shaking
- **Caching Strategy**: Appropriate cache headers for static and dynamic content
- **Search Optimization**: Debounced queries and result memoization

## 🔐 Security & Best Practices

- Environment variables for sensitive keys
- Client/server separation for API keys
- Input sanitization and validation
- XSS protection via React's built-in escaping
- Secure image loading with domain allowlisting

## 🚢 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push

### AWS Amplify
1. Connect repository in Amplify Console
2. Configure build settings (uses default Next.js build)
3. Set environment variables in Amplify console
4. Deploy

## 📝 Notes

- The application is designed to handle large datasets efficiently
- Search index structure is optimized for fast queries and filtering
- Component library is extensible and follows design system principles
- Architecture supports future features like user accounts, saved trips, and social features

## 🤝 Contributing

This is a personal project, but suggestions and feedback are welcome. Please open an issue for bugs or feature requests.

## 📄 License

© 2026 Vivek Parolia.  
All rights reserved.  

This repository is public for reference only.  
You **may not copy, distribute, modify, or use** the code in any way without my explicit permission.

---

**Built with** ❤️ **using Next.js, React, and modern web technologies**
