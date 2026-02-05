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

### Preverified Tags (Partner Domains)

When you complete the onboarding process with partners@markopolo.ai:
1. You'll receive a CNAME record to add to your domain
2. This enables **preverified marktags** under your platform's domain
3. These tags activate instantly without additional DNS verification
4. Perfect for quick merchant onboarding on your platform

**Benefits:**
- Instant marktag generation and activation
- No DNS propagation delays
- Immediate event tracking
- Simplified merchant onboarding

### Custom Domain Tags (Merchant Domains)

For merchants requiring marktags on their own domains:
1. Merchants must add CNAME records to their own domains
2. Partners use the verification API to confirm DNS configuration
3. Requires DNS propagation time (typically 5-30 minutes)
4. Each domain needs individual verification

**Process:**
- Generate marktag for merchant's domain
- Provide CNAME instructions to merchant
- Wait for DNS propagation
- Verify installation via API
- Begin tracking events

The system automatically determines the appropriate tag type based on whether the domain is preverified (under your partner domain) or requires custom setup.

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

## Getting Started

### Partner Onboarding

To begin using the Partners API:

1. **Contact Our Team** - Email partners@markopolo.ai to start the onboarding process
2. **Business Discussion** - We'll learn about:
   - Your platform and business model
   - Integration requirements and use cases
   - Expected merchant volume
3. **Receive Credentials**:
   - Partners API token (mp_live_*)
   - CNAME record for your domain
   - Integration documentation
4. **Configure Domain** - Add the CNAME to enable preverified marktags
5. **Start Integration** - Begin creating merchants and generating marktags

## Support

For API support or questions, contact the Markopolo support team:
- Email: partners@markopolo.ai
- Documentation: This guide

## Next Steps

1. [Set up Authentication](/marktag-docs/partners-api/authentication) - Configure your API token
2. [Quick Start Guide](/marktag-docs/partners-api/getting-started) - Make your first API call
3. [API Reference](/marktag-docs/partners-api/endpoints/) - Explore all available endpoints