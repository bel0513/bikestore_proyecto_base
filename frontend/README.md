# LAB CRUD - frontend

React + Vite para consumir el backend del laboratorio.

## Requisitos

- Node.js 20+
- Backend ejecutandose en `http://localhost:3000`
- Base de datos `lab_crud`

## Instalar

```bash
npm install
```

## Ejecutar
```bash
npm run dev
```

Frontend: `http://localhost:5173`

## Usuarios de prueba

Admin:
- `admin@labcred.local`
- `Password123!`

Cliente:
- `cliente@labcrud.local`
- `Password123!`

## Responsabilidades


- `assets`: estilos y recursos.
- `components`: componentes reutillizables.
- `config`: configuracion del frontend.
- `context`: estado global de autentificación.
- `hooks`: hooks propios
- `pages`: pantallas
- `services`: comunicacion con la API.
- `utils`: alamcenamiento de sesión.

## Flujo

Login -> AuthContext -> JWT en localStorage -> `api.js` agrega Bearer token -> backend JWT -> autorización por rol.

El botón Eliminar solo aparece para `admin`, pero el backend tambien verifica el rol. Ocultar un boton en React no constituye seguridad.