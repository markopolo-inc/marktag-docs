# Log events

Make sure you have [created a Marktag container](https://app.markopolo.ai/marktag/pixel), [installed](./installation.md), and initialized the SDK before logging events.

## Prerequisites

Schema definition for `MarktagEventItem`:

| Key         | Type     | Required | Description                                                 |
| ----------- | -------- | -------- | ----------------------------------------------------------- |
| id          | `String` | ❌       | Unique id of product                                        |
| name        | `String` | ❌       | Product Name eg. "Shirt"                                    |
| category    | `String` | ❌       | Product Category eg. "Apparel" or "Apparel, Men's Clothing" |
| variant     | `String` | ❌       | Product's variant eg. "Blue"                                |
| quantity    | `int`    | ❌       | Quantity of this product added to cart or purchased eg. 5   |
| price       | `double` | ❌       | Price of the Product eg. 7.59                               |
| description | `String` | ❌       | Description of the Product                                  |
| coupon      | `String` | ❌       | Any coupon used through checkout                            |
| discount    | `double` | ❌       | Any monetary discount added to the product                  |

## Log Custom Event

```dart
Marktag.instance.logEvent(
  MarktagEvent(
    event: "CustomEvent", // Required. Replace it with a meaningful event name for you to understand.
    metadata: {
      "customParameter1": "value", // Custom parameters
      "customParameter2": "value", // Custom parameters
    },
  ),
);
```

## Log View Item

```dart
Marktag.instance.logEvent(
  MarktagEvent(
    event: "view_item",
    metadata: {
      "currency": "USD",
      "value": 119.99,
      "type": "product",
    },
    items: [
      MarktagEventItem(
        id: "edea4360-5752-4b74-a8bf-0162fc809f06",
        name: "Keychron K2 Pro",
        description: "Mechanical Keyboard",
        variant: "VA/Black",
        coupon: "10_OFF",
        discount: 9.99,
        price: 119.99,
        quantity: 1,
        category: "keyboard",
      ),
    ],
  ),
);
```

## Log Page View (Manual)

```dart
Marktag.instance.logPageView("/dashboard");
```

## Log Page Views (Automatic)

Add the MarktagNavigatorObserver to your navigatorObservers in MaterialApp

```dart
MaterialApp(
  // Your app configuration
  navigatorObservers: [
    // Add this observer to automatically log page views
    MarktagNavigatorObserver(
      marktag: Marktag.instance,
    ),
  ],
);
```

## Log View Content

Log view content takes in any parameters you provide.

```dart
Marktag.instance.logEvent(
  MarktagEvent(
    event: "view_content",
    metadata: {
      "customParameter1": "value", // Custom parameters
      "customParameter2": "value", // Custom parameters
    },
  ),
);
```

## Log View Cart

```dart
Marktag.instance.logEvent(
  MarktagEvent(
    event: "view_cart",
    metadata: {
      "currency": "USD",
      "value": 119.99,
      "customParameter1": "value", // Custom parameters
      "customParameter2": "value", // Custom parameters
    },
    items: [
      MarktagEventItem(
        id: "edea4360-5752-4b74-a8bf-0162fc809f06",
        name: "Keychron K2 Pro",
        description: "Mechanical Keyboard",
        variant: "VA/Black",
        coupon: "10_OFF",
        discount: 9.99,
        price: 119.99,
        quantity: 1,
        category: "keyboard",
      ),
    ],
  ),
);
```

## Log Add Payment Info

```dart
Marktag.instance.logEvent(
  MarktagEvent(
    event: "add_payment_info",
    metadata: {
      "paymentType": "credit_card", // Optional
      "currency": "USD", // Optional
      "value": 120, // Optional
      "customParameter1": "value", // Custom parameters
      "customParameter2": "value", // Custom parameters
    },
    items: [
      // Optional MarktagEventItem list
    ],
  ),
);
```

## Log Add to Wishlist

```dart
Marktag.instance.logEvent(
  MarktagEvent(
    event: "add_to_wishlist",
    metadata: {
      "currency": "USD",
      "value": 120,
      "customParameter1": "value", // Custom parameters
      "customParameter2": "value", // Custom parameters
    },
    items: [
      // Optional MarktagEventItem list
    ],
  ),
);
```

## Log Begin Checkout

```dart
Marktag.instance.logEvent(
  MarktagEvent(
    event: "begin_checkout",
    metadata: {
      "currency": "USD",
      "value": 120,
      "shippingCost": 10, // Optional
      "tax": 5, // Optional
      "customParameter1": "value", // Custom parameters
      "customParameter2": "value", // Custom parameters
    },
    items: [
      // Optional MarktagEventItem list
    ],
  ),
);
```

## Log Add To Cart

```dart
Marktag.instance.logEvent(
  MarktagEvent(
    event: "add_to_cart",
    metadata: {
      "currency": "USD",
      "value": 120,
      "customParameter1": "value", // Custom parameters
      "customParameter2": "value", // Custom parameters
    },
    items: [
      // Optional MarktagEventItem list
    ],
  ),
);
```

## Log Initiate Checkout

```dart
Marktag.instance.logEvent(
  MarktagEvent(
    event: "initiate_checkout",
    metadata: {
      "currency": "USD",
      "value": 120,
      "shippingCost": 10, // Optional
      "tax": 5, // Optional
      "customParameter1": "value", // Custom parameters
      "customParameter2": "value", // Custom parameters
    },
    items: [
      // Optional MarktagEventItem list
    ],
  ),
);
```

## Log Login

```dart
Marktag.instance.logEvent(
  MarktagEvent(
    event: "login",
    email: "user@email.com", // Optional
    phone: "xxxxxxxxxxx", // Optional
    metadata: {
      "method": "email", // Optional
      "customParameter1": "value", // Custom parameters
      "customParameter2": "value", // Custom parameters
    },
  ),
);
```

## Log Signup

```dart
Marktag.instance.logEvent(
  MarktagEvent(
    event: "signup",
    email: "user@email.com", // Optional
    phone: "xxxxxxxxxxx", // Optional
    metadata: {
      "method": "email", // Optional
      "customParameter1": "value", // Custom parameters
      "customParameter2": "value", // Custom parameters
    },
  ),
);
```

## Log Purchase

```dart
Marktag.instance.logEvent(
  MarktagEvent(
    event: "purchase",
    metadata: {
      "currency": "USD", // Optional
      "value": 120,
      "transactionId": "1234567890", // Optional
      "tax": 5.34, // Optional
      "coupon": "FLASH_SALE", // Optional
    },
    items: [
      // MarktagEventItem list
    ],
  ),
);
```

## Log Refund

```dart
Marktag.instance.logEvent(
  MarktagEvent(
    event: "refund",
    metadata: {
      "currency": "USD", // Optional
      "value": 120, // Optional
      "transactionId": "1234567890", // Optional
      "customParameter1": "value", // Custom parameters
      "customParameter2": "value", // Custom parameters
    },
    items: [
      // MarktagEventItem list
    ],
  ),
);
```

## Log Remove From Cart

```dart
Marktag.instance.logEvent(
  MarktagEvent(
    event: "remove_from_cart",
    metadata: {
      "currency": "USD",
      "value": 120,
      "customParameter1": "value", // Custom parameters
      "customParameter2": "value", // Custom parameters
    },
    items: [
      // Optional MarktagEventItem list
    ],
  ),
);
```

## Log Search

```dart
Marktag.instance.logSearch("keyboard");
```

## Log Share

```dart
Marktag.instance.logEvent(
  MarktagEvent(
    event: "share",
    metadata: {
      "itemId": "1234567890", // Optional
      "method": "facebook", // Optional
      "customParameter1": "value", // Custom parameters
      "customParameter2": "value", // Custom parameters
    },
  ),
);
```