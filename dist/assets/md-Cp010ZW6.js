import{a as i,b as p,o as u,w as l,g as e,e as d,ac as s,m as c,v as m,x as f,C as a}from"./modules/vue-DV80If2y.js";import{I as g}from"./slidev/default-C-8wjl7l.js";import{u as k,f as v}from"./slidev/context-Q5yY4ET9.js";import"./index-B7P-INM1.js";import"./modules/shiki-DMgTzxqj.js";const w={__name:"slides.md__slidev_17",setup(x){const{$clicksContext:t,$frontmatter:r}=k();return t.setup(),(C,n)=>{const o=i("CodeBlockWrapper");return u(),p(g,m(f(a(v)(a(r),16))),{default:l(()=>[n[1]||(n[1]=e("h2",null,"Event Sourcing to the Rescue! 🎯",-1)),n[2]||(n[2]=e("br",null,null,-1)),n[3]||(n[3]=e("ul",null,[e("li",null,[s("No worries! We can "),e("strong",null,"extend our projector"),s(" and "),e("strong",null,"replay events"),s(" to regenerate correct data.")])],-1)),d(o,c({},{ranges:[]}),{default:l(()=>n[0]||(n[0]=[e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[e("code",{class:"language-text"},[e("span",{class:"line"},[e("span",null,"class OrderProjector extends Projector")]),s(`
`),e("span",{class:"line"},[e("span",null,"{")]),s(`
`),e("span",{class:"line"},[e("span",null,"    public function onOrderCreated(OrderCreated $event)")]),s(`
`),e("span",{class:"line"},[e("span",null,"    {")]),s(`
`),e("span",{class:"line"},[e("span",null,"        (new Order)->writeable()->create([")]),s(`
`),e("span",{class:"line"},[e("span",null,"            'id' => $event->orderId,")]),s(`
`),e("span",{class:"line"},[e("span",null,"            'user_id' => $event->userId,")]),s(`
`),e("span",{class:"line"},[e("span",null,"            'items' => $event->items,")]),s(`
`),e("span",{class:"line"},[e("span",null,"            'premium' => count($event->items) > 5,")]),s(`
`),e("span",{class:"line"},[e("span",null,"        ]);")]),s(`
`),e("span",{class:"line"},[e("span",null,"    }")]),s(`
`),e("span",{class:"line"},[e("span",null,"}")])])],-1)])),_:1},16)]),_:1},16)}}};export{w as default};
