## Note Application Startup

I am utilizing [Laravel Sail](https://laravel.com/docs/9.x/sail)

This version of sail comes bundled with the laravel application, a mysql instance, and a vite server.

There are some prerequisites, however.

## Prerequisites

### Docker installed

You must have docker installed, depending on your operating system, this may require a little bit of work.

Laravel Sail is supported on macOS, Linux, and Windows (via WSL2).

If you don't have docker installed and running (or you have a windows and don't have docker desktop), here are some tutorials:

#### Windows

https://docs.docker.com/desktop/windows/wsl/

#### Linux

https://docs.docker.com/engine/install/ubuntu/

<p>(Depending on the distro, these may be different for you, docker docks will be your best friend!)</p>

#### MacOS

https://docs.docker.com/desktop/install/mac-install/

## _NOTE_: you also need PHP and Composer installed, obviously.

## Steps to run Application

### 1. Run `composer install`

We need the `.vendor` directory

### 2. Run `npm install`

Vite won't work without js dependencies installed, and neither will react.

### 3. create `.env` file

Copy `.env.example` to create the `.env` file.

### 4. create APP_KEY variable

run `php artisan key:generate` in your terminal

### 5. Run sail

`./vendor/bin/sail up`

<p>This should start up the application, install dependencies and start the server. (This may take a while to build)</p>

### 6. compile dependencies with vite

`./vendor/bin/sail npm run watch`

### 7. run migrations

open another terminal and run `./vendor/bin/sail artisan migrate`

### 8. run seeders

`/vendor/bin/sail artisan db:seed`

If you run into any more problems, reach out to me or check out laravel's extensive documentation!

### 9. open web browser and type `localhost` in the browser!

If you run into any more problems, reach out to me or check out laravel's extensive documentation!

## Notes

This was a lot of fun! I've used sail in the past, but never with Vite or React (actually, this was my very first introduction to ReactJS), so this was a very entertaining learning experience. Combined with using a completely new operating system (Fedora), there were definately a lot of hurdles! I've learned a ton, which I think is very valueable. Hope to talk to y'all soon :)
