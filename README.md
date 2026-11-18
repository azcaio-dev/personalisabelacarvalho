# Isabela Carvalho — Personal Trainer

Landing page em React + Vite, inspirada nos protótipos desktop e mobile.

## Rodar no VS Code

Pré-requisito: Node.js 22 ou superior.

```bash
npm install
npm run dev
```

Abra o endereço que o Vite indicar (normalmente http://localhost:5173).

## Personalizar

- `src/config.js`: número do WhatsApp (55 + DDD + telefone), Instagram e links de contato. Sem número configurado, os CTAs abrem um modal com o Instagram e o link da bio, em vez de direcionar para um telefone fictício.
- `src/App.jsx`: textos, componentes, ícones e seções.
- `src/styles.css`: cores, tipografia, layout e responsividade.
- `public/images/`: imagens WebP. Retratos, símbolo e antes/depois foram recortados dos prints originais; as imagens decorativas vêm do protótipo. Substitua pelos arquivos originais em alta resolução, mantendo os nomes, se disponíveis.

Os textos de apresentação são sugestões editoriais baseadas nos prints. Confirme os serviços, textos e a autorização de uso das imagens de alunos antes de publicar. Não foram inventados depoimentos, números de registro profissional ou credenciais.

## Produção

```bash
npm run build
npm run preview
```

A pasta `dist/` gerada é o conteúdo de publicação estática. Não é necessário backend.

## Validação

A instalação das dependências não pôde ser concluída neste ambiente por indisponibilidade da rede do npm. O JSX e a interface podem ser verificados localmente após a instalação.
