// Preencha somente com números, incluindo 55 + DDD + telefone.
// Exemplo de formato (não é um número real): 55DDXXXXXXXXX.
export const contact = {
  whatsapp: '',
  instagram: 'https://www.instagram.com/isabelacarvalho.personal/',
  bio: 'https://bio.site/isabela.personal',
  message: 'Olá, Isabela! Gostaria de saber mais sobre os seus treinos personalizados.',
}
export function whatsappLink(message = contact.message) {
  const number = contact.whatsapp.replace(/\D/g, '')
  return /^\d{12,13}$/.test(number) ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : ''
}
