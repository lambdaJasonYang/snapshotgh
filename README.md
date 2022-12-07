# Template for bootstrap

## How it was made

```bash
npx create-next-app@latest --ts
npm install bootstrap
```

* in _app.tsx add `import "bootstrap/dist/css/bootstrap.min.css";` and  
`useEffect(() => {require("bootstrap/dist/js/bootstrap.bundle.min.js");}, []);`
* in package.json scripts add `"docs": "typedoc --options typedoc.json",`


tsconfig.json

```json
{
    "$schema": "https://typedoc.org/schema.json",
    "entryPoints": ["./pages/*.tsx"],
    "out": "docs"
}
```
