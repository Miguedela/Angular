## Instalación y Configuración de Angular en VS Code

### 1. Instalar VS Code y Extensión Angular 10 Snippets - TypeScript

- Descargar e instalar VS Code desde [aquí](https://code.visualstudio.com/)
- Instalar la extensión **Angular 10 Snippets - TypeScript** (Mikael Morlund)

### 2. Instalar Angular CLI

```sh
npm install -g @angular/cli
```

### 3. Verificar la versión de Angular instalada

```sh
ng version
```

### 4. Actualizar a la última versión de Angular CLI

```sh
npm install -g @angular/cli@latest
```

### 5. Crear un nuevo proyecto Angular

```sh
ng new <proyecto> --no-standalone
```

### 6. Abrir el proyecto en VS Code

```sh
cd <proyecto>
code .
```

### 7. Arrancar el servidor web local

```sh
ng serve -o
```

### 8. Actualizar la versión de Angular en un proyecto existente

```sh
cd <proyecto>
npm install --save-dev @angular/cli@latest
```

### 9. Crear un nuevo proyecto en modo estricto

```sh
ng new <proyecto> --strict
