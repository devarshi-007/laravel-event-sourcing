import{a as i,b as o,o as c,w as a,e as d,m as u,g as s,ac as n,v as m,x as f,C as l}from"./modules/vue-DV80If2y.js";import{I as k}from"./slidev/default-C-8wjl7l.js";import{u as _,f as v}from"./slidev/context-Q5yY4ET9.js";import"./index-B7P-INM1.js";import"./modules/shiki-DMgTzxqj.js";const P={__name:"slides.md__slidev_29",setup(C){const{$clicksContext:r,$frontmatter:t}=_();return r.setup(),($,e)=>{const p=i("CodeBlockWrapper");return c(),o(k,m(f(l(v)(l(t),28))),{default:a(()=>[d(p,u({},{ranges:[]}),{default:a(()=>e[0]||(e[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"class OrderProjector extends Projector")]),n(`
`),s("span",{class:"line"},[s("span",null,"{")]),n(`
`),s("span",{class:"line"},[s("span",null,"    public function onOrderCreated(OrderCreated $event)")]),n(`
`),s("span",{class:"line"},[s("span",null,"    {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      (new Order)->writeable()->create([")]),n(`
`),s("span",{class:"line"},[s("span",null,"        'id' => $event->$orderId,")]),n(`
`),s("span",{class:"line"},[s("span",null,"        'user_id' => $event->$userId,")]),n(`
`),s("span",{class:"line"},[s("span",null,"        'items' => $event->$items,")]),n(`
`),s("span",{class:"line"},[s("span",null,"      ]);")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"class OrderReactor extends Reactor")]),n(`
`),s("span",{class:"line"},[s("span",null,"{")]),n(`
`),s("span",{class:"line"},[s("span",null,"    public function onOrderCreated(OrderCreated $event)")]),n(`
`),s("span",{class:"line"},[s("span",null,"    {")]),n(`
`),s("span",{class:"line"},[s("span",null,"      Mail::send(")]),n(`
`),s("span",{class:"line"},[s("span",null,"        new OrderConfirmation($event->$userId)")]),n(`
`),s("span",{class:"line"},[s("span",null,"      );")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])],-1)])),_:1},16)]),_:1},16)}}};export{P as default};
