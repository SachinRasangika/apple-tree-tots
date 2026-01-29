# Refactoring Summary: Website and Admin Dashboard Separation

## Overview
The project has been successfully refactored to clearly separate the public website from the admin dashboard while maintaining shared components and logic.

## New Project Structure

```
src/
├── website/                    # Public-facing website
│   ├── pages/                 # Website pages
│   │   ├── HomePage.tsx
│   │   ├── TeamPage.tsx
│   │   ├── AdmissionsPage.tsx
│   │   ├── ApplicationPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── PackagesPage.tsx
│   │   └── DesignSystemPage.tsx
│   ├── components/            # Website-specific components (re-exports)
│   │   └── index.ts          # Central export for all website components
│   ├── layouts/              # Layout wrappers
│   │   └── WebsiteLayout.tsx
│   └── routes.tsx            # Website route definitions
│
├── dashboard/                 # Admin dashboard
│   ├── pages/                # Admin pages
│   │   ├── LoginPage.tsx
│   │   ├── DashboardPage.tsx
│   │   ├── ApplicationsPage.tsx
│   │   ├── GalleryPage.tsx
│   │   └── SettingsPage.tsx
│   ├── components/           # Admin UI components
│   │   └── Sidebar.tsx
│   ├── layouts/              # Layout wrappers
│   │   └── DashboardLayout.tsx
│   ├── hooks/                # Admin-specific hooks (future)
│   ├── services/             # Admin API services (future)
│   ├── types/                # Admin-specific types (future)
│   └── routes.tsx            # Dashboard route definitions
│
├── components/               # Shared UI components
│   ├── ui/                  # UI primitives
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── etc...
│   │   └── index.ts
│   ├── [Other shared components]  # Non-website specific components
│   └── [Website components still here for now]  # To be migrated
│
├── context/                  # Shared React context
│   └── DarkModeContext.tsx
│
├── hooks/                    # Shared hooks
│   └── useInView.ts
│
├── lib/                      # Utility functions and API helpers
│
├── data/                     # Data files
│
├── App.tsx                   # Main app with routing
├── index.tsx                 # Entry point
└── index.css                 # Global styles
```

## Key Changes

### 1. **Route Separation**
- **Website Routes** (`src/website/routes.tsx`): Public site routes (/, /team, /admissions, etc.)
- **Admin Routes** (`src/dashboard/routes.tsx`): Admin dashboard routes (/admin/login, /admin/dashboard, etc.)
- Routes are imported in `App.tsx` and rendered conditionally

### 2. **Component Organization**
- **Website Components** (`src/website/components/`): Re-exports from shared location
  - Currently acting as a facade pointing to `src/components/`
  - Components will be moved here completely in the future
- **Shared Components** (`src/components/ui/`): Reusable UI primitives remain in place
- **Shared Context & Hooks**: Remain in `src/context/` and `src/hooks/`

### 3. **Layout System**
- **WebsiteLayout**: Wraps website pages with navigation and banners
- **DashboardLayout**: Wraps admin pages with sidebar navigation

### 4. **Admin Dashboard (Placeholder)**
The following pages have been created as placeholders:
- **LoginPage**: Admin authentication
- **DashboardPage**: Overview dashboard with stats
- **ApplicationsPage**: Manage student applications
- **GalleryPage**: Manage image gallery
- **SettingsPage**: School settings and admin management

## Routing Flow

```
App.tsx
├── Router with basename="/apple-tree-tots/"
├── Admin Routes (/admin/*)
│   ├── /admin/login → LoginPage
│   ├── /admin/dashboard → DashboardLayout + DashboardPage
│   ├── /admin/applications → DashboardLayout + ApplicationsPage
│   ├── /admin/gallery → DashboardLayout + GalleryPage
│   └── /admin/settings → DashboardLayout + SettingsPage
│
└── Website Routes (/*)
    ├── / → HomePage
    ├── /team → TeamPage
    ├── /admissions → AdmissionsPage
    ├── /application → ApplicationPage
    ├── /contact → ContactPage
    ├── /packages → PackagesPage
    └── /design-system → DesignSystemPage
```

## Import Pattern Updates

### Before (Old Structure)
```typescript
import { HomePage } from './pages/HomePage';
import { Navigation } from './components/Navigation';
```

### After (New Structure)
```typescript
import { HomePage } from './website/pages/HomePage';
import { Navigation, Footer } from './website/components';
```

## Next Steps for Full Migration

### Phase 1: Complete Component Migration
1. Move website-specific components from `src/components/` to `src/website/components/`
2. Update imports in all website pages
3. Remove old `src/components/` exports

### Phase 2: Enhance Admin Dashboard
1. Create admin authentication system (useAdminAuth hook)
2. Add admin API services (`dashboard.api.ts`)
3. Define admin-specific types (`dashboard.types.ts`)
4. Implement admin UI components (Sidebar, Topbar, StatCard, Table, etc.)
5. Connect dashboard pages to backend/database

### Phase 3: Add Admin Features
1. Application review and management workflows
2. Gallery management with image uploads
3. Student enrollment management
4. Reports and analytics dashboard
5. Settings and configuration management

## Testing Checklist

- [ ] All website pages render correctly
- [ ] Website routes work: /, /team, /admissions, /application, /contact, /packages, /design-system
- [ ] Admin routes accessible: /admin/login, /admin/dashboard, /admin/applications, /admin/gallery, /admin/settings
- [ ] Navigation works on website
- [ ] Banner functionality on website pages
- [ ] Dark mode context works across all pages
- [ ] Responsive design maintained on all pages

## Development Guidelines

### Adding a New Website Page
1. Create page in `src/website/pages/PageName.tsx`
2. Add route to `src/website/routes.tsx`
3. Import shared components from `src/website/components`
4. Use UI primitives from `src/components/ui`

### Adding a New Admin Page
1. Create page in `src/dashboard/pages/PageName.tsx`
2. Add route to `src/dashboard/routes.tsx`
3. Wrap with `DashboardLayout` in routes
4. Create corresponding UI components in `src/dashboard/components/` if needed

### Shared Components & Context
- Use from `src/context/` for context (DarkModeContext)
- Use from `src/hooks/` for hooks (useInView)
- Use from `src/components/ui/` for UI primitives
- Avoid component duplication - create shared versions when possible

## Benefits of This Structure

1. **Clear Separation**: Public website and admin dashboard are clearly separated
2. **Scalability**: Easy to add new pages and features to either section
3. **Reusability**: Shared components remain reusable across both sections
4. **Maintainability**: Clear organizational structure for better code maintenance
5. **Future Growth**: Foundation laid for complex admin features and future expansion

## Notes

- Website component files are currently located in `src/components/` and re-exported via `src/website/components/index.ts`
- In the next iteration, these should be physically moved to `src/website/components/`
- Admin dashboard pages are currently placeholders - implement backend integration in Phase 2
- All styling maintains the existing color scheme and design system
