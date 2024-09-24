import{j as e,r as n,c as h,R as v}from"./client-CZ7ZPx7S.js";import{P as r}from"./index-BpeC_pSg.js";function d({question:a,handleAnswer:s}){return e.jsxs("div",{className:"question-container",children:[e.jsx("h2",{children:a.question}),e.jsx("div",{className:"options",children:a.options.map((o,t)=>e.jsx("button",{onClick:()=>s(o),children:o},t))})]})}d.propTypes={question:r.object.isRequired,handleAnswer:r.func.isRequired};function m({score:a,total:s}){return e.jsxs("div",{className:"result-container",children:[e.jsx("h2",{children:"Quiz Terminado!"}),e.jsxs("p",{children:["Sua pontuação é ",a," de ",s]})]})}m.propTypes={score:r.number.isRequired,total:r.number.isRequired};const i=[{question:"O que é Responsividade?",options:["Capacidade de um site se ajustar a diferentes tamanhos de tela","Capacidade de um site de carregar rápido","Capacidade de um site funcionar offline","Capacidade de um site ser acessado em qualquer navegador"],answer:"Capacidade de um site se ajustar a diferentes tamanhos de tela"},{question:"Qual é o principal benefício da responsividade?",options:["Melhorar a experiência do usuário","Aumentar a velocidade de carregamento","Facilitar a manutenção do site","Aumentar a segurança do site"],answer:"Melhorar a experiência do usuário"},{question:"Qual é a melhor prática para tornar um site responsivo?",options:["Usar muitas imagens pesadas","Usar media queries no CSS","Usar muitos plugins e scripts externos","Usar tabelas para layout"],answer:"Usar media queries no CSS"},{question:"Qual é a importância da responsividade em dispositivos móveis?",options:["Aumentar a segurança dos dispositivos","Facilitar a navegação em dispositivos móveis","Melhorar a experiência do usuário em smartphones e tablets","Aumentar a velocidade de carregamento em dispositivos móveis"],answer:"Melhorar a experiência do usuário em smartphones e tablets"},{question:"O que é um design responsivo?",options:["Um design que se ajusta a diferentes tamanhos de tela","Um design que carrega rápido","Um design que funciona offline","Um design que é acessível em qualquer navegador"],answer:"Um design que se ajusta a diferentes tamanhos de tela"},{question:"Por que é importante ter um site responsivo?",options:["Para aumentar a segurança do site","Para melhorar a experiência do usuário","Para facilitar a manutenção do site","Para aumentar a velocidade de carregamento"],answer:"Para melhorar a experiência do usuário"},{question:"O que são media queries?",options:["São consultas ao banco de dados","São consultas ao servidor","São consultas ao CSS","São consultas ao HTML"],answer:"São consultas ao CSS"},{question:"Qual é a vantagem de usar media queries?",options:["Permitir a criação de sites mais lentos","Permitir a criação de sites mais pesados","Permitir a criação de sites responsivos","Permitir a criação de sites estáticos"],answer:"Permitir a criação de sites responsivos"},{question:"O que é um layout responsivo?",options:["Um layout que se ajusta a diferentes tamanhos de tela","Um layout que carrega rápido","Um layout que funciona offline","Um layout que é acessível em qualquer navegador"],answer:"Um layout que se ajusta a diferentes tamanhos de tela"},{question:"Por que é importante ter um layout responsivo?",options:["Para aumentar a segurança do site","Para melhorar a experiência do usuário","Para facilitar a manutenção do site","Para aumentar a velocidade de carregamento"],answer:"Para melhorar a experiência do usuário"}];function f(){const[a,s]=n.useState(0),[o,t]=n.useState(0),[c,l]=n.useState(!1),p=q=>{q===i[a].answer&&t(o+1);const u=a+1;u<i.length?s(u):l(!0)};return e.jsx("div",{className:"app",children:c?e.jsx(m,{score:o,total:i.length}):e.jsx(d,{question:i[a],handleAnswer:p})})}h.createRoot(document.getElementById("root")).render(e.jsx(v.StrictMode,{children:e.jsx(f,{})}));
