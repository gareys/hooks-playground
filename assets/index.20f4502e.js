var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(t,r,l)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[r]=l;import{q as a,R as o,L as c,C as i,u as s,g as m,a as d,A as u,I as p,b as h,G as E,B as g,S as x,c as f,d as b}from"./vendor.bdae1a1b.js";const y=()=>o.createElement(o.Fragment,null,o.createElement(w,null,"Hooks Playground",o.createElement(k,null,o.createElement(C,{src:"/hooks-playground/assets/hook.3bb9184a.svg"}))),o.createElement("hr",null),o.createElement("p",null,"Yarrrrr maties. There be many hooks examples in here. Ye be warned."),o.createElement("h2",null,"Examples"),o.createElement(v,null,o.createElement("li",null,o.createElement(c,{to:"/colors"},"Colors")," - GraphQL Colors API w/ pagination"),o.createElement("li",null,o.createElement(c,{to:"/countries"},"Countries")," - Basic async useEffect w/ countries API"),o.createElement("li",null,o.createElement(c,{to:"/states"},"The United States")," - Custom useAsyncHook w/ U.S. API"),o.createElement("li",null,o.createElement(c,{to:"/tictactoe"},"Tic Tac Toe")," - Tic Tac Toe game with useState and canvas"),o.createElement("li",null,o.createElement(c,{to:"/themes"},"Themes")," - Theme switcher with basic contexts"),o.createElement("li",null,o.createElement(c,{to:"/advancedThemes"},"Advanced Themes")," - Theme switcher with advanced contexts"),o.createElement("li",null,o.createElement(c,{to:"/orderTape"},"Order Tape")," - Fast Food Order Tape using useMemo"),o.createElement("li",null,o.createElement(c,{to:"/clock"},"Clock")," - Clock using useInterval hook"))),v=a.ul`
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
`,T=e=>o.createElement("img",((e,a)=>{for(var o in a||(a={}))r.call(a,o)&&n(e,o,a[o]);if(t)for(var o of t(a))l.call(a,o)&&n(e,o,a[o]);return e})({onError:e=>{e.currentTarget.src=""}},e)),S=()=>{const[e,t]=i.exports.useState([]);var r,l;return r=async()=>{const e=await fetch("https://api.sampleapis.com/the-states/the-states"),r=await e.json();t(r)},l=[],i.exports.useEffect((()=>{r().catch((e=>{throw console.error(e),e}))}),l),o.createElement(O,null,e.map((e=>o.createElement("li",{key:e.id},o.createElement($,null,o.createElement(P,{src:e.flag,alt:`${e.name}'s flag`}),o.createElement("h2",null,e.name," (",e.abv,")")),o.createElement(F,null,o.createElement("p",null,"Capital: ",e.capital),o.createElement("p",null,"Largest City: ",e.largest_city),o.createElement("p",null,"Population: ",e.population),o.createElement("p",null,"Joined the Union: ",e.admitted_to_union))))))},O=a.ul`
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
`,I=()=>{const e=s();return o.createElement(N,{onClick:()=>e.goBack()},"Back")},N=a.a`
  cursor: pointer;
`,j=()=>{const[e,t]=i.exports.useState([]),r=e.sort(((e,t)=>e.name<t.name?-1:e.name>t.name?1:0));return i.exports.useEffect((()=>{(async()=>{const e=await fetch("https://api.sampleapis.com/countries/countries"),r=await e.json();t(r)})()}),[]),o.createElement(A,null,r.map((e=>{var t;return o.createElement("li",{key:e.id},o.createElement(L,null,o.createElement(_,null,o.createElement(G,{src:e.media.flag})),o.createElement(H,null,o.createElement("h2",null,e.name),o.createElement(R,null,o.createElement("li",null,o.createElement("strong",null,"Capital:   "),e.capital),o.createElement("li",null,o.createElement("strong",null,"Population:   "),(null==(t=e.population)?void 0:t.toLocaleString())||"N/A"),o.createElement("li",null,o.createElement("strong",null,"Currency:   "),e.currency||"N/A"))),e.media.emblem&&o.createElement(M,null,o.createElement(D,{src:e.media.emblem}))))})))},A=a.ul`
  list-style: none;
  padding-left: 0;
`,L=a.div`
  display: flex;
  padding: 5px 0;
`,_=a.div`
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
`,D=a(T)`
  max-height: 100px;
`,H=a.div`
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
`,B=Array(9).fill(""),W={first_row:{cells:[0,1,2],coords:[[10,26],[290,26]]},second_row:{cells:[3,4,5],coords:[[10,76],[290,76]]},third_row:{cells:[6,7,8],coords:[[10,126],[290,126]]},first_column:{cells:[0,3,6],coords:[[50,10],[50,144]]},second_column:{cells:[1,4,7],coords:[[150,10],[150,144]]},third_column:{cells:[2,5,8],coords:[[250,10],[250,144]]},backward_diagonal:{cells:[0,4,8],coords:[[12,6],[290,144]]},forward_diagonal:{cells:[2,4,6],coords:[[12,144],[290,6]]}},X=()=>{const e=i.exports.useRef(null),[t,r]=i.exports.useState(B),[l,n]=i.exports.useState("X"),[a,c]=i.exports.useState();i.exports.useEffect((()=>{const t=e.current;if(a&&t){const e=W[a.location].coords[0],r=W[a.location].coords[1],l=t.getContext("2d");l.strokeStyle="red",l.lineWidth=3,l.beginPath(),l.moveTo(...e),l.lineTo(...r),l.stroke()}}),[a]);const s=(e,t)=>{for(const[r,{cells:l}]of Object.entries(W))if(l.every((r=>e[r]===t)))return{play:t,location:r}},m=!a&&t.every((e=>!!e)),d=!!a||m;return o.createElement(o.Fragment,null,o.createElement("h2",null,"Tic Tac Toe"),o.createElement(z,null,o.createElement("tbody",null,o.createElement("tr",null,t.map(((e,i)=>o.createElement(U,{disabled:!!t[i]||d,onClick:()=>{t[i]||((e,l)=>{if(a)return;const o=[...t.slice(0,e),l,...t.slice(e+1)],i=s(o,l);i&&c(i),r(o),n((e=>"X"===e?"O":"X"))})(i,l)},key:i},e)))))),a&&o.createElement(o.Fragment,null,o.createElement(q,{ref:e}),o.createElement("p",null,"The Winner is ",a.play,"!"),o.createElement("p",null,"They won on the ",a.location.split("_").join(" "),".")),m&&o.createElement("p",null,"It's a Cat's Game! No Winner!"),d&&o.createElement("p",null,o.createElement(Q,{onClick:()=>(n("X"),r(B),void c(void 0))},"Start Over")))},q=a.canvas`
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
`,V=m`
  query GetAllColors($page: Int!, $perPage: Int!) {
    allColors(page: $page, perPage: $perPage) {
      name
      hex
    }
  }
`,Y=()=>{const[e,t]=i.exports.useState(1),{loading:r,error:l,data:n,fetchMore:a}=d(V,{variables:{page:0,perPage:25}});return r?o.createElement("p",null,"Loading..."):l?o.createElement("p",null,"Error :("):o.createElement(J,null,o.createElement("tbody",null,n.allColors.map((({name:e,hex:t})=>o.createElement(K,{key:t,hex:t},o.createElement(ee,null,e)))),e>0&&o.createElement(Z,{key:"NEXT_PAGE",hex:"#FFFFFF",onClick:()=>(a({variables:{page:e,perPage:25},updateQuery:(e,{fetchMoreResult:r})=>r.allColors.length?{allColors:[...e.allColors,...r.allColors]}:(t(0),e)}),void t(e+1))},o.createElement(ee,null,"GET MORE COLORS"))))},J=a.table`
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
`,te=e=>(e=e.replace("#",""),(299*parseInt(e.substr(0,2),16)+587*parseInt(e.substr(2,2),16)+114*parseInt(e.substr(4,2),16))/1e3>=128?"#000000":"#FFFFFF"),re=new u({uri:"https://api.sampleapis.com/css-color-names/graphql",cache:new p}),le=()=>o.createElement(h,{client:re},o.createElement(Y,null)),ne={light:{colors:{background:"WhiteSmoke",primaryColor:"DimGray",secondaryColor:"DarkSlateGray",hover:"LightSlateGray"}},dark:{colors:{background:"DimGray",primaryColor:"WhiteSmoke",secondaryColor:"Azure",hover:"LavenderBlush"}}},ae=()=>{const{theme:e,setTheme:t}=i.exports.useContext(ie);return o.createElement(oe,null,o.createElement("h2",null,"Themes"),o.createElement(ce,{htmlFor:"theme"},"Choose a Theme: "),o.createElement("select",{id:"theme",name:"theme",defaultValue:e,onChange:e=>t(e.currentTarget.value)},o.createElement("option",{value:"light"},"Light"),o.createElement("option",{value:"dark"},"Dark")),"light"===e&&" 🌞","dark"===e&&" 🌚",o.createElement("h3",null,"Sample Paragraph"),o.createElement("p",null,"In this example, the custom theme context lives inside of the parent component, ThemesScene. The implementation is very basic and not as easily reusable as the Advanced Theme Context. However, it gets the job done and provides a basic example of React Context."),o.createElement("h3",null,"Sample Link"),o.createElement("p",null,o.createElement(c,{to:"/advancedThemes"},"See the advanced themes context implementation")))},oe=a.div`
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
`,ie=i.exports.createContext(void 0),se=()=>{const[e,t]=i.exports.useState("light");return o.createElement(ie.Provider,{value:{theme:e,setTheme:t}},o.createElement(E,{theme:ne[e]},o.createElement(ae,null)))},me=i.exports.createContext(void 0),de=({children:e})=>{const[t,r]=i.exports.useState("light");return o.createElement(me.Provider,{value:{theme:t,setTheme:r}},o.createElement(E,{theme:ne[t]},e))},ue=()=>{const{theme:e,setTheme:t}=(()=>{const e=i.exports.useContext(me);if(void 0===e)throw new Error("useAdvancedThemeContext must be used within an AdvancedThemeContextProvider");return e})();return o.createElement(pe,null,o.createElement("h2",null,"Themes"),o.createElement(he,{htmlFor:"theme"},"Choose a Theme: "),o.createElement("select",{id:"theme",name:"theme",defaultValue:e,onChange:e=>t(e.currentTarget.value)},o.createElement("option",{value:"light"},"Light"),o.createElement("option",{value:"dark"},"Dark")),"light"===e&&" 🌞","dark"===e&&" 🌚",o.createElement("h3",null,"Sample Paragraph"),o.createElement("p",null,"In this example, the context of the custom theme provider is wrapped into a separate file with safeguards (helpful error messaging) against usage outside the provider. It requires little to no implementation when utilizing the context within a child other than using the custom useAdvancedThemeContext hook. The advantage of this implementation is ease of use, composability, and reusability of the context as well as the aforementioned safeguard."),o.createElement("h3",null,"Sample Link"),o.createElement("p",null,o.createElement(c,{to:"/themes"},"See the basic themes context implementation")))},pe=a.div`
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
`,Ee=()=>o.createElement(de,null,o.createElement(ue,null)),ge=({number:e,price:t,item:r,type:l,removeOrder:n})=>o.createElement(fe,null,o.createElement("span",null,e),o.createElement(be,null,r),o.createElement(ye,{type:l},t),o.createElement("button",{onClick:n},"Complete")),xe=({type:e})=>o.createElement(fe,null,o.createElement("span",null,"Order"),o.createElement(be,null,"Item"),o.createElement(ye,{type:e},"Price"),o.createElement("span",null,"Complete")),fe=a.div`
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
`,be=a.div`
  flex: 1;
  text-align: right;
  color: #fff;
  padding-right: 25px;
`,ye=a.span`
  flex: 1;
  text-align: left;
  color: ${({type:e})=>"togo"===e?"#fae52d":"#30bb37"};
  padding-left: 25px;
`,ve=({hereOrders:e,togoOrders:t,removeHereOrder:r,removeTogoOrder:l})=>{const n=i.exports.useMemo((()=>e.map((({id:e,item:t,price:l})=>o.createElement(ge,{key:e,number:e,price:l,item:t,type:"here",removeOrder:()=>{r(e)}})))),[e]),a=i.exports.useMemo((()=>t.map((({id:e,item:t,price:r})=>o.createElement(ge,{key:e,number:e,price:r,item:t,type:"togo",removeOrder:()=>{l(e)}})))),[t]);return o.createElement(o.Fragment,null,!!a.length&&o.createElement(o.Fragment,null,o.createElement("h3",null,"Togo Orders"),o.createElement(xe,{type:"togo"}),o.createElement("br",null),a),!!t.length&&!!e.length&&o.createElement(we,null),!!n.length&&o.createElement(o.Fragment,null,o.createElement("h3",null,"Here Orders"),o.createElement(xe,{type:"here"}),o.createElement("br",null),n))},we=a.hr`
  border-color: #333;
  width: 100%;
`,ke=e=>({id:e.toString().padStart(4,"0"),item:(1+Math.random()).toString().slice(2,4),price:(5+5*Math.random()).toString().slice(0,4)}),Ce=()=>{const[e,t]=i.exports.useState([]),[r,l]=i.exports.useState([]),[n,a]=i.exports.useState(0);return o.createElement(Te,null,o.createElement(Oe,null,o.createElement(Se,{onClick:()=>{t((e=>[...e,ke(n)].sort(((e,t)=>Number(t.id)-Number(e.id))))),a((e=>e+1))},orderType:"here"},"Here"),o.createElement(Se,{onClick:()=>{l((e=>[...e,ke(n)].sort(((e,t)=>Number(t.id)-Number(e.id))))),a((e=>e+1))},orderType:"togo"},"Togo")),o.createElement(ve,{hereOrders:e,togoOrders:r,removeHereOrder:e=>{t((t=>t.filter((t=>t.id!==e)).sort(((e,t)=>Number(t.id)-Number(e.id))))),a((e=>e+1))},removeTogoOrder:e=>{l((t=>t.filter((t=>t.id!==e)).sort(((e,t)=>Number(t.id)-Number(e.id))))),a((e=>e+1))}}))},Te=a.div`
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
`,$e=e=>Number((Math.round(100*e)/100).toFixed(2)),Fe=({time:e=new Date})=>{const t=new Date(e).toLocaleString().substr(11,8).split(":"),r=Number(t[0]),l=Number(t[1]),n=Number(t[2]),a=$e(30*(r+$e(l/60))),c=$e(6*(l+$e(n/60))),i=6*n;return o.createElement(Pe,null,o.createElement(je,{className:"hand",style:{transform:`rotate(${i}deg`}}),o.createElement(Ne,{className:"hand",style:{transform:`rotate(${c}deg`}}),o.createElement(Ie,{className:"hand",style:{transform:`rotate(${a}deg`}}),o.createElement(Ae,null))},Pe=a.div`
  height: 300px;
  width: 300px;
  background: gray;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  & > .hand {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    width: 0;
  }
`,Ie=a.div`
  &:before,
  &:after {
    content: '';
    margin: 0;
    height: 100px;
    width: 4px;
    background: white;
  }
  &:after {
    visibility: hidden;
  }
`,Ne=a.div`
  &:before,
  &:after {
    content: '';
    margin: 0;
    height: 125px;
    width: 4px;
    background: black;
  }
  &:after {
    visibility: hidden;
  }
`,je=a.div`
  &:before,
  &:after {
    content: '';
    margin: 0;
    height: 130px;
    width: 2px;
    background: red;
  }
  &:after {
    visibility: hidden;
  }
`,Ae=a.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
`,Le=()=>{const[e,t]=i.exports.useState(new Date);return((e,t)=>{const r=i.exports.useRef((()=>{}));i.exports.useEffect((()=>{r.current=e}),[e]),i.exports.useEffect((()=>{if(null!==t){let e=setInterval((function(){r.current()}),t);return()=>clearInterval(e)}}),[t])})((()=>{t(new Date)}),1e3),o.createElement(Fe,{time:e})},_e=()=>o.createElement(Ge,null,o.createElement(g,{basename:"/hooks-playground"},o.createElement("div",null,o.createElement("nav",null,o.createElement(c,{to:"/"},"Home")," | ",o.createElement(I,null))),o.createElement(x,null,o.createElement(f,{path:"/colors"},o.createElement(le,null)),o.createElement(f,{path:"/countries"},o.createElement(j,null)),o.createElement(f,{path:"/states"},o.createElement(S,null)),o.createElement(f,{path:"/tictactoe"},o.createElement(X,null)),o.createElement(f,{path:"/themes"},o.createElement(se,null)),o.createElement(f,{path:"/advancedThemes"},o.createElement(Ee,null)),o.createElement(f,{path:"/orderTape"},o.createElement(Ce,null)),o.createElement(f,{path:"/clock"},o.createElement(Le,null)),o.createElement(f,{path:"/"},o.createElement(y,null))))),Ge=a.div`
  width: 100%;
`;b.render(o.createElement(o.StrictMode,null,o.createElement(_e,null)),document.getElementById("root"));
