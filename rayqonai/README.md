# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Contact form setup

The contact form sends inquiries through Web3Forms. Create an access key for the inbox that should receive website inquiries, then put it in `rayqonai/.env.local`:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

Use `.env.example` as the template. Restart the Vite server after adding the key, and add the same variable to the production host's build environment before deploying. The form reports an error instead of claiming a message was sent when the key is missing or the request fails.
