# ResumeAI Frontend

Modern React frontend for the AI-powered resume builder application.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Create .env file with your keys
# See .env.example for required variables

# Start development server
npm run dev
```

## 📁 Project Structure

```
src/
├── auth/                    # Authentication pages
│   └── sign-in/            # Sign-in page with Clerk
│
├── components/             # Reusable components
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.jsx
│   │   ├── dialog.jsx
│   │   ├── input.jsx
│   │   └── custom/
│   │       └── header.jsx  # Navigation header
│   └── ProtectedRoute.jsx  # Auth guard component
│
├── dashboard/              # Dashboard module
│   ├── index.jsx          # Main dashboard page
│   └── components/
│       └── AddResume.jsx  # Create resume dialog
│
├── home/                   # Landing page
│   └── index.jsx
│
├── lib/                    # Utilities
│   └── utils.js           # Helper functions (cn)
│
├── App.jsx                # Root layout component
├── main.jsx               # Entry point & router config
└── index.css              # Global styles & CSS variables
```

## 🔐 Environment Variables

Create a `.env` file in the root:

```env
# Required: Clerk authentication
VITE_CLERK_PUBLISHABLE_KEY=pk_test_...

# Required: Strapi backend
VITE_API_URL=http://localhost:1337/api/
VITE_STRAPI_API_KEY=your_api_key
```

## 🎨 Styling

This project uses:
- **Tailwind CSS** for utility-first styling
- **CSS Variables** for theming (light/dark mode)
- **Plus Jakarta Sans** font for a modern look

### Color Theme

The primary color is a vibrant violet (`hsl(262, 83%, 58%)`). Customize colors in `index.css`:

```css
:root {
  --primary: 262 83% 58%;
  /* ... */
}
```

## 📦 Key Dependencies

| Package | Purpose |
|---------|---------|
| `@clerk/clerk-react` | Authentication |
| `react-router-dom` | Routing |
| `axios` | API calls |
| `lucide-react` | Icons |
| `class-variance-authority` | Component variants |
| `tailwind-merge` | Tailwind class merging |

## 🛣️ Routes

| Path | Component | Protected |
|------|-----------|-----------|
| `/` | Home | No |
| `/dashboard` | Dashboard | Yes |
| `/dashboard/resume/:id/edit` | Resume Editor | Yes |
| `/auth/sign-in` | Sign In | No |

## 📝 Scripts

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview build
npm run lint     # Run ESLint
```

## 🔧 Adding shadcn/ui Components

```bash
npx shadcn@latest add [component]
```

Available components: button, dialog, input, card, dropdown-menu, etc.
