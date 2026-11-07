import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, spacing } from '../../theme/tokens';

type RoleCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  onPress: () => void;
};

export function RoleCard({ eyebrow, title, description, onPress }: RoleCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${eyebrow}: ${title}`}
      onPress={onPress}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <View style={styles.marker} />
      <View style={styles.content}>
        <Text style={styles.eyebrow}>{eyebrow}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Text accessibilityElementsHidden style={styles.arrow}>→</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 148,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 20,
    borderWidth: 1,
    padding: spacing.lg,
  },
  pressed: { opacity: 0.82, transform: [{ scale: 0.985 }] },
  marker: {
    alignSelf: 'stretch',
    backgroundColor: colors.route,
    borderRadius: 3,
    marginRight: spacing.lg,
    width: 4,
  },
  content: { flex: 1 },
  eyebrow: { color: colors.route, fontSize: 11, fontWeight: '800', letterSpacing: 1.6 },
  title: { color: colors.ink, fontSize: 20, fontWeight: '700', marginTop: spacing.sm },
  description: { color: colors.muted, fontSize: 14, lineHeight: 21, marginTop: spacing.sm },
  arrow: { color: colors.ink, fontSize: 25, marginLeft: spacing.md },
});
