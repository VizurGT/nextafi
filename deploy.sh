#!/bin/bash

# Script de despliegue para la aplicación Next.js

echo "=== Desplegando aplicación Next.js en Docker ==="

# Verificar que existe el archivo de variables de entorno
if [ ! -f ".env.production" ]; then
    echo "Error: No se encontró el archivo .env.production"
    echo "Crea el archivo .env.production con tus variables de entorno"
    exit 1
fi

# Construir la imagen
echo "Construyendo imagen Docker..."
docker-compose build

if [ $? -eq 0 ]; then
    echo "Imagen construida exitosamente"
    
    # Detener contenedores existentes
    echo "Deteniendo contenedores existentes..."
    docker-compose down
    
    # Iniciar la aplicación
    echo "Iniciando la aplicación..."
    docker-compose up -d
    
    if [ $? -eq 0 ]; then
        echo "=== Despliegue completado exitosamente ==="
        echo "La aplicación está corriendo en http://localhost:3000"
        echo "Para ver los logs: docker-compose logs -f"
        echo "Para detener: docker-compose down"
    else
        echo "Error al iniciar la aplicación"
        exit 1
    fi
else
    echo "Error al construir la imagen"
    exit 1
fi
