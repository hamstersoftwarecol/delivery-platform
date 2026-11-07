import { useRouter } from 'expo-router';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { colors, spacing } from '../../theme/tokens';

type RoleWorkspaceProps = {
  eyebrow: string;
  title: string;
  description: string;
  steps: string[];
};

export function RoleWorkspace({ eyebrow, title, description, steps }: RoleWorkspaceProps) {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.statusRow}>
          <View style={styles.statusDot} />
          <Text style={styles.status}>BASE CONECTADA</Text>
        </View>
        <Text style={styles.eyebrow}>{eyebrow}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.steps}>
          {steps.map((step, index) => (
            <View key={step} style={styles.step}>
              <Text style={styles.stepNumber}>{index + 1}</Text>
              <Text style={styles.stepLabel}>{step}</Text>
            </View>
          ))}
        </View>
        <Pressable accessibilityRole="button" onPress={() => router.back()} style={styles.button}>
          <Text style={styles.buttonLabel}>Cambiar perfil</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.canvas },
  container: { flex: 1, padding: spacing.xl },
  statusRow: { alignItems: 'center', flexDirection: 'row', gap: spacing.sm, marginTop: spacing.xl },
  statusDot: { backgroundColor: colors.success, borderRadius: 5, height: 10, width: 10 },
  status: { color: colors.muted, fontSize: 11, fontWeight: '700', letterSpacing: 1.3 },
  eyebrow: { color: colors.route, fontSize: 12, fontWeight: '800', marginTop: spacing.xxl },
  title: { color: colors.ink, fontSize: 34, fontWeight: '700', letterSpacing: -1, lineHeight: 41, marginTop: spacing.md },
  description: { color: colors.muted, fontSize: 16, lineHeight: 24, marginTop: spacing.md },
  steps: { backgroundColor: colors.surface, borderRadius: 20, marginTop: spacing.xxl, padding: spacing.lg },
  step: { alignItems: 'center', flexDirection: 'row', gap: spacing.md, minHeight: 52 },
  stepNumber: { color: colors.route, fontSize: 13, fontWeight: '800', width: 20 },
  stepLabel: { color: colors.ink, fontSize: 15, fontWeight: '600' },
  button: { alignItems: 'center', borderColor: colors.border, borderRadius: 12, borderWidth: 1, marginTop: 'auto', padding: spacing.md },
  buttonLabel: { color: colors.ink, fontSize: 15, fontWeight: '700' },
});
