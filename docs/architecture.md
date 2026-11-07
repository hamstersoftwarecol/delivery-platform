# Arquitectura inicial

La plataforma comienza como un monolito modular Laravel. PostgreSQL/PostGIS conserva el estado transaccional, Redis atiende caché, colas y ubicación reciente, y las aplicaciones móviles consumen un contrato REST versionado.

## Componentes

- `backend`: API Laravel, autenticación Sanctum y módulos de negocio.
- `apps/mobile`: Expo/React Native para cliente y repartidor.
- `apps/business`: Flutter para operación empresarial.
- `contracts`: OpenAPI y catálogo de eventos.
- `infrastructure`: dependencias locales reproducibles.

## Límites

Los clientes nunca acceden directamente a la base de datos ni se comunican entre sí. Laravel centraliza autorización, idempotencia, transiciones de estado y auditoría. Las tareas lentas se ejecutarán mediante colas y los cambios operativos se publicarán en tiempo real.
