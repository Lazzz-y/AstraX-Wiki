# Getting Started

This is the English version of the getting started guide.

## Installation

```bash
npm install astrax
```

## Basic Usage

```vue
<template>
  <AButton type="primary">Click Me</AButton>
</template>

<script setup>
import { AButton } from 'astrax'
</script>
```

## Configuration

You can customize the theme by setting variables in your CSS:

```css
:root {
  --astrax-primary-color: #3eaf7c;
  --astrax-secondary-color: #304455;
}
``` 