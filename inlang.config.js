export async function defineConfig(env) {
  const { default: i18nextPlugin } = await env.$import(
		"https://cdn.jsdelivr.net/npm/@inlang/plugin-i18next/dist/index.js",
  );

  const { default: standardLintRules } = await env.$import(
    "https://cdn.jsdelivr.net/npm/@inlang/plugin-standard-lint-rules/dist/index.js",
  );

  return {
    referenceLanguage: "en",
    
    plugins: [
      i18nextPlugin({
        pathPattern: "./{language}/*.json",
      }),
      standardLintRules()
    ]
  };
}
