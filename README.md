# Responsive Digital Technical Assessment Project

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
![GitHub top language](https://img.shields.io/github/languages/top/DevRahimi/goresponsive-project)
![GitHub language count](https://img.shields.io/github/languages/count/DevRahimi/goresponsive-project)

## Index

- [About](#green_book-about)
- [Usage](#zap-usage)
  - [Installation](#electric_plug-installation)
  - [Commands](#package-commands)
- [Development](#hammer_and_wrench-development)
  - [Tech-Stack](#computer-tech-stack)
  - [Build](#building_construction-build)
- [Resources](#open_book-resources)
- [Credit/Acknowledgment](#star2-creditacknowledgment)
- [License](#lock-license)

## :green_book: About

This single page React app is a order manager for a store. It allows the user to view, add, edit, and delete orders (CRUD using [Supabase](https://supabase.com)). The user can also filter orders by 'orders' or 'collections'.

## :zap: Usage

### :electric_plug: Installation

1. Clone the repository to an empty directory on your local machine. `https://github.com/DevRahimi/goresponsive-project.git`
2. Run `bun install` or `npm install` to install the dependencies.
3. On [Supabase](https://supabase.com), create a new project and add a table called `mychep_data` with the following SQL query:

```
create table
  mychep_data (
    equipment_type text,
    volume numeric(10, 2),
    order_number text,
    delivery_number text,
    flare boolean,
    pie numeric(10, 2),
    delivery text,
    warehouse text,
    comment text,
    status text,
    created_at TIMESTAMPTZ default now()
  );
```

4. Follow the instructions on the Supabase Dashboard to enable Row Level Security (RLS) for the `mychep_data` table and allow the public role to have `all` permissions.

5. Create a `.env` file in the root directory and add the following environment variables:

```
VITE_SUPABASE_URL=<your supabase url>
VITE_SUPABASE_KEY=<your supabase key>

```

### :package: Commands

This project can be viewed through a few methods:

- Method 1: Run `bun run dev` or `npm run dev` to start a development server and run the app locally.

```

NOTE: In order to run the app locally using `npm run dev`, open `package.json` and change the `scripts dev` line from `bunx vite` to `vite`.

```

- Method 2: This project is hosted on Vercel. You can view it [here](https://goresponsive-mockup.vercel.app) as well.

## :hammer_and_wrench: Development

### :computer: Tech-Stack

A list of all the technologies used in this project.

- `Git`
- `Node.js`
- `Bun.sh` (`npm` works too!)
- `Reactjs`
- `Supabase`
- `TailwindCSS`
- `Material UI`
- `Emotion`
- `Vercel`

### :building_construction: Build

Run `bun build` or `npm run build` to build the project for production.

## :open_book: Resources

The following resources were consulted during the development of this project:

- [Bun.sh](https://bun.sh/docs)
- [Material UI](https://mui.com/material-ui)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Supabase](https://supabase.com/docs)

## :star2: Credit/Acknowledgment

- [DevRahimi](https://devrahimi.vercel.app)

## :lock: License

This project is licensed under the [MIT License](LICENSE.md).

```

```
