# parcial2-v2-software

## Datos del alumno
- **Nombre:** Lucas Aróstegui
- **Fecha:** 18/11/2026

## Construir e iniciar el contenedor Docker

### 1. Construir la imagen
docker build -t parcial2-v2-software .

### 2. Iniciar el contenedor
docker run -d -p 8080:80 --name tareas parcial2-v2-software

Luego abrir http://localhost:8080