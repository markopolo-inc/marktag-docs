# Getting Started

This guide will help you make your first API calls and understand the basic workflow of integrating MarkTag into your platform.

## Prerequisites

Before you begin, ensure you have:
1. A Partners API token (starts with `mp_live_`)
2. A REST client or programming environment
3. Basic understanding of RESTful APIs

## Integration Workflow

The typical integration follows these steps:

1. **Create a Merchant** - Register a business that will use MarkTag
2. **Generate MarkTag** - Create tracking implementation for their domain
3. **Configure DNS** - Merchant adds CNAME record to their domain
4. **Verify Installation** - Confirm DNS is properly configured
5. **Retrieve Events** - Access tracking data collected by MarkTag

## Step 1: Test Your Authentication

First, verify your API token is working:

```bash
curl -X GET "https://api-alpha.markopolo.ai/api/v1/partners/merchant?limit=1" \
  -H "Authorization: Bearer mp_live_YOUR_TOKEN"
```

Expected response:
```json
{
  "merchants": [],
  "pagination": {
    "currentPage": 1,
    "itemsPerPage": 1,
    "totalItems": 0,
    "totalPages": 0,
    "hasNextPage": false,
    "hasPreviousPage": false
  }
}
```

## Step 2: Create Your First Merchant

Create a merchant account for a business:

```bash
curl -X POST "https://api-alpha.markopolo.ai/api/v1/partners/merchant" \
  -H "Authorization: Bearer mp_live_YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Example Store"
  }'
```

Response:
```json
{
  "merchantId": "550e8400-e29b-41d4-a716-446655440000"
}
```

Save this `merchantId` - you'll need it for subsequent operations.

## Step 3: Generate a MarkTag

Create a tracking implementation for the merchant's domain:

```bash
curl -X POST "https://api-alpha.markopolo.ai/api/v1/partners/marktag/generate" \
  -H "Authorization: Bearer mp_live_YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "merchantId": "550e8400-e29b-41d4-a716-446655440000",
    "domain": "example.com"
  }'
```

Response:
```json
{
  "tagId": "4d00dcfa-fb3d-4495-88bc-9112aedb2046",
  "record": {
    "type": "CNAME",
    "name": "mtag",
    "value": "mtag.markopolo.ai",
    "ttl": 300
  },
  "status": "inactive",
  "message": "New tag created successfully"
}
```

## Step 4: Configure DNS

The merchant needs to add the CNAME record to their domain's DNS:

**DNS Record Details:**
- Type: CNAME
- Name: mtag
- Value: mtag.markopolo.ai
- TTL: 300 (5 minutes)

This creates `mtag.example.com` pointing to `mtag.markopolo.ai`.

## Step 5: Verify the Installation

After DNS propagation (usually 5-30 minutes), verify the configuration:

```bash
curl -X POST "https://api-alpha.markopolo.ai/api/v1/partners/marktag/verify" \
  -H "Authorization: Bearer mp_live_YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "tagId": "4d00dcfa-fb3d-4495-88bc-9112aedb2046",
    "subdomain": "shop.example.com"
  }'
```

Response:
```json
{
  "verified": true
}
```

## Step 6: Retrieve Events

Once verified, MarkTag begins collecting events. Retrieve them with:

```bash
curl -X GET "https://api-alpha.markopolo.ai/api/v1/partners/events?merchantId=550e8400-e29b-41d4-a716-446655440000&limit=10" \
  -H "Authorization: Bearer mp_live_YOUR_TOKEN"
```

Response:
```json
{
  "events": [
    {
      "id": "evt_123456",
      "event_name": "PageView",
      "muid": "user_789",
      "event_time": "2025-01-25T10:30:00Z",
      "raw_data": "{\"url\": \"https://example.com/products\"}"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 1,
    "totalPages": 1
  }
}
```

## Integration Workflow Summary

The complete integration workflow involves:

1. **Create a merchant** under your partner account
2. **Generate a MarkTag** for the merchant's domain
3. **Provide DNS instructions** to the merchant
4. **Verify the installation** once DNS is configured
5. **Retrieve events** collected by MarkTag

## Common Issues and Solutions

### Authentication Errors

**Problem:** `401 Unauthorized - Bearer token required`
**Solution:** Ensure the Authorization header is properly formatted:
```
Authorization: Bearer mp_live_YOUR_TOKEN
```

### Domain Validation Errors

**Problem:** `400 - Invalid domain format`
**Solution:** For generate endpoint, use root domain only:
- ✅ `example.com`
- ❌ `https://example.com`
- ❌ `www.example.com`

### DNS Verification Failures

**Problem:** `422 - Tag verification failed`
**Solutions:**
1. Ensure CNAME record is correctly added
2. Wait for DNS propagation (can take up to 48 hours)
3. Verify subdomain format (no protocol prefix)

### No Events Appearing

**Problem:** Events endpoint returns empty array
**Solutions:**
1. Ensure MarkTag is verified
2. Check that tracking code is implemented on website
3. Wait a few minutes for events to process

## Best Practices

### 1. Store Merchant Mappings

Keep track of merchant IDs in your database. Store the mapping between your system IDs and Markopolo merchant IDs for easy reference.

### 2. Implement Retry Logic

Add retry logic for transient failures with exponential backoff to handle temporary network issues or API unavailability.

### 3. Cache Event Data

Cache frequently accessed data to reduce API calls. Consider implementing a cache layer with appropriate TTL values for your use case.

## Next Steps

Now that you understand the basics:

1. Explore the [API Reference](/marktag-docs/partners-api/endpoints/) for detailed endpoint documentation
2. Implement error handling and monitoring
3. Build your integration dashboard
4. Contact support for production access: r@markopolo.ai