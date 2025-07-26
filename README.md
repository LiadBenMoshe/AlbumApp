# 📸 Picture Album App

A web-based **Single Page Application (SPA)** built with **React** (frontend) and **.NET WebAPI** (backend), allowing users to upload pictures with metadata like name, description, and date.

✔ No login required – users access via URL  
✔ Images stored in SQL Server  
✔ Frontend built with React + TypeScript + MUI  
✔ Backend handles base64 image uploads, saves images to disk and metadata to database

---

## 🗂 Project Structure

```
AlbumApp/
├── backend/         # .NET WebAPI
│   ├── Controllers/
│   ├── DB/
│   ├── Models/
│   ├── appsettings.json
│   └── Program.cs
└── frontend/        # React SPA
    ├── src/
    │   ├── components/
    │   ├── App.tsx
    │   └── index.js
    └── public/
```

---

## 🚀 Features

- Upload pictures via a form with:
  - Name
  - Description
  - Date
- Picture list auto-refreshes after upload
- Stores files on disk and metadata in SQL Server
- Designed to be used without login (public access via URL)

---

## 🧰 Technologies

- **Frontend**: React, TypeScript, MUI
- **Backend**: .NET 6+, Entity Framework Core
- **Database**: SQL Server
- **Deployment**: Can be hosted on IIS, Azure, Netlify, or Vercel

---

## 🖥️ How to Run the App

### ⚙ Backend (.NET WebAPI)

#### 1. Install Dependencies

In the `backend/` directory:

```bash
dotnet restore
```

#### 2. Set Up the Database

- Make sure SQL Server is running.
- Create a database (manually or via EF migrations).
- Example connection string for **Windows Authentication** in `appsettings.json`:

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=.;Database=PictureDb;Trusted_Connection=True;"
}
```

#### 3. Apply EF Migrations

```bash
dotnet ef migrations add InitialCreate
dotnet ef database update
```

> Make sure the project references `Microsoft.EntityFrameworkCore.Design`.

#### 4. Run the API

```bash
dotnet run
```

API runs by default at: `https://localhost:5000`

---

### 🌐 Frontend (React)

#### 1. Install Dependencies

In the `frontend/` directory:

```bash
npm install
```

#### 2. Start the React App

```bash
npm start
```

App runs at: [http://localhost:3000](http://localhost:3000)

---

## 📦 Build for Production

```bash
npm run build
```

This outputs a static site in `frontend/build`, which can be:

- Deployed via Netlify / Vercel
- Served from `wwwroot` in your .NET backend

---


## 🛠 Requirements

- [.NET 6+ SDK](https://dotnet.microsoft.com/)
- [Node.js + npm](https://nodejs.org/)
- SQL Server (local or cloud)
- (Optional) Visual Studio / VS Code
