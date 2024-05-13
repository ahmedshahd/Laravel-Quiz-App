Quiz App
========

This is a quiz app built with Laravel, Inertia, React, TypeScript, Tailwind, and SQLite. It allows users to register, log in, create quizzes, take quizzes, and view their scores.

Features
--------

* User registration and login
* Quiz creation
* Quiz taking and scoring
* User score display

Requirements
------------

* PHP 7.4 or higher
* Composer
* Node.js and npm
* SQLite or another SQL database

Installation
------------

1. Clone the repository:

```bash
git clone https://github.com/yourusername/quiz-app.git
```

2. Install the dependencies:

```
cd quiz-app
composer install
npm install
```

3. Create a copy of the `.env.example` file and configure your database connection settings:

```bash
cp .env.example .env
nano .env
```

4. Generate an application key:

```
php artisan key:generate
```

5. Run the database migrations:

```
php artisan migrate
```

6. Compile the assets:

```
npm run dev
```

7. Start the development server:

```
php artisan serve
```

Usage
-----

Once the application is running, you can access the login and registration pages at `/login` and `/register`, respectively. Once logged in, you can create new quizzes, take existing quizzes, and view your scores.

Tech Stack
----------

* Laravel: A PHP web application framework.
* Inertia: A frontend framework for Laravel that allows you to build single-page applications using Vue.js, React, or Svelte.
* React: A JavaScript library for building user interfaces.
* TypeScript: A typed superset of JavaScript that adds static types and other features to the language.
* Tailwind: A utility-first CSS framework that allows you to quickly build custom user interfaces.
* SQLite: A lightweight SQL database that requires no server setup.
