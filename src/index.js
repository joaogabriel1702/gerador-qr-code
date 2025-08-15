import prompt from "prompt";
import promptSchemaMain from "./prompts-schema/prompt-schema-main.js";
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

async function handleSelection(selection) {
  const actions = {
    1: createQRCode,
    2: createPassword,
  };

  const action = actions[selection];
  
  if (action) {
    await action();
  } else {
    console.log("Opção inválida. Tente novamente.");
  }
}

async function main() {
  try {
    prompt.start();

    const { select } = await prompt.get(promptSchemaMain);
    await handleSelection(select);

  } catch (error) {
    console.error("Erro:", error.message || error);
  }
}

main();
