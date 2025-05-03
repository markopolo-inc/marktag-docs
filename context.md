MarkTagEventItem:
/// Unique id of product
final String? id;

/// Product Name eg. "Shirt"
final String? name;

/// Product Category, e.g., "Apparel" or "Apparel, Men's Clothing"
final String? category;

/// Product's variant, e.g., "Blue"
final String? variant;

/// Quantity of this product added to cart or purchased, e.g., 5
final int? quantity;

/// Price of the Product, e.g., 7.59
final double? price;

/// Description of the Product
final String? description;

/// Any coupon used through checkout
final String? coupon;

/// Any monetary discount added to the product
/// e.g., if 5 USD discount is added, discount value should be 5.00.
/// If any percentage discount is added, 
/// you need to convert the percentage to monetary value
final double? discount;

---

MarkTag Event:

/// The name of the event.
final String event;

/// The source of the event (optional).
final String? eventSource;

/// The URL of the page where the event occurred.
final String? pageUrl;

/// The email associated with the event (optional).
final String? email;

/// The phone number associated with the event (optional).
final String? phone;

/// The MarkTag reference source (optional).
final String? mtRefSrc;

/// The list of items involved in the event (optional).
final List<MarkTagEventItem>? items;

/// Additional metadata for the event (optional).
final Map<String, dynamic>? metadata;

--- 

Default Events:

These are all functions in Marktag class which can be called using Marktag.instance.functionName()

/// Logs an event to the Marktag server.
```dart
Marktag.instance.logEvent(
    MarkTagEvent(
        event: 'CustomEvent',
    ),
);
```


/// Logs a search event.
```dart
Marktag.instance.logSearch(String searchText);
```

---

Manually log page views:

/// Logs a page view event.
```dart
Marktag.instance.logPageView(String page);
```

--- 

Automatically log page views:

Add the MarktagNavigatorObserver to your navigatorObservers in MaterialApp

```dart
navigatorObservers: [
    // Add this observer to automatically log page views
    MarktagNavigatorObserver(
        marktag: Marktag.instance,
    ),
],
```
