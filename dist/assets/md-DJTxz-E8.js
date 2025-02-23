import{a as i,b as p,o as d,w as a,g as e,e as c,ac as s,m as u,v as m,x as f,C as l}from"./modules/vue-DV80If2y.js";import{I as h}from"./slidev/default-C-8wjl7l.js";import{u as k,f as v}from"./slidev/context-Q5yY4ET9.js";import"./index-B7P-INM1.js";import"./modules/shiki-DMgTzxqj.js";const $={__name:"slides.md__slidev_15",setup(b){const{$clicksContext:t,$frontmatter:r}=k();return t.setup(),(g,n)=>{const o=i("CodeBlockWrapper");return d(),p(h,m(f(l(v)(l(r),14))),{default:a(()=>[n[1]||(n[1]=e("h1",null,"6. Projectors",-1)),n[2]||(n[2]=e("ul",null,[e("li",null,"The Projector class is responsible for handling projections."),e("li",null,"It listens to events and performs operations based on the event’s data."),e("li",null,"Since we cannot directly update the database, we use writeable() to modify the schema."),e("li",null,[s("For example, when an OrderCreated event occurs, the Projector writes order details to the database. "),e("br"),e("br")])],-1)),c(o,u({},{ranges:[]}),{default:a(()=>n[0]||(n[0]=[e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[e("code",{class:"language-text"},[e("span",{class:"line"},[e("span",null,"class OrderProjector extends Projector")]),s(`
`),e("span",{class:"line"},[e("span",null,"{")]),s(`
`),e("span",{class:"line"},[e("span",null,"    public function onOrderCreated(OrderCreated $event)")]),s(`
`),e("span",{class:"line"},[e("span",null,"    {")]),s(`
`),e("span",{class:"line"},[e("span",null,"      (new Order)->writeable()->create([")]),s(`
`),e("span",{class:"line"},[e("span",null,"        'id' => $event->$orderId,")]),s(`
`),e("span",{class:"line"},[e("span",null,"        'user_id' => $event->$userId,")]),s(`
`),e("span",{class:"line"},[e("span",null,"        'items' => $event->$items,")]),s(`
`),e("span",{class:"line"},[e("span",null,"      ]);")]),s(`
`),e("span",{class:"line"},[e("span",null,"    }")]),s(`
`),e("span",{class:"line"},[e("span",null,"}")])])],-1)])),_:1},16)]),_:1},16)}}};export{$ as default};
