import{a as p,b as o,o as d,w as l,g as s,e as u,ac as n,m as c,v as g,x as m,C as a}from"./modules/vue-DV80If2y.js";import{I as f}from"./slidev/default-C-8wjl7l.js";import{u as $,f as k}from"./slidev/context-Q5yY4ET9.js";import"./index-B7P-INM1.js";import"./modules/shiki-DMgTzxqj.js";const B={__name:"slides.md__slidev_25",setup(h){const{$clicksContext:r,$frontmatter:t}=$();return r.setup(),(v,e)=>{const i=p("CodeBlockWrapper");return d(),o(f,g(m(a(k)(a(t),24))),{default:l(()=>[e[1]||(e[1]=s("h2",null,"Retrieving an Aggregate in a Controller 🏗️",-1)),u(i,c({},{ranges:[]}),{default:l(()=>e[0]||(e[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"class OrderController")]),n(`
`),s("span",{class:"line"},[s("span",null,"{")]),n(`
`),s("span",{class:"line"},[s("span",null,"    public function show(string $orderId)")]),n(`
`),s("span",{class:"line"},[s("span",null,"    {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        // Retrieve the aggregate from the repository")]),n(`
`),s("span",{class:"line"},[s("span",null,"        $order = OrderAggregate::retrieve($orderId);")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"        return response()->json([")]),n(`
`),s("span",{class:"line"},[s("span",null,"            'order_id' => $orderId,")]),n(`
`),s("span",{class:"line"},[s("span",null,"            'items' => $order->getItemCount(),")]),n(`
`),s("span",{class:"line"},[s("span",null,"        ]);")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"    public function store(string $orderId, string $userId, OrderItems $items)")]),n(`
`),s("span",{class:"line"},[s("span",null,"    {")]),n(`
`),s("span",{class:"line"},[s("span",null,"        $order = OrderAggregate::retrieve($orderId)")]),n(`
`),s("span",{class:"line"},[s("span",null,"                  ->create(")]),n(`
`),s("span",{class:"line"},[s("span",null,"                    $orderId, $userId, $items")]),n(`
`),s("span",{class:"line"},[s("span",null,"                  )")]),n(`
`),s("span",{class:"line"},[s("span",null,"                  ->persist();")]),n(`
`),s("span",{class:"line"},[s("span",null,"    }")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])],-1)])),_:1},16),e[2]||(e[2]=s("br",null,null,-1)),e[3]||(e[3]=n(" Aggregate will fire all events and do the changes after the persist method "))]),_:1},16)}}};export{B as default};
