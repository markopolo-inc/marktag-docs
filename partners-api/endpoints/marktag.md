# MarkTag API

The MarkTag endpoints allow you to generate and verify tracking implementations for merchant domains.

## Endpoints

### Generate MarkTag {#generate}

Generate tracking implementation details for a specific domain. If a MarkTag already exists for the domain type, returns the existing tag details.

**Endpoint:** `POST /v1/partners/marktag/generate`

**Headers:**
```
Authorization: Bearer mp_live_YOUR_TOKEN
Content-Type: application/json
```

**Request Body:**
```json
{
  "merchantId": "01d1f5db-848d-4410-bb38-7e2c5b084ec8",
  "domain": "example.com"
}
```

**Request Body Parameters:**

| Field        | Type   | Required | Description           | Validation |
|--------------|--------|----------|-----------------------|------------|
| `merchantId` | string | Yes      | Merchant identifier   | Valid UUID format |
| `domain`     | string | Yes      | Root domain name only | Must be valid domain without protocol or www prefix |

**Domain Validation Rules:**
- Domain must be a root domain (e.g., "example.com")
- No protocol prefix (http:// or https://)
- No www prefix
- Must be a valid domain format
- Pattern: `^(?!.*:\/\/)(?!www\.)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$`

**Example Request:**
```bash
curl -X POST "https://api-alpha.markopolo.ai/v1/partners/marktag/generate" \
  -H "Authorization: Bearer mp_live_YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "merchantId": "01d1f5db-848d-4410-bb38-7e2c5b084ec8",
    "domain": "example.com"
  }'
```

**Success Response (200 OK):**
```json
{
  "tagId": "4d00dcfa-fb3d-4495-88bc-9112aedb2046",
  "record": {
    "type": "CNAME",
    "name": "mtag",
    "value": "mtag.markopolo.ai",
    "ttl": 300
  },
  "status": "active",
  "message": "New tag created successfully"
}
```

**Response Fields:**

| Field          | Type   | Description |
|----------------|--------|-------------|
| `tagId`        | string | Unique identifier for the generated MarkTag |
| `record`       | object | DNS CNAME record to be added to domain |
| `record.type`  | string | DNS record type (always "CNAME") |
| `record.name`  | string | Subdomain name for the CNAME record |
| `record.value` | string | Target value for the CNAME record |
| `record.ttl`   | number | Time-to-live in seconds |
| `status`       | string | Current status ("active" or "inactive") |
| `message`      | string | Status message ("New tag created successfully" or "Existing tag retrieved") |

**Error Responses:**

| HTTP Status | Error Code | Description |
|-------------|------------|-------------|
| 400 | `VALIDATION_ERROR` | Missing merchantId, invalid domain format, or unable to process domain |
| 401 | `UNAUTHORIZED` | Missing, invalid, or revoked token |
| 404 | `MERCHANT_NOT_FOUND` | Merchant doesn't exist or doesn't belong to partner |
| 500 | `DATABASE_ERROR` | Database error during operation |
| 500 | `VALIDATION_ERROR` | Tag configuration incomplete |
| 500 | `SERVICE_UNAVAILABLE` | Unable to process request |
| 503 | `SERVICE_UNAVAILABLE` | External tag service unavailable |

**Notes:**
- The system automatically determines if the domain is preverified or requires server-side setup
- If a MarkTag already exists for the merchant and domain type, the existing tag details are returned
- Each merchant can have both a regular (serverSide) and a preverified MarkTag

---

### Verify MarkTag {#verify}

Verify an existing MarkTag installation and update its status. This endpoint validates DNS configuration and marks the tag as verified.

**Endpoint:** `POST /v1/partners/marktag/verify`

**Headers:**
```
Authorization: Bearer mp_live_YOUR_TOKEN
Content-Type: application/json
```

**Request Body:**
```json
{
  "tagId": "4d00dcfa-fb3d-4495-88bc-9112aedb2046",
  "subdomain": "shop.example.com"
}
```

**Request Body Parameters:**

| Field       | Type   | Required | Description | Validation |
|-------------|--------|----------|-------------|------------|
| `tagId`     | string | Yes      | The ID of the marktag to verify | Valid UUID format |
| `subdomain` | string | Yes      | Subdomain to verify | Valid subdomain without protocol |

**Subdomain Validation Rules:**
- Must not include protocol (http:// or https://)
- Can include multiple subdomain levels (e.g., "api.shop.example.com")
- Must be a valid domain format
- Pattern: `^(?!.*:\/\/)([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$`

**Example Request:**
```bash
curl -X POST "https://api-alpha.markopolo.ai/v1/partners/marktag/verify" \
  -H "Authorization: Bearer mp_live_YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "tagId": "4d00dcfa-fb3d-4495-88bc-9112aedb2046",
    "subdomain": "shop.example.com"
  }'
```

**Success Response (200 OK):**
```json
{
  "verified": true
}
```

**Response Fields:**

| Field      | Type    | Description |
|------------|---------|-------------|
| `verified` | boolean | Whether the MarkTag installation was successfully verified |

**Error Responses:**

| HTTP Status | Error Code | Description |
|-------------|------------|-------------|
| 400 | `VALIDATION_ERROR` | Invalid subdomain format, incomplete configuration, or verification failed |
| 401 | `UNAUTHORIZED` | Missing, invalid, or revoked token |
| 403 | `ACCESS_DENIED` | Partner doesn't own the merchant |
| 404 | `TAG_NOT_FOUND` | Tag ID doesn't exist |
| 422 | `VALIDATION_ERROR` | DNS verification failed - check DNS configuration |
| 500 | `DATABASE_ERROR` | Database error during operation |
| 503 | `EXTERNAL_SERVICE_ERROR` | External verification service unavailable |

**Verification Process:**
- The system extracts the root domain from the subdomain
- Verifies ownership of the merchant associated with the tag
- Calls external service to verify DNS configuration
- Updates tag status to 'waiting_for_events' upon successful verification
- Updates both `isConnected` and `isVerified` flags

## Implementation Guide

### Complete MarkTag Setup Flow

The complete workflow for setting up a MarkTag involves:

1. **Generate MarkTag** - Create a tracking implementation for the merchant's domain
2. **Configure DNS** - Add the provided CNAME record to the domain's DNS settings
3. **Wait for Propagation** - DNS changes typically take 5-30 minutes to propagate
4. **Verify Installation** - Confirm the DNS configuration is correct
5. **Start Collecting Data** - Once verified, MarkTag begins tracking events

## DNS Configuration Guide

### Adding the CNAME Record

After generating a MarkTag, you'll receive DNS configuration details. Here's how to add them to popular DNS providers:

#### Example DNS Record
```
Type: CNAME
Name: mtag
Value: mtag.markopolo.ai
TTL: 300
```

### Common DNS Providers

**Cloudflare:**
1. Log in to Cloudflare dashboard
2. Select your domain
3. Go to DNS section
4. Click "Add record"
5. Select Type: CNAME
6. Enter Name: mtag
7. Enter Target: mtag.markopolo.ai
8. Set TTL: Auto or 5 minutes
9. Save

**GoDaddy:**
1. Log in to GoDaddy account
2. Go to Domain Settings
3. Select DNS Management
4. Add new CNAME record
5. Host: mtag
6. Points to: mtag.markopolo.ai
7. TTL: 600 seconds
8. Save

**Route 53 (AWS):**
1. Open Route 53 console
2. Select your hosted zone
3. Create Record
4. Record type: CNAME
5. Record name: mtag
6. Value: mtag.markopolo.ai
7. TTL: 300
8. Create records

### DNS Propagation

- DNS changes typically propagate within 5-30 minutes
- Maximum propagation time can be up to 48 hours
- Use online DNS checkers to verify propagation status
- The verify endpoint will confirm when DNS is properly configured

## Best Practices

### Domain Validation

Always validate domain format before making API calls:
- For generate endpoint: Use root domain only (e.g., `example.com`)
- For verify endpoint: Use full subdomain (e.g., `shop.example.com`)
- No protocol prefixes (http:// or https://)
- No www prefix for root domains

### Error Handling

Implement specific error handling for different scenarios:
- **400 VALIDATION_ERROR**: Invalid domain format
- **404 NOT_FOUND**: Merchant not found or access denied
- **422 UNPROCESSABLE_ENTITY**: DNS not configured (for verify endpoint)
- **503 SERVICE_UNAVAILABLE**: External service temporarily unavailable

## Next Steps

After verifying your MarkTag:

1. MarkTag will begin collecting event data
2. [Retrieve events](/marktag-docs/partners-api/endpoints/events) using the Events API
3. Monitor tag status through the merchant endpoints