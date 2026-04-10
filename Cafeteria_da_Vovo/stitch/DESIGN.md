# Design System Document: The Artisanal Table

## 1. Overview & Creative North Star
**Creative North Star: "The Heritage Editorial"**

This design system moves away from the cold, clinical efficiency of modern SaaS and instead embraces the warmth of a Brazilian farmhouse. It is built on the concept of a "digital scrapbook"—an intentional, high-end editorial experience that feels curated and tactile. 

To break the "template" look, we employ **intentional asymmetry**. Large, high-contrast serif typography should overlap with soft, rounded containers. Images should not always sit in perfect boxes; they should breathe, sometimes breaking the container bounds to create a sense of organic movement. This system isn't just a shop; it’s an invitation into "Vovó’s" kitchen.

## 2. Colors & Tonal Depth
The palette is a sophisticated blend of earth and steam. We use color not just for decoration, but to define the very structure of the interface.

*   **Primary (#442a22) & Primary Container (#5d4037):** These deep coffee tones represent the strength and aroma of the brew. Use them for high-impact moments and core CTAs.
*   **Secondary (#526447):** A sage green that grounds the experience in nature and the Brazilian countryside.
*   **Tertiary (#581e00):** A terracotta accent that provides warmth and "baked-in" personality.
*   **Neutral Surfaces:** A range of creams (`surface-container-lowest` to `highest`) that mimic the texture of heavy cardstock or linen.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section content. Boundaries must be defined solely through background color shifts. For example, a card (using `surface-container-lowest`) should sit on a background of `surface-container-low`. We define space through weight and tone, not lines.

### Signature Textures & Gradients
To avoid a flat "vector" look, use subtle linear gradients on primary buttons and hero sections, transitioning from `primary` (#442a22) to `primary-container` (#5d4037) at a 45-degree angle. This adds a "roasted" depth that flat color cannot replicate.

---

## 3. Typography
The typographic soul of this system lies in the tension between the "Nurturing Serif" and the "Modern Utility."

*   **Display & Headlines (Noto Serif):** Use these for storytelling. The `display-lg` (3.5rem) should be used with tight letter-spacing and generous leading. Don't be afraid to let a headline overlap a container or an image.
*   **Body & Titles (Plus Jakarta Sans):** A clean, approachable sans-serif that ensures legibility. While the serif brings the "vintage," the sans-serif ensures the "modern" digital experience is effortless.
*   **Visual Hierarchy:** Always pair a `headline-lg` with a `body-md` to create a dramatic scale contrast. This "editorial" spacing creates a premium, high-end magazine feel.

---

## 4. Elevation & Depth
We eschew "Material" shadows in favor of **Tonal Layering** and **Atmospheric Perspective.**

*   **The Layering Principle:** Depth is achieved by stacking. Place a `surface-container-lowest` (#ffffff) card atop a `surface` (#fcf9f4) page to create a soft, natural lift.
*   **The "Ghost Border" Fallback:** If a container lacks contrast against its background, use a "Ghost Border": the `outline-variant` (#d4c3be) at **15% opacity**. It should be felt, not seen.
*   **Ambient Shadows:** For floating elements (like a "Cart" modal), use a highly diffused shadow: `y: 20px, blur: 40px, color: rgba(28, 28, 25, 0.06)`. This mimics the way a soft lamp casts a shadow in a cozy room.
*   **Glassmorphism:** For top navigation bars, use the `surface` color at 80% opacity with a `backdrop-blur: 12px`. This allows the "warmth" of the content to bleed through as the user scrolls.

---

## 5. Components

### Buttons
*   **Primary:** Rounded `full` (pill-shape) or `xl` (1.5rem). Use the Coffee Gradient (Primary to Primary Container). Text should be `label-md` in `on-primary` (#ffffff).
*   **Secondary:** Sage green (`secondary-container`) with `on-secondary-container` text. No border.
*   **Tertiary:** No background. Bold `plusJakartaSans` text with a subtle underline using the `tertiary` (#581e00) color.

### Cards & Lists
*   **The "No-Divider" Mandate:** Forbid the use of horizontal lines. To separate items in a list, use `1.5rem` of vertical white space or alternate background tones (e.g., `surface-container-low` vs `surface-container-high`).
*   **Roundedness:** All cards must use `xl` (1.5rem) corner radius. This communicates the "soft and inviting" nature of the brand.

### Input Fields
*   **Style:** Filled, not outlined. Use `surface-container-highest` (#e5e2dd) as the background. 
*   **Shape:** `md` (0.75rem) rounded corners.
*   **Focus State:** A 2px "Ghost Border" using the `primary` color at 30% opacity.

### Featured "Vovó" Component: The Recipe Card
A specific layout for special offers. Use an asymmetrical grid where the image takes up 60% of the card and bleeds off the left edge, with a `headline-sm` serif title overlapping the image-to-content transition point.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use generous white space (the "Breathing Room" rule). If you think it’s enough space, add 8px more.
*   **Do** use "Sage Green" (`secondary`) for success states or organic elements, avoiding "System Green."
*   **Do** treat images with a slight `0.5rem` (sm) corner radius to match the UI's softness.

### Don’t:
*   **Don’t** use pure black (#000000). Use `on-surface` (#1c1c19) for all text to maintain the warm, organic feel.
*   **Don’t** use sharp 90-degree corners. Everything must feel "hand-sanded" and smooth.
*   **Don’t** use "Drop Shadows" on flat buttons. Rely on color and scale to indicate interactivity.
*   **Don’t** use standard "Center-Aligned" layouts for everything. Use left-aligned editorial stacks to create a custom, high-end feel.