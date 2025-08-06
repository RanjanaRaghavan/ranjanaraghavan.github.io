# Projects Directory

This directory contains JSON files for each project in the portfolio. Each project is defined in its own JSON file, making it easy to add, remove, or update projects without modifying the React component code.

## Adding a New Project

1. Create a new JSON file in this directory (e.g., `my-project.json`)
2. Use the following structure:

```json
{
  "id": "unique-project-id",
  "title": "Project Title",
  "description": "Detailed description of your project. This should be comprehensive and explain what the project does, its features, and its purpose.",
  "technologies": ["REACT", "NODE.JS", "MONGODB", "EXPRESS"],
  "websiteUrl": "https://your-live-demo.com",
  "sourceCodeUrl": "https://github.com/yourusername/your-repo",
  "screenshotUrl": "/assets/your-screenshot.png",
  "featured": true,
  "order": 3
}
```

## Field Descriptions

- **id**: Unique identifier for the project (used as React key)
- **title**: Project name (displayed as heading)
- **description**: Detailed project description
- **technologies**: Array of technology tags (displayed as badges)
- **websiteUrl**: Live demo URL (use "#" if no live demo)
- **sourceCodeUrl**: GitHub repository URL
- **screenshotUrl**: Path to screenshot image in assets folder
- **featured**: Boolean to mark featured projects (optional)
- **order**: Number to control display order (lower numbers appear first)

## Screenshots

1. Add your screenshot image to the `src/assets/` directory
2. Reference it in the JSON file using the filename only (e.g., "my-screenshot.png")
3. Supported formats: PNG, JPG, JPEG, GIF

## Example

```json
{
  "id": "ecommerce-app",
  "title": "E-Commerce Platform",
  "description": "A full-stack e-commerce platform built with React and Node.js. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard.",
  "technologies": ["REACT", "NODE.JS", "MONGODB", "STRIPE", "REDUX"],
  "websiteUrl": "https://my-ecommerce-app.vercel.app",
  "sourceCodeUrl": "https://github.com/username/ecommerce-app",
  "screenshotUrl": "/assets/ecommerce-screenshot.png",
  "featured": true,
  "order": 1
}
```

## Notes

- Projects are automatically sorted by the `order` field
- If no screenshot is provided, a placeholder will be shown
- Links open in new tabs with proper security attributes
- The component handles missing fields gracefully
- Changes to JSON files will be reflected after the next build 