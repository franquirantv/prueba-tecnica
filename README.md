# prueba Nitsnets

## 01. INTRODUCCIÓN

Desarrollar una aplicación web utilizando Angular que consuma la API de Marvel para mostrar
información sobre personajes, cómics y eventos relacionados. Además, la aplicación debe almacenar
el listado personajes en la base de datos SQLite, para agregar nuevos personajes. Se espera que la
implementación de métodos POST para agregar nuevos personajes a la base de datos.

## 02. REQUISITOS TÉCNICOS

1. Interfaz de Usuario:
    - Crea una interfaz de usuario atractiva y fácil de usar.
    - Muestra una lista de personajes de Marvel con sus imágenes y nombres.
    - Al hacer clic en un personaje, se debe mostrar una página de detalles con información adicional, como cómics en los que aparece, eventos en los que participa, etc.
    - Acceso mediante un botón dentro del detalle de personaje a una pagina de edición de los datos del personaje.
    - Deberá contener un menú, que aparecerá en todas las páginas.

2. Consulta a la API de Marvel:
    - Utiliza la API pública de Marvel para obtener datos. [API](https://developer.marvel.com/documentation/getting_started)
    - Implementa servicios en Angular para realizar llamadas a la API y gestionar los datos.
    - Asegúrate de manejar la paginación de la API de manera efectiva.

3. Manejo de Estado:
    - Utiliza servicios y/o el patrón de gestión de estado de Angular para gestionar la información recuperada de la API.
    - Implementa un mecanismo para gestionar el estado de carga mientras se obtienen los datos.

4. Integración con SQLite:
    - Configura una base de datos SQLite para almacenar personajes.
    - Implementa servicios en Angular para realizar esta inserción.
    - Implementa un formulario que permita a los usuarios agregar nuevos personajes de Marvel a la base de datos local. (No deben mostrarse en el listado de personajes)

5. Funcionalidades Adicionales (Opcionales):
    - Agrega un campo de búsqueda para permitir a los usuarios buscar personajes por nombre.
    - Implementa una sección para mostrar los cómics más recientes o eventos relevantes del universo Marvel.
    - Mostrar un listado como el de personajes, pero solo para los personajes insertados manualmente.

6. Estilo y Diseño:
    - Utiliza estilos CSS o framework, así como elementos nativos de Angular, para hacer que la aplicación sea visualmente atractiva y responsiva.

## 03. ENTREGA Y DOCUMENTACIÓN

Comparte el código fuente a través de un repositorio Git (GitHub, GitLab, etc.). Incluye un archivo README que explique cómo configurar y ejecutar la aplicación (Angular y SQLite), así como cualquier detalle relevante sobre la integración con SQLite.

## 04. EVALUACIÓN

El trabajo será evaluado en función de los siguientes criterios: 
- Correcta implementación de los requisitos especificados.
- Organización y estructura del código Angular.
- Manejo adecuado de la API de Marvel y gestión de estado.
- Integración efectiva con SQLite para el almacenamiento local.
- Implementación exitosa de métodos POST para agregar nuevos personajes a la base de datos.
- Creatividad en la presentación de la información.
- Buena práctica en la escritura de código y comentarios.