# Portfolio Redesign: Visual Contrast & Inspiration Update

Update the portfolio's visual style to include more section distinction (background colors, borders, and shadows) and adopt a more modern, high-contrast design inspired by uzairaudits.me.

## User Requirements
- **Section Distinction:** Use varied background colors and visual separators to make each section distinct.
- **Inspiration:** Look at uzairaudits.me for layout, color usage, and modern UI elements.
- **Maintain Content:** Keep existing SEO expert content, certificates, and projects.

## Proposed Changes

### 1. Global Styles (`src/styles.css`)
- Update color tokens for a more sophisticated palette.
- Introduce a refined "off-white" or light beige background variable.
- Define a "primary" blue that's deep and professional.

### 2. Layout & Global Navigation (`src/routes/index.tsx`)
- Update the global background to a subtle texture or layered color scheme.
- Refine the navigation bar with a more minimalist, high-contrast look.
- Use alternating background colors for main sections (`#fcfbf8`, `#ffffff`, `#f0f4f8`).

### 3. Component Updates
- **Hero (`Hero.tsx`):**
    - Adopt a "split" or "centered focus" layout with higher contrast.
    - Improve the typography hierarchy.
    - Enhance the image container with unique borders or shadows.
- **Experience & Local SEO (`Experience.tsx`, `LocalSeo.tsx`):**
    - Use cards with soft shadows and distinct borders.
    - Improve the timeline visual for experience.
- **Skills & Projects (`Skills.tsx`, `Projects.tsx`):**
    - Use a grid of refined cards.
    - Add hover effects that change background colors or border highlights.
- **Certifications (`Certifications.tsx`):**
    - High-contrast certificate badges/cards.
- **Contact (`Contact.tsx`):**
    - A bold, distinct footer section with a clear call to action.

## Technical Details
- **Tailwind CSS:** Leverage `bg-slate-50`, `bg-zinc-50`, `bg-blue-50/50` etc., for section backgrounds.
- **Typography:** Ensure font weights and sizes create a clear reading flow.
- **Lucide Icons:** (Optional) Use more distinct icons if needed for section headings.
