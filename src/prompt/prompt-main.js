const mainPrompt = [
    {
        name: "select",
        description: "Escoha a ferramenta (1 - QRCODE ou (2 - PASSSWORD",
        pattern: /^[1-2]+$/,
        message: "Escolha apenas entre 1 e 2",
        required: true
    }
]