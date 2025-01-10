# Rejouice Website

An immersive and interactive website experience crafted with **React**, **Vite**, and **TailwindCSS**, showcasing dynamic animations using **GSAP**.

## Project Overview

This project is designed to provide a seamless and engaging user experience, blending cutting-edge web technologies with sleek animations and responsive design.

## Project Structure

```
Rejouice Website
├── node_modules/           # Dependencies installed via npm
├── public/                 # Static assets
├── src/                    # Main source code
│   ├── assets/             # Images, fonts, videos, and media
│   ├── components/         # Reusable UI components
│   │   ├── Navbar/         # Navigation components
│   │   │   ├── Navbar.jsx  # Main navigation bar
│   │   │   ├── AboutLink.jsx # Link with animations
│   │   │   └── Loader.jsx  # Loading animation
│   ├── pages/              # Main website sections
│   │   ├── About/          # About section
│   │   │   └── About.jsx   # Animated about page
│   │   ├── Footer/         # Footer section
│   │   │   └── Footer.jsx  # Footer with SVG animations
│   │   ├── GetInTouch/     # Contact and gallery section
│   │   │   └── GetInTouch.jsx # Swiper gallery and contact
│   │   ├── Hero/           # Hero section
│   │   │   └── Hero.jsx    # Video background and interactions
│   │   ├── Info/           # Information section
│   │   │   └── Info.jsx    # Project details and philosophy
│   │   ├── Seats/          # Interactive seats section
│   │   │   └── Seats.jsx   # Dynamic seat availability
│   │   ├── Service/        # Service section
│   │   │   ├── Service.jsx # Services overview
│   │   │   └── ServiceCards.jsx # Cards for services with videos
│   │   ├── Strategy/       # Strategy section
│   │   │   └── Strategy.jsx # Brand strategy and animations
│   ├── App.jsx             # Main application component
│   ├── index.css           # Global styles
│   ├── main.jsx            # Application entry point
├── .gitignore              # Files and folders to ignore in Git
├── eslint.config.js        # ESLint configuration
├── index.html              # Root HTML file
├── package-lock.json       # Package lock file
├── package.json            # Dependencies and scripts
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # TailwindCSS configuration
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

## Features

- **Modern Animations**: Powered by GSAP for smooth transitions and scroll-triggered effects.
- **Responsive Design**: Built with TailwindCSS for mobile-first responsiveness.
- **Component Architecture**: Modular React components for scalability and maintainability.
- **Dynamic Media**: Video and image integrations for immersive visuals.
- **Optimized Performance**: Leveraging Vite for fast development and builds.

## Key Components

1. **Hero Section**: Interactive cursor with a video background.
2. **About Section**: Animated introduction to the brand's ethos.
3. **Service Section**: Detailed service cards with hover-triggered videos.
4. **Info Section**: Highlighting project philosophy.
5. **Seats Section**: Interactive availability display.
6. **Strategy Section**: Combining strategy and emotion for branding.
7. **Footer**: SVG animations and navigation links.
8. **Loader**: Preloader for an engaging startup experience.

## Setup Instructions

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd rejoic-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The website will be available at `http://localhost:3000`.

### Build for Production

To generate an optimized build:
```bash
npm run build
```

### Linting

To ensure code quality:
```bash
npm run lint
```

## Technologies Used

- **React**: For building UI components.
- **Vite**: For fast development and bundling.
- **TailwindCSS**: For responsive and utility-first styling.
- **GSAP**: For animations and scroll-based interactions.
- **Swiper**: For gallery carousels.

---