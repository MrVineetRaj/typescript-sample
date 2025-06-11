- make tsconfig.json

```bash
tsc --init
```

- for type of nodes

```bash
npm install --save-dev @types/node
```

- other required packages
```bash
npm i ts-node -g
npm i nodemon prettier typescript ts-node @types/node -D
```

- to configure ts
```json
rootDir:"./src",
outDir:"./dist",
```

and in [`package.json`](./package.json) 
```json
  "scripts": {
    "build": "tsc -p .",
    "start": "node dist/index.js",
    "dev": "nodemon --exec ts-node src/index.ts",
    "format": "prettier --write \"**/*.{json,md,ts}\""
  },
```

