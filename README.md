# Athena Plugin Example

A simple plugin that does nothing but logs to console.

## Where to install this template?

From the root directory of Athena, install it in the following path:

`src/core/plugins/example-plugin`

## disable.plugin

Removing the `disable.plugin` file **will enable this plugin template**.

## package.json

Only add `dependencies` and `devDependencies` to your package.json

Athena will automatically install those dependencies during runtime if `disable.plugin` is not present in the plugin folder.