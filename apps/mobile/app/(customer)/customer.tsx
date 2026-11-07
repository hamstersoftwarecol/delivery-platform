import { RoleWorkspace } from '../../src/shared/components/RoleWorkspace';

export default function CustomerScreen() {
  return (
    <RoleWorkspace
      eyebrow="CLIENTE"
      title="Tu próximo pedido empieza aquí"
      description="El catálogo, carrito y seguimiento se incorporarán en este módulo."
      steps={['Explorar comercios', 'Confirmar dirección', 'Seguir la entrega']}
    />
  );
}
