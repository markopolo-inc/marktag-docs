# Partners API Documentation

Welcome to the Markopolo Partners API documentation. The Partners API enables platforms to integrate MarkTag tracking capabilities into their own systems, allowing them to offer advanced analytics and conversion tracking to their users.

## Who Is This For?

The Partners API is designed for platforms that want to integrate MarkTag as an analytics solution:

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  <div style="padding: 1rem; border: 1px solid var(--vp-c-divider); border-radius: 8px;">
    <h3>🛒 E-commerce Platforms</h3>
    <p>Integrate MarkTag tracking directly into your platform, enabling merchants to set up analytics without leaving your dashboard</p>
  </div>

  <div style="padding: 1rem; border: 1px solid var(--vp-c-divider); border-radius: 8px;">
    <h3>🌐 Website Builders</h3>
    <p>Offer MarkTag as a built-in analytics solution for websites created on your platform</p>
  </div>

  <div style="padding: 1rem; border: 1px solid var(--vp-c-divider); border-radius: 8px;">
    <h3>📊 Marketing Platforms</h3>
    <p>Add MarkTag tracking capabilities to enhance your marketing automation or analytics features</p>
  </div>
</div>

## Key Features

### Merchant Management
- Create and manage merchant accounts under your partner umbrella
- Organize multiple merchants from a single API integration
- Isolate merchant data for security and privacy

### MarkTag Generation & Verification
- Generate unique tracking implementations for each merchant domain
- Automatic detection of preverified vs regular domains
- DNS configuration validation to ensure proper setup
- Support for multiple tags per merchant

### Event Data Access
- Retrieve tracking events collected by MarkTag
- Filter by date ranges, event types, and other parameters
- Access conversion data and user interactions
- Real-time event streaming capabilities

## Quick Start

### 1. Get API Access & Complete Onboarding

**Start the onboarding process:**
1. Contact [partners@markopolo.ai](mailto:partners@markopolo.ai)
2. Our team will learn about your business and use cases
3. You'll receive:
   - Your Partners API token (mp_live_*)
   - A CNAME record to add to your domain
4. Configure the CNAME on your domain to enable preverified marktags

**Why the CNAME setup?**
- Enables instant marktag generation under your domain
- No DNS verification delays for your merchants
- Immediate event tracking once tags are created

### 2. Authentication

Use Bearer token authentication with your API token:

```bash
curl -H "Authorization: Bearer mp_live_YOUR_TOKEN" \
  https://api-alpha.markopolo.ai/v1/partners/merchant
```

### 3. Make Your First Call

Test your connection:

```bash
curl -X GET https://api-alpha.markopolo.ai/v1/partners/merchant?limit=1 \
  -H "Authorization: Bearer mp_live_YOUR_TOKEN"
```

### 4. Explore the API

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <a href="/marktag-docs/partners-api/endpoints/merchants" style="text-decoration: none;">
    <div style="padding: 1.5rem; border: 2px solid var(--vp-c-brand); border-radius: 8px; text-align: center;">
      <h4>👥 Merchants</h4>
      <p style="font-size: 0.9em;">Manage merchant accounts</p>
    </div>
  </a>

  <a href="/marktag-docs/partners-api/endpoints/marktag" style="text-decoration: none;">
    <div style="padding: 1.5rem; border: 2px solid var(--vp-c-brand); border-radius: 8px; text-align: center;">
      <h4>🏷️ MarkTag</h4>
      <p style="font-size: 0.9em;">Generate and verify tags</p>
    </div>
  </a>

  <a href="/marktag-docs/partners-api/endpoints/events" style="text-decoration: none;">
    <div style="padding: 1.5rem; border: 2px solid var(--vp-c-brand); border-radius: 8px; text-align: center;">
      <h4>📊 Events</h4>
      <p style="font-size: 0.9em;">Access tracking data</p>
    </div>
  </a>

  <a href="/marktag-docs/partners-api/getting-started" style="text-decoration: none;">
    <div style="padding: 1.5rem; border: 2px solid var(--vp-c-brand); border-radius: 8px; text-align: center;">
      <h4>🚀 Quick Start</h4>
      <p style="font-size: 0.9em;">Step-by-step guide</p>
    </div>
  </a>
</div>

## API Overview

### Base URL
```
https://api-alpha.markopolo.ai/v1/partners
```

### Request/Response Format
- **Format**: JSON
- **Authentication**: Bearer token (mp_live_ prefix)
- **Method**: RESTful API endpoints


## Integration Workflow

### For Preverified Domains (Your Platform)
1. **Create Merchant** - Register merchants under your partner account
2. **Generate MarkTag** - Create tracking using your preverified domain
3. **Start Tracking** - Immediately begin collecting events (no DNS wait)
4. **Retrieve Data** - Access event data through the API

### For Custom Merchant Domains
1. **Create Merchant** - Register merchants under your partner account
2. **Generate MarkTag** - Create tracking for merchant's custom domain
3. **Configure DNS** - Merchant adds CNAME record to their domain
4. **Verify Installation** - Use verification API to confirm DNS setup
5. **Collect Events** - MarkTag begins tracking user interactions
6. **Retrieve Data** - Access event data through the API

## Key Documentation

- 📖 [Overview](/marktag-docs/partners-api/overview) - Detailed introduction
- 🔐 [Authentication](/marktag-docs/partners-api/authentication) - Security setup
- 🚀 [Getting Started](/marktag-docs/partners-api/getting-started) - Step-by-step guide
- 📚 [API Reference](/marktag-docs/partners-api/endpoints/) - Complete endpoint documentation

## Support & Resources

- **Email**: partners@markopolo.ai
- **Documentation**: Complete API reference and guides
- **Integration Support**: Technical assistance for implementation

## Not What You're Looking For?

If you need to implement tracking on websites or mobile apps to capture user events and analytics, check out our [MarkTag SDK Documentation](/marktag-docs/sdk/) instead.