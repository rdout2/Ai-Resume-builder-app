# ResumeAI Backend

Strapi v5 headless CMS backend for the AI Resume Builder application.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start in development mode (with auto-reload)
npm run develop

# Or start in production mode
npm run start
```

The admin panel will be available at `http://localhost:1337/admin`

## 📁 Project Structure

```
backend/
├── config/                  # Strapi configuration
│   ├── admin.ts            # Admin panel config
│   ├── api.ts              # API config
│   ├── database.ts         # Database config
│   ├── middlewares.ts      # Middlewares config
│   ├── plugins.ts          # Plugins config
│   └── server.ts           # Server config
│
├── src/
│   ├── api/                # Content types & custom APIs
│   │   ├── user-resume/    # Resume content type
│   │   │   ├── content-types/
│   │   │   │   └── user-resume/
│   │   │   │       └── schema.json
│   │   │   ├── controllers/
│   │   │   ├── routes/
│   │   │   └── services/
│   │   └── ...             # Other content types
│   │
│   ├── components/         # Shared component schemas
│   └── extensions/         # Plugin extensions
│
├── database/               # SQLite database files
├── public/                 # Public assets
└── scripts/
    └── seed.js            # Database seeding script
```

## 📊 Content Types

### UserResume

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | String | Yes | Resume title |
| `resumeid` | String | No | Unique UUID |
| `userEmail` | Email | No | User's email |
| `userName` | String | No | User's name |

## 🔐 API Configuration

### Creating an API Token

1. Go to `Settings` → `API Tokens` in the admin panel
2. Click "Create new API Token"
3. Configure:
   - **Name**: `Frontend App`
   - **Token type**: `Full access` or custom permissions
   - **Token duration**: Unlimited or set expiry
4. Save and copy the token

### Setting Permissions

Go to `Settings` → `Users & Permissions plugin` → `Roles` → `Public`:

Enable for `user-resume`:
- ✅ find
- ✅ findOne
- ✅ create
- ✅ update
- ✅ delete

## 🌐 API Endpoints

Base URL: `http://localhost:1337/api`

### User Resumes

```bash
# Get all resumes
GET /user-resumes

# Get user's resumes
GET /user-resumes?filters[userEmail][$eq]=user@example.com

# Get single resume by UUID
GET /user-resumes?filters[resumeid][$eq]=uuid-here

# Create resume
POST /user-resumes
Content-Type: application/json
Authorization: Bearer YOUR_API_TOKEN

{
  "data": {
    "title": "My Resume",
    "resumeid": "unique-uuid",
    "userEmail": "user@example.com",
    "userName": "John Doe"
  }
}

# Update resume
PUT /user-resumes/:id
Content-Type: application/json
Authorization: Bearer YOUR_API_TOKEN

{
  "data": {
    "title": "Updated Title"
  }
}

# Delete resume
DELETE /user-resumes/:id
Authorization: Bearer YOUR_API_TOKEN
```

## 🗄️ Database

By default, this project uses **SQLite** for simplicity. For production, consider migrating to:

- PostgreSQL (recommended)
- MySQL
- MariaDB

### Switching to PostgreSQL

1. Install the package:
```bash
npm install pg
```

2. Update `config/database.ts`:
```typescript
export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'strapi'),
      password: env('DATABASE_PASSWORD', 'strapi'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
```

## 📝 Scripts

```bash
npm run develop    # Development with auto-reload
npm run start      # Production mode
npm run build      # Build admin panel
npm run strapi     # Strapi CLI commands
npm run seed:example  # Seed example data
```

## 🚀 Deployment

### Environment Variables for Production

```env
# Server
HOST=0.0.0.0
PORT=1337

# Secrets (generate unique values!)
APP_KEYS=key1,key2,key3,key4
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
TRANSFER_TOKEN_SALT=your-transfer-token-salt
JWT_SECRET=your-jwt-secret

# Database (PostgreSQL example)
DATABASE_CLIENT=postgres
DATABASE_HOST=your-db-host
DATABASE_PORT=5432
DATABASE_NAME=strapi
DATABASE_USERNAME=your-username
DATABASE_PASSWORD=your-password
DATABASE_SSL=true
```

### Deployment Platforms

- **Railway** - Easy Strapi deployment
- **Render** - Free tier available
- **DigitalOcean App Platform**
- **Heroku** - With PostgreSQL addon
- **AWS/GCP/Azure** - For enterprise scale

## 🔧 Useful Commands

```bash
# Generate a new API
npx strapi generate api my-api

# Generate a new content-type
npx strapi generate content-type my-content

# Generate types for TypeScript
npx strapi ts:generate-types
```
