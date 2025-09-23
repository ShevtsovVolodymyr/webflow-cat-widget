# Veralume Report

A modern React application for generating and displaying diamond grading reports with advanced visual performance analytics.

## 🚀 Features

- **Modern React 19** with TypeScript support
- **Vite** for fast development and building
- **SCSS** support for advanced styling
- **ESLint** for code quality and consistency
- **Development & Production** build modes
- **Component-based architecture** with BEM methodology

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd veralume-report
```

2. Install dependencies:
```bash
npm install
```

## 🏃‍♂️ Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## 🏗️ Building

Create a production build:
```bash
npm run build
```

The built files will be generated in the `dist/` directory.

## 🔍 Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## 🧹 Code Quality

Run ESLint to check code quality:
```bash
npm run lint
```

## 📁 Project Structure

```
veralume-report/
├── src/
│   ├── components/     # React components
│   ├── styles/         # SCSS stylesheets
│   ├── hooks/          # React hooks
│   └── main.tsx        # Application entry point
├── public/             # Static assets
├── dist/               # Production build output
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── eslint.config.js    # ESLint configuration
```

## 🛡️ Technologies Used

### Core Dependencies
- **React 19.1.1** - Modern React with latest features
- **React DOM 19.1.1** - DOM rendering for React

### Development Tools
- **Vite 7.1.2** - Fast build tool and dev server
- **TypeScript 5.8.3** - Type-safe JavaScript
- **Sass 1.93.0** - Advanced CSS preprocessing
- **ESLint 9.33.0** - Code linting and quality

### Build Configuration
- **@vitejs/plugin-react** - Vite React plugin
- **typescript-eslint** - TypeScript ESLint integration
- **eslint-plugin-react-hooks** - React Hooks linting rules

## 🎯 Development Guidelines

### Code Style
- Use **TypeScript** for type safety
- Follow **BEM methodology** for CSS class naming
- Use **SCSS** for styling with nested selectors
- Implement **React functional components** with hooks

### Component Structure
```typescript
// Example component structure
interface ComponentProps {
  // Props interface
}

const Component: React.FC<ComponentProps> = ({ ...props }) => {
  // Component logic
  return (
    <div className="component-name">
      {/* JSX content */}
    </div>
  );
};

export default Component;
```

### Styling Convention
```scss
// BEM naming convention
.component-name {
  // Block styles
  
  &__element {
    // Element styles
  }
  
  &--modifier {
    // Modifier styles
  }
}
```

## 🔧 Configuration

### Environment Modes
- **Development**: `npm run dev` - Uses development mode with hot reload
- **Production**: `npm run build` - Optimized build for deployment

### !IMPORTANT For development production environment always use asolute urls

### TypeScript Configuration
The project uses strict TypeScript configuration for enhanced type safety and better development experience.

### Vite Configuration
Vite is configured with React plugin and optimized for both development and production environments.

## 📝 Scripts Explained

| Script | Description |
|--------|-------------|
| `dev` | Start development server in development mode |
| `build` | Build TypeScript and create production bundle for production environment|
| `build:dev` | Build TypeScript and create production bundle for development environment|
| `lint` | Run ESLint to check code quality |
| `preview` | Preview production build locally |

## 🤝 Contributing

1. Follow the established code style and conventions
2. Run `npm run lint` before committing
3. Ensure TypeScript compilation passes with `npm run build`
4. Test your changes in both development and production modes

---

For more information about the technologies used:
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Sass Documentation](https://sass-lang.com/)