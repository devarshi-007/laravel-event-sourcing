import{a as p,b as o,o as d,w as a,g as s,e as u,ac as n,m as c,v as m,x as f,C as l}from"./modules/vue-DV80If2y.js";import{I as g}from"./slidev/default-C-8wjl7l.js";import{u as k,f as v}from"./slidev/context-Q5yY4ET9.js";import"./index-B7P-INM1.js";import"./modules/shiki-DMgTzxqj.js";const O={__name:"slides.md__slidev_13",setup(b){const{$clicksContext:t,$frontmatter:r}=k();return t.setup(),(x,e)=>{const i=p("CodeBlockWrapper");return d(),o(g,m(f(l(v)(l(r),12))),{default:a(()=>[e[1]||(e[1]=s("p",null,[n("Let us define event in our application. "),s("br"),s("br"),n(" OrderCreated.php")],-1)),u(i,c({},{ranges:[]}),{default:a(()=>e[0]||(e[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"namespace App\\Order\\Events;")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"use Spatie\\EventSourcing\\StoredEvents\\ShouldBeStored;")]),n(`
`),s("span",{class:"line"},[s("span",null,"use App\\Order\\OrderItems;")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"class OrderCreated extends ShouldBeStored")]),n(`
`),s("span",{class:"line"},[s("span",null,"{")]),n(`
`),s("span",{class:"line"},[s("span",null,"  public function __construct(")]),n(`
`),s("span",{class:"line"},[s("span",null,"    public string $orderId,")]),n(`
`),s("span",{class:"line"},[s("span",null,"    public string $userId,")]),n(`
`),s("span",{class:"line"},[s("span",null,"    public OrderItems $items")]),n(`
`),s("span",{class:"line"},[s("span",null,"  ) {")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"  }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])],-1)])),_:1},16),e[2]||(e[2]=s("br",null,null,-1)),e[3]||(e[3]=n(" That's It! ")),e[4]||(e[4]=s("br",null,null,-1)),e[5]||(e[5]=n(" Noticed that ShouldBeStored class we're extending from, it is provided by the event sourcing package. It adds functionality for serializing and deserializing stored events "))]),_:1},16)}}};export{O as default};
