# UI/UX Design Guide - Next.js Implementation

## Color Palette

### Tailwind Config Colors
```js
// tailwind.config.js
colors: {
  primary: {
    DEFAULT: '#F5A623',
    dark: '#D4900F',
    light: '#FFB800',
  },
  secondary: {
    DEFAULT: '#1A1A2E',
    light: '#0D1B2A',
  },
  gray: {
    100: '#F5F5F5',
    300: '#E0E0E0',
    500: '#666666',
    900: '#333333',
  },
}
```

### Usage Rules
- Yellow/Gold: CTAs, icons, highlights, star ratings
- Dark Navy: Headers, footer, overlays
- Never use yellow for large text blocks

---

## Typography

### Fonts (next/font)
```tsx
// app/layout.tsx
import { Montserrat, Open_Sans } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-body',
})
```

### Tailwind Config
```js
fontFamily: {
  heading: ['var(--font-heading)', 'sans-serif'],
  body: ['var(--font-body)', 'sans-serif'],
}
```

### Type Scale
| Element | Tailwind Classes |
|---------|------------------|
| H1 (Hero) | `text-5xl md:text-6xl font-bold leading-tight` |
| H2 (Section) | `text-3xl md:text-4xl font-bold` |
| H3 (Subsection) | `text-2xl font-semibold` |
| H4 (Card titles) | `text-lg font-semibold` |
| Body | `text-base` |
| Small | `text-sm` |

---

## Spacing

### Section Padding
```tsx
// Standard section wrapper
className="py-20 md:py-24 px-5 md:px-16"
```

### Container
```tsx
className="max-w-7xl mx-auto"
```

---

## Components

### Primary Button
```tsx
className="bg-gradient-to-br from-primary to-primary-light text-secondary px-8 py-4 rounded font-semibold uppercase tracking-wide shadow-[0_4px_15px_rgba(245,166,35,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(245,166,35,0.4)] transition-all"
```

### Secondary Button
```tsx
className="border-2 border-primary text-primary px-8 py-4 rounded font-semibold hover:bg-primary hover:text-secondary transition-all"
```

### Service Card
```tsx
className="bg-white rounded-lg overflow-hidden shadow-lg hover:-translate-y-2 transition-transform"
```

### Nav Link
```tsx
className="text-white font-medium px-4 py-2 hover:text-primary transition-colors"
```

### Form Input
```tsx
className="w-full bg-white border border-gray-300 rounded px-4 py-3.5 focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-colors"
```

---

## Layout Patterns

### Hero
- Full-width background image with dark overlay (bg-secondary/60)
- Height: `min-h-[70vh]` or `min-h-screen`
- Content centered or left-aligned

### Card Grid
```tsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
```

### Split Content (50/50)
```tsx
className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
```

### Logo Row
```tsx
className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
```

---

## Effects

### Shadows (Tailwind Config)
```js
boxShadow: {
  'card': '0 10px 40px rgba(0, 0, 0, 0.1)',
  'card-hover': '0 20px 40px rgba(0, 0, 0, 0.15)',
  'gold': '0 4px 15px rgba(245, 166, 35, 0.3)',
  'gold-hover': '0 6px 20px rgba(245, 166, 35, 0.4)',
}
```

### Transitions
```tsx
// Standard
className="transition-all duration-300"

// Card hover lift
className="hover:-translate-y-2 transition-transform duration-300"
```

---

## Images

### Next.js Image Component
```tsx
import Image from 'next/image'

// Hero background
<div className="relative">
  <Image
    src="/hero.jpg"
    alt=""
    fill
    className="object-cover"
    priority
  />
  <div className="absolute inset-0 bg-secondary/60" />
</div>

// Card image
<Image
  src="/project.jpg"
  alt="Project"
  width={400}
  height={300}
  className="object-cover aspect-[4/3]"
/>
```

### Aspect Ratios
| Use | Class |
|-----|-------|
| Hero | `aspect-video` or full-screen |
| Cards | `aspect-[4/3]` |
| Thumbnails | `aspect-square` |

---

## Icons

Use `lucide-react` or `@heroicons/react`:

```tsx
import { Phone, MapPin, Star, Menu, ChevronRight } from 'lucide-react'

<Star className="w-5 h-5 text-primary fill-primary" />
```

---

## Recommended Tailwind Config

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F5A623',
          dark: '#D4900F',
          light: '#FFB800',
        },
        secondary: {
          DEFAULT: '#1A1A2E',
          light: '#0D1B2A',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 40px rgba(0, 0, 0, 0.1)',
        'gold': '0 4px 15px rgba(245, 166, 35, 0.3)',
      },
    },
  },
}
```
