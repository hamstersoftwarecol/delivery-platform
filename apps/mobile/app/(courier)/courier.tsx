import { RoleWorkspace } from '../../src/shared/components/RoleWorkspace';

export default function CourierScreen() {
  return (
    <RoleWorkspace
      eyebrow="REPARTIDOR"
      title="La ruta está preparada"
      description="Disponibilidad, asignaciones y navegación vivirán en este módulo."
      steps={['Activar disponibilidad', 'Aceptar asignación', 'Confirmar entrega']}
    />
  );
}
