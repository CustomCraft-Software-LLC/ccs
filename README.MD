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
  - `AppContext.tsx`: Provides global app context for managing application-wide state.
  - `UserContext.tsx`: Manages user-related state and authentication information.

- **Usage:** 
  Import the relevant context and use the provided hooks to manage state within your components.

### custom-components

The `custom-components` package includes a collection of reusable UI components built for flexibility and customization.

- **Components:**
  - `Bar`: A simple bar component that can display status or progress.
  - `Button`: A customizable button with various styles and sizes.
  - `CountdownTimer`: A timer component that counts down from a specified time and triggers events.
  - `DatePicker`: A user-friendly date selection component with calendar view.
  - `FileUpload`: A component that allows users to upload files with drag-and-drop support.
  - `HeroSection`: A prominent section typically used for landing pages or main headers.
  - `Input`: A flexible text input component with validation support.
  - `Modal`: A component for displaying modal dialogs.
  - `Notification`: Displays notifications to the user.
  - `Pagination`: A component for navigating through paginated content.
  - `Profile`: Displays user profile information.
  - `Search`: A search input component with suggestions.
  - `Table`: A customizable table component for displaying data.
  - `Tooltip`: A component that shows additional information on hover.

- **Styles:** 
  Each component includes its own CSS for styling.

- **Usage:** 
  Import the desired component and use it directly in your JSX.

### hooks

The `hooks` package provides custom React hooks to enhance functionality and improve code reuse.

- **Hooks:**
  - `useFetch`: A hook for fetching data from APIs, with loading and error handling.
  - `useToggle`: A hook for managing boolean state, perfect for toggling UI elements.
  - `useDebounce`: A hook for debouncing input values.
  - `useLocalStorage`: A hook for managing local storage state in React.
  - `usePrevious`: A hook that returns the previous value of a state variable.

- **Usage:** 
  Import the hooks and use them in your components for enhanced functionality.

### logging

The `logging` package provides utilities for logging within your applications.

- **Classes:**
  - `Logger`: Class for logging messages with different severity levels (info, warn, error).
  - `Log`: Provides structured log entries to facilitate debugging.

- **Logs:** 
  Example logs are included in the `logs` directory for reference.

- **Usage:** 
  Import the logger and use its methods to log messages in your application.

### mui-components

The `mui-components` package contains Material-UI-based components for modern web applications.

- **Components:**
  - `Animation`: Animated components for enhancing user experience.
  - `Button`: Material-UI styled button with custom functionality.
  - `Card`: A flexible card component for displaying content.
  - `HeroSection`: A Material-UI component for prominent sections.
  - `PricingCard`: Cards displaying pricing options in a visually appealing manner.
  - `Snackbar`: A component for displaying brief notifications.

- **Usage:** 
  These components can be used directly in your Material-UI projects.

### react-native-components

The `react-native-components` package includes components specifically designed for React Native applications.

- **Components:**
  - `Gestures`: Components for handling gestures such as swipes and taps.
  - `KeyboardAwareComponent`: A component that adjusts based on keyboard visibility to prevent input fields from being hidden.
  - `TextInput`: A custom text input component with additional features like validation and styling.
  - `Modal`: A component for displaying modal dialogs tailored for mobile devices.
  - `ScrollView`: Enhanced scroll view with additional features.
  - `StatusBar`: A component to manage the status bar appearance.
  - `Touchable`: Custom touchable components that enhance touch handling.

- **Usage:** 
  Import the components as needed for your React Native applications.

### utils

The `utils` package provides various utility functions to assist in common tasks.

- **Utilities:**
  - `api.ts`: Utility functions for data fetching from APIs.
  - `html.ts`: Functions for HTML manipulation and sanitization.
  - `validation.ts`: Common validation functions for form inputs.
  - `formatters.ts`: Utility functions for formatting dates, numbers, etc.
  - `helpers.ts`: Miscellaneous helper functions for general use.

- **Usage:** 
  Import the necessary utility functions and use them throughout your application.

---

## License

This project is licensed under the Apache License, Version 2.0. You may not use this file except in compliance with the License.