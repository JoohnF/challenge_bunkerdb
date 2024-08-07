# Challenge BunkerDB

El proyecto está construido con NodeJS (Express), Typescript y MongoDB como motor de base de datos. A continuacion se indican los pasos a seguir para su levantamiento en un ambiente local.

## Prerrequisitos

- Docker
- Git

## Instalación

1. Clonar el repositorio y navegar a la raíz del mismo:

    ```bash
    git clone https://github.com/JoohnF/challenge_bunkerdb.git
    cd challenge_bunkerdb
    ```

2. Clonar el archivo `.env.example`, renómbrarlo a `.env` y guardar los siguientes valores:

    ```env
    PORT=3000
    DB_URI=mongodb://mongodb:27017/martech-project
    ```

3. Una vez configurado el archivo `.env` se ejecutan los siguientes comandos en la raíz del proyecto:

    ```bash
    docker-compose build
    docker-compose up -d
    ```

## Uso

Una vez iniciados los contenedores se puede acceder a la documentación del API mediante el siguiente enlace:

[http://localhost:3000/documentation](http://localhost:3000/documentation)
