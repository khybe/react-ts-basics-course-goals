import { type ReactNode } from "react";

// Define the props for the Header component
type HeaderProps = {
  // Object representing the image with TypeScript types for properties
  image: { src: string; alt: string };
  // ReactNode for rendering any valid React content as children
  children: ReactNode;
};

// Header component for displaying a header with an image
export default function Header({ image, children }: HeaderProps) {
  return (
    <header>
      {/* Image element with spread operator to apply image properties */}
      <img {...image} />
      {/* Render children passed to the Header component */}
      {children}
    </header>
  );
}
