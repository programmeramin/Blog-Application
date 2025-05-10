# OptimizedImage Component

A React component for optimizing images in your web application with features like lazy loading, responsive sizing, accessibility, and placeholder effects.

## Features

- **Automatic Lazy Loading**: Images load only when they enter the viewport
- **Responsive Sizes**: Automatically generates srcSet for different screen sizes
- **Accessibility**: Enforces alt text for all images
- **Placeholder Effects**: Blur or empty placeholders while images load
- **Tailwind CSS Support**: Fully compatible with Tailwind utility classes
- **Future-Proofing**: Supports modern image loading techniques and formats

## Usage

```jsx
import OptimizedImage from './components/OptimizedImage';

// Basic usage
<OptimizedImage 
  src="/path/to/image.jpg" 
  alt="Description of the image" 
/>

// With all options
<OptimizedImage 
  src="/path/to/image.jpg"
  alt="Description of the image"
  width={800}
  height={600}
  className="rounded-lg shadow-md"
  sizes="(max-width: 768px) 100vw, 50vw"
  priority={false}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j..." // Base64 tiny preview
  onLoad={() => console.log('Image loaded')}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | string | required | Source URL of the image |
| `alt` | string | "Image" | Alt text for accessibility |
| `className` | string | "" | Additional CSS classes |
| `width` | number | undefined | Width of the image |
| `height` | number | undefined | Height of the image |
| `sizes` | string | "100vw" | Sizes attribute for responsive images |
| `priority` | boolean | false | Whether to load the image immediately |
| `placeholder` | "blur" \| "empty" | "blur" | Type of placeholder to show |
| `blurDataURL` | string | undefined | Base64 data URL for blur placeholder |
| `onLoad` | function | undefined | Callback when image loads |

## Naming Convention for Responsive Images

For the srcSet to work properly, your images should follow this naming convention:

```
image-640.jpg
image-750.jpg
image-828.jpg
image-1080.jpg
image-1200.jpg
image-1920.jpg
```

Where the number represents the width of the image in pixels.

## Error Handling

If an image fails to load, it will automatically fall back to a placeholder image located at `/placeholder.jpg`. Make sure to add this file to your public directory.

## Browser Support

This component uses the IntersectionObserver API, which is supported in all modern browsers. For older browsers, consider adding a polyfill. 