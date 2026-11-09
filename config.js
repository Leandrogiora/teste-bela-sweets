/* Bela Sweets: dados da loja e dos produtos. Edite só este arquivo para mudar preços, textos, WhatsApp ou a planilha. */
/* ====== EDITE AQUI: dados da loja e dos doces ====== */
const LOJA = {
  nome: "Bela Sweets",
  frase: "Panetones artesanais recheados, feitos por encomenda para o seu Natal.",
  aviso: "Encomendas com 1 dia de antecedência",
  whats: "5511998550446", /* DDI + DDD + número, só dígitos */
  planilha: "https://script.google.com/macros/s/AKfycbyp00AHGCGhNeklYKDKYLEn0jvEqsoDox4Vo9sU57mBqtOxbxZyMBuG-aPgsj0eL3VR/exec" /* endereço (termina em /exec) do Google Apps Script que grava os pedidos na planilha */
};
/* cor e cor2 desenham o doce quando não há foto. "foto" aceita uma imagem embutida (data URI). */
const PRODUTOS = [
  { id: "pan-ninho", cat: "Panetones", tipo: "bola", nome: "Panetone Ninho com Nutella", unid: "unidade", preco: 89.9,
    desc: "Massa macia recheada com creme de Ninho e Nutella, finalizado com fios de chocolate.",
    foto: "foto-ninho.jpg",
    sabores: [ { nome: "", cor: "#E8C27A", cor2: "#5B2E1F" } ] },
  { id: "pan-crunch", cat: "Panetones", tipo: "bola", nome: "Panetone Chocolate Crunch", unid: "unidade", preco: 89.9,
    desc: "Massa macia com recheio de chocolate e cobertura crocante de chocolate crunch.",
    foto: "foto-crunch.jpg",
    sabores: [ { nome: "", cor: "#8A5230", cor2: "#5B2E1F" } ] }
];
/* ====== fim da área de edição ====== */
