# Install the Flutter SDK on your app

Get started with the MarkTag flutter SDK

---

1. From the root of your project, run the following command to install the sdk:

::: code-group

```bash [flutter]
flutter pub add marktag
```


```bash [dart]
dart pub add marktag
```

Or, you can manually add it from [https://pub.dev/packages/marktag](https://pub.dev/packages/marktag)

::: 

1. Once installed, you can access the MarkTag SDK plugin by importing it in your code:

```dart
import 'package:marktag/marktag.dart';
```

3. Initialize MarkTag SDK (before runApp):

```dart{2,3}
void main() {
  WidgetsFlutterBinding.ensureInitialized(); // Add this line
  Marktag.instance.init(tag: 'test-tag.website.com', enableLogging: true); // If you want to disable logs, set `enableLogging` to false
  runApp(const MyApp());
}
```

Done! You are now able to log events with MarTag