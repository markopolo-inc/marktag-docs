# MarkTag SDK Documentation

Welcome to the MarkTag SDK documentation. MarkTag is a first-party server solution designed to enhance and strengthen web tracking accuracy, streamlining the collection and transmission of user interaction data for advertising platforms.

## What is MarkTag SDK?

MarkTag SDK provides client-side tracking libraries for capturing user interactions, conversions, and behavioral data across websites and mobile applications. It ensures accurate event tracking while maintaining compliance with privacy regulations.

## Key Benefits

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  <div style="padding: 1rem; border: 1px solid var(--vp-c-divider); border-radius: 8px;">
    <h3>🎯 Accurate Tracking</h3>
    <p>Precise capture of every user action with first-party cookies that bypass browser restrictions</p>
  </div>

  <div style="padding: 1rem; border: 1px solid var(--vp-c-divider); border-radius: 8px;">
    <h3>🔒 Data Loss Prevention</h3>
    <p>Reliable recording of all interactions, conversions, and metrics with no data loss</p>
  </div>

  <div style="padding: 1rem; border: 1px solid var(--vp-c-divider); border-radius: 8px;">
    <h3>📈 Enhanced Attribution</h3>
    <p>Clear insights into campaign performance and ROI across all marketing channels</p>
  </div>

  <div style="padding: 1rem; border: 1px solid var(--vp-c-divider); border-radius: 8px;">
    <h3>⚡ Easy Integration</h3>
    <p>Single code snippet installation with platform-specific SDKs for seamless setup</p>
  </div>
</div>

## Available Platforms {#platforms}

Choose your platform to get started with MarkTag SDK:

### Web & Mobile SDKs

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <a href="/marktag-docs/sdk/web-sdk/installation" style="text-decoration: none;">
    <div style="padding: 1.5rem; border: 2px solid var(--vp-c-brand); border-radius: 8px; text-align: center; transition: all 0.3s;">
      <h4>🌐 Web SDK</h4>
      <p>JavaScript/TypeScript</p>
      <p style="font-size: 0.9em; color: var(--vp-c-text-2);">For websites and web apps</p>
    </div>
  </a>

  <a href="/marktag-docs/sdk/react-native/installation" style="text-decoration: none;">
    <div style="padding: 1.5rem; border: 2px solid var(--vp-c-brand); border-radius: 8px; text-align: center; transition: all 0.3s;">
      <h4>⚛️ React Native</h4>
      <p>iOS & Android</p>
      <p style="font-size: 0.9em; color: var(--vp-c-text-2);">For React Native apps</p>
    </div>
  </a>

  <a href="/marktag-docs/sdk/flutter/installation" style="text-decoration: none;">
    <div style="padding: 1.5rem; border: 2px solid var(--vp-c-brand); border-radius: 8px; text-align: center; transition: all 0.3s;">
      <h4>🦋 Flutter</h4>
      <p>Cross-platform</p>
      <p style="font-size: 0.9em; color: var(--vp-c-text-2);">For Flutter applications</p>
    </div>
  </a>

  <a href="/marktag-docs/sdk/unity-sdk/installation" style="text-decoration: none;">
    <div style="padding: 1.5rem; border: 2px solid var(--vp-c-brand); border-radius: 8px; text-align: center; transition: all 0.3s;">
      <h4>🎮 Unity SDK</h4>
      <p>Games & 3D Apps</p>
      <p style="font-size: 0.9em; color: var(--vp-c-text-2);">For Unity-based projects</p>
    </div>
  </a>
</div>

### Server-Side Integration

<div style="padding: 1.5rem; border: 2px solid var(--vp-c-brand); border-radius: 8px; margin: 2rem 0;">
  <h4>🔧 REST API</h4>
  <p>Direct server-to-server integration for custom implementations and backend services.</p>
  <p><a href="/marktag-docs/sdk/rest-api/prerequisites">View REST API Documentation →</a></p>
</div>

## Quick Start

### 1. Set Up Your Container

Before implementing any SDK, you need to set up your MarkTag container:

1. Log in to [Markopolo Dashboard](https://app.markopolo.ai)
2. Navigate to MarkTag section
3. Create a new container
4. Copy your Container ID

### 2. Choose Your Platform

Select the appropriate SDK for your platform from the options above.

### 3. Install and Configure

Each SDK has its own installation process:

- **Web SDK**: Add script tag or npm package
- **React Native**: Install via npm/yarn
- **Flutter**: Add to pubspec.yaml
- **Unity**: Import Unity package
- **REST API**: Direct HTTP requests

### 4. Start Tracking

Begin tracking events with simple API calls:

```javascript
// Example for Web SDK
marktag.track('purchase', {
  value: 99.99,
  currency: 'USD',
  items: ['product-123']
});
```

## Common Use Cases

- **E-commerce**: Track purchases, cart additions, checkouts
- **SaaS**: Monitor signups, feature usage, subscriptions
- **Content**: Measure engagement, video views, downloads
- **Gaming**: Track installs, in-app purchases, level completions

## Platform Comparison

| Feature | Web SDK | React Native | Flutter | Unity | REST API |
|---------|---------|--------------|---------|--------|----------|
| Installation | Script/NPM | NPM | Pub | Package | Direct |
| Auto-tracking | ✅ | ✅ | ✅ | ⚠️ | ❌ |
| Custom Events | ✅ | ✅ | ✅ | ✅ | ✅ |
| User Identity | ✅ | ✅ | ✅ | ✅ | ✅ |
| Offline Support | ⚠️ | ✅ | ✅ | ✅ | N/A |
| Real-time | ✅ | ✅ | ✅ | ✅ | ✅ |

## Need Help?

- 📚 Read the [Introduction](/marktag-docs/sdk/introduction/introduction) to understand MarkTag
- 🚀 Follow the [Getting Started Guide](/marktag-docs/sdk/introduction/getting-started)
- 📧 Contact support: support@markopolo.ai
- 💬 Join our [Developer Community](https://community.markopolo.ai)

## Not What You're Looking For?

If you need to programmatically manage advertising campaigns or access analytics data via API, check out our [Partners API Documentation](/marktag-docs/partners-api/) instead.