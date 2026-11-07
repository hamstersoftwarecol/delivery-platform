import { Href, useRouter } from 'expo-router';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { RoleCard } from '../../src/shared/components/RoleCard';
import { colors, spacing } from '../../src/theme/tokens';

const roles: Array<{
  title: string;
  description: string;
  eyebrow: string;
  href: Href;
}> = [
  {
    title: 'Pedir una entrega',
    description: 'Explora comercios, realiza pedidos y sigue tu entrega en tiempo real.',
    eyebrow: 'CLIENTE',
    href: '/customer',
  },
  {
    title: 'Comenzar mi ruta',
    description: 'Gestiona asignaciones, navegación y comprobantes de entrega.',
    eyebrow: 'REPARTIDOR',
    href: '/courier',
  },
];

export default function RoleSelectionScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.brand}>DELIVERY</Text>
          <Text style={styles.title}>¿Cómo quieres continuar?</Text>
          <Text style={styles.subtitle}>
            Una aplicación, dos experiencias diseñadas para cada momento del recorrido.
          </Text>
        </View>

        <View style={styles.roles}>
          {roles.map((role) => (
            <RoleCard
              key={role.eyebrow}
              {...role}
              onPress={() => router.push(role.href)}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.canvas },
  container: { flex: 1, justifyContent: 'center', padding: spacing.xl },
  header: { marginBottom: spacing.xxl },
  brand: {
    color: colors.route,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2.4,
    marginBottom: spacing.md,
  },
  title: {
    color: colors.ink,
    fontSize: 34,
    fontWeight: '700',
    letterSpacing: -1.1,
    lineHeight: 40,
  },
  subtitle: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 24,
    marginTop: spacing.md,
    maxWidth: 440,
  },
  roles: { gap: spacing.md },
});
