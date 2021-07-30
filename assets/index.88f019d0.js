var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n;import{q as l,R as o,L as i,C as c,u as s,g as m,a as d,A as u,I as p,b as h,G as g,$ as E,B as f,S as x,c as b,d as y}from"./vendor.c092237c.js";const v=()=>o.createElement(o.Fragment,null,o.createElement(k,null,"Hooks Playground",o.createElement(C,null,o.createElement(T,{src:"/hooks-playground/assets/hook.3bb9184a.svg"}))),o.createElement("hr",null),o.createElement("p",null,"Yarrrrr maties. There be many hooks examples in here. Ye be warned."),o.createElement("h2",null,"Examples"),o.createElement(w,null,o.createElement("li",null,o.createElement(i,{to:"/colors"},"Colors")," - GraphQL Colors API w/ pagination"),o.createElement("li",null,o.createElement(i,{to:"/countries"},"Countries")," - Basic async useEffect w/ countries API"),o.createElement("li",null,o.createElement(i,{to:"/states"},"The United States")," - Custom useAsyncHook w/ U.S. API"),o.createElement("li",null,o.createElement(i,{to:"/tictactoe"},"Tic Tac Toe")," - Tic Tac Toe game with useState and canvas"),o.createElement("li",null,o.createElement(i,{to:"/themes"},"Themes")," - Theme switcher with basic contexts"),o.createElement("li",null,o.createElement(i,{to:"/advancedThemes"},"Advanced Themes")," - Theme switcher with advanced contexts"),o.createElement("li",null,o.createElement(i,{to:"/orderTape"},"Order Tape")," - Fast Food Order Tape using useMemo"),o.createElement("li",null,o.createElement(i,{to:"/clock"},"React Clock")," - Clock using useInterval hook"),o.createElement("li",null,o.createElement(i,{to:"/cssClock"},"CSS Clock")," - Clock using css animations"))),w=l.ul`
  list-style: none;
  li {
    margin: 5px 0;
  }
`,k=l.h1`
  display: flex;
  justify-content: space-between;
`,C=l.div`
  width: 100px;
  display: flex;
  justify-content: center;
`,T=l.img`
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
`,S=e=>o.createElement("img",((e,l)=>{for(var o in l||(l={}))r.call(l,o)&&a(e,o,l[o]);if(t)for(var o of t(l))n.call(l,o)&&a(e,o,l[o]);return e})({onError:e=>{e.currentTarget.src=""}},e)),$=()=>{const[e,t]=c.exports.useState([]);var r,n;return r=async()=>{const e=await fetch("https://api.sampleapis.com/the-states/the-states"),r=await e.json();t(r)},n=[],c.exports.useEffect((()=>{r().catch((e=>{throw console.error(e),e}))}),n),o.createElement(O,null,e.map((e=>o.createElement("li",{key:e.id},o.createElement(F,null,o.createElement(P,{src:e.flag,alt:`${e.name}'s flag`}),o.createElement("h2",null,e.name," (",e.abv,")")),o.createElement(D,null,o.createElement("p",null,"Capital: ",e.capital),o.createElement("p",null,"Largest City: ",e.largest_city),o.createElement("p",null,"Population: ",e.population),o.createElement("p",null,"Joined the Union: ",e.admitted_to_union))))))},O=l.ul`
  list-style: none;
`,F=l.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  h2 {
    margin: 0 5px;
  }
`,D=l.div`
  margin-left: calc(2em + 25px);
`,P=l(S)`
  width: 2em;
  margin-right: 20px;
`,I=()=>{const e=s();return o.createElement(j,{onClick:()=>e.goBack()},"Back")},j=l.a`
  cursor: pointer;
`,N=()=>{const[e,t]=c.exports.useState([]),r=e.sort(((e,t)=>e.name<t.name?-1:e.name>t.name?1:0));return c.exports.useEffect((()=>{(async()=>{const e=await fetch("https://api.sampleapis.com/countries/countries"),r=await e.json();t(r)})()}),[]),o.createElement(A,null,r.map((e=>{var t;return o.createElement("li",{key:e.id},o.createElement(M,null,o.createElement(_,null,o.createElement(H,{src:e.media.flag})),o.createElement(G,null,o.createElement("h2",null,e.name),o.createElement(R,null,o.createElement("li",null,o.createElement("strong",null,"Capital:   "),e.capital),o.createElement("li",null,o.createElement("strong",null,"Population:   "),(null==(t=e.population)?void 0:t.toLocaleString())||"N/A"),o.createElement("li",null,o.createElement("strong",null,"Currency:   "),e.currency||"N/A"))),e.media.emblem&&o.createElement(L,null,o.createElement(z,{src:e.media.emblem}))))})))},A=l.ul`
  list-style: none;
  padding-left: 0;
`,M=l.div`
  display: flex;
  padding: 5px 0;
`,_=l.div`
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
`,H=l(S)`
  border: 2px solid #fff;
  width: 200px;
  min-width: 200px;
  min-height: 100px;
  height: auto;
`,L=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  min-height: 100%;
`,z=l(S)`
  max-height: 100px;
`,G=l.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 20px;
  h2 {
    margin: 15px 0;
  }
`,R=l.ul`
  list-style: none;
  padding-left: 0;
`,X=Array(9).fill(""),B={first_row:{cells:[0,1,2],coords:[[10,26],[290,26]]},second_row:{cells:[3,4,5],coords:[[10,76],[290,76]]},third_row:{cells:[6,7,8],coords:[[10,126],[290,126]]},first_column:{cells:[0,3,6],coords:[[50,10],[50,144]]},second_column:{cells:[1,4,7],coords:[[150,10],[150,144]]},third_column:{cells:[2,5,8],coords:[[250,10],[250,144]]},backward_diagonal:{cells:[0,4,8],coords:[[12,6],[290,144]]},forward_diagonal:{cells:[2,4,6],coords:[[12,144],[290,6]]}},W=()=>{const e=c.exports.useRef(null),[t,r]=c.exports.useState(X),[n,a]=c.exports.useState("X"),[l,i]=c.exports.useState();c.exports.useEffect((()=>{const t=e.current;if(l&&t){const e=B[l.location].coords[0],r=B[l.location].coords[1],n=t.getContext("2d");n.strokeStyle="red",n.lineWidth=3,n.beginPath(),n.moveTo(...e),n.lineTo(...r),n.stroke()}}),[l]);const s=(e,t)=>{for(const[r,{cells:n}]of Object.entries(B))if(n.every((r=>e[r]===t)))return{play:t,location:r}},m=!l&&t.every((e=>!!e)),d=!!l||m;return o.createElement(o.Fragment,null,o.createElement("h2",null,"Tic Tac Toe"),o.createElement(U,null,o.createElement("tbody",null,o.createElement("tr",null,t.map(((e,c)=>o.createElement(V,{disabled:!!t[c]||d,onClick:()=>{t[c]||((e,n)=>{if(l)return;const o=[...t.slice(0,e),n,...t.slice(e+1)],c=s(o,n);c&&i(c),r(o),a((e=>"X"===e?"O":"X"))})(c,n)},key:c},e)))))),l&&o.createElement(o.Fragment,null,o.createElement(q,{ref:e}),o.createElement("p",null,"The Winner is ",l.play,"!"),o.createElement("p",null,"They won on the ",l.location.split("_").join(" "),".")),m&&o.createElement("p",null,"It's a Cat's Game! No Winner!"),d&&o.createElement("p",null,o.createElement(Y,{onClick:()=>(a("X"),r(X),void i(void 0))},"Start Over")))},q=l.canvas`
  display: block;
  position: relative;
  top: -126px;
  margin-bottom: -126px;
  height: 126px;
  width: 126px;
`,U=l.table`
  margin-top: 20px;
  border-collapse: collapse;
  width: 128px;
  min-width: 160px;
  display: block;
  user-select: none;
`,V=l.td`
  display: inline-block;
  height: 20px;
  width: 20px;
  padding: 10px;
  border: 1px solid white;
  text-align: center;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
`,Y=l.a`
  cursor: pointer;
`,Q=m`
  query GetAllColors($page: Int!, $perPage: Int!) {
    allColors(page: $page, perPage: $perPage) {
      name
      hex
    }
  }
`,J=()=>{const[e,t]=c.exports.useState(1),{loading:r,error:n,data:a,fetchMore:l}=d(Q,{variables:{page:0,perPage:25}});return r?o.createElement("p",null,"Loading..."):n?o.createElement("p",null,"Error :("):o.createElement(K,null,o.createElement("tbody",null,a.allColors.map((({name:e,hex:t})=>o.createElement(Z,{key:t,hex:t},o.createElement(te,null,e)))),e>0&&o.createElement(ee,{key:"NEXT_PAGE",hex:"#FFFFFF",onClick:()=>(l({variables:{page:e,perPage:25},updateQuery:(e,{fetchMoreResult:r})=>r.allColors.length?{allColors:[...e.allColors,...r.allColors]}:(t(0),e)}),void t(e+1))},o.createElement(te,null,"GET MORE COLORS"))))},K=l.table`
  width: 100%;
`,Z=l.tr`
  background-color: ${({hex:e})=>e};
  color: ${({hex:e})=>re(e)};
`,ee=l(Z)`
  text-align: center;
  cursor: pointer;
`,te=l.td`
  padding: 10px;
  font-weight: 500;
`,re=e=>(e=e.replace("#",""),(299*parseInt(e.substr(0,2),16)+587*parseInt(e.substr(2,2),16)+114*parseInt(e.substr(4,2),16))/1e3>=128?"#000000":"#FFFFFF"),ne=new u({uri:"https://api.sampleapis.com/css-color-names/graphql",cache:new p}),ae=()=>o.createElement(h,{client:ne},o.createElement(J,null)),le={light:{colors:{background:"WhiteSmoke",primaryColor:"DimGray",secondaryColor:"DarkSlateGray",hover:"LightSlateGray"}},dark:{colors:{background:"DimGray",primaryColor:"WhiteSmoke",secondaryColor:"Azure",hover:"LavenderBlush"}}},oe=()=>{const{theme:e,setTheme:t}=c.exports.useContext(se);return o.createElement(ie,null,o.createElement("h2",null,"Themes"),o.createElement(ce,{htmlFor:"theme"},"Choose a Theme: "),o.createElement("select",{id:"theme",name:"theme",defaultValue:e,onChange:e=>t(e.currentTarget.value)},o.createElement("option",{value:"light"},"Light"),o.createElement("option",{value:"dark"},"Dark")),"light"===e&&" 🌞","dark"===e&&" 🌚",o.createElement("h3",null,"Sample Paragraph"),o.createElement("p",null,"In this example, the custom theme context lives inside of the parent component, ThemesScene. The implementation is very basic and not as easily reusable as the Advanced Theme Context. However, it gets the job done and provides a basic example of React Context."),o.createElement("h3",null,"Sample Link"),o.createElement("p",null,o.createElement(i,{to:"/advancedThemes"},"See the advanced themes context implementation")))},ie=l.div`
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
`,ce=l.label`
  display: block;
`,se=c.exports.createContext(void 0),me=()=>{const[e,t]=c.exports.useState("light");return o.createElement(se.Provider,{value:{theme:e,setTheme:t}},o.createElement(g,{theme:le[e]},o.createElement(oe,null)))},de=c.exports.createContext(void 0),ue=({children:e})=>{const[t,r]=c.exports.useState("light");return o.createElement(de.Provider,{value:{theme:t,setTheme:r}},o.createElement(g,{theme:le[t]},e))},pe=()=>{const{theme:e,setTheme:t}=(()=>{const e=c.exports.useContext(de);if(void 0===e)throw new Error("useAdvancedThemeContext must be used within an AdvancedThemeContextProvider");return e})();return o.createElement(he,null,o.createElement("h2",null,"Themes"),o.createElement(ge,{htmlFor:"theme"},"Choose a Theme: "),o.createElement("select",{id:"theme",name:"theme",defaultValue:e,onChange:e=>t(e.currentTarget.value)},o.createElement("option",{value:"light"},"Light"),o.createElement("option",{value:"dark"},"Dark")),"light"===e&&" 🌞","dark"===e&&" 🌚",o.createElement("h3",null,"Sample Paragraph"),o.createElement("p",null,"In this example, the context of the custom theme provider is wrapped into a separate file with safeguards (helpful error messaging) against usage outside the provider. It requires little to no implementation when utilizing the context within a child other than using the custom useAdvancedThemeContext hook. The advantage of this implementation is ease of use, composability, and reusability of the context as well as the aforementioned safeguard."),o.createElement("h3",null,"Sample Link"),o.createElement("p",null,o.createElement(i,{to:"/themes"},"See the basic themes context implementation")))},he=l.div`
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
`,ge=l.label`
  display: block;
`,Ee=()=>o.createElement(ue,null,o.createElement(pe,null)),fe=({number:e,price:t,item:r,type:n,removeOrder:a})=>o.createElement(be,null,o.createElement("span",null,e),o.createElement(ye,null,r),o.createElement(ve,{type:n},t),o.createElement("button",{onClick:a},"Complete")),xe=({type:e})=>o.createElement(be,null,o.createElement("span",null,"Order"),o.createElement(ye,null,"Item"),o.createElement(ve,{type:e},"Price"),o.createElement("span",null,"Complete")),be=l.div`
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
`,ye=l.div`
  flex: 1;
  text-align: right;
  color: #fff;
  padding-right: 25px;
`,ve=l.span`
  flex: 1;
  text-align: left;
  color: ${({type:e})=>"togo"===e?"#fae52d":"#30bb37"};
  padding-left: 25px;
`,we=({hereOrders:e,togoOrders:t,removeHereOrder:r,removeTogoOrder:n})=>{const a=c.exports.useMemo((()=>e.map((({id:e,item:t,price:n})=>o.createElement(fe,{key:e,number:e,price:n,item:t,type:"here",removeOrder:()=>{r(e)}})))),[e]),l=c.exports.useMemo((()=>t.map((({id:e,item:t,price:r})=>o.createElement(fe,{key:e,number:e,price:r,item:t,type:"togo",removeOrder:()=>{n(e)}})))),[t]);return o.createElement(o.Fragment,null,!!l.length&&o.createElement(o.Fragment,null,o.createElement("h3",null,"Togo Orders"),o.createElement(xe,{type:"togo"}),o.createElement("br",null),l),!!t.length&&!!e.length&&o.createElement(ke,null),!!a.length&&o.createElement(o.Fragment,null,o.createElement("h3",null,"Here Orders"),o.createElement(xe,{type:"here"}),o.createElement("br",null),a))},ke=l.hr`
  border-color: #333;
  width: 100%;
`,Ce=e=>({id:e.toString().padStart(4,"0"),item:(1+Math.random()).toString().slice(2,4),price:(5+5*Math.random()).toString().slice(0,4)}),Te=()=>{const[e,t]=c.exports.useState([]),[r,n]=c.exports.useState([]),[a,l]=c.exports.useState(0);return o.createElement(Se,null,o.createElement(Oe,null,o.createElement($e,{onClick:()=>{t((e=>[...e,Ce(a)].sort(((e,t)=>Number(t.id)-Number(e.id))))),l((e=>e+1))},orderType:"here"},"Here"),o.createElement($e,{onClick:()=>{n((e=>[...e,Ce(a)].sort(((e,t)=>Number(t.id)-Number(e.id))))),l((e=>e+1))},orderType:"togo"},"Togo")),o.createElement(we,{hereOrders:e,togoOrders:r,removeHereOrder:e=>{t((t=>t.filter((t=>t.id!==e)).sort(((e,t)=>Number(t.id)-Number(e.id))))),l((e=>e+1))},removeTogoOrder:e=>{n((t=>t.filter((t=>t.id!==e)).sort(((e,t)=>Number(t.id)-Number(e.id))))),l((e=>e+1))}}))},Se=l.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`,$e=l.button`
  background-color: ${({orderType:e})=>"togo"===e?"#fae52d":"#30bb37"};
  border: none;
  color: #fff;
  width: 250px;
  padding: 10px;
  @media screen and (max-width: 501px) {
    flex: 1;
    width: 100%;
  }
`,Oe=l.div`
  margin: 20px 0;
  @media screen and (max-width: 501px) {
    display: flex;
    width: 100%;
  }
`,Fe=l.div`
  height: 320px;
  width: 320px;
  background: linear-gradient(135deg, #666 0%, #444 60%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`,De=l.div`
  height: 300px;
  width: 300px;
  background: linear-gradient(135deg, #fafafa 0%, #eeeeee 60%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .hand {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    width: 0;

    &:before,
    &:after {
      content: '';
      margin: 0;
    }
    &:after {
      visibility: hidden;
    }
  }

  .hour.hand {
    &:before,
    &:after {
      height: 60px;
      width: 3px;
      background: white;
      border: 2px solid black;
      border-top: 10px solid black;
      border-bottom: 20px solid black;
    }
  }

  .minute.hand {
    &:before,
    &:after {
      height: 82px;
      width: 2px;
      background: white;
      border: 2px solid black;
      border-top: 10px solid black;
      border-bottom: 25px solid black;
    }
  }

  .second.hand {
    &:before,
    &:after {
      height: 150px;
      width: 2px;
      background: red;
    }
    &:after {
      height: 90px;
    }
  }
`,Pe=l.div`
  position: absolute;
  width: 5px;
  height: 5px;
  background: white;
  border-radius: 50%;
  border: 5px solid red;
`,Ie=()=>o.createElement(o.Fragment,null,o.createElement(Ne,null,Array(60).fill("").map(((e,t)=>o.createElement(Ae,{number:t+1,key:t+1})))),o.createElement(je,null,Array(12).fill("").map(((e,t)=>o.createElement(Me,{number:t+1,key:t+1},o.createElement("span",null,t+1)))))),je=l.div`
  position: absolute;
  width: 260px;
  height: 260px;
  top: 20px;
  left: 20px;
  font-size: 18px;
  background: #eee;
  background: linear-gradient(135deg, #fafafa 0%, #eeeeee 60%);
  box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.05);
  border-radius: 50%;
`,Ne=l.div`
  position: absolute;
  width: 290px;
  height: 290px;
  top: 5px;
  left: 5px;
  font-size: 18px;
  background: #cfcfcf;
  background: linear-gradient(135deg, #cccccc 0%, #fafafa 60%);
  border-radius: 50%;
`,Ae=l.div`
  font-weight: bold;
  width: 290px;
  height: 290px;
  position: absolute;
  color: black;
  transform: rotate(${({number:e})=>6*e}deg);

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 2px;
    left: 50%;
    transform: translateX(-50%);
  }

  &:before {
    content: '|';
    font-size: ${({number:e})=>e%5==0?"12px":"10px"};
    font-weight: ${({number:e})=>e%5==0?"bold":"normal"};
    line-height: 12px;
    color: #666;
  }
  &:after {
    bottom: 2px;
    top: auto;
  }
`,Me=l.div`
  font-weight: bold;
  width: 190px;
  height: 190px;
  position: absolute;
  top: 35px;
  left: 35px;
  color: black;

  transform: rotate(${({number:e})=>30*(e+1.52)}deg);
  span {
    display: inline-block;
    width: 20px;
    text-align: center;
    transform: rotate(${({number:e})=>-30*(e+1.52)}deg);
  }
`,_e=l.div`
  height: 100%;
  width: 100%;
  position: absolute;
  border-radius: 50%;
  background: #fff;
  box-shadow: inset -1px -1px 10px rgba(0, 0, 0, 0.5);
  background: -moz-radial-gradient(
    bottom right,
    rgba(255, 255, 255, 0.75) 20%,
    rgba(255, 255, 255, 0.2) 60%
  );
  background: radial-gradient(
    to top left,
    rgba(255, 255, 255, 0.75) 20%,
    rgba(255, 255, 255, 0.2) 60%
  );
  background: -webkit-radial-gradient(
    bottom right,
    rgba(255, 255, 255, 0.75) 20%,
    rgba(255, 255, 255, 0.2) 60%
  );
`,He=l.div`
  position: absolute;
  transform: translateX(80px) translateY(2px);
  color: #000;
  background: #fff;
  font-size: 14px;
  border: 2px solid white;
  width: 20px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.6);
`,Le=["smooth",1,2,4,8,12],ze=()=>{const[e,t]=c.exports.useState(new Date),[r,n]=c.exports.useState(1),[a,l]=c.exports.useState(!1);c.exports.useEffect((()=>{l(!1)}),[r]),c.exports.useEffect((()=>{a||(t(new Date((new Date).setMilliseconds(0))),l(!0))}),[a]);const i=e.getDate(),s=e.getHours(),m=e.getMinutes(),d=e.getSeconds(),u=30*(s+(m+d/60)/60),p=6*(m+d/60),h=6*(d+e.getMilliseconds()/1e3);return o.createElement(o.Fragment,null,o.createElement(Re,null,o.createElement("select",{defaultValue:r,onChange:e=>n(e.target.value)},Le.map((e=>o.createElement("option",{key:e,value:e},e," bps"))))),a&&o.createElement(Fe,null,o.createElement(De,null,o.createElement(Ge,{hourDegrees:u,minuteDegrees:p,secondDegrees:h,bps:r}),o.createElement(Ie,null),o.createElement(He,{day:i},i),o.createElement(Xe,{className:"hour hand",degrees:u}),o.createElement(Be,{className:"minute hand",degrees:p}),o.createElement(We,{className:"second hand",degrees:h}),o.createElement(Pe,null),o.createElement(_e,null))))},Ge=E`
  .hand {
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .second.hand {
    animation-timing-function: ${({bps:e})=>"smooth"===e?"linear":`steps(${60*e}, end)`}
  }

  @keyframes rotateHours {
    from {
      transform: rotate(${({hourDegrees:e})=>e}deg);
    }
    to {
      transform: rotate(${({hourDegrees:e})=>e+360}deg);
    }
  }
  @keyframes rotateMinutes {
    from {
      transform: rotate(${({minuteDegrees:e})=>e}deg);
    }
    to {
      transform: rotate(${({minuteDegrees:e})=>e+360}deg);
    }
  }
  @keyframes rotateSeconds {
    from {
      transform: rotate(${({secondDegrees:e})=>e}deg);
    }
    to {
      transform: rotate(${({secondDegrees:e})=>e+360}deg);
    }
  }
`,Re=l.div`
  position: relative;
  z-index: 2;
`,Xe=l.div`
  animation-name: rotateHours;
  animation-duration: 43200s;
  transform: rotate(${({degrees:e})=>e}deg);
`,Be=l.div`
  animation-name: rotateMinutes;
  animation-duration: 3600s;
  transform: rotate(${({degrees:e})=>e}deg);
`,We=l.div`
  animation-name: rotateSeconds;
  animation-duration: 60s;
  transform: rotate(${({degrees:e})=>e}deg);
`,qe=({time:e=new Date})=>{const t=e.getDate(),r=e.getHours(),n=e.getMinutes(),a=e.getSeconds(),l=30*(r+(n+a/60)/60),i=6*(n+a/60),c=6*a;return o.createElement(Fe,null,o.createElement(De,null,o.createElement(Ie,null),o.createElement(He,{day:t},t),o.createElement("div",{className:"hour hand",style:{transform:`rotate(${l}deg`}}),o.createElement("div",{className:"minute hand",style:{transform:`rotate(${i}deg`}}),o.createElement("div",{className:"second hand",style:{transform:`rotate(${c}deg`,transition:""+(0===c?"none":"transform .04s cubic-bezier(1,1.5,1,1.5)")}}),o.createElement(Pe,null),o.createElement(_e,null)))},Ue=()=>{const[e,t]=c.exports.useState(new Date);return((e,t)=>{const r=c.exports.useRef((()=>{}));c.exports.useEffect((()=>{r.current=e}),[e]),c.exports.useEffect((()=>{if(null!==t){let e=setInterval((function(){r.current()}),t);return()=>clearInterval(e)}}),[t])})((()=>{t(new Date)}),1e3),o.createElement(qe,{time:e})},Ve=()=>o.createElement(Qe,null,o.createElement(f,{basename:"/hooks-playground"},o.createElement(Ye,null,o.createElement(i,{to:"/"},"Home")," | ",o.createElement(I,null)),o.createElement(x,null,o.createElement(b,{path:"/colors"},o.createElement(ae,null)),o.createElement(b,{path:"/countries"},o.createElement(N,null)),o.createElement(b,{path:"/states"},o.createElement($,null)),o.createElement(b,{path:"/tictactoe"},o.createElement(W,null)),o.createElement(b,{path:"/themes"},o.createElement(me,null)),o.createElement(b,{path:"/advancedThemes"},o.createElement(Ee,null)),o.createElement(b,{path:"/orderTape"},o.createElement(Te,null)),o.createElement(b,{path:"/clock"},o.createElement(Ue,null)),o.createElement(b,{path:"/cssClock"},o.createElement(ze,null)),o.createElement(b,{path:"/"},o.createElement(v,null))))),Ye=l.nav`
  z-index: 999;
  position: relative;
`,Qe=l.div`
  width: 100%;
`;y.render(o.createElement(o.StrictMode,null,o.createElement(Ve,null)),document.getElementById("root"));
