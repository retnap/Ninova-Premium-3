# Ninova Premium 3 — Claude Code Development Rules

## 1. Project Overview

This project is the Ninova Premium promotional website.

The project is built from a Figma Make export and the Figma Make implementation is the primary visual and structural source of truth.

The goal is NOT to redesign the website.

The goal is to reproduce the supplied Figma Make design faithfully and adapt it to the real Ninova Premium content and assets.

---

# 2. Core Principle — Figma Is the Source of Truth

This is the most important rule of the project.

The supplied Figma Make implementation defines the visual direction of the website.

Claude must preserve the Figma design instead of creating a new design interpretation.

Do NOT:

- redesign the layout
- introduce a different visual style
- replace the Figma typography system with another design system
- change the overall spacing system without a technical reason
- invent new sections
- remove sections simply because they seem unnecessary
- introduce generic "AI-generated" luxury real-estate design patterns
- replace the Figma composition with a different UI concept
- simplify the design unless technically required
- add glassmorphism, excessive gradients, neon effects, excessive shadows, or unrelated visual trends
- change the page structure merely because another structure seems better

The implementation should feel like:

"Exactly the Figma Make website, populated with Ninova Premium's real assets and content."

NOT:

"A website inspired by the Figma Make website."

---

# 3. Figma Make Source

The initial Figma Make source includes files such as:

- src/App.tsx
- src/index.css
- src/main.tsx
- src/vite-env.d.ts

Additional Figma Make files may also exist.

Before making substantial changes:

1. Inspect the complete existing implementation.
2. Understand the component structure.
3. Understand the existing CSS/Tailwind structure.
4. Identify every placeholder asset.
5. Identify every placeholder data object.
6. Identify every fake floor-plan implementation.
7. Identify existing animations and interactions.
8. Preserve the existing visual hierarchy.

Do not rewrite the application from scratch unless there is a concrete technical reason.

Prefer adapting the existing Figma Make implementation.

---

# 4. Technology Stack

Use the following stack:

- React
- TypeScript
- Vite
- Tailwind CSS
- Motion
- Lenis
- Lucide React
- Oxlint

Primary commands:

```bash
npm run dev
npm run build
npm run preview
npm run lint

Do not introduce another frontend framework.

Do not migrate the project to:

Next.js
Vue
Angular
Svelte
Astro

unless explicitly requested.

5. React Rules

Use modern React with TypeScript.

Prefer:

functional components
hooks
typed props
local component state where appropriate
reusable components for repeated UI
semantic HTML

Avoid:

unnecessary global state
unnecessary dependencies
class components
duplicated UI logic
massive monolithic components when a clear reusable component boundary exists

Do not create abstractions simply for the sake of abstraction.

Keep the implementation understandable.

6. TypeScript Rules

TypeScript must remain strict.

Avoid:

any

unless there is a documented and unavoidable reason.

Prefer explicit interfaces/types for:

gallery items
floor plans
navigation items
project data
reusable component props
state structures

Do not suppress TypeScript errors with:

// @ts-ignore

or:

// @ts-expect-error

unless absolutely necessary and documented.

7. Styling Rules

The Figma Make implementation is the visual source of truth.

Preserve:

typography
font families
font weights
font sizes
line heights
letter spacing
colors
backgrounds
borders
radii
spacing
grid structure
image proportions
section heights
alignment
button dimensions
navigation structure
visual hierarchy
responsive composition

Do not replace Figma typography or color choices with previously used Ninova design-system decisions.

The previous Ninova visual design preferences are NOT authoritative for this project.

Only the Figma Make design is authoritative.

8. Ninova Assets

The Figma design may contain placeholder images, Unsplash URLs, generated examples, or placeholder content.

These must be replaced with real Ninova Premium assets.

Use local project assets whenever possible.

Do NOT leave:

Unsplash URLs
placeholder images
fake image URLs
generated placeholder floor plans
fake project data

in the production implementation.

Do not use external image hosting for Ninova project images.

9. Image Handling

Use the real Ninova Premium images.

When replacing Figma placeholder images:

Match the semantic purpose of the original image.
Preserve the original image container dimensions.
Preserve the original crop behavior.
Preserve object-position where visually appropriate.
Preserve the original visual hierarchy.
Optimize images where practical.

Do not arbitrarily change the Figma image composition.

Do not replace a large hero image with a completely different image treatment.

The image should change.

The design should not.

10. Floor Plans

Floor plans are real project data and must never be invented.

The Figma Make implementation may contain fake SVG floor plans or example apartment data.

Replace those with the actual Ninova Premium floor-plan assets.

Use the real floor-plan images/PDF-derived assets supplied with the project.

Never invent:

apartment sizes
net m²
gross m²
room counts
floor numbers
plan names
apartment configurations

If exact information is not available in the supplied project sources, do not fabricate it.

Preserve the Figma floor-plan section's:

layout
image area
navigation
filters
typography
spacing
transitions
responsive behavior

Only replace the data and floor-plan visuals.

11. Content Rules

Use factual Ninova Premium information from the supplied project materials.

Do not invent marketing claims.

Do not invent:

prices
payment campaigns
investment returns
guarantees
apartment dimensions
amenities
construction claims
certifications
completion dates
location claims

If a piece of Figma placeholder text does not correspond to real Ninova information, replace it with appropriate source-supported Ninova content.

If no reliable replacement exists, use a minimal neutral alternative or remove only the content itself while preserving the visual structure when possible.

12. Navigation

Navigation should follow the actual Ninova Premium project structure.

The visual appearance of the navigation must remain faithful to the Figma design.

Navigation labels and destinations may be adapted to the actual Ninova website requirements.

Do not change the visual navigation system merely because the labels change.

All navigation should work correctly on desktop and mobile.

13. Animation

Motion should preserve the intended character of the Figma design.

Use the installed Motion library when appropriate.

Use Lenis for smooth scrolling if it is part of the intended interaction model.

Animations should be:

smooth
restrained
purposeful
performant
consistent with the Figma implementation

Do not add unnecessary animations.

Do not animate every element simply because an animation library is available.

Avoid animation that causes:

layout shifts
excessive CPU usage
scroll jank
delayed interaction
accessibility problems
14. Reduced Motion

Respect the user's reduced-motion preference.

Support:

@media (prefers-reduced-motion: reduce)

Animations should be reduced or disabled when appropriate.

The website must remain fully usable without animation.

15. Responsive Design

Responsive behavior is a first-class requirement.

The website must work correctly on:

large desktop
standard desktop
laptop
tablet
mobile
small mobile screens

Do not simply shrink the desktop design.

Preserve the Figma design's intended responsive composition.

Pay particular attention to:

navbar behavior
hero height
image cropping
typography scaling
section spacing
horizontal overflow
carousels
buttons
floor plans
galleries
lightboxes
text wrapping
touch interaction

There must be no unintended:

horizontal page scrolling
clipped text
overflowing buttons
broken image containers
inaccessible controls
overlapping sections
16. Mobile UX

Mobile is not an afterthought.

All interactive components must work with touch.

Where appropriate, support:

swipe gestures
touch-friendly controls
appropriate tap targets
mobile navigation
mobile image galleries
mobile floor-plan navigation

Do not introduce desktop-only interactions into mobile layouts.

17. Accessibility

Use semantic HTML.

Prefer:

<header>
<nav>
<main>
<section>
<footer>
<button>

over unnecessary generic <div> elements.

Interactive elements must be keyboard accessible.

Images should have meaningful alt text when the image conveys information.

Decorative images should use appropriate empty alt attributes.

Maintain visible focus states.

Do not remove focus outlines without providing an accessible replacement.

Respect reduced motion.

Ensure sufficient text/background contrast according to WCAG expectations.

18. Performance

Performance is a project requirement.

Priorities:

fast initial rendering
optimized images
minimal JavaScript
minimal unnecessary dependencies
efficient animations
no layout shifts
lazy loading for below-the-fold images
appropriate image dimensions
efficient React rendering

Do not load every large image immediately if it is not required above the fold.

Use:

loading="lazy"

for appropriate non-critical images.

Do not lazy-load the primary hero image if doing so harms LCP.

Use modern image formats such as WebP/AVIF when practical.

Do not sacrifice visual fidelity unnecessarily for performance.

19. Image Performance

Large original images should not automatically be served at their maximum source resolution.

Where appropriate:

create optimized variants
use responsive image sizes
use srcset
use sizes
use appropriate compression
avoid unnecessarily huge downloads

However, optimization must not visibly degrade the Figma design.

20. JavaScript Performance

Avoid unnecessary:

scroll listeners
resize listeners
repeated DOM queries
expensive calculations during render
large animation loops
unnecessary React state updates

Use browser APIs efficiently.

For scroll-related behavior, prefer efficient event handling and existing libraries such as Lenis when appropriate.

Do not implement custom animation loops when Motion can handle the interaction efficiently.

21. Security

Security is required even though this is a frontend project.

Never expose secrets in the repository.

Never add:

API keys
secret tokens
passwords
private credentials
database credentials
service account credentials

Do not create a .env file containing secrets.

Do not place secrets inside:

React components
TypeScript files
CSS
JSON
public assets
HTML

Remember:

Anything shipped to the browser is public.

Therefore frontend environment variables must never contain actual secrets.

22. External Requests

Do not introduce unnecessary external API requests.

Do not add:

analytics
tracking
third-party APIs
external CMS
external databases
unnecessary CDN dependencies

unless explicitly requested.

The website should work as a self-contained frontend.

External resources should be used only when necessary and intentionally approved.

23. Dependencies

Do not install packages without a reason.

Before adding a dependency, determine whether the existing stack already provides the required functionality.

Current primary dependencies include:

react
react-dom
motion
lenis
lucide-react

Current development tooling includes:

vite
typescript
tailwindcss
oxlint

Avoid dependency bloat.

24. Git and Repository Hygiene

Never commit:

.env
.env.*
*.pem
*.key
*.p12
credentials.*
secrets.*
.DS_Store

Do not commit private credentials.

Do not commit unnecessary build output.

Do not commit temporary files.

Do not commit editor-specific temporary files.

The repository should remain clean and production-ready.

25. Claude Skills

The following skills are available for this project:

frontend-design
stitch-design-taste
redesign-existing-projects
minimalist-ui
improve-ui
fixing-motion-performance

Important:

Skills must support the Figma design rather than override it.

Do not use a design skill to redesign the project.

Use design-related skills to:

inspect visual consistency
identify implementation problems
improve fidelity
detect accidental deviations
improve responsive behavior
improve accessibility
improve motion performance

The Figma Make output remains the source of truth.

26. frontend-design Skill

When using the frontend-design skill:

Do NOT interpret it as permission to create a new visual direction.

Use it to improve implementation quality while preserving the existing Figma design.

The goal is:

Figma fidelity + production-quality implementation.

Not:

Figma-inspired redesign.

27. Code Quality

Keep components readable.

Prefer clear naming.

Avoid unnecessary comments.

Comments should explain:

non-obvious technical decisions
unusual browser behavior
performance considerations
intentional deviations from the Figma source

Do not write comments that simply describe obvious code.

28. Build Verification

Before considering an implementation complete, run:

npm run build

Then run:

npm run lint

If TypeScript checking is configured separately, run it as well.

Fix all errors.

Do not consider the task complete while the production build is failing.

29. Scope Control

Do not perform work outside the current task.

Do not:

redesign unrelated sections
introduce unrelated features
add authentication
add a CMS
add a backend
add a database
add an admin panel
add unnecessary API integrations
add analytics
add unrelated pages

If a problem is discovered outside the current scope:

Do not silently expand scope.
Record it.
Continue the current task if possible.
30. Visual Fidelity Checklist

Before finishing a visual implementation, compare the result against the Figma Make source.

Check:

section order
section heights
typography
font weights
line heights
colors
background colors
image ratios
image crops
spacing
margins
paddings
grids
alignment
buttons
borders
radii
navigation
arrows
icons
overlays
transitions
animations
responsive behavior

The objective is high visual fidelity.

31. No Unnecessary Redesign

If something looks unusual in the Figma design, do not automatically "fix" it.

If it is intentional in the Figma design, preserve it.

Only change it if:

it is technically broken
it is inaccessible
it prevents responsive behavior
it causes a clear performance problem
it conflicts with actual Ninova content/assets

When making such a change, keep the change as visually close to the original as possible.

32. Implementation Workflow

For each major implementation task:

Step 1 — Inspect

Inspect:

existing source code
Figma Make implementation
available assets
current dependencies
current configuration
Step 2 — Map

Identify:

placeholder images
placeholder text
fake data
fake floor plans
external image URLs
components requiring Ninova data
Step 3 — Implement

Adapt the existing Figma Make implementation.

Do not rebuild the design from scratch.

Step 4 — Verify

Run:

npm run build
npm run lint
Step 5 — Responsive Review

Verify:

desktop
tablet
mobile
small mobile
Step 6 — Visual Review

Compare the implementation with the Figma Make source.

Step 7 — Scope Audit

Confirm:

no unnecessary redesign
no scope creep
no invented data
no secrets
no unnecessary dependencies
no unrelated features
no external placeholder images remain
33. Definition of Done

A task is complete only when:

the Figma design is faithfully implemented
Ninova assets replace placeholder assets
real floor plans replace fake floor plans
Ninova content is source-supported
no fake project data remains
no Unsplash/placeholder production images remain
responsive behavior works
mobile interactions work
accessibility requirements are respected
animations are performant
reduced-motion behavior is supported
no secrets exist in the repository
no unnecessary dependencies were introduced
npm run build succeeds
npm run lint succeeds
Git repository hygiene is maintained
34. Final Principle

The project has one visual source of truth:

THE SUPPLIED FIGMA MAKE DESIGN.

Do not redesign it.

Do not reinterpret it.

Do not simplify it.

Do not replace it with a generic real-estate website.

Preserve the design and replace the placeholder project data with real Ninova Premium assets and verified information.

The desired result is:

FIGMA MAKE DESIGN
+
REAL NINOVA PREMIUM CONTENT
+
REAL NINOVA PREMIUM IMAGES
+
REAL NINOVA PREMIUM FLOOR PLANS
+
PRODUCTION-QUALITY CODE
+
FAST, RESPONSIVE, ACCESSIBLE, SECURE IMPLEMENTATION