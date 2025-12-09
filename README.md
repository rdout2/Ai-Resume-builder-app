# 🚀 ResumeAI - AI-Powered Resume Builder

<div align="center">

![ResumeAI](https://img.shields.io/badge/ResumeAI-Build%20Your%20Dream%20Resume-7c3aed?style=for-the-badge)

**Create professional, ATS-friendly resumes in minutes with the power of AI**

[Live Demo](#) · [Report Bug](https://github.com/yourusername/ai-resume-builder/issues) · [Request Feature](https://github.com/yourusername/ai-resume-builder/issues)

</div>

---

## ✨ Features

- 🤖 **AI-Powered Content Generation** - Let AI craft compelling bullet points and professional summaries
- 📄 **ATS-Optimized** - Beat applicant tracking systems with smart formatting
- 🎨 **Multiple Templates** - Choose from professionally designed templates
- 🔐 **Secure Authentication** - Powered by Clerk for seamless sign-in/sign-up
- 💾 **Cloud Storage** - Save and access your resumes from anywhere
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🌙 **Dark Mode Support** - Easy on the eyes with automatic theme detection

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 18** | UI Framework |
| **Vite** | Build Tool & Dev Server |
| **Tailwind CSS** | Styling |
| **shadcn/ui** | UI Components |
| **Clerk** | Authentication |
| **React Router v7** | Client-side Routing |
| **Axios** | HTTP Client |
| **Lucide React** | Icons |

### Backend
| Technology | Purpose |
|------------|---------|
| **Strapi v5** | Headless CMS |
| **SQLite** | Database |
| **Node.js** | Runtime |

---

## 📁 Project Structure

```
ai-resume-builder/
├── frontend/                 # React frontend application
│   ├── public/              # Static assets
│   ├── service/             # API services
│   │   └── GlobalApi.js     # Axios client & API calls
│   ├── src/
│   │   ├── auth/            # Authentication pages
│   │   │   └── sign-in/     # Sign-in page
│   │   ├── components/      # Reusable components
│   │   │   ├── ui/          # shadcn/ui components
│   │   │   └── ProtectedRoute.jsx
│   │   ├── dashboard/       # Dashboard & resume management
│   │   ├── home/            # Landing page
│   │   ├── lib/             # Utilities
│   │   ├── App.jsx          # Root component
│   │   ├── main.jsx         # Entry point & routing
│   │   └── index.css        # Global styles & theme
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── backend/                  # Strapi CMS backend
│   ├── config/              # Strapi configuration
│   ├── src/
│   │   ├── api/             # Content types & APIs
│   │   │   └── user-resume/ # Resume content type
│   │   └── components/      # Shared components
│   ├── database/            # Database files
│   └── package.json
│
└── README.md                # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18.0.0 or higher
- **npm** v6.0.0 or higher
- **Clerk Account** - [Sign up here](https://clerk.com)

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/yourusername/ai-resume-builder.git
cd ai-resume-builder
```

#### 2. Setup Backend (Strapi)

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start Strapi in development mode
npm run develop
```

Strapi will start at `http://localhost:1337`. On first run, create an admin account.

**Configure Strapi API Token:**
1. Go to `Settings` → `API Tokens`
2. Create a new token with "Full access" permissions
3. Copy the token for frontend configuration

#### 3. Setup Frontend

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

#### 4. Configure Environment Variables

Create a `.env` file in the `frontend` directory:

```env
# Clerk Authentication
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key

# Strapi Backend
VITE_API_URL=http://localhost:1337/api/
VITE_STRAPI_API_KEY=your_strapi_api_token
```

#### 5. Start the Development Server

```bash
# In frontend directory
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 🔧 Available Scripts

### Frontend

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

### Backend

| Command | Description |
|---------|-------------|
| `npm run develop` | Start Strapi in dev mode |
| `npm run start` | Start Strapi in production |
| `npm run build` | Build Strapi admin panel |
| `npm run seed:example` | Seed example data |

---

## 🗄️ API Endpoints

### User Resumes

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/user-resumes` | Get all resumes |
| `GET` | `/api/user-resumes?filters[userEmail][$eq]=email` | Get user's resumes |
| `GET` | `/api/user-resumes?filters[resumeid][$eq]=id` | Get resume by ID |
| `POST` | `/api/user-resumes` | Create new resume |
| `PUT` | `/api/user-resumes/:id` | Update resume |
| `DELETE` | `/api/user-resumes/:id` | Delete resume |

### Request Body Example (Create Resume)

```json
{
  "data": {
    "title": "Full Stack Developer Resume",
    "resumeid": "uuid-here",
    "userEmail": "user@example.com",
    "userName": "John Doe"
  }
}
```

---

## 🎨 Customization

### Theme Colors

Edit `frontend/src/index.css` to customize the color scheme:

```css
:root {
  --primary: 262 83% 58%;        /* Main brand color */
  --background: 0 0% 100%;        /* Background color */
  --foreground: 222.2 84% 4.9%;   /* Text color */
  /* ... more variables */
}
```

### Adding New Components

This project uses [shadcn/ui](https://ui.shadcn.com/). Add new components:

```bash
npx shadcn@latest add [component-name]
```

---

## 📦 Deployment

### Frontend (Vercel/Netlify)

1. Connect your GitHub repository
2. Set environment variables in the dashboard
3. Deploy!

### Backend (Railway/Render/DigitalOcean)

1. Deploy Strapi to your preferred platform
2. Configure database (PostgreSQL recommended for production)
3. Update `VITE_API_URL` in frontend to production URL

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Clerk](https://clerk.com) - Authentication
- [Strapi](https://strapi.io) - Headless CMS
- [shadcn/ui](https://ui.shadcn.com) - UI Components
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Lucide](https://lucide.dev) - Icons

---

<div align="center">

**Made with ❤️ by [Your Name]**

⭐ Star this repo if you found it helpful!

</div>

