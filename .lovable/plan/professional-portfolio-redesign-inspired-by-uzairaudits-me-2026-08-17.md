# Professional Portfolio Redesign (Inspired by uzairaudits.me)

Redesign the portfolio to match the professional, high-contrast, and modern aesthetic of uzairaudits.me, using a refined color palette (primarily deep blues, slate, and white) and restoring the original photo appearance.

## User Preferences
- **Visual Style**: Professional, like uzairaudits.me.
- **Colors**: No "cheap" (chpri) colors; use professional tones.
- **Photo**: Restore the photo to its original color (no grayscale).
- **Primary Keyword**: "Rank With Sohaib".

## Proposed Changes

### 1. Global Styles & Theme (`src/styles.css`)
- Refine the `oklch` theme variables to align with a professional SEO auditor aesthetic.
- **Primary**: A sophisticated deep blue (uzairaudits uses a dark, professional theme).
- **Backgrounds**: Alternating clean white and very light slate sections.
- **Typography**: Clean, professional sans-serif (Inter/Geist) with strong weights for headings.

### 2. Layout & Components
- **Index (`src/routes/index.tsx`)**:
  - Simplify the section backgrounds to alternating white and very light gray (`bg-slate-50`).
  - Use a dark section for the "Skills" or "Call to Action" only if it adds professional weight.
  - Update the navigation to be more minimalist.
- **Hero (`src/components/portfolio/Hero.tsx`)**:
  - Remove the `grayscale` filter from the profile image.
  - Refine the "floating" badge and layout to look more integrated and premium.
  - Focus the text on "Rank With Sohaib" and SEO expertise.
- **Experience & Projects**:
  - Use cleaner cards with subtle borders and shadows.
  - High contrast between text and background for readability.
- **Contact & Footer**:
  - Use a deep, professional blue or dark slate background.

### 3. Visual Refinements
- Use consistent border radii (e.g., `rounded-2xl`).
- Improve spacing (generous whitespace).
- Subtle hover effects that feel "expensive" rather than flashy.

## Technical Details
- Continue using Tailwind CSS v4 variables.
- Maintain existing TanStack Start structure and SEO metadata.
- Ensure RLS and server functions remain untouched.
