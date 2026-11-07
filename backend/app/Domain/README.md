# Domain modules

El backend se organiza como monolito modular. Los módulos previstos son `Identity`, `Organizations`, `Catalog`, `Orders`, `Payments`, `Delivery` y `Notifications`.

Cada módulo puede incorporar `Actions`, `DTOs`, `Enums`, `Events`, `Models`, `Policies`, `Services` y excepciones propias. Los controladores HTTP deben delegar aquí las reglas de negocio.
