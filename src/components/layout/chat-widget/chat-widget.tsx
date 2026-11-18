import Script from "next/script";

// Chat da Hi Platform (dtbot). Mesmo loader que o site atual injeta pelo Google
// Tag Manager no window.onload: o dtbot.js cria e dimensiona o iframe, então o
// tamanho, o z-index e as cores vêm do widget e ficam fora dos tokens do site
// de propósito. O token é público (identifica o bot no navegador).
const CHAT_SRC =
  "https://cdn-bot.hiplatform.com/dtbot.js?token=0f341fb1-e1b8-4703-b02d-556fefdd1029" +
  "&widget=true&tab=true&from=bottomright&widgetType=circle" +
  "&text=Posso%20te%20ajudar%3F&textcolor=ffffff&bgcolor=eb8125";

export function ChatWidget() {
  return <Script id="dtbot-script" src={CHAT_SRC} strategy="lazyOnload" />;
}
