# Project Documentation

## Overview

This is a full-stack web application built with a modern tech stack featuring React on the frontend, Express.js on the backend, and PostgreSQL with Drizzle ORM for data management. The project appears to be set up as a portfolio/personal website template with a complete component library using shadcn/ui components.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for development and production builds
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ESM modules
- **Database ORM**: Drizzle ORM
- **Database**: PostgreSQL (configured for Neon Database)
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development

### Development Setup
- **Development Server**: Custom Vite integration with Express
- **Hot Module Replacement**: Full HMR support in development
- **TypeScript**: Strict mode enabled across the entire stack
- **Module Resolution**: Custom path aliases for clean imports

## Key Components

### Frontend Components
- **Navigation**: Responsive navigation with mobile menu and smooth scrolling
- **Hero Section**: Landing page with call-to-action buttons
- **About Section**: Personal information and contact details
- **Skills Section**: Technology showcase with progress indicators
- **Projects Section**: Portfolio project cards with technology badges
- **Contact Section**: Contact form with toast notifications
- **Footer**: Social media links and branding

### Backend Components
- **Route Registration**: Centralized route management system
- **Storage Interface**: Abstracted CRUD operations with pluggable implementations
- **Error Handling**: Global error handling middleware
- **Request Logging**: Comprehensive request/response logging

### UI Component System
- Comprehensive set of 40+ shadcn/ui components
- Consistent design system with CSS variables
- Dark/light mode support built-in
- Accessible components using Radix UI primitives

## Data Flow

### Client-Side Data Flow
1. React components use TanStack Query for server state
2. Forms use React Hook Form with Zod validation
3. Toast notifications provide user feedback
4. Smooth scrolling navigation between sections

### Server-Side Data Flow
1. Express middleware handles request processing
2. Routes delegate to storage interface for data operations
3. Storage interface provides abstraction over database operations
4. Responses are logged and returned to client

### Database Schema
Implements PostgreSQL database with the following tables:
- **Users table** - id, username, and password fields for authentication
- **Contacts table** - Contact form submissions with firstName, lastName, email, subject, message, and createdAt fields
- Drizzle schema with Zod validation integration
- Full database storage implementation replacing in-memory storage

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React 18 with TypeScript
- **Component Library**: Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with PostCSS
- **Icons**: Lucide React icon library
- **Date Handling**: date-fns utility library
- **Carousel**: Embla Carousel for image galleries

### Backend Dependencies
- **Database**: Neon Database (PostgreSQL-compatible)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Session Management**: connect-pg-simple for PostgreSQL sessions
- **Development Tools**: tsx for TypeScript execution

### Development Dependencies
- **Build Tools**: Vite with React plugin
- **Code Quality**: TypeScript with strict configuration
- **Replit Integration**: Custom plugins for Replit environment

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` script

### Environment Configuration
- **Development**: Uses tsx for direct TypeScript execution
- **Production**: Compiled JavaScript with NODE_ENV=production
- **Database**: Requires DATABASE_URL environment variable

### Deployment Architecture
- **Static Assets**: Frontend built to dist/public directory
- **Server**: Express server serves both API and static files
- **Database**: PostgreSQL database with connection pooling
- **Sessions**: Database-backed session storage

The application is designed to be deployed on platforms that support Node.js with PostgreSQL, with specific optimizations for Replit deployment including development banner integration and runtime error overlays.