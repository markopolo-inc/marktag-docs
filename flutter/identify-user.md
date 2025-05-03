# Identify user

MarkTag automatically assigns an unique ID to every user. But you can add more information to farther classify the user.

```javascript
Marktag.instance.identifyUser({
  email: "user@email.com",
  phone: "xxxxxxxxxxx",
  name: "Test User"
});
```

Note that if you call `Marktag.instance.logLogin()` or `Marktag.instance.logSignup()` upon authentication, you can skip this step. But you can still use this when you expect the user to be already logged in to your app.