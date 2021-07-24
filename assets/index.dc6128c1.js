var e=Object.defineProperty,t=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(t,l,r)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[l]=r;import{q as a,R as o,L as c,C as i,u as m,g as s,a as d,A as u,I as p,b as h,G as E,B as g,S as x,c as f,d as y}from"./vendor.bdae1a1b.js";const b=()=>o.createElement(o.Fragment,null,o.createElement(w,null,"Hooks Playground",o.createElement(k,null,o.createElement(C,{src:"/hooks-playground/assets/hook.3bb9184a.svg"}))),o.createElement("hr",null),o.createElement("p",null,"Yarrrrr maties. There be many hooks examples in here. Ye be warned."),o.createElement("h2",null,"Examples"),o.createElement(v,null,o.createElement("li",null,o.createElement(c,{to:"/colors"},"Colors")," - GraphQL Colors API w/ pagination"),o.createElement("li",null,o.createElement(c,{to:"/countries"},"Countries")," - Basic async useEffect w/ countries API"),o.createElement("li",null,o.createElement(c,{to:"/states"},"The United States")," - Custom useAsyncHook w/ U.S. API"),o.createElement("li",null,o.createElement(c,{to:"/tictactoe"},"Tic Tac Toe")," - Tic Tac Toe game with useState and canvas"),o.createElement("li",null,o.createElement(c,{to:"/themes"},"Themes")," - Theme switcher with basic contexts"),o.createElement("li",null,o.createElement(c,{to:"/advancedThemes"},"Advanced Themes")," - Theme switcher with advanced contexts"),o.createElement("li",null,o.createElement(c,{to:"/orderTape"},"Order Tape")," - Fast Food Order Tape using useMemo"))),v=a.ul`
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
`,T=e=>o.createElement("img",((e,a)=>{for(var o in a||(a={}))l.call(a,o)&&n(e,o,a[o]);if(t)for(var o of t(a))r.call(a,o)&&n(e,o,a[o]);return e})({onError:e=>{e.currentTarget.src=""}},e)),S=()=>{const[e,t]=i.exports.useState([]);var l,r;return l=async()=>{const e=await fetch("https://api.sampleapis.com/the-states/the-states"),l=await e.json();t(l)},r=[],i.exports.useEffect((()=>{l().catch((e=>{throw console.error(e),e}))}),r),o.createElement(O,null,e.map((e=>o.createElement("li",{key:e.id},o.createElement($,null,o.createElement(P,{src:e.flag,alt:`${e.name}'s flag`}),o.createElement("h2",null,e.name," (",e.abv,")")),o.createElement(F,null,o.createElement("p",null,"Capital: ",e.capital),o.createElement("p",null,"Largest City: ",e.largest_city),o.createElement("p",null,"Population: ",e.population),o.createElement("p",null,"Joined the Union: ",e.admitted_to_union))))))},O=a.ul`
  list-style: none;
`,$=a.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  h2 {
    margin: 0 5px;
  }
`,F=a.div`
  margin-left: calc(2em + 25px);
`,P=a(T)`
  width: 2em;
  margin-right: 20px;
`,I=()=>{const e=m();return o.createElement(A,{onClick:()=>e.goBack()},"Back")},A=a.a`
  cursor: pointer;
`,j=()=>{const[e,t]=i.exports.useState([]),l=e.sort(((e,t)=>e.name<t.name?-1:e.name>t.name?1:0));return i.exports.useEffect((()=>{(async()=>{const e=await fetch("https://api.sampleapis.com/countries/countries"),l=await e.json();t(l)})()}),[]),o.createElement(N,null,l.map((e=>{var t;return o.createElement("li",{key:e.id},o.createElement(_,null,o.createElement(L,null,o.createElement(G,{src:e.media.flag})),o.createElement(B,null,o.createElement("h2",null,e.name),o.createElement(R,null,o.createElement("li",null,o.createElement("strong",null,"Capital:   "),e.capital),o.createElement("li",null,o.createElement("strong",null,"Population:   "),(null==(t=e.population)?void 0:t.toLocaleString())||"N/A"),o.createElement("li",null,o.createElement("strong",null,"Currency:   "),e.currency||"N/A"))),e.media.emblem&&o.createElement(M,null,o.createElement(H,{src:e.media.emblem}))))})))},N=a.ul`
  list-style: none;
  padding-left: 0;
`,_=a.div`
  display: flex;
  padding: 5px 0;
`,L=a.div`
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
`,G=a(T)`
  border: 2px solid #fff;
  width: 200px;
  min-width: 200px;
  min-height: 100px;
  height: auto;
`,M=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  min-height: 100%;
`,H=a(T)`
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
`,D=Array(9).fill(""),W={first_row:{cells:[0,1,2],coords:[[10,26],[290,26]]},second_row:{cells:[3,4,5],coords:[[10,76],[290,76]]},third_row:{cells:[6,7,8],coords:[[10,126],[290,126]]},first_column:{cells:[0,3,6],coords:[[50,10],[50,144]]},second_column:{cells:[1,4,7],coords:[[150,10],[150,144]]},third_column:{cells:[2,5,8],coords:[[250,10],[250,144]]},backward_diagonal:{cells:[0,4,8],coords:[[12,6],[290,144]]},forward_diagonal:{cells:[2,4,6],coords:[[12,144],[290,6]]}},X=()=>{const e=i.exports.useRef(null),[t,l]=i.exports.useState(D),[r,n]=i.exports.useState("X"),[a,c]=i.exports.useState();i.exports.useEffect((()=>{const t=e.current;if(a&&t){const e=W[a.location].coords[0],l=W[a.location].coords[1],r=t.getContext("2d");r.strokeStyle="red",r.lineWidth=3,r.beginPath(),r.moveTo(...e),r.lineTo(...l),r.stroke()}}),[a]);const m=(e,t)=>{for(const[l,{cells:r}]of Object.entries(W))if(r.every((l=>e[l]===t)))return{play:t,location:l}},s=!a&&t.every((e=>!!e)),d=!!a||s;return o.createElement(o.Fragment,null,o.createElement("h2",null,"Tic Tac Toe"),o.createElement(z,null,o.createElement("tbody",null,o.createElement("tr",null,t.map(((e,i)=>o.createElement(U,{disabled:!!t[i]||d,onClick:()=>{t[i]||((e,r)=>{if(a)return;const o=[...t.slice(0,e),r,...t.slice(e+1)],i=m(o,r);i&&c(i),l(o),n((e=>"X"===e?"O":"X"))})(i,r)},key:i},e)))))),a&&o.createElement(o.Fragment,null,o.createElement(q,{ref:e}),o.createElement("p",null,"The Winner is ",a.play,"!"),o.createElement("p",null,"They won on the ",a.location.split("_").join(" "),".")),s&&o.createElement("p",null,"It's a Cat's Game! No Winner!"),d&&o.createElement("p",null,o.createElement(Q,{onClick:()=>(n("X"),l(D),void c(void 0))},"Start Over")))},q=a.canvas`
  display: block;
  position: relative;
  top: -126px;
  margin-bottom: -126px;
  height: 126px;
  width: 126px;
`,z=a.table`
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
`,V=s`
  query GetAllColors($page: Int!, $perPage: Int!) {
    allColors(page: $page, perPage: $perPage) {
      name
      hex
    }
  }
`,Y=()=>{const[e,t]=i.exports.useState(1),{loading:l,error:r,data:n,fetchMore:a}=d(V,{variables:{page:0,perPage:25}});return l?o.createElement("p",null,"Loading..."):r?o.createElement("p",null,"Error :("):o.createElement(J,null,o.createElement("tbody",null,n.allColors.map((({name:e,hex:t})=>o.createElement(K,{key:t,hex:t},o.createElement(ee,null,e)))),e>0&&o.createElement(Z,{key:"NEXT_PAGE",hex:"#FFFFFF",onClick:()=>(a({variables:{page:e,perPage:25},updateQuery:(e,{fetchMoreResult:l})=>l.allColors.length?{allColors:[...e.allColors,...l.allColors]}:(t(0),e)}),void t(e+1))},o.createElement(ee,null,"GET MORE COLORS"))))},J=a.table`
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
`,te=e=>(e=e.replace("#",""),(299*parseInt(e.substr(0,2),16)+587*parseInt(e.substr(2,2),16)+114*parseInt(e.substr(4,2),16))/1e3>=128?"#000000":"#FFFFFF"),le=new u({uri:"https://api.sampleapis.com/css-color-names/graphql",cache:new p}),re=()=>o.createElement(h,{client:le},o.createElement(Y,null)),ne={light:{colors:{background:"WhiteSmoke",primaryColor:"DimGray",secondaryColor:"DarkSlateGray",hover:"LightSlateGray"}},dark:{colors:{background:"DimGray",primaryColor:"WhiteSmoke",secondaryColor:"Azure",hover:"LavenderBlush"}}},ae=()=>{const{theme:e,setTheme:t}=i.exports.useContext(ie);return o.createElement(oe,null,o.createElement("h2",null,"Themes"),o.createElement(ce,{htmlFor:"theme"},"Choose a Theme: "),o.createElement("select",{id:"theme",name:"theme",defaultValue:e,onChange:e=>t(e.currentTarget.value)},o.createElement("option",{value:"light"},"Light"),o.createElement("option",{value:"dark"},"Dark")),"light"===e&&" 🌞","dark"===e&&" 🌚",o.createElement("h3",null,"Sample Paragraph"),o.createElement("p",null,"In this example, the custom theme context lives inside of the parent component, ThemesScene. The implementation is very basic and not as easily reusable as the Advanced Theme Context. However, it gets the job done and provides a basic example of React Context."),o.createElement("h3",null,"Sample Link"),o.createElement("p",null,o.createElement(c,{to:"/advancedThemes"},"See the advanced themes context implementation")))},oe=a.div`
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
`,ie=i.exports.createContext(void 0),me=()=>{const[e,t]=i.exports.useState("light");return o.createElement(ie.Provider,{value:{theme:e,setTheme:t}},o.createElement(E,{theme:ne[e]},o.createElement(ae,null)))},se=i.exports.createContext(void 0),de=({children:e})=>{const[t,l]=i.exports.useState("light");return o.createElement(se.Provider,{value:{theme:t,setTheme:l}},o.createElement(E,{theme:ne[t]},e))},ue=()=>{const{theme:e,setTheme:t}=(()=>{const e=i.exports.useContext(se);if(void 0===e)throw new Error("useAdvancedThemeContext must be used within an AdvancedThemeContextProvider");return e})();return o.createElement(pe,null,o.createElement("h2",null,"Themes"),o.createElement(he,{htmlFor:"theme"},"Choose a Theme: "),o.createElement("select",{id:"theme",name:"theme",defaultValue:e,onChange:e=>t(e.currentTarget.value)},o.createElement("option",{value:"light"},"Light"),o.createElement("option",{value:"dark"},"Dark")),"light"===e&&" 🌞","dark"===e&&" 🌚",o.createElement("h3",null,"Sample Paragraph"),o.createElement("p",null,"In this example, the context of the custom theme provider is wrapped into a separate file with safeguards (helpful error messaging) against usage outside the provider. It requires little to no implementation when utilizing the context within a child other than using the custom useAdvancedThemeContext hook. The advantage of this implementation is ease of use, composability, and reusability of the context as well as the aforementioned safeguard."),o.createElement("h3",null,"Sample Link"),o.createElement("p",null,o.createElement(c,{to:"/themes"},"See the basic themes context implementation")))},pe=a.div`
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
`,Ee=()=>o.createElement(de,null,o.createElement(ue,null)),ge=({number:e,price:t,item:l,type:r,removeOrder:n})=>o.createElement(fe,null,o.createElement("span",null,e),o.createElement(ye,null,l),o.createElement(be,{type:r},t),o.createElement("button",{onClick:n},"Complete")),xe=({type:e})=>o.createElement(fe,null,o.createElement("span",null,"Order"),o.createElement(ye,null,"Item"),o.createElement(be,{type:e},"Price"),o.createElement("span",null,"Complete")),fe=a.div`
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
`,ye=a.div`
  flex: 1;
  text-align: right;
  color: #fff;
  padding-right: 25px;
`,be=a.span`
  flex: 1;
  text-align: left;
  color: ${({type:e})=>"togo"===e?"#fae52d":"#30bb37"};
  padding-left: 25px;
`,ve=({hereOrders:e,togoOrders:t,removeHereOrder:l,removeTogoOrder:r})=>{const n=i.exports.useMemo((()=>e.map((({id:e,item:t,price:r})=>o.createElement(ge,{key:e,number:e,price:r,item:t,type:"here",removeOrder:()=>{l(e)}})))),[e]),a=i.exports.useMemo((()=>t.map((({id:e,item:t,price:l})=>o.createElement(ge,{key:e,number:e,price:l,item:t,type:"togo",removeOrder:()=>{r(e)}})))),[t]);return o.createElement(o.Fragment,null,!!a.length&&o.createElement(o.Fragment,null,o.createElement("h3",null,"Togo Orders"),o.createElement(xe,{type:"togo"}),o.createElement("br",null),a),!!t.length&&!!e.length&&o.createElement(we,null),!!n.length&&o.createElement(o.Fragment,null,o.createElement("h3",null,"Here Orders"),o.createElement(xe,{type:"here"}),o.createElement("br",null),n))},we=a.hr`
  border-color: #333;
  width: 100%;
`,ke=e=>({id:e.toString().padStart(4,"0"),item:(1+Math.random()).toString().slice(2,4),price:(5+5*Math.random()).toString().slice(0,4)}),Ce=()=>{const[e,t]=i.exports.useState([]),[l,r]=i.exports.useState([]),[n,a]=i.exports.useState(0);return o.createElement(Te,null,o.createElement(Oe,null,o.createElement(Se,{onClick:()=>{t((e=>[...e,ke(n)].sort(((e,t)=>Number(t.id)-Number(e.id))))),a((e=>e+1))},orderType:"here"},"Here"),o.createElement(Se,{onClick:()=>{r((e=>[...e,ke(n)].sort(((e,t)=>Number(t.id)-Number(e.id))))),a((e=>e+1))},orderType:"togo"},"Togo")),o.createElement(ve,{hereOrders:e,togoOrders:l,removeHereOrder:e=>{t((t=>t.filter((t=>t.id!==e)).sort(((e,t)=>Number(t.id)-Number(e.id))))),a((e=>e+1))},removeTogoOrder:e=>{r((t=>t.filter((t=>t.id!==e)).sort(((e,t)=>Number(t.id)-Number(e.id))))),a((e=>e+1))}}))},Te=a.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`,Se=a.button`
  background-color: ${({orderType:e})=>"togo"===e?"#fae52d":"#30bb37"};
  border: none;
  color: #fff;
  width: 250px;
  padding: 10px;
  @media screen and (max-width: 501px) {
    flex: 1;
    width: 100%;
  }
`,Oe=a.div`
  margin: 20px 0;
  @media screen and (max-width: 501px) {
    display: flex;
    width: 100%;
  }
`,$e=()=>o.createElement(Fe,null,o.createElement(g,{basename:"/hooks-playground"},o.createElement("div",null,o.createElement("nav",null,o.createElement(c,{to:"/"},"Home")," | ",o.createElement(I,null))),o.createElement(x,null,o.createElement(f,{path:"/colors"},o.createElement(re,null)),o.createElement(f,{path:"/countries"},o.createElement(j,null)),o.createElement(f,{path:"/states"},o.createElement(S,null)),o.createElement(f,{path:"/tictactoe"},o.createElement(X,null)),o.createElement(f,{path:"/themes"},o.createElement(me,null)),o.createElement(f,{path:"/advancedThemes"},o.createElement(Ee,null)),o.createElement(f,{path:"/orderTape"},o.createElement(Ce,null)),o.createElement(f,{path:"/"},o.createElement(b,null))))),Fe=a.div`
  width: 100%;
`;y.render(o.createElement(o.StrictMode,null,o.createElement($e,null)),document.getElementById("root"));
