# Enterlude Privacy Policy

Last updated: August 3, 2026

[日本語](./privacy.md) | English | [한국어](./privacy.ko.md) | [繁體中文](./privacy.zh-TW.md)

## How Message and Conversation Content Is Handled

Enterlude does not record, retain, or send the content of your messages or conversations to the developer or to servers operated by the developer.

To provide send protection, it may temporarily handle the state of the message input currently displayed in the browser. For example, it may process text to insert a line break or check that the input has been cleared after a send. This processing is used only for accidental-send prevention. The content is not analyzed, logged, stored, or sent to the developer.

## What Is Stored

Only the following preferences are stored using the browser's extension sync storage (`chrome.storage.sync`):

- Whether the fun-comment feature is turned on
- Your chosen language for fun comments

You can view and change these preferences in the extension popup. Depending on your browser's sync settings, they may be synchronized among browsers signed in to the same account. They are not sent to the developer or to servers operated by the developer.

## How It Works

Enterlude detects the message input box, send button, and retry button on supported AI chat services (Claude / ChatGPT / Gemini) in order to provide its send-protection feature. Any temporary handling of input state is not used to analyze or record the content of your conversations.

## Permissions

Enterlude only operates within the scope needed to provide its send-protection feature on supported AI chat pages. The permissions it requests are limited to `storage` (to save your settings) and host access restricted to the supported AI chat services.

## Third-Party Services

Enterlude itself does not send data to developer-operated servers and does not use analytics, advertising, or tracking services. Messages are sent to an AI chat service only when you explicitly unlock and send them through that service's web page; the service's own privacy policy applies.

## Pricing

Enterlude is free. There are no ads, paid features, or subscriptions.

## Source Code

Enterlude is open source. You can review exactly how it works here:

[Enterlude GitHub Repository](https://github.com/Maximiliana65/enterlude)

## Changes to This Policy

If this privacy policy changes, this page will be updated to reflect it.

## Contact

If you have any questions, please open an issue on GitHub:

[GitHub Issues](https://github.com/Maximiliana65/enterlude/issues)
