# Merchants API

The Merchants endpoints allow you to create and manage merchant accounts under your partner account.

## Endpoints

### Get All Merchants

Retrieve a paginated list of all merchants associated with your partner account.

**Endpoint:** `GET /v1/partners/merchant`

**Headers:**
```
Authorization: Bearer mp_live_YOUR_TOKEN
```

**Query Parameters:**

| Parameter | Type    | Required | Default | Description                | Constraints      |
|-----------|---------|----------|---------|----------------------------|------------------|
| `page`    | integer | No       | 1       | Page number for pagination | Min: 1           |
| `limit`   | integer | No       | 10      | Number of items per page   | Min: 1, Max: 100 |

**Example Request:**
```bash
curl -X GET "https://api-alpha.markopolo.ai/api/v1/partners/merchant?page=1&limit=10" \
  -H "Authorization: Bearer mp_live_YOUR_TOKEN"
```

**Success Response (200 OK):**
```json
{
  "merchants": [
    {
      "merchantId": "550e8400-e29b-41d4-a716-446655440000",
      "name": "Acme Corporation",
      "createdAt": "2025-01-25T10:30:00Z",
      "marktags": [
        {
          "hostname": "example.com",
          "tagId": "550e8400-e29b-41d4-a716-446655440001",
          "status": "active",
          "createdAt": "2025-01-25T10:30:00Z"
        },
        {
          "hostname": "shop.example.com",
          "tagId": "550e8400-e29b-41d4-a716-446655440002",
          "status": "inactive",
          "createdAt": "2025-01-26T10:30:00Z"
        }
      ]
    }
  ],
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

**Response Fields:**

| Field | Type | Description |
|-------|------|-------------|
| `merchants` | array | List of merchant objects |
| `merchants[].merchantId` | string | Unique identifier for the merchant |
| `merchants[].name` | string | Merchant name |
| `merchants[].createdAt` | string | ISO 8601 timestamp of creation |
| `merchants[].marktags` | array | List of MarkTags associated with the merchant |
| `merchants[].marktags[].hostname` | string | Domain where MarkTag is installed |
| `merchants[].marktags[].tagId` | string | Unique identifier for the MarkTag |
| `merchants[].marktags[].status` | string | Current status: "active" or "inactive" |
| `merchants[].marktags[].createdAt` | string | ISO 8601 timestamp of MarkTag creation |
| `pagination` | object | Pagination metadata |
| `pagination.currentPage` | integer | Current page number |
| `pagination.itemsPerPage` | integer | Number of items per page |
| `pagination.totalItems` | integer | Total number of merchants |
| `pagination.totalPages` | integer | Total number of pages |
| `pagination.hasNextPage` | boolean | Whether there are more pages |
| `pagination.hasPreviousPage` | boolean | Whether there are previous pages |

**Error Responses:**

| HTTP Status | Error Code | Description |
|-------------|------------|-------------|
| 401 | `UNAUTHORIZED` | Missing, invalid, or revoked token |
| 500 | `DATABASE_ERROR` | Failed to retrieve merchants |

---

### Create Merchant

Create a new merchant under your partner account.

**Endpoint:** `POST /v1/partners/merchant`

**Headers:**
```
Authorization: Bearer mp_live_YOUR_TOKEN
Content-Type: application/json
```

**Request Body:**
```json
{
  "name": "Acme Corporation"
}
```

**Request Body Parameters:**

| Field  | Type   | Required | Description   | Validation       |
|--------|--------|----------|---------------|------------------|
| `name` | string | Yes      | Merchant name | Non-empty string |

**Example Request:**
```bash
curl -X POST "https://api-alpha.markopolo.ai/api/v1/partners/merchant" \
  -H "Authorization: Bearer mp_live_YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "New Merchant Name"
  }'
```

**Success Response (201 Created):**
```json
{
  "merchantId": "550e8400-e29b-41d4-a716-446655440001"
}
```

**Response Fields:**

| Field | Type | Description |
|-------|------|-------------|
| `merchantId` | string | Unique identifier for the newly created merchant |

**Error Responses:**

| HTTP Status | Error Code | Description |
|-------------|------------|-------------|
| 401 | `UNAUTHORIZED` | Missing, invalid, or revoked token |
| 500 | `DATABASE_ERROR` | Failed to create merchant or merchant integration |


## Best Practices

### Pagination

When retrieving merchants, always implement pagination to handle large datasets efficiently. Use the `page` and `limit` parameters to control the results, and check `hasNextPage` to determine if more pages exist.

### Error Handling

Implement comprehensive error handling for all API calls. Check the response status code and handle specific errors like authentication failures (401) and server errors (500) appropriately.

### Merchant Management

Keep track of merchant IDs as they're required for subsequent operations. Store the merchant ID returned from the create endpoint for use in MarkTag generation and event retrieval.

## Next Steps

After creating a merchant:

1. [Generate a MarkTag](/marktag-docs/partners-api/endpoints/marktag#generate) for the merchant's domain
2. [Verify the MarkTag installation](/marktag-docs/partners-api/endpoints/marktag#verify)
3. [Retrieve event data](/marktag-docs/partners-api/endpoints/events) collected by MarkTag