// Mensagens personalizadas do WhatsApp

export const messages = {
  header:
    'Olá, Isabela! Conheci seu trabalho pelo site e gostaria de saber mais sobre seu atendimento e os planos disponíveis.',

  hero:
    'Olá, Isabela! Quero começar a treinar com você. Gostaria de entender como funciona o acompanhamento personalizado e qual plano seria ideal para meus objetivos.',

  knee:
    'Olá, Isabela! Vi no seu site o acompanhamento com foco em reabilitação de joelho. Gostaria de saber como funcionam os treinos de fortalecimento e controle do movimento, respeitando minhas necessidades.',

  online:
    'Olá, Isabela! Tenho interesse no treino online. Gostaria de saber como funciona a consultoria, o planejamento dos treinos, o acompanhamento e os valores.',

  presencial:
    'Olá, Isabela! Tenho interesse no treino presencial. Gostaria de saber os locais de atendimento, horários disponíveis, como funciona o acompanhamento e os valores.',

  closing:
    'Olá, Isabela! Visitei seu site e quero dar o primeiro passo para começar a treinar. Podemos conversar sobre meus objetivos e as modalidades disponíveis?',
}


// Informações de contato

export const contact = {
  whatsapp: '5581981986959',

  instagram: 'https://www.instagram.com/isabelacarvalho.personal/',

  bio: 'https://bio.site/isabela.personal',

  message: messages.header,
}


// Gerador de links do WhatsApp

export function whatsappLink(message = contact.message) {
  const number = contact.whatsapp.replace(/\D/g, '')

  return /^\d{12,13}$/.test(number)
    ? `https://wa.me/${number}?text=${encodeURIComponent(message)}`
    : ''
}