# Kunaal Mangal - Portfolio Website

A modern, interactive portfolio website built with React, TypeScript, and Vite. Showcasing professional experience, projects, skills, and achievements with a sleek, responsive design.

## 🚀 Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Beautiful Animations** - Smooth transitions and interactive elements
- **Dynamic Content** - Centralized data management for easy updates
- **Performance Optimized** - Built with Vite for fast load times
- **Type Safe** - Full TypeScript support
- **Modern Tech Stack** - React 18, Vite, Tailwind CSS, and more

## 🛠 Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router v7
- **Component Library**: Shadcn/ui

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About/Summary section
│   ├── Experience.tsx  # Work experience
│   ├── Skills.tsx      # Technical skills
│   ├── Projects.tsx    # Project showcase
│   ├── Education.tsx   # Education & achievements
│   ├── Navigation.tsx  # Header navigation
│   ├── Footer.tsx      # Footer
│   └── ui/             # UI component library
├── pages/
│   └── Home.tsx        # Main landing page
├── data/
│   └── data.ts         # Centralized data source
├── layouts/
│   └── MainLayout.tsx  # Main layout wrapper
├── router/
│   └── Router.tsx      # Route configuration
└── App.tsx             # Root component
```

## 📝 Data Management

All content is centralized in `src/data/data.ts` and passed to components via props from the Home component:

```typescript
export const data = {
  name: string,
  designation: string,
  summery: string,
  mobile: string,
  email: string,
  currentLocation: string,
  linkedin: string,
  github: string,
  stackoverflow: string,
  experiences: Experience[],
  projects: Project[],
  skillCategories: SkillCategory[],
  education: EducationItem[],
  achievements: AchievementItem[]
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/KunaalMangal/kunaalmangal.github.io.git
cd kunaalmangal.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview the build:
```bash
npm run preview
```

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

To update your portfolio content, simply edit `src/data/data.ts` with your information:

```typescript
export const data = {
  name: "Your Name",
  designation: "Your Title",
  // ... add more fields
}
```

The components automatically render the updated content without requiring any code changes.

## 📱 Sections

- **Hero** - Eye-catching landing section with intro and CTA buttons
- **About** - Career summary and professional overview
- **Experience** - Detailed work history with achievements
- **Skills** - Organized technical skills by category
- **Projects** - Showcase of key projects with links
- **Education** - Educational background and certifications
- **Awards** - Professional achievements and fellowships

## 🔗 Links

- **GitHub**: [KunaalMangal](https://github.com/KunaalMangal)
- **LinkedIn**: [kunaalmangal](https://www.linkedin.com/in/kunaalmangal/)
- **Stack Overflow**: [kunaal-mangal](https://stackoverflow.com/users/10995578/kunaal-mangal)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Kunaal Mangal**
- Frontend Software Developer with 5+ years of experience
- Located in Jaipur, Rajasthan, India
- Specialized in React.js & React Native
