var e=Object.defineProperty,t=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(t,l,n)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[l]=n;import{q as r,R as o,L as c,C as s,u as i,g as m,a as h,A as u,I as p,b as d,G as E,B as g,S as x,c as v,d as y}from"./vendor.bdae1a1b.js";const f=()=>o.createElement(o.Fragment,null,o.createElement("h1",null,"Hooks Playground"),o.createElement("hr",null),o.createElement("h2",null,"Projects"),o.createElement(b,null,o.createElement("li",null,o.createElement(c,{to:"/colors"},"Colors")," - GraphQL Colors API w/ pagination"),o.createElement("li",null,o.createElement(c,{to:"/countries"},"Countries")," - Basic async useEffect w/ countries API"),o.createElement("li",null,o.createElement(c,{to:"/states"},"The United States")," - Custom useAsyncHook w/ U.S. API"),o.createElement("li",null,o.createElement(c,{to:"/tictactoe"},"Tic Tac Toe")," - Tic Tac Toe game with useState and canvas"),o.createElement("li",null,o.createElement(c,{to:"/themes"},"Themes")," - Theme switcher with basic contexts"),o.createElement("li",null,o.createElement(c,{to:"/advancedThemes"},"Advanced Themes")," - Theme switcher with advanced contexts"))),b=r.ul`
  list-style: none;
  li {
    margin: 5px 0;
  }
`,w=e=>o.createElement("img",((e,r)=>{for(var o in r||(r={}))l.call(r,o)&&a(e,o,r[o]);if(t)for(var o of t(r))n.call(r,o)&&a(e,o,r[o]);return e})({onError:e=>{e.currentTarget.src=""}},e)),C=()=>{const[e,t]=s.exports.useState([]);var l,n;return l=async()=>{const e=await fetch("https://api.sampleapis.com/the-states/the-states"),l=await e.json();t(l)},n=[],s.exports.useEffect((()=>{l().catch((e=>{throw console.error(e),e}))}),n),o.createElement(k,null,e.map((e=>o.createElement("li",{key:e.id},o.createElement(T,null,o.createElement(P,{src:e.flag,alt:`${e.name}'s flag`}),o.createElement("h2",null,e.name," (",e.abv,")")),o.createElement(S,null,o.createElement("p",null,"Capital: ",e.capital),o.createElement("p",null,"Largest City: ",e.largest_city),o.createElement("p",null,"Population: ",e.population),o.createElement("p",null,"Joined the Union: ",e.admitted_to_union))))))},k=r.ul`
  list-style: none;
`,T=r.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  h2 {
    margin: 0 5px;
  }
`,S=r.div`
  margin-left: calc(2em + 25px);
`,P=r(w)`
  width: 2em;
  margin-right: 20px;
`,$=()=>{const e=i();return o.createElement(A,{onClick:()=>e.goBack()},"Back")},A=r.a`
  cursor: pointer;
`,F=()=>{const[e,t]=s.exports.useState([]),l=e.sort(((e,t)=>e.name<t.name?-1:e.name>t.name?1:0));return s.exports.useEffect((()=>{(async()=>{const e=await fetch("https://api.sampleapis.com/countries/countries"),l=await e.json();t(l)})()}),[]),o.createElement(I,null,l.map((e=>{var t;return o.createElement("li",{key:e.id},o.createElement(j,null,o.createElement(_,null,o.createElement(L,{src:e.media.flag})),o.createElement(B,null,o.createElement("h2",null,e.name),o.createElement(R,null,o.createElement("li",null,o.createElement("strong",null,"Capital:   "),e.capital),o.createElement("li",null,o.createElement("strong",null,"Population:   "),(null==(t=e.population)?void 0:t.toLocaleString())||"N/A"),o.createElement("li",null,o.createElement("strong",null,"Currency:   "),e.currency||"N/A"))),e.media.emblem&&o.createElement(O,null,o.createElement(G,{src:e.media.emblem}))))})))},I=r.ul`
  list-style: none;
  padding-left: 0;
`,j=r.div`
  display: flex;
  padding: 5px 0;
`,_=r.div`
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
`,L=r(w)`
  border: 2px solid #fff;
  width: 200px;
  min-width: 200px;
  min-height: 100px;
  height: auto;
`,O=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  min-height: 100%;
`,G=r(w)`
  max-height: 100px;
`,B=r.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 20px;
  h2 {
    margin: 15px 0;
  }
`,R=r.ul`
  list-style: none;
  padding-left: 0;
`,D=Array(9).fill(""),N={first_row:{cells:[0,1,2],coords:[[10,26],[290,26]]},second_row:{cells:[3,4,5],coords:[[10,76],[290,76]]},third_row:{cells:[6,7,8],coords:[[10,126],[290,126]]},first_column:{cells:[0,3,6],coords:[[50,10],[50,144]]},second_column:{cells:[1,4,7],coords:[[150,10],[150,144]]},third_column:{cells:[2,5,8],coords:[[250,10],[250,144]]},backward_diagonal:{cells:[0,4,8],coords:[[12,6],[290,144]]},forward_diagonal:{cells:[2,4,6],coords:[[12,144],[290,6]]}},W=()=>{const e=s.exports.useRef(null),[t,l]=s.exports.useState(D),[n,a]=s.exports.useState("X"),[r,c]=s.exports.useState();s.exports.useEffect((()=>{const t=e.current;if(r&&t){const e=N[r.location].coords[0],l=N[r.location].coords[1],n=t.getContext("2d");n.strokeStyle="red",n.lineWidth=3,n.beginPath(),n.moveTo(...e),n.lineTo(...l),n.stroke()}}),[r]);const i=(e,t)=>{for(const[l,{cells:n}]of Object.entries(N))if(n.every((l=>e[l]===t)))return{play:t,location:l}},m=!r&&t.every((e=>!!e)),h=!!r||m;return o.createElement(o.Fragment,null,o.createElement("h2",null,"Tic Tac Toe"),o.createElement(q,null,o.createElement("tbody",null,o.createElement("tr",null,t.map(((e,s)=>o.createElement(H,{disabled:!!t[s]||h,onClick:()=>{t[s]||((e,n)=>{if(r)return;const o=[...t.slice(0,e),n,...t.slice(e+1)],s=i(o,n);s&&c(s),l(o),a((e=>"X"===e?"O":"X"))})(s,n)},key:s},e)))))),r&&o.createElement(X,{ref:e}),r&&o.createElement(o.Fragment,null,o.createElement("p",null,"The Winner is ",r.play,"!"),o.createElement("p",null,"They won on the ",r.location.split("_").join(" "),".")),m&&o.createElement("p",null,"It's a Cat's Game! No Winner!"),h&&o.createElement("p",null,o.createElement(M,{onClick:()=>(a("X"),l(D),void c(void 0))},"Start Over")))},X=r.canvas`
  display: block;
  position: relative;
  top: -126px;
  margin-bottom: -126px;
  height: 126px;
  width: 126px;
`,q=r.table`
  margin-top: 20px;
  border-collapse: collapse;
  width: 128px;
  min-width: 160px;
  display: block;
  user-select: none;
`,H=r.td`
  display: inline-block;
  height: 20px;
  width: 20px;
  padding: 10px;
  border: 1px solid white;
  text-align: center;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
`,M=r.a`
  cursor: pointer;
`,z=m`
  query GetAllColors($page: Int!, $perPage: Int!) {
    allColors(page: $page, perPage: $perPage) {
      name
      hex
    }
  }
`,U=()=>{const[e,t]=s.exports.useState(1),{loading:l,error:n,data:a,fetchMore:r}=h(z,{variables:{page:0,perPage:25}});return l?o.createElement("p",null,"Loading..."):n?o.createElement("p",null,"Error :("):o.createElement(Q,null,o.createElement("tbody",null,a.allColors.map((({name:e,hex:t})=>o.createElement(V,{key:t,hex:t},o.createElement(K,null,e)))),e>0&&o.createElement(J,{key:"NEXT_PAGE",hex:"#FFFFFF",onClick:()=>(r({variables:{page:e,perPage:25},updateQuery:(e,{fetchMoreResult:l})=>l.allColors.length?{allColors:[...e.allColors,...l.allColors]}:(t(0),e)}),void t(e+1))},o.createElement(K,null,"GET MORE COLORS"))))},Q=r.table`
  width: 100%;
`,V=r.tr`
  background-color: ${({hex:e})=>e};
  color: ${({hex:e})=>Y(e)};
`,J=r(V)`
  text-align: center;
  cursor: pointer;
`,K=r.td`
  padding: 10px;
  font-weight: 500;
`,Y=e=>(e=e.replace("#",""),(299*parseInt(e.substr(0,2),16)+587*parseInt(e.substr(2,2),16)+114*parseInt(e.substr(4,2),16))/1e3>=128?"#000000":"#FFFFFF"),Z=new u({uri:"https://api.sampleapis.com/css-color-names/graphql",cache:new p}),ee=()=>o.createElement(d,{client:Z},o.createElement(U,null)),te={light:{colors:{background:"WhiteSmoke",primaryColor:"DimGray",secondaryColor:"DarkSlateGray",hover:"LightSlateGray"}},dark:{colors:{background:"DimGray",primaryColor:"WhiteSmoke",secondaryColor:"Azure",hover:"LavenderBlush"}}},le=()=>{const{theme:e,setTheme:t}=s.exports.useContext(re);return o.createElement(ne,null,o.createElement("h2",null,"Themes"),o.createElement(ae,{htmlFor:"theme"},"Choose a Theme: "),o.createElement("select",{id:"theme",name:"theme",defaultValue:e,onChange:e=>t(e.currentTarget.value)},o.createElement("option",{value:"light"},"Light"),o.createElement("option",{value:"dark"},"Dark")),"light"===e&&" 🌞","dark"===e&&" 🌚",o.createElement("h3",null,"Sample Paragraph"),o.createElement("p",null,"In this example, the custom theme context lives inside of the parent component, ThemesScene. The implementation is very basic and not as easily reusable as the Advanced Theme Context. However, it gets the job done and provides a basic example of React Context."),o.createElement("h3",null,"Sample Link"),o.createElement("p",null,o.createElement(c,{to:"/advancedThemes"},"See the advanced themes context implementation")))},ne=r.div`
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
`,ae=r.label`
  display: block;
`,re=s.exports.createContext(void 0),oe=()=>{const[e,t]=s.exports.useState("light");return o.createElement(re.Provider,{value:{theme:e,setTheme:t}},o.createElement(E,{theme:te[e]},o.createElement(le,null)))},ce=s.exports.createContext(void 0),se=({children:e})=>{const[t,l]=s.exports.useState("light");return o.createElement(ce.Provider,{value:{theme:t,setTheme:l}},o.createElement(E,{theme:te[t]},e))},ie=()=>{const{theme:e,setTheme:t}=(()=>{const e=s.exports.useContext(ce);if(void 0===e)throw new Error("useAdvancedThemeContext must be used within an AdvancedThemeContextProvider");return e})();return o.createElement(me,null,o.createElement("h2",null,"Themes"),o.createElement(he,{htmlFor:"theme"},"Choose a Theme: "),o.createElement("select",{id:"theme",name:"theme",defaultValue:e,onChange:e=>t(e.currentTarget.value)},o.createElement("option",{value:"light"},"Light"),o.createElement("option",{value:"dark"},"Dark")),"light"===e&&" 🌞","dark"===e&&" 🌚",o.createElement("h3",null,"Sample Paragraph"),o.createElement("p",null,"In this example, the context of the custom theme provider is wrapped into a separate file with safeguards (helpful error messaging) against usage outside the provider. It requires little to no implementation when utilizing the context within a child other than using the custom useAdvancedThemeContext hook. The advantage of this implementation is ease of use, composability, and reusability of the context as well as the aforementioned safeguard."),o.createElement("h3",null,"Sample Link"),o.createElement("p",null,o.createElement(c,{to:"/themes"},"See the basic themes context implementation")))},me=r.div`
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
`,he=r.label`
  display: block;
`,ue=()=>o.createElement(se,null,o.createElement(ie,null)),pe=()=>o.createElement(de,null,o.createElement(g,{basename:"/hooks-playground"},o.createElement("div",null,o.createElement("nav",null,o.createElement(c,{to:"/"},"Home")," | ",o.createElement($,null))),o.createElement(x,null,o.createElement(v,{path:"/colors"},o.createElement(ee,null)),o.createElement(v,{path:"/countries"},o.createElement(F,null)),o.createElement(v,{path:"/states"},o.createElement(C,null)),o.createElement(v,{path:"/tictactoe"},o.createElement(W,null)),o.createElement(v,{path:"/themes"},o.createElement(oe,null)),o.createElement(v,{path:"/advancedThemes"},o.createElement(ue,null)),o.createElement(v,{path:"/"},o.createElement(f,null))))),de=r.div`
  width: 100%;
`;y.render(o.createElement(o.StrictMode,null,o.createElement(pe,null)),document.getElementById("root"));
