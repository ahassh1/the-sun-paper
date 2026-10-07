# 📰 The Sun Paper

A modern and responsive news website built with Next.js, designed to provide users with the latest news in a clean, organized, and user-friendly interface.

## 📁 Project Structure

```text
the-sun-paper/
│
├── app/
│   ├── category/
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── news/
│   │   └── [newsid]/
│   │       └── page.tsx
│   │
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── BanglaDate.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── HomePageOtherSection.tsx
│   ├── MainNews.tsx
│   ├── MostRead.tsx
│   ├── NavLinks.tsx
│   ├── NewsCard.tsx
│   └── OtherSections.tsx
│
├── public/
│   └── ...
│
├── .gitignore
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md