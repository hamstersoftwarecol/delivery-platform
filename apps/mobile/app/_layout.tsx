import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShadowVisible: false,
          headerTintColor: '#0B1F33',
          contentStyle: { backgroundColor: '#F4F7FB' },
        }}
      >
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(customer)/customer" options={{ title: 'Cliente' }} />
        <Stack.Screen name="(courier)/courier" options={{ title: 'Repartidor' }} />
      </Stack>
    </>
  );
}
