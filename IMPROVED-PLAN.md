

# 🌅 Digital Oasis — Immersive Developer Portfolio

## Aesthetic & Vibe
- **Theme:** Synthwave grid landscapes melting into soft pastel/dreamy skies
- **Palette:** Dark base (#0a0a1a) with a **multi-glow gradient accent** (cyan → pink → purple) used on text highlights, borders, buttons, and glowing effects
- **Typography:** Inter — clean and futuristic
- **Texture:** Subtle grain overlay, soft bloom/glow effects on accent elements, dreamy fog particles
- **Cursor:** Custom cursor with a soft glow trail that shifts through the gradient colors

---

## 1. 🏝️ Hero — "Floating Island" (Full Viewport)
A **3D synthwave landscape** built with React Three Fiber:
- A retro **grid floor** stretching to the horizon with glowing grid lines
- Low-poly **mountains/terrain** silhouettes in the distance
- A large **glowing synthwave sun** on the horizon with gradient bands (cyan → pink → purple)
- Soft **cloud/fog layers** drifting across the scene
- **Mouse-reactive parallax** — the entire scene subtly orbits as the user moves their mouse
- **Your name "Alex Chen"** and **"Full-Stack Developer"** floating in the 3D space with a dreamy glow
- A pulsing **scroll indicator** at the bottom inviting users to dive deeper

---

## 2. 🎬 Navigation — Scene Transitions
- **Full-page snap scrolling** — each section is a "scene" that snaps into view
- **Cinematic transitions** between sections: fade-through-black, parallax wipe, or dimensional shift effects
- A **minimal floating nav** (small dots or glassmorphic pill) on the side/top showing current position
- Each section has its own **entrance animation** — elements assemble, fade, or materialize as you arrive
- Sticky header with gradient text that blurs/fades on scroll

---

## 3. 👤 About Me — "Emerging from the Mist"
- Dark atmospheric background with subtle animated fog/particles
- Your bio text **reveals line by line** with a glowing typewriter-like effect as the section snaps in
- A placeholder avatar/photo with a **holographic border** that shimmers with the gradient
- Floating accent shapes (abstract geometry) drifting slowly in the background
- Stats or fun facts displayed in **glowing pill badges** (e.g., "3+ years", "50+ projects")

---

## 4. 🛠️ Tech Stack — "Constellation Grid"
- Technologies displayed as **glowing nodes** in a constellation-like pattern
- Lines connect related technologies, pulsing softly with the gradient
- **Hover interaction:** hovering a node enlarges it, reveals the tech name with a bloom glow, and highlights connected nodes
- Categories (Frontend, Backend, Tools) separated by subtle labels
- The entire constellation gently floats/breathes with a slow animation
- On mobile: falls back to a clean icon grid with glow effects

---

## 5. 🎯 Bento Project Grid — "Portal Cards" (3-4 Projects)
- **Asymmetric bento grid** with varied card sizes
- Each card is a **"portal"** — dark glassmorphic surface with a gradient border glow
- **Hover effect (Curiosity Gap):** the card surface ripples like water, revealing project details (description, tech stack tags, link) that were hidden
- Cards have a subtle **parallax tilt** on mouse movement (3D perspective transform)
- Project thumbnails use abstract gradient placeholders that animate
- Tags glow with the multi-color gradient on hover

---

## 6. 📜 Experience Timeline — "Neon Pathway"
- A vertical glowing **neon line** that draws itself as the section enters
- Timeline entries appear alternating left/right with **slide-in + glow pulse** animations
- Each entry has: role, company, date range, brief description
- Entry cards have a subtle glassmorphic background with gradient accent borders
- The timeline line color shifts through cyan → pink → purple as it progresses downward
- On mobile: single-column with entries sliding in from the left

---

## 7. 📬 Contact — "Signal Transmission"
- Themed as "sending a signal into the digital oasis"
- Headline: **"Let's Build Something Together"** with gradient text glow
- **Floating label inputs** with glowing underlines that shift through the gradient on focus
- **Magnetic submit button** — follows cursor subtly when nearby, has a pulsing glow aura
- Background: subtle animated particles drifting upward like data transmitting
- Social links (GitHub, LinkedIn, Twitter/X) as **glowing icons** with hover bloom
- Visual-only form (no backend)

---

## 8. ✨ Micro-Interactions & Polish
- **Custom cursor:** soft circular glow that follows the mouse, changes size on hoverable elements, leaves a fading trail
- **Scroll progress:** a thin gradient line at the top of the viewport showing scroll position
- **Section transitions:** each section has a unique "materialization" animation when it snaps in
- **Parallax depth layers:** subtle floating geometric shapes (triangles, circles, hexagons) at different scroll speeds across sections
- **Loading experience:** a brief "entering the oasis" loading screen while Three.js initializes

---

## 9. 📁 Code Architecture
- `src/components/canvas/` — All Three.js 3D components (FloatingIsland, GridFloor, SynthwaveSun, Particles)
- `src/components/sections/` — Hero, About, TechStack, Projects, Experience, Contact
- `src/components/ui/` — CustomCursor, MagneticButton, GlowCard, FloatingNav
- `src/hooks/` — useMousePosition, useSmoothScroll, useScrollSnap
- Three.js optimized with Suspense loading, limited geometry, efficient particles

---

## 10. 📱 Responsive Strategy
- Desktop: full 3D experience with all effects
- Tablet: simplified 3D, maintained animations
- Mobile: 3D replaced with animated gradient backgrounds, snap scroll preserved, all content accessible

