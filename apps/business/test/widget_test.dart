import 'package:business/app/delivery_business_app.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  testWidgets('shows the operations dashboard', (WidgetTester tester) async {
    await tester.pumpWidget(const DeliveryBusinessApp());

    expect(find.text('Centro de operaciones'), findsOneWidget);
    expect(find.text('PEDIDOS ACTIVOS'), findsOneWidget);
    expect(find.text('En operación'), findsOneWidget);
  });
}
