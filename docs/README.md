# Developer Guide

This guide is intended for developers who want to contribute to the project.

## Prerequisites

OtterPlaces is built with [React Native] and [Expo]. To get started, you need to
install the following tools:

- [Node.js](https://nodejs.org/)
- [Expo][expo]

### iOS

To build the app for iOS, you need a Mac with Xcode installed. Follow the
installation instructions on the [Expo] website to set up your development
environment. Select the following settings in the guide:

[https://docs.expo.dev/get-started/set-up-your-environment/](https://docs.expo.dev/get-started/set-up-your-environment/?platform=ios&device=simulated&mode=development-build&buildEnv=local)

- Select `iOS Simulator`
- Select `Development build`
- Disable `Expo Application Services (EAS)`

Follow the instructions to install Xcode and the necessary dependencies to be
able to run `npx expo run:ios`.

## Getting Started

Clone the repository and install the dependencies:

```shell
npm install
```

[expo]: https://expo.dev/
[react native]: https://reactnative.dev/
