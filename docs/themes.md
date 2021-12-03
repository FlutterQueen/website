---
title: themes
sidebar_position: 3
---

# Get Started

queen support multiple themes out of the box in just 3 lines of code

# Pros

- zero configuration
- persist the last theme and loads it on startup automatically
- rebuild the app on theme changes

# Config

- inside config folder create theme file `theme.dart`
- extend `QThemeConfig`
- create your own themes list

# booting

in your main function before `runApp` call `QTheme.boot(config)` and pass your config
now your app support multiple themes

# switching between themes

- to switch to the next theme call `QTheme.next()`
- to switch to specific theme by index call `QTheme.updateTo(int)` and pass the index
- to get the current theme call `QTheme.current`
- to get the current index call `QTheme.currentIndex`
