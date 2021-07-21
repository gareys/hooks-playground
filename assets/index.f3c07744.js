var e=Object.defineProperty,t=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(t,l,r)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[l]=r;import{q as a,R as o,L as c,C as i,u as s,g as m,a as p,A as d,I as u,b as h,G as E,B as g,S as x,c as f,d as y}from"./vendor.bdae1a1b.js";const b=()=>o.createElement(o.Fragment,null,o.createElement(w,null,"Hooks Playground",o.createElement(k,null,o.createElement(C,{src:"/hooks-playground/assets/hook.3bb9184a.svg"}))),o.createElement("hr",null),o.createElement("p",null,"Yarrrrr maties. There be many hooks examples in here. Ye be warned."),o.createElement("h2",null,"Examples"),o.createElement(v,null,o.createElement("li",null,o.createElement(c,{to:"/colors"},"Colors")," - GraphQL Colors API w/ pagination"),o.createElement("li",null,o.createElement(c,{to:"/countries"},"Countries")," - Basic async useEffect w/ countries API"),o.createElement("li",null,o.createElement(c,{to:"/states"},"The United States")," - Custom useAsyncHook w/ U.S. API"),o.createElement("li",null,o.createElement(c,{to:"/tictactoe"},"Tic Tac Toe")," - Tic Tac Toe game with useState and canvas"),o.createElement("li",null,o.createElement(c,{to:"/themes"},"Themes")," - Theme switcher with basic contexts"),o.createElement("li",null,o.createElement(c,{to:"/advancedThemes"},"Advanced Themes")," - Theme switcher with advanced contexts"),o.createElement("li",null,o.createElement(c,{to:"/tickerTape"},"Ticker Tape")," - Stock Ticker Tape using useMemo"))),v=a.ul`
  list-style: none;
  li {
    margin: 5px 0;
  }
`,w=a.h1`
  display: flex;
  justify-content: space-between;
`,k=a.div`
  width: 100px;
  display: flex;
  justify-content: center;
`,C=a.img`
  height: 43px;
  width: auto;
  animation: wobble 5s infinite;
  transform: rotate(-45deg);
  transform-origin: bottom right;

  @keyframes wobble {
    from {
      transform: rotate(-45deg);
    }

    50% {
      transform: rotate(90deg);
    }

    to {
      transform: rotate(-45deg);
    }
  }
`,T=e=>o.createElement("img",((e,a)=>{for(var o in a||(a={}))l.call(a,o)&&n(e,o,a[o]);if(t)for(var o of t(a))r.call(a,o)&&n(e,o,a[o]);return e})({onError:e=>{e.currentTarget.src=""}},e)),S=()=>{const[e,t]=i.exports.useState([]);var l,r;return l=async()=>{const e=await fetch("https://api.sampleapis.com/the-states/the-states"),l=await e.json();t(l)},r=[],i.exports.useEffect((()=>{l().catch((e=>{throw console.error(e),e}))}),r),o.createElement($,null,e.map((e=>o.createElement("li",{key:e.id},o.createElement(P,null,o.createElement(A,{src:e.flag,alt:`${e.name}'s flag`}),o.createElement("h2",null,e.name," (",e.abv,")")),o.createElement(F,null,o.createElement("p",null,"Capital: ",e.capital),o.createElement("p",null,"Largest City: ",e.largest_city),o.createElement("p",null,"Population: ",e.population),o.createElement("p",null,"Joined the Union: ",e.admitted_to_union))))))},$=a.ul`
  list-style: none;
`,P=a.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  h2 {
    margin: 0 5px;
  }
`,F=a.div`
  margin-left: calc(2em + 25px);
`,A=a(T)`
  width: 2em;
  margin-right: 20px;
`,I=()=>{const e=s();return o.createElement(j,{onClick:()=>e.goBack()},"Back")},j=a.a`
  cursor: pointer;
`,O=()=>{const[e,t]=i.exports.useState([]),l=e.sort(((e,t)=>e.name<t.name?-1:e.name>t.name?1:0));return i.exports.useEffect((()=>{(async()=>{const e=await fetch("https://api.sampleapis.com/countries/countries"),l=await e.json();t(l)})()}),[]),o.createElement(_,null,l.map((e=>{var t;return o.createElement("li",{key:e.id},o.createElement(L,null,o.createElement(G,null,o.createElement(M,{src:e.media.flag})),o.createElement(B,null,o.createElement("h2",null,e.name),o.createElement(R,null,o.createElement("li",null,o.createElement("strong",null,"Capital:   "),e.capital),o.createElement("li",null,o.createElement("strong",null,"Population:   "),(null==(t=e.population)?void 0:t.toLocaleString())||"N/A"),o.createElement("li",null,o.createElement("strong",null,"Currency:   "),e.currency||"N/A"))),e.media.emblem&&o.createElement(N,null,o.createElement(z,{src:e.media.emblem}))))})))},_=a.ul`
  list-style: none;
  padding-left: 0;
`,L=a.div`
  display: flex;
  padding: 5px 0;
`,G=a.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 150px;

  &:after {
    z-index: -1;
    width: 100px;
    position: relative;
    right: 115px;
    content: 'N/A';
    text-align: center;
  }
`,M=a(T)`
  border: 2px solid #fff;
  width: 200px;
  min-width: 200px;
  min-height: 100px;
  height: auto;
`,N=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  min-height: 100%;
`,z=a(T)`
  max-height: 100px;
`,B=a.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 20px;
  h2 {
    margin: 15px 0;
  }
`,R=a.ul`
  list-style: none;
  padding-left: 0;
`,D=Array(9).fill(""),W={first_row:{cells:[0,1,2],coords:[[10,26],[290,26]]},second_row:{cells:[3,4,5],coords:[[10,76],[290,76]]},third_row:{cells:[6,7,8],coords:[[10,126],[290,126]]},first_column:{cells:[0,3,6],coords:[[50,10],[50,144]]},second_column:{cells:[1,4,7],coords:[[150,10],[150,144]]},third_column:{cells:[2,5,8],coords:[[250,10],[250,144]]},backward_diagonal:{cells:[0,4,8],coords:[[12,6],[290,144]]},forward_diagonal:{cells:[2,4,6],coords:[[12,144],[290,6]]}},X=()=>{const e=i.exports.useRef(null),[t,l]=i.exports.useState(D),[r,n]=i.exports.useState("X"),[a,c]=i.exports.useState();i.exports.useEffect((()=>{const t=e.current;if(a&&t){const e=W[a.location].coords[0],l=W[a.location].coords[1],r=t.getContext("2d");r.strokeStyle="red",r.lineWidth=3,r.beginPath(),r.moveTo(...e),r.lineTo(...l),r.stroke()}}),[a]);const s=(e,t)=>{for(const[l,{cells:r}]of Object.entries(W))if(r.every((l=>e[l]===t)))return{play:t,location:l}},m=!a&&t.every((e=>!!e)),p=!!a||m;return o.createElement(o.Fragment,null,o.createElement("h2",null,"Tic Tac Toe"),o.createElement(H,null,o.createElement("tbody",null,o.createElement("tr",null,t.map(((e,i)=>o.createElement(U,{disabled:!!t[i]||p,onClick:()=>{t[i]||((e,r)=>{if(a)return;const o=[...t.slice(0,e),r,...t.slice(e+1)],i=s(o,r);i&&c(i),l(o),n((e=>"X"===e?"O":"X"))})(i,r)},key:i},e)))))),a&&o.createElement(q,{ref:e}),a&&o.createElement(o.Fragment,null,o.createElement("p",null,"The Winner is ",a.play,"!"),o.createElement("p",null,"They won on the ",a.location.split("_").join(" "),".")),m&&o.createElement("p",null,"It's a Cat's Game! No Winner!"),p&&o.createElement("p",null,o.createElement(Q,{onClick:()=>(n("X"),l(D),void c(void 0))},"Start Over")))},q=a.canvas`
  display: block;
  position: relative;
  top: -126px;
  margin-bottom: -126px;
  height: 126px;
  width: 126px;
`,H=a.table`
  margin-top: 20px;
  border-collapse: collapse;
  width: 128px;
  min-width: 160px;
  display: block;
  user-select: none;
`,U=a.td`
  display: inline-block;
  height: 20px;
  width: 20px;
  padding: 10px;
  border: 1px solid white;
  text-align: center;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
`,Q=a.a`
  cursor: pointer;
`,V=m`
  query GetAllColors($page: Int!, $perPage: Int!) {
    allColors(page: $page, perPage: $perPage) {
      name
      hex
    }
  }
`,Y=()=>{const[e,t]=i.exports.useState(1),{loading:l,error:r,data:n,fetchMore:a}=p(V,{variables:{page:0,perPage:25}});return l?o.createElement("p",null,"Loading..."):r?o.createElement("p",null,"Error :("):o.createElement(J,null,o.createElement("tbody",null,n.allColors.map((({name:e,hex:t})=>o.createElement(K,{key:t,hex:t},o.createElement(ee,null,e)))),e>0&&o.createElement(Z,{key:"NEXT_PAGE",hex:"#FFFFFF",onClick:()=>(a({variables:{page:e,perPage:25},updateQuery:(e,{fetchMoreResult:l})=>l.allColors.length?{allColors:[...e.allColors,...l.allColors]}:(t(0),e)}),void t(e+1))},o.createElement(ee,null,"GET MORE COLORS"))))},J=a.table`
  width: 100%;
`,K=a.tr`
  background-color: ${({hex:e})=>e};
  color: ${({hex:e})=>te(e)};
`,Z=a(K)`
  text-align: center;
  cursor: pointer;
`,ee=a.td`
  padding: 10px;
  font-weight: 500;
`,te=e=>(e=e.replace("#",""),(299*parseInt(e.substr(0,2),16)+587*parseInt(e.substr(2,2),16)+114*parseInt(e.substr(4,2),16))/1e3>=128?"#000000":"#FFFFFF"),le=new d({uri:"https://api.sampleapis.com/css-color-names/graphql",cache:new u}),re=()=>o.createElement(h,{client:le},o.createElement(Y,null)),ne={light:{colors:{background:"WhiteSmoke",primaryColor:"DimGray",secondaryColor:"DarkSlateGray",hover:"LightSlateGray"}},dark:{colors:{background:"DimGray",primaryColor:"WhiteSmoke",secondaryColor:"Azure",hover:"LavenderBlush"}}},ae=()=>{const{theme:e,setTheme:t}=i.exports.useContext(ie);return o.createElement(oe,null,o.createElement("h2",null,"Themes"),o.createElement(ce,{htmlFor:"theme"},"Choose a Theme: "),o.createElement("select",{id:"theme",name:"theme",defaultValue:e,onChange:e=>t(e.currentTarget.value)},o.createElement("option",{value:"light"},"Light"),o.createElement("option",{value:"dark"},"Dark")),"light"===e&&" 🌞","dark"===e&&" 🌚",o.createElement("h3",null,"Sample Paragraph"),o.createElement("p",null,"In this example, the custom theme context lives inside of the parent component, ThemesScene. The implementation is very basic and not as easily reusable as the Advanced Theme Context. However, it gets the job done and provides a basic example of React Context."),o.createElement("h3",null,"Sample Link"),o.createElement("p",null,o.createElement(c,{to:"/advancedThemes"},"See the advanced themes context implementation")))},oe=a.div`
  padding: 0 10px;
  width: calc(100%-10px);
  height: 50vh;
  color: ${e=>e.theme.colors.primaryColor};
  background: ${e=>e.theme.colors.background};

  a {
    color: ${e=>e.theme.colors.secondaryColor};
    &:hover {
      color: ${e=>e.theme.colors.hover};
    }
  }

  select {
    border-color: ${e=>e.theme.colors.secondaryColor};
    color: ${e=>e.theme.colors.primaryColor};
    background: ${e=>e.theme.colors.background};
  }
`,ce=a.label`
  display: block;
`,ie=i.exports.createContext(void 0),se=()=>{const[e,t]=i.exports.useState("light");return o.createElement(ie.Provider,{value:{theme:e,setTheme:t}},o.createElement(E,{theme:ne[e]},o.createElement(ae,null)))},me=i.exports.createContext(void 0),pe=({children:e})=>{const[t,l]=i.exports.useState("light");return o.createElement(me.Provider,{value:{theme:t,setTheme:l}},o.createElement(E,{theme:ne[t]},e))},de=()=>{const{theme:e,setTheme:t}=(()=>{const e=i.exports.useContext(me);if(void 0===e)throw new Error("useAdvancedThemeContext must be used within an AdvancedThemeContextProvider");return e})();return o.createElement(ue,null,o.createElement("h2",null,"Themes"),o.createElement(he,{htmlFor:"theme"},"Choose a Theme: "),o.createElement("select",{id:"theme",name:"theme",defaultValue:e,onChange:e=>t(e.currentTarget.value)},o.createElement("option",{value:"light"},"Light"),o.createElement("option",{value:"dark"},"Dark")),"light"===e&&" 🌞","dark"===e&&" 🌚",o.createElement("h3",null,"Sample Paragraph"),o.createElement("p",null,"In this example, the context of the custom theme provider is wrapped into a separate file with safeguards (helpful error messaging) against usage outside the provider. It requires little to no implementation when utilizing the context within a child other than using the custom useAdvancedThemeContext hook. The advantage of this implementation is ease of use, composability, and reusability of the context as well as the aforementioned safeguard."),o.createElement("h3",null,"Sample Link"),o.createElement("p",null,o.createElement(c,{to:"/themes"},"See the basic themes context implementation")))},ue=a.div`
  padding: 0 10px;
  width: calc(100%-10px);
  height: 50vh;
  color: ${e=>e.theme.colors.primaryColor};
  background: ${e=>e.theme.colors.background};

  a {
    color: ${e=>e.theme.colors.secondaryColor};
    &:hover {
      color: ${e=>e.theme.colors.hover};
    }
  }

  select {
    border-color: ${e=>e.theme.colors.secondaryColor};
    color: ${e=>e.theme.colors.primaryColor};
    background: ${e=>e.theme.colors.background};
  }
`,he=a.label`
  display: block;
`,Ee=()=>o.createElement(pe,null,o.createElement(de,null)),ge=({price:e,size:t,type:l})=>o.createElement(xe,null,o.createElement(fe,null,t),o.createElement(ye,{type:l},e)),xe=a.div`
  display: flex;
  justify-content: space-between;
  animation: fadeIn 1s;
  width: 100%;
  font-family: 'Courier New', Courier, monospace;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,fe=a.div`
  flex: 1;
  text-align: right;
  color: #fff;
  padding-right: 25px;
`,ye=a.span`
  flex: 1;
  text-align: left;
  color: ${({type:e})=>"sell"===e?"rgb(250,103,45)":"rgb(45,175,52)"};
  padding-left: 25px;
`,be=({buyOrders:e,sellOrders:t})=>{const l=i.exports.useMemo((()=>e.map((({id:e,size:t,price:l})=>o.createElement(ge,{key:e,price:l,size:t,type:"buy"})))),[e]),r=i.exports.useMemo((()=>t.map((({id:e,size:t,price:l})=>o.createElement(ge,{key:e,price:l,size:t,type:"sell"})))),[t]);return o.createElement(o.Fragment,null,r,t.length&&e.length&&o.createElement(ve,null),l)},ve=a.hr`
  border-color: #333;
  width: 100%;
`,we=()=>({id:Math.random(),size:(1+Math.random()).toString().slice(0,6),price:(200+2e3*Math.random()).toString().slice(0,8)}),ke=()=>{const[e,t]=i.exports.useState([]),[l,r]=i.exports.useState([]);return o.createElement(Ce,null,o.createElement(Se,null,o.createElement(Te,{onClick:()=>{t((e=>[...e,we()].sort(((e,t)=>Number(t.price)-Number(e.price)))))},orderType:"buy"},"Buy"),o.createElement(Te,{onClick:()=>{r((e=>[...e,we()].sort(((e,t)=>Number(t.price)-Number(e.price)))))},orderType:"sell"},"Sell")),o.createElement(be,{buyOrders:e,sellOrders:l}))},Ce=a.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`,Te=a.button`
  background-color: ${({orderType:e})=>"sell"===e?"#ec551a":"#35b83b"};
  border: none;
  color: #fff;
  width: 250px;
  padding: 10px;
  @media screen and (max-width: 501px) {
    flex: 1;
    width: 100%;
  }
`,Se=a.div`
  margin: 20px 0;
  @media screen and (max-width: 501px) {
    display: flex;
    width: 100%;
  }
`,$e=()=>o.createElement(Pe,null,o.createElement(g,{basename:"/hooks-playground"},o.createElement("div",null,o.createElement("nav",null,o.createElement(c,{to:"/"},"Home")," | ",o.createElement(I,null))),o.createElement(x,null,o.createElement(f,{path:"/colors"},o.createElement(re,null)),o.createElement(f,{path:"/countries"},o.createElement(O,null)),o.createElement(f,{path:"/states"},o.createElement(S,null)),o.createElement(f,{path:"/tictactoe"},o.createElement(X,null)),o.createElement(f,{path:"/themes"},o.createElement(se,null)),o.createElement(f,{path:"/advancedThemes"},o.createElement(Ee,null)),o.createElement(f,{path:"/tickerTape"},o.createElement(ke,null)),o.createElement(f,{path:"/"},o.createElement(b,null))))),Pe=a.div`
  width: 100%;
`;y.render(o.createElement(o.StrictMode,null,o.createElement($e,null)),document.getElementById("root"));
