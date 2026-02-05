# Partners API Overview

The Markopolo Partners API (Fourthwall Partner API) enables platforms to integrate MarkTag tracking capabilities into their own systems. This API is designed for partners who want to offer MarkTag analytics as part of their platform's features.

## What is the Partners API?

The Partners API allows third-party platforms to:

- **Manage Merchants**: Create and manage merchant accounts under your partner umbrella
- **Generate MarkTags**: Create tracking implementations for merchant websites
- **Verify Installations**: Validate that MarkTag is properly installed on merchant domains
- **Access Event Data**: Retrieve tracking events and analytics data collected by MarkTag

## Who Should Use This API?

The Partners API is designed for:

### E-commerce Platforms
Integrate MarkTag tracking directly into your e-commerce platform, allowing merchants to automatically set up analytics without leaving your dashboard.

### Website Builders
Offer MarkTag as a built-in analytics solution for websites created on your platform.

### Marketing Platforms
Add MarkTag tracking capabilities to your marketing automation or analytics platform.

### Agency Tools
Manage multiple client MarkTag installations from a single interface.

## Key Concepts

### Partner Account
Your organization's account that can create and manage multiple merchant accounts. Each partner has a unique API token for authentication.

### Merchant
A business or website owner who uses MarkTag for tracking. Merchants are created and managed under your partner account.

### MarkTag
The tracking implementation that collects event data from a merchant's website. Each merchant can have multiple MarkTags for different domains.

### Events
User interactions and behaviors tracked by MarkTag, such as page views, purchases, and custom events.

## API Architecture

### Base URL
```
https://api-alpha.markopolo.ai/api
```

### API Version
Current version: `v1`

All endpoints are prefixed with `/v1/partners/`

### Request/Response Format
- **Content-Type**: `application/json`
- **Authentication**: Bearer token in Authorization header
- **Response Format**: JSON

## Core Functionality

### 1. Merchant Management
Create and manage merchant accounts under your partner account. Each merchant represents a business that will use MarkTag tracking.

### 2. MarkTag Generation
Generate tracking implementations for merchant domains. The API provides:
- Unique tag IDs
- DNS configuration instructions (CNAME records)
- Automatic detection of preverified vs regular domains

### 3. Installation Verification
Verify that merchants have correctly configured their DNS and that MarkTag is ready to collect data.

### 4. Event Data Access
Retrieve tracking events collected by MarkTag with filtering and pagination options.

## Integration Workflow

1. **Create Merchant** - Register a new merchant under your partner account
2. **Generate MarkTag** - Create a tracking implementation for the merchant's domain
3. **Configure DNS** - Merchant adds the provided CNAME record to their domain
4. **Verify Installation** - Validate the DNS configuration
5. **Collect Events** - MarkTag begins tracking user interactions
6. **Retrieve Data** - Access event data through the API

## MarkTag Types

### Server-Side Tags
Regular domains that require DNS configuration. The merchant must add a CNAME record to their domain's DNS settings.

### Preverified Tags
Domains that already have the required DNS configuration. These can start collecting data immediately after generation.

The system automatically determines the appropriate tag type based on the domain.

## Security & Authentication

### API Tokens
- Tokens start with `mp_live_` prefix
- Each partner has a unique token
- Tokens must be kept secure and never exposed in client-side code

### Partner Isolation
- Each partner can only access their own merchants
- Merchant data is isolated between partners
- All operations verify partner ownership

## Error Handling

The API uses standard HTTP status codes and returns detailed error messages in JSON format.

Common error codes:
- `UNAUTHORIZED` - Authentication failed
- `VALIDATION_ERROR` - Invalid request data
- `MERCHANT_NOT_FOUND` - Merchant doesn't exist or doesn't belong to partner
- `DATABASE_ERROR` - Internal database error
- `SERVICE_UNAVAILABLE` - External service unavailable

## Best Practices

### DNS Configuration
- After generating a MarkTag, ensure the merchant adds the CNAME record promptly
- DNS propagation can take up to 48 hours
- Always verify installation after DNS changes

### Data Retrieval
- Use pagination for large datasets
- Apply filters to reduce data transfer
- Cache frequently accessed data when appropriate

### Error Handling
- Implement retry logic for temporary failures
- Log errors for debugging
- Provide clear feedback to merchants about installation status

## Support

For API support or questions, contact the Markopolo support team:
- Email: partners@markopolo.ai
- Documentation: This guide

## Next Steps

1. [Set up Authentication](/marktag-docs/partners-api/authentication) - Configure your API token
2. [Quick Start Guide](/marktag-docs/partners-api/getting-started) - Make your first API call
3. [API Reference](/marktag-docs/partners-api/endpoints/) - Explore all available endpoints