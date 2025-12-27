# Pizza Images Directory

This directory is for storing AI-generated pizza images for each flavor.

## Image Requirements

- **Format**: JPG or PNG
- **Size**: 800x800px minimum (square format)
- **Style**: Top-down, high-angle view of a freshly baked pizza
- **Background**: Dark/plain background (preferably black or dark gray)
- **Quality**: High resolution, professional food photography style

## Image Files Needed

Place your AI-generated images here with these exact filenames:

1. `margherita.jpg` - Classic Margherita pizza
2. `pepperoni.jpg` - Pepperoni pizza
3. `vegetarian.jpg` - Vegetarian pizza with vegetables
4. `quattro-formaggi.jpg` - Four cheese pizza
5. `hawaiian.jpg` - Hawaiian pizza with ham and pineapple
6. `bbq-chicken.jpg` - BBQ Chicken pizza

## How to Add Images

1. Generate images using your preferred AI image generator (DALL-E, Midjourney, Stable Diffusion, etc.)
2. Save the images with the exact filenames listed above
3. Place them in this directory: `public/images/pizzas/`
4. Update the image paths in `src/components/PizzaHero.jsx` to use local images:

```javascript
image: "/images/pizzas/margherita.jpg";
```

## Current Setup

Currently using placeholder images from Unsplash. Replace the URLs in `PizzaHero.jsx` with your local image paths once you have the AI-generated images ready.
