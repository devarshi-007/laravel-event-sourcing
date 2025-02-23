import{a as p,b as o,o as c,w as a,g as s,e as d,m as u,ac as e,v as m,x as f,C as l}from"./modules/vue-DV80If2y.js";import{I as g}from"./slidev/default-C-8wjl7l.js";import{u as h,f as k}from"./slidev/context-Q5yY4ET9.js";import"./index-B7P-INM1.js";import"./modules/shiki-DMgTzxqj.js";const O={__name:"slides.md__slidev_23",setup($){const{$clicksContext:t,$frontmatter:r}=h();return t.setup(),(_,n)=>{const i=p("CodeBlockWrapper");return c(),o(g,m(f(l(k)(l(r),22))),{default:a(()=>[n[1]||(n[1]=s("h2",null,"Example: Order State Reconstruction 🛒",-1)),d(i,u({},{ranges:[]}),{default:a(()=>n[0]||(n[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"class OrderAggregate extends AggregateRoot")]),e(`
`),s("span",{class:"line"},[s("span",null,"{")]),e(`
`),s("span",{class:"line"},[s("span",null,"    protected int $items = 0;")]),e(`
`),s("span",{class:"line"},[s("span")]),e(`
`),s("span",{class:"line"},[s("span",null,"    // This is responsible for dispatching the event")]),e(`
`),s("span",{class:"line"},[s("span",null,"    public function creaetOrder(string $orderId, string $userId, OrderItems $items)")]),e(`
`),s("span",{class:"line"},[s("span",null,"    {")]),e(`
`),s("span",{class:"line"},[s("span",null,"        $this->recordThat(new OrderCreated($orderId, $userId, $items));")]),e(`
`),s("span",{class:"line"},[s("span",null,"    }")]),e(`
`),s("span",{class:"line"},[s("span")]),e(`
`),s("span",{class:"line"},[s("span",null,"    // This is responsible for state change")]),e(`
`),s("span",{class:"line"},[s("span",null,"    public function applyOrderCreated(OrderCreated $event)")]),e(`
`),s("span",{class:"line"},[s("span",null,"    {")]),e(`
`),s("span",{class:"line"},[s("span",null,"        $this->items = count($event->items);")]),e(`
`),s("span",{class:"line"},[s("span",null,"    }")]),e(`
`),s("span",{class:"line"},[s("span",null,"}")])])],-1)])),_:1},16)]),_:1},16)}}};export{O as default};
