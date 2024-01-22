# Timesheet App

A timesheet app demo application.

![Homepage_screenshot.png](public/assets/images/homepage_screenshot.png)

Backend Framework:
- **Laravel v8.83.0 (PHP v8.1.27):** https://laravel.com/docs/10.x/installation#docker-installation-using-sail

Frontend Framework:
- **React v8.2.0:** https://react.dev/
- Node v14.21.3
- Npm v6.14.4

Note:
- using server-side mysql database to save data
- Docker/Sail is installed

## Local Dev Installation

Clone the repo locally:

```sh
git clone https://github.com/wayjay4/timesheet_app.git timesheet_app
```

Go into timesheet_app dir:

```sh
cd property_management_app
```

Install PHP dependencies (composer v2.6.6):

```sh
composer install
```

Install NPM dependencies (node v14.21.3, npm v6.14.4):

**Node**
```sh
nvm install <version>
```
```sh
nvm use <version>
```
- https://stackoverflow.com/questions/7718313/how-to-change-to-an-older-version-of-node-js

**Npm**
```sh
npm install npm@x.x.x -g
```
- https://stackoverflow.com/questions/9755841/how-can-i-change-the-version-of-npm-using-nvm

Build assets:

```sh
npm install
```
```sh
npm run dev
```

Two options to serve the Urban Property Management Application
- 1.) using php artisan serve and local database (see instructions below)
- 2.) using docker service container (see instructions below)

---

### 1.) Serve application with php artisan and local database

Setup configuration:

```sh
cp .env.example .env
```

Generate application key:

```sh
php artisan key:generate
```

Create a local MySql database. You can also use another database (SQLite, Postgres), simply update your configuration accordingly.

- open .env file and change db settings as needed
- make database as needed

Run database migrations and seeder:

```sh
php artisan migrate:fresh --seed
```

Run the dev server (the output will give the address):

```sh
php artisan serve
```

You're ready to go! Visit Todo App in your browser!

---

### 2.) Serve application with Docker/Sail

Setup configuration:

```sh
cp .env.docker .env
```

Generate application key:

```sh
php artisan key:generate
```

Install Docker

Make sure you have installed and started Docker Desktop Application:
- https://www.docker.com/

Start Docker/Sail:

```sh
./vendor/bin/sail up
```
Configuring A Shell Alias for 'sail' (optional)

- https://laravel.com/docs/10.x/sail#configuring-a-shell-alias


```sh
sail up
```

Run database migrations and seeder for db service container:

```sh
sail artisan migrate:fresh --seed
```

You're ready to go! Visit Todo App in your browser!:

http://localhost/
