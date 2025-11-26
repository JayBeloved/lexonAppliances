# Lexon Appliance: Premium Appliances, Perfect Prices

Welcome to the official repository for the Lexon Appliance website. This project is a modern, responsive web application built with Next.js and styled with Tailwind CSS and ShadCN UI components.

## About Lexon Appliance

Lexon Appliance is on a mission to redefine the home appliance industry. We believe that everyone deserves to have beautiful, high-performing appliances that blend superior quality, sleek design, and affordability.

- **Our Mission**: To design and create premium, reliable, and aesthetically pleasing kitchen and home appliances that are accessible to everyone.
- **Our Vision**: To become a trusted household name, synonymous with quality, innovation, and value.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [ShadCN UI](https://ui.shadcn.com/)
- **AI/Generative**: [Genkit](https://firebase.google.com/docs/genkit)
- **Linting & Formatting**: ESLint & Prettier
- **Package Manager**: npm

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later recommended)
- npm

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the development server
   ```sh
   npm run dev
   ```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Project Structure

The project follows a standard Next.js App Router structure:

- `src/app/`: Contains all the routes and pages.
  - `layout.tsx`: The root layout for the application.
  - `page.tsx`: The homepage.
  - `about/`: The "About Us" page.
  - `contact/`: The contact page with a server action-powered form.
- `src/components/`: Shared React components.
  - `ui/`: ShadCN UI components.
  - `layout/`: Components like Header and Footer.
- `src/lib/`: Utility functions and library configurations.
- `public/`: Static assets like images and fonts.
- `tailwind.config.ts`: Tailwind CSS configuration.
- `next.config.ts`: Next.js configuration.
