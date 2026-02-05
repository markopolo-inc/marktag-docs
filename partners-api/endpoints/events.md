# Events API

Access and retrieve tracking events collected by MarkTag across all your merchants.

## Endpoint

**GET** `/v1/partners/events`

Retrieves events based on provided filters and pagination parameters.

## Request Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `merchantId` | string | Yes | Merchant ID to get events for |
| `page` | integer | No | Page number (default: 1) |
| `limit` | integer | No | Results per page (default: 12, max: 100) |
| `sortOrder` | string | No | Sort order: 'asc' or 'desc' (default: 'desc') |
| `sortBy` | string | No | Sort field: 'event_time', 'event_name' (default: 'event_time') |
| `events` | string | No | Comma-separated list of event names to filter |
| `startDate` | string | No | ISO 8601 date string for start of date range |
| `endDate` | string | No | ISO 8601 date string for end of date range |

## Response

### Successful Response (200)

```json
{
  "events": [
    {
      "id": "evt_123456789",
      "muid": "user_abc123",
      "event_name": "PageView",
      "event_time": "2025-01-25T10:30:00.000Z",
      "raw_data": "{\"url\": \"https://example.com/products\", \"title\": \"Products Page\"}"
    },
    {
      "id": "evt_987654321",
      "muid": "user_abc123",
      "event_name": "Purchase",
      "event_time": "2025-01-25T10:35:00.000Z",
      "raw_data": "{\"value\": 99.99, \"currency\": \"USD\", \"items\": [\"SKU123\"]}"
    }
  ],
  "pagination": {
    "total": 156,
    "currentPage": 1,
    "totalPages": 8,
    "itemsPerPage": 20,
    "hasNextPage": true,
    "hasPreviousPage": false
  }
}
```

### Event Object Structure

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique event identifier |
| `muid` | string | MarkTag user identifier |
| `event_name` | string | Name of the event (e.g., PageView, Purchase) |
| `event_time` | string | ISO 8601 timestamp of when the event occurred |
| `raw_data` | string | JSON string containing event-specific data |

## Error Responses

| Status Code | Code | Description |
|-------------|------|-------------|
| 400 | `VALIDATION_ERROR` | Invalid query parameters |
| 401 | `UNAUTHORIZED` | Missing or invalid authentication token |
| 404 | `MERCHANT_NOT_FOUND` | Merchant doesn't exist or no MarkTag integration found |
| 500 | `DATABASE_ERROR` | Internal server error |

## Query Examples

### Get Recent Events

```bash
curl -X GET "https://api-alpha.markopolo.ai/v1/partners/events?merchantId=YOUR_MERCHANT_ID&limit=20" \
  -H "Authorization: Bearer mp_live_YOUR_TOKEN"
```

### Get Events for Date Range

```bash
curl -X GET "https://api-alpha.markopolo.ai/v1/partners/events?merchantId=YOUR_MERCHANT_ID&startDate=2025-01-01T00:00:00Z&endDate=2025-01-31T23:59:59Z" \
  -H "Authorization: Bearer mp_live_YOUR_TOKEN"
```

### Get Specific Event Types

```bash
curl -X GET "https://api-alpha.markopolo.ai/v1/partners/events?merchantId=YOUR_MERCHANT_ID&events=Purchase,AddToCart" \
  -H "Authorization: Bearer mp_live_YOUR_TOKEN"
```

## Common Event Types

### E-commerce Events
- `PageView` - User views a page
- `Purchase` - Completed purchase
- `AddToCart` - Item added to cart
- `RemoveFromCart` - Item removed from cart
- `BeginCheckout` - Checkout process started
- `ViewContent` - Product or content viewed
- `Search` - Search performed

### User Events
- `SignUp` - New user registration
- `Login` - User login
- `Logout` - User logout

### Custom Events
Partners can also track custom events specific to their business needs.

## Implementation Guide

The Events API provides flexible filtering and pagination options to retrieve tracking data efficiently. Use query parameters to filter by date range, event types, and implement pagination for large datasets.

## Best Practices

### Pagination
Always implement pagination for large datasets. Use the `page` and `limit` parameters to control the results, and check `hasNextPage` to determine if more pages exist.

### Efficient Filtering
Use API filters (date ranges, event types) to reduce the amount of data transferred rather than fetching all events and filtering client-side.

### Error Handling
Implement appropriate error handling for:
- 404 errors when no MarkTag integration exists
- Network timeouts and retry logic

### Data Processing
- Parse the `raw_data` JSON string to access event-specific information
- Use the `muid` field to track unique users across events
- Sort and filter by `event_time` for chronological analysis

## Next Steps

With event data, you can:

1. Build custom analytics dashboards
2. Set up real-time alerts for important events
3. Generate reports for merchants
4. Integrate with other analytics platforms
5. Create data pipelines for further processing