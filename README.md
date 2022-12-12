## Note Application Startup

I am utilizing [Docker Sail](https://laravel.com/docs/9.x/sail)

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
(Depending on the distro, these may be different for you, docker docks will be your best friend!)

#### MacOS

https://docs.docker.com/desktop/install/mac-install/

## Steps to run Application

### 1. Run sail

`./vendor/bin/sail up`
This should start up the application, install dependencies and start the server.

### 2. create `.env` file

Copy `.env.example` to create the `.env` file.

### 3. run migrations

`./vendor/bin/sail artisan migrate`

### 4. run seeders

`/vendor/bin/sail artisan db:seed`

If you run into any more problems, reach out to me or check out laravel's extensive documentation!!

## Notes

This was a lot of fun! I've used sail in the past, but never with Vite or React (actually, this was my very first introduction to ReactJS), so this was a very entertaining learning experience. Combined with using a completely new operating system (Fedora), there were definately a lot of hurdles! I've learned a ton, which I think is very valueable.
