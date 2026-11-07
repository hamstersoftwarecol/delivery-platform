import 'package:flutter/material.dart';

abstract final class DeliveryTheme {
  static const routeBlue = Color(0xFF246BFD);
  static const deliveryGreen = Color(0xFF20A66A);
  static const asphalt = Color(0xFF0B1F33);
  static const canvas = Color(0xFFF4F7FB);

  static ThemeData get light {
    final scheme = ColorScheme.fromSeed(
      seedColor: routeBlue,
      brightness: Brightness.light,
      surface: Colors.white,
    );

    return ThemeData(
      useMaterial3: true,
      colorScheme: scheme,
      scaffoldBackgroundColor: canvas,
      textTheme: const TextTheme(
        headlineMedium: TextStyle(
          color: asphalt,
          fontSize: 30,
          fontWeight: FontWeight.w700,
          letterSpacing: -0.8,
        ),
        titleMedium: TextStyle(color: asphalt, fontWeight: FontWeight.w700),
        bodyMedium: TextStyle(color: Color(0xFF5D6B7B), height: 1.45),
      ),
      cardTheme: const CardThemeData(
        color: Colors.white,
        elevation: 0,
        margin: EdgeInsets.zero,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.all(Radius.circular(18)),
          side: BorderSide(color: Color(0xFFDCE4ED)),
        ),
      ),
    );
  }
}
