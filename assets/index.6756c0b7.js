var e=Object.defineProperty,t=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,n=(t,l,a)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a;import{q as r,R as o,L as c,C as s,u as i,g as m,a as h,A as u,I as p,b as d,G as E,B as g,S as x,c as f,d as y}from"./vendor.bdae1a1b.js";const v=()=>o.createElement(o.Fragment,null,o.createElement(w,null,"Hooks Playground",o.createElement(k,null,o.createElement(C,{src:"/hooks-playground/assets/hook.3bb9184a.svg"}))),o.createElement("hr",null),o.createElement("p",null,"Yarrrrr maties. There be many hooks examples in here. Ye be warned."),o.createElement("h2",null,"Examples"),o.createElement(b,null,o.createElement("li",null,o.createElement(c,{to:"/colors"},"Colors")," - GraphQL Colors API w/ pagination"),o.createElement("li",null,o.createElement(c,{to:"/countries"},"Countries")," - Basic async useEffect w/ countries API"),o.createElement("li",null,o.createElement(c,{to:"/states"},"The United States")," - Custom useAsyncHook w/ U.S. API"),o.createElement("li",null,o.createElement(c,{to:"/tictactoe"},"Tic Tac Toe")," - Tic Tac Toe game with useState and canvas"),o.createElement("li",null,o.createElement(c,{to:"/themes"},"Themes")," - Theme switcher with basic contexts"),o.createElement("li",null,o.createElement(c,{to:"/advancedThemes"},"Advanced Themes")," - Theme switcher with advanced contexts"))),b=r.ul`
  list-style: none;
  li {
    margin: 5px 0;
  }
`,w=r.h1`
  display: flex;
  justify-content: space-between;
`,k=r.div`
  width: 100px;
  display: flex;
  justify-content: center;
`,C=r.img`
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
`,T=e=>o.createElement("img",((e,r)=>{for(var o in r||(r={}))l.call(r,o)&&n(e,o,r[o]);if(t)for(var o of t(r))a.call(r,o)&&n(e,o,r[o]);return e})({onError:e=>{e.currentTarget.src=""}},e)),S=()=>{const[e,t]=s.exports.useState([]);var l,a;return l=async()=>{const e=await fetch("https://api.sampleapis.com/the-states/the-states"),l=await e.json();t(l)},a=[],s.exports.useEffect((()=>{l().catch((e=>{throw console.error(e),e}))}),a),o.createElement($,null,e.map((e=>o.createElement("li",{key:e.id},o.createElement(P,null,o.createElement(F,{src:e.flag,alt:`${e.name}'s flag`}),o.createElement("h2",null,e.name," (",e.abv,")")),o.createElement(A,null,o.createElement("p",null,"Capital: ",e.capital),o.createElement("p",null,"Largest City: ",e.largest_city),o.createElement("p",null,"Population: ",e.population),o.createElement("p",null,"Joined the Union: ",e.admitted_to_union))))))},$=r.ul`
  list-style: none;
`,P=r.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  h2 {
    margin: 0 5px;
  }
`,A=r.div`
  margin-left: calc(2em + 25px);
`,F=r(T)`
  width: 2em;
  margin-right: 20px;
`,I=()=>{const e=i();return o.createElement(j,{onClick:()=>e.goBack()},"Back")},j=r.a`
  cursor: pointer;
`,_=()=>{const[e,t]=s.exports.useState([]),l=e.sort(((e,t)=>e.name<t.name?-1:e.name>t.name?1:0));return s.exports.useEffect((()=>{(async()=>{const e=await fetch("https://api.sampleapis.com/countries/countries"),l=await e.json();t(l)})()}),[]),o.createElement(L,null,l.map((e=>{var t;return o.createElement("li",{key:e.id},o.createElement(O,null,o.createElement(G,null,o.createElement(B,{src:e.media.flag})),o.createElement(N,null,o.createElement("h2",null,e.name),o.createElement(W,null,o.createElement("li",null,o.createElement("strong",null,"Capital:   "),e.capital),o.createElement("li",null,o.createElement("strong",null,"Population:   "),(null==(t=e.population)?void 0:t.toLocaleString())||"N/A"),o.createElement("li",null,o.createElement("strong",null,"Currency:   "),e.currency||"N/A"))),e.media.emblem&&o.createElement(R,null,o.createElement(D,{src:e.media.emblem}))))})))},L=r.ul`
  list-style: none;
  padding-left: 0;
`,O=r.div`
  display: flex;
  padding: 5px 0;
`,G=r.div`
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
`,B=r(T)`
  border: 2px solid #fff;
  width: 200px;
  min-width: 200px;
  min-height: 100px;
  height: auto;
`,R=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  min-height: 100%;
`,D=r(T)`
  max-height: 100px;
`,N=r.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 20px;
  h2 {
    margin: 15px 0;
  }
`,W=r.ul`
  list-style: none;
  padding-left: 0;
`,X=Array(9).fill(""),q={first_row:{cells:[0,1,2],coords:[[10,26],[290,26]]},second_row:{cells:[3,4,5],coords:[[10,76],[290,76]]},third_row:{cells:[6,7,8],coords:[[10,126],[290,126]]},first_column:{cells:[0,3,6],coords:[[50,10],[50,144]]},second_column:{cells:[1,4,7],coords:[[150,10],[150,144]]},third_column:{cells:[2,5,8],coords:[[250,10],[250,144]]},backward_diagonal:{cells:[0,4,8],coords:[[12,6],[290,144]]},forward_diagonal:{cells:[2,4,6],coords:[[12,144],[290,6]]}},H=()=>{const e=s.exports.useRef(null),[t,l]=s.exports.useState(X),[a,n]=s.exports.useState("X"),[r,c]=s.exports.useState();s.exports.useEffect((()=>{const t=e.current;if(r&&t){const e=q[r.location].coords[0],l=q[r.location].coords[1],a=t.getContext("2d");a.strokeStyle="red",a.lineWidth=3,a.beginPath(),a.moveTo(...e),a.lineTo(...l),a.stroke()}}),[r]);const i=(e,t)=>{for(const[l,{cells:a}]of Object.entries(q))if(a.every((l=>e[l]===t)))return{play:t,location:l}},m=!r&&t.every((e=>!!e)),h=!!r||m;return o.createElement(o.Fragment,null,o.createElement("h2",null,"Tic Tac Toe"),o.createElement(z,null,o.createElement("tbody",null,o.createElement("tr",null,t.map(((e,s)=>o.createElement(U,{disabled:!!t[s]||h,onClick:()=>{t[s]||((e,a)=>{if(r)return;const o=[...t.slice(0,e),a,...t.slice(e+1)],s=i(o,a);s&&c(s),l(o),n((e=>"X"===e?"O":"X"))})(s,a)},key:s},e)))))),r&&o.createElement(M,{ref:e}),r&&o.createElement(o.Fragment,null,o.createElement("p",null,"The Winner is ",r.play,"!"),o.createElement("p",null,"They won on the ",r.location.split("_").join(" "),".")),m&&o.createElement("p",null,"It's a Cat's Game! No Winner!"),h&&o.createElement("p",null,o.createElement(Q,{onClick:()=>(n("X"),l(X),void c(void 0))},"Start Over")))},M=r.canvas`
  display: block;
  position: relative;
  top: -126px;
  margin-bottom: -126px;
  height: 126px;
  width: 126px;
`,z=r.table`
  margin-top: 20px;
  border-collapse: collapse;
  width: 128px;
  min-width: 160px;
  display: block;
  user-select: none;
`,U=r.td`
  display: inline-block;
  height: 20px;
  width: 20px;
  padding: 10px;
  border: 1px solid white;
  text-align: center;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
`,Q=r.a`
  cursor: pointer;
`,V=m`
  query GetAllColors($page: Int!, $perPage: Int!) {
    allColors(page: $page, perPage: $perPage) {
      name
      hex
    }
  }
`,Y=()=>{const[e,t]=s.exports.useState(1),{loading:l,error:a,data:n,fetchMore:r}=h(V,{variables:{page:0,perPage:25}});return l?o.createElement("p",null,"Loading..."):a?o.createElement("p",null,"Error :("):o.createElement(J,null,o.createElement("tbody",null,n.allColors.map((({name:e,hex:t})=>o.createElement(K,{key:t,hex:t},o.createElement(ee,null,e)))),e>0&&o.createElement(Z,{key:"NEXT_PAGE",hex:"#FFFFFF",onClick:()=>(r({variables:{page:e,perPage:25},updateQuery:(e,{fetchMoreResult:l})=>l.allColors.length?{allColors:[...e.allColors,...l.allColors]}:(t(0),e)}),void t(e+1))},o.createElement(ee,null,"GET MORE COLORS"))))},J=r.table`
  width: 100%;
`,K=r.tr`
  background-color: ${({hex:e})=>e};
  color: ${({hex:e})=>te(e)};
`,Z=r(K)`
  text-align: center;
  cursor: pointer;
`,ee=r.td`
  padding: 10px;
  font-weight: 500;
`,te=e=>(e=e.replace("#",""),(299*parseInt(e.substr(0,2),16)+587*parseInt(e.substr(2,2),16)+114*parseInt(e.substr(4,2),16))/1e3>=128?"#000000":"#FFFFFF"),le=new u({uri:"https://api.sampleapis.com/css-color-names/graphql",cache:new p}),ae=()=>o.createElement(d,{client:le},o.createElement(Y,null)),ne={light:{colors:{background:"WhiteSmoke",primaryColor:"DimGray",secondaryColor:"DarkSlateGray",hover:"LightSlateGray"}},dark:{colors:{background:"DimGray",primaryColor:"WhiteSmoke",secondaryColor:"Azure",hover:"LavenderBlush"}}},re=()=>{const{theme:e,setTheme:t}=s.exports.useContext(se);return o.createElement(oe,null,o.createElement("h2",null,"Themes"),o.createElement(ce,{htmlFor:"theme"},"Choose a Theme: "),o.createElement("select",{id:"theme",name:"theme",defaultValue:e,onChange:e=>t(e.currentTarget.value)},o.createElement("option",{value:"light"},"Light"),o.createElement("option",{value:"dark"},"Dark")),"light"===e&&" 🌞","dark"===e&&" 🌚",o.createElement("h3",null,"Sample Paragraph"),o.createElement("p",null,"In this example, the custom theme context lives inside of the parent component, ThemesScene. The implementation is very basic and not as easily reusable as the Advanced Theme Context. However, it gets the job done and provides a basic example of React Context."),o.createElement("h3",null,"Sample Link"),o.createElement("p",null,o.createElement(c,{to:"/advancedThemes"},"See the advanced themes context implementation")))},oe=r.div`
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
`,ce=r.label`
  display: block;
`,se=s.exports.createContext(void 0),ie=()=>{const[e,t]=s.exports.useState("light");return o.createElement(se.Provider,{value:{theme:e,setTheme:t}},o.createElement(E,{theme:ne[e]},o.createElement(re,null)))},me=s.exports.createContext(void 0),he=({children:e})=>{const[t,l]=s.exports.useState("light");return o.createElement(me.Provider,{value:{theme:t,setTheme:l}},o.createElement(E,{theme:ne[t]},e))},ue=()=>{const{theme:e,setTheme:t}=(()=>{const e=s.exports.useContext(me);if(void 0===e)throw new Error("useAdvancedThemeContext must be used within an AdvancedThemeContextProvider");return e})();return o.createElement(pe,null,o.createElement("h2",null,"Themes"),o.createElement(de,{htmlFor:"theme"},"Choose a Theme: "),o.createElement("select",{id:"theme",name:"theme",defaultValue:e,onChange:e=>t(e.currentTarget.value)},o.createElement("option",{value:"light"},"Light"),o.createElement("option",{value:"dark"},"Dark")),"light"===e&&" 🌞","dark"===e&&" 🌚",o.createElement("h3",null,"Sample Paragraph"),o.createElement("p",null,"In this example, the context of the custom theme provider is wrapped into a separate file with safeguards (helpful error messaging) against usage outside the provider. It requires little to no implementation when utilizing the context within a child other than using the custom useAdvancedThemeContext hook. The advantage of this implementation is ease of use, composability, and reusability of the context as well as the aforementioned safeguard."),o.createElement("h3",null,"Sample Link"),o.createElement("p",null,o.createElement(c,{to:"/themes"},"See the basic themes context implementation")))},pe=r.div`
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
`,de=r.label`
  display: block;
`,Ee=()=>o.createElement(he,null,o.createElement(ue,null)),ge=()=>o.createElement(xe,null,o.createElement(g,{basename:"/hooks-playground"},o.createElement("div",null,o.createElement("nav",null,o.createElement(c,{to:"/"},"Home")," | ",o.createElement(I,null))),o.createElement(x,null,o.createElement(f,{path:"/colors"},o.createElement(ae,null)),o.createElement(f,{path:"/countries"},o.createElement(_,null)),o.createElement(f,{path:"/states"},o.createElement(S,null)),o.createElement(f,{path:"/tictactoe"},o.createElement(H,null)),o.createElement(f,{path:"/themes"},o.createElement(ie,null)),o.createElement(f,{path:"/advancedThemes"},o.createElement(Ee,null)),o.createElement(f,{path:"/"},o.createElement(v,null))))),xe=r.div`
  width: 100%;
`;y.render(o.createElement(o.StrictMode,null,o.createElement(ge,null)),document.getElementById("root"));
