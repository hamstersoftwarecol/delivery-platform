# Delivery Platform

Plataforma integral de delivery construida como monorepo:

- **Laravel**: API REST versionada y autenticación Sanctum.
- **Expo / React Native**: aplicación móvil para cliente y repartidor.
- **Flutter**: aplicación empresarial de gestión y operación.
- **OpenAPI**: contrato compartido entre todos los clientes.

## Estructura

- `backend/`: API y dominios de negocio.
- `apps/mobile/`: experiencia de cliente y repartidor.
- `apps/business/`: centro de operaciones empresarial.
- `contracts/`: especificación OpenAPI y eventos.
- `infrastructure/`: PostgreSQL/PostGIS, Redis, MinIO y Mailpit.
- `docs/`: decisiones de arquitectura.

## Inicio rápido

### Backend

1. Entra en `backend`.
2. Copia `.env.example` como `.env`.
3. Ejecuta `composer install`, `php artisan key:generate` y `php artisan migrate`.
4. Inicia la API con `php artisan serve`.

La API expone `GET /api/v1/health` y utiliza SQLite por defecto para facilitar el primer arranque.

### Aplicación móvil

En `apps/mobile`, ejecuta `npm install` y después `npm start`. La variable pública `EXPO_PUBLIC_API_URL` permite cambiar la URL de la API.

### Aplicación empresarial

En `apps/business`, ejecuta `flutter pub get` y después `flutter run`.

### Servicios locales

En `infrastructure`, ejecuta `docker compose up -d`. Consulta `docs/architecture.md` para conocer los límites y responsabilidades de cada componente.
