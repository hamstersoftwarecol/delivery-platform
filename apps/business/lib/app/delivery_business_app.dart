import 'package:business/core/theme/delivery_theme.dart';
import 'package:business/features/dashboard/presentation/dashboard_page.dart';
import 'package:flutter/material.dart';

class DeliveryBusinessApp extends StatelessWidget {
  const DeliveryBusinessApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Delivery Business',
      debugShowCheckedModeBanner: false,
      theme: DeliveryTheme.light,
      home: const DashboardPage(),
    );
  }
}
