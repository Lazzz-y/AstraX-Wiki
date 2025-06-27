# Button

The Button component is used to trigger an action or event.

## Basic Usage

```vue
<template>
  <AButton>Default Button</AButton>
  <AButton type="primary">Primary Button</AButton>
  <AButton type="success">Success Button</AButton>
  <AButton type="warning">Warning Button</AButton>
  <AButton type="danger">Danger Button</AButton>
</template>
```

## Button Sizes

```vue
<template>
  <AButton size="small">Small Button</AButton>
  <AButton>Default Button</AButton>
  <AButton size="large">Large Button</AButton>
</template>
```

## Disabled State

```vue
<template>
  <AButton disabled>Disabled Button</AButton>
  <AButton type="primary" disabled>Disabled Primary</AButton>
</template>
```

## API Reference

### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| type | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger'` | `'default'` | Button type |
| size | `'small' \| 'default' \| 'large'` | `'default'` | Button size |
| disabled | `boolean` | `false` | Whether the button is disabled |
| loading | `boolean` | `false` | Whether the button is in loading state |
| icon | `string` | - | Icon name to display |

### Events

| Name | Parameters | Description |
| ---- | ---------- | ----------- |
| click | `(event: MouseEvent)` | Triggered when button is clicked | 