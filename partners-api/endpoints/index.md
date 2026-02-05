# API Reference

The Partners API provides RESTful endpoints for managing merchants, MarkTag implementations, and event data. This reference documents all available endpoints.

## Base URL

All API endpoints are relative to:
```
https://api-alpha.markopolo.ai/v1/partners
```

## Available Endpoints

The Partners API consists of three main resource groups:

### [Merchants](/marktag-docs/partners-api/endpoints/merchants)
Manage merchant accounts under your partner account.

- `GET /merchant` - List all merchants with their MarkTags
- `POST /merchant` - Create a new merchant

### [MarkTag](/marktag-docs/partners-api/endpoints/marktag)
Generate and verify tracking implementations.

- `POST /marktag/generate` - Generate a MarkTag for a domain
- `POST /marktag/verify` - Verify MarkTag DNS configuration

### [Events](/marktag-docs/partners-api/endpoints/events)
Retrieve tracking data collected by MarkTag.

- `GET /events` - Get filtered event data with pagination

## Request Headers

All requests require authentication:

```http
Authorization: Bearer mp_live_YOUR_TOKEN
Content-Type: application/json
```

## Response Format

All responses are returned in JSON format:

```json
{
  "field": "value",
  "nested": {
    "data": "example"
  }
}
```

## Error Response Format

Error responses include a message and error code:

```json
{
  "message": "Detailed error description",
  "code": "ERROR_CODE"
}
```

Some authentication errors include additional fields:

```json
{
  "statusCode": 401,
  "message": "Bearer token required",
  "error": "Unauthorized"
}
```

## HTTP Status Codes

The API uses standard HTTP status codes:

| Code | Description |
|------|-------------|
| 200 | Success - Request completed successfully |
| 201 | Created - Resource created successfully |
| 400 | Bad Request - Invalid request parameters |
| 401 | Unauthorized - Authentication failed |
| 403 | Forbidden - Access denied to resource |
| 404 | Not Found - Resource doesn't exist |
| 422 | Unprocessable Entity - Validation failed |
| 500 | Internal Server Error - Server error |
| 503 | Service Unavailable - External service down |

## Error Codes

Common error codes used across endpoints:

| Code | Description |
|------|-------------|
| `UNAUTHORIZED` | Authentication required or failed |
| `VALIDATION_ERROR` | Request validation failed |
| `MERCHANT_NOT_FOUND` | Merchant doesn't exist or access denied |
| `TAG_NOT_FOUND` | MarkTag doesn't exist |
| `INTEGRATION_NOT_FOUND` | No MarkTag integration found |
| `DATABASE_ERROR` | Database operation failed |
| `SERVICE_UNAVAILABLE` | External service unavailable |
| `ACCESS_DENIED` | No permission to access resource |
| `EXTERNAL_SERVICE_ERROR` | External service error |

## Pagination

List endpoints support pagination using query parameters:

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `page` | integer | 1 | Page number (min: 1) |
| `limit` | integer | 10-12 | Items per page (max: 100) |

Paginated responses include metadata:

```json
{
  "data": [...],
  "pagination": {
    "currentPage": 1,
    "itemsPerPage": 10,
    "totalItems": 100,
    "totalPages": 10,
    "hasNextPage": true,
    "hasPreviousPage": false
  }
}
```

## Date Formats

All dates use ISO 8601 format in UTC:
```
2025-01-25T10:30:00Z
```

When filtering by date range:
- `startDate`: Beginning of range (inclusive)
- `endDate`: End of range (inclusive)

## Domain Validation

Different endpoints have different domain requirements:

### Generate MarkTag
Requires root domain only:
- ✅ `example.com`
- ❌ `https://example.com`
- ❌ `www.example.com`
- ❌ `shop.example.com`

### Verify MarkTag
Accepts full subdomain:
- ✅ `shop.example.com`
- ✅ `api.shop.example.com`
- ❌ `https://shop.example.com`

## Partner Isolation

All API operations are isolated to your partner account:
- You can only access merchants you created
- Attempting to access other partners' resources returns 404
- All operations verify partner ownership

## Quick Start Examples

### Test Authentication
```bash
curl -X GET "https://api-alpha.markopolo.ai/v1/partners/merchant?limit=1" \
  -H "Authorization: Bearer mp_live_YOUR_TOKEN"
```

### Complete MarkTag Setup
```bash
# 1. Create merchant
curl -X POST "https://api-alpha.markopolo.ai/v1/partners/merchant" \
  -H "Authorization: Bearer mp_live_YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"name": "My Store"}'

# 2. Generate MarkTag
curl -X POST "https://api-alpha.markopolo.ai/v1/partners/marktag/generate" \
  -H "Authorization: Bearer mp_live_YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"merchantId": "MERCHANT_ID", "domain": "example.com"}'

# 3. Verify installation
curl -X POST "https://api-alpha.markopolo.ai/v1/partners/marktag/verify" \
  -H "Authorization: Bearer mp_live_YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"tagId": "TAG_ID", "subdomain": "shop.example.com"}'

# 4. Get events
curl -X GET "https://api-alpha.markopolo.ai/v1/partners/events?merchantId=MERCHANT_ID" \
  -H "Authorization: Bearer mp_live_YOUR_TOKEN"
```

## SDK Support

While official SDKs are in development, you can use any HTTP client library:

- **JavaScript**: fetch, axios, node-fetch
- **Python**: requests, httpx, aiohttp
- **PHP**: Guzzle, cURL
- **Ruby**: Net::HTTP, HTTParty
- **Go**: net/http
- **Java**: HttpClient, OkHttp

## Next Steps

Explore the detailed documentation for each endpoint:

1. [Merchants API](/marktag-docs/partners-api/endpoints/merchants) - Create and manage merchants
2. [MarkTag API](/marktag-docs/partners-api/endpoints/marktag) - Generate and verify tracking
3. [Events API](/marktag-docs/partners-api/endpoints/events) - Retrieve tracking data