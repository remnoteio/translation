export async function defineConfig(env) {
  const { default: i18nextPlugin } = await env.$import(
    "https://cdn.jsdelivr.net/gh/inlang/plugin-i18next@1/dist/index.js"
  );

  return {
    referenceLanguage: "en",
    plugins: [
      i18nextPlugin({
        pathPattern: "./{language}/*.json",
      })
    ]
  };
}
