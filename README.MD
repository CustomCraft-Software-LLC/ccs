# CustomCraft Software LLC

## Overview

This repository contains various packages designed for React and React Native applications. Each package serves a specific purpose and is organized to facilitate modular development and ease of use.

## Table of Contents

- [CustomCraft Software LLC](#customcraft-software-llc)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Packages](#packages)
    - [contexts](#contexts)
    - [custom-components](#custom-components)
    - [hooks](#hooks)
    - [logging](#logging)
    - [mui-components](#mui-components)
    - [react-native-components](#react-native-components)
    - [utils](#utils)
  - [License](#license)

---

## Packages

### contexts

The `contexts` package provides context management solutions using React's Context API.

- **Components:**
  - `AppContext.tsx`: Provides global app context.
  - `UserContext.tsx`: Manages user-related state.
  
- **Usage:** 
  Import the relevant context and use the provided hooks to manage state within your components.

### custom-components

The `custom-components` package includes a collection of reusable UI components built for flexibility and customization.

- **Components:**
  - `Bar`: A simple bar component.
  - `Button`: A customizable button with various styles.
  - `CountdownTimer`: A timer component that counts down from a specified time.
  - `DatePicker`: A date selection component.
  - `FileUpload`: Allows users to upload files.
  - Additional components like `Profile`, `Search`, `Table`, etc.

- **Styles:** 
  Each component includes its own CSS for styling.

- **Usage:** 
  Import the desired component and use it directly in your JSX.

### hooks

The `hooks` package provides custom React hooks to enhance functionality and improve code reuse.

- **Hooks:**
  - `useFetch`: A hook for fetching data from APIs.
  - `useToggle`: A hook for managing boolean state.

- **Usage:** 
  Import the hooks and use them in your components for enhanced functionality.

### logging

The `logging` package provides utilities for logging within your applications.

- **Classes:**
  - `Logger`: Class for logging messages with different severity levels.
  - `Log`: Provides structured log entries.

- **Logs:** 
  Example logs are included in the `logs` directory for reference.

- **Usage:** 
  Import the logger and use its methods to log messages in your application.

### mui-components

The `mui-components` package contains Material-UI-based components for modern web applications.

- **Components:**
  - `Animation`: Animated components for enhancing UX.
  - `HeroSection`: A prominent section for landing pages.
  - `PricingCard`: Cards displaying pricing options.

- **Usage:** 
  These components can be used directly in your Material-UI projects.

### react-native-components

The `react-native-components` package includes components specifically designed for React Native applications.

- **Components:**
  - `Gestures`: Components for handling gestures.
  - `KeyboardAwareComponent`: A component that adjusts based on keyboard visibility.
  - `TextInput`: Custom text input component.

- **Usage:** 
  Import the components as needed for your React Native applications.

### utils

The `utils` package provides various utility functions to assist in common tasks.

- **Utilities:**
  - `api.ts`: API utility functions for data fetching.
  - `html.ts`: Functions for HTML manipulation.

- **Usage:** 
  Import the necessary utility functions and use them throughout your application.

---

## License

This project is licensed under the Apache License, Version 2.0. You may not use this file except in compliance with the License.