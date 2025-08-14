const promptQRCode = [
    {
        name: "link",
        description: "Digite o link para gerar o QR Code",
    },
    {
        name: "type",
        description: "Escolha entre o tipo de QRCode (1- NORMAL ou (2- TERMINAL",
        pattern: /^[1-2]+$/,
        message: "Escolha apenas entre 1 e 2",
        required: true
    }
];

export default promptQRCode