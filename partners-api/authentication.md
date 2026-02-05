# Authentication

The Partners API uses Bearer token authentication. All API requests must include a valid API token in the Authorization header.

## Token Format

Partner API tokens follow a specific format:
- Prefix: `mp_live_`
- Example: `mp_live_YOUR_TOKEN_HERE`

## Authentication Header

Include your API token in the Authorization header of every request:

```
Authorization: Bearer mp_live_YOUR_TOKEN_HERE
```

## Making Authenticated Requests

### Example Request

```bash
curl -X GET "https://api-alpha.markopolo.ai/v1/partners/merchant" \
  -H "Authorization: Bearer mp_live_YOUR_TOKEN_HERE"
```

## Authentication Errors

The API returns specific error messages for authentication failures:

### Missing Authorization Header
**Status Code:** 401 Unauthorized
**Message:** Bearer token required

### Invalid Token Format
**Status Code:** 401 Unauthorized
**Message:** Invalid partner token format

### Invalid or Revoked Token
**Status Code:** 401 Unauthorized
**Message:** Invalid or revoked partner token

### Partner Not Found
**Status Code:** 401 Unauthorized
**Message:** Authentication required

## Token Security Best Practices

### Keep Your Token Secure

- **Never expose your token in client-side code** - API tokens should only be used in server-side applications
- **Store tokens securely** - Use environment variables or secure key management systems
- **Don't commit tokens to version control** - Add token files to .gitignore

### Environment Variables

Store your token in environment variables for security. Use your platform's standard environment variable practices to keep tokens out of your codebase.

### Token Rotation

- Regularly rotate your API tokens for security
- Contact Markopolo support if you suspect your token has been compromised
- Revoked tokens will immediately stop working

## Testing Authentication

Test your authentication setup with a simple request:

```bash
curl -X GET "https://api-alpha.markopolo.ai/v1/partners/merchant?limit=1" \
  -H "Authorization: Bearer mp_live_YOUR_TOKEN_HERE"
```

A successful response indicates your token is valid and properly configured.

## Partner Isolation

The API automatically isolates data based on the authenticated partner:

- Each token is associated with a specific partner account
- You can only access merchants created under your partner account
- Attempting to access another partner's resources returns 404 Not Found
- All merchant operations verify partner ownership

## Getting Your API Token

To obtain your API token:

1. Contact Markopolo support at partners@markopolo.ai
2. Provide your organization details and use case
3. Receive your unique `mp_live_` prefixed token
4. Store the token securely - it won't be shown again

## Troubleshooting

### Common Issues

1. **"Bearer token required" error**
   - Ensure the Authorization header is included
   - Check the header format: `Authorization: Bearer mp_live_YOUR_TOKEN`

2. **"Invalid partner token format" error**
   - Verify your token starts with `mp_live_`
   - Check for extra spaces or characters

3. **"Invalid or revoked partner token" error**
   - Confirm your token hasn't been revoked
   - Contact support if you believe this is an error

4. **Intermittent authentication failures**
   - Check for token expiration (if applicable)
   - Verify network connectivity
   - Implement retry logic with exponential backoff

## Next Steps

Once your authentication is configured:

1. [Test your connection](/marktag-docs/partners-api/getting-started) with a simple API call
2. [Create your first merchant](/marktag-docs/partners-api/endpoints/merchants)
3. [Generate a MarkTag](/marktag-docs/partners-api/endpoints/marktag) for tracking