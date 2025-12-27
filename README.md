# ONNI PIZZA - React Website

A beautiful, modern website for ONNI PIZZA featuring smooth animations, micro-interactions, and a delightful user experience.

## Features

- 🍕 **Interactive Pizza Hero** - Rotating pizza animation with flavor selector
- 📱 **Fully Responsive** - Works perfectly on all devices
- ✨ **Smooth Animations** - Powered by Framer Motion
- 🎨 **Beautiful Design** - Subtle green (oregano) and red (chilli) color theme
- 📄 **Complete Pages**:
  - Home with interactive pizza hero
  - About page with story and team
  - Menu with category filtering
  - Book a Table with reservation form
  - Contact Us with form and information

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:

```bash
cd onni-pizza-demo
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Tech Stack

- **React 18** - UI library
- **React Router** - Navigation
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling
- **Vite** - Build tool

## Project Structure

```
onni-pizza-demo/
├── src/
│   ├── components/
│   │   ├── Layout.jsx
│   │   ├── Navigation.jsx
│   │   ├── Footer.jsx
│   │   └── PizzaHero.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Menu.jsx
│   │   ├── BookTable.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Color Theme

The website uses a subtle color palette inspired by pizza ingredients:

- **Oregano Green**: Primary brand color (#3a963a)
- **Chilli Red**: Accent color (#ef4444)
- Both colors have full shade variations (50-900)

## Pizza Images

The hero section features high-quality pizza images that rotate when users select different flavors.

### Adding AI-Generated Images

1. Generate pizza images using AI (DALL-E, Midjourney, Stable Diffusion, etc.)

   - Style: Top-down, high-angle view
   - Size: 800x800px minimum
   - Background: Dark/plain (black or dark gray)
   - Format: JPG or PNG

2. Save images to `public/images/pizzas/` with these filenames:

   - `margherita.jpg`
   - `pepperoni.jpg`
   - `vegetarian.jpg`
   - `quattro-formaggi.jpg`
   - `hawaiian.jpg`
   - `bbq-chicken.jpg`

3. Update image paths in `src/components/PizzaHero.jsx`:
   ```javascript
   image: "/images/pizzas/margherita.jpg";
   ```

Currently using placeholder images from Unsplash. See `public/images/pizzas/README.md` for detailed instructions.

## Customization

You can customize the pizza flavors, menu items, contact information, and other content by editing the respective component files in the `src/` directory.

## License

This project is created for ONNI PIZZA.
