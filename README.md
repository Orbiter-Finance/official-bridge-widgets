# Orbiter Official Bridge Widget

This repository contains the orbiter official bridge widgets code.

You can customize the theme (colors, fonts, and more) to match the style of your application.

## Installation

Install the widgets library via `yarn` or `pnpm`.

```bash
yarn add https://github.com/Orbiter-Finance/official-bridge-widgets.git#main
```

```bash
pnpm i --save https://github.com/Orbiter-Finance/official-bridge-widgets.git#main
```

## Usage

### React environment

```tsx
import { Bridge } from 'official-bridge-widgets'
import 'official-bridge-widgets/lib/index.css'

function App() {
  return (
    <div className='mt-10 mx-auto w-fit'>
      <Bridge config={{ projectId: 'a9b8c7d6-e5f4-3210-9876-5432dcba0231', theme: 'dark' }} />
    </div>
  )
}

export default App
```

## Config

| Key           | Type                  | Default                 |
| --------------| ----------------------| ------------------------|
| projectId     | `string`              | -                       |
| theme         | `light` or `dark`     | dark                    |
| locale        | `en-US` or `zh-CN'`   | en-US                   |
| network       | `testnet` or `mainnet`| testnet                 |

## Example

To start the example:

```bash
git clone https://github.com/Orbiter-Finance/official-bridge-widgets.git # clone

yarn          # install dependencies
cd ./example
yarn dev    # run the development server
# or
pnpm i           # install dependencies
cd ./example
pnpm run dev # run the development server
```
