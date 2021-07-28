var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,l=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n;import{q as a,R as o,L as i,C as c,u as s,g as m,a as d,A as u,I as p,b as h,G as g,$ as E,B as f,S as x,c as b,d as y}from"./vendor.c092237c.js";const v=()=>o.createElement(o.Fragment,null,o.createElement(k,null,"Hooks Playground",o.createElement(C,null,o.createElement(T,{src:"/hooks-playground/assets/hook.3bb9184a.svg"}))),o.createElement("hr",null),o.createElement("p",null,"Yarrrrr maties. There be many hooks examples in here. Ye be warned."),o.createElement("h2",null,"Examples"),o.createElement(w,null,o.createElement("li",null,o.createElement(i,{to:"/colors"},"Colors")," - GraphQL Colors API w/ pagination"),o.createElement("li",null,o.createElement(i,{to:"/countries"},"Countries")," - Basic async useEffect w/ countries API"),o.createElement("li",null,o.createElement(i,{to:"/states"},"The United States")," - Custom useAsyncHook w/ U.S. API"),o.createElement("li",null,o.createElement(i,{to:"/tictactoe"},"Tic Tac Toe")," - Tic Tac Toe game with useState and canvas"),o.createElement("li",null,o.createElement(i,{to:"/themes"},"Themes")," - Theme switcher with basic contexts"),o.createElement("li",null,o.createElement(i,{to:"/advancedThemes"},"Advanced Themes")," - Theme switcher with advanced contexts"),o.createElement("li",null,o.createElement(i,{to:"/orderTape"},"Order Tape")," - Fast Food Order Tape using useMemo"),o.createElement("li",null,o.createElement(i,{to:"/clock"},"React Clock")," - Clock using useInterval hook"),o.createElement("li",null,o.createElement(i,{to:"/cssClock"},"CSS Clock")," - Clock using css animations"))),w=a.ul`
  list-style: none;
  li {
    margin: 5px 0;
  }
`,k=a.h1`
  display: flex;
  justify-content: space-between;
`,C=a.div`
  width: 100px;
  display: flex;
  justify-content: center;
`,T=a.img`
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
`,S=e=>o.createElement("img",((e,a)=>{for(var o in a||(a={}))r.call(a,o)&&l(e,o,a[o]);if(t)for(var o of t(a))n.call(a,o)&&l(e,o,a[o]);return e})({onError:e=>{e.currentTarget.src=""}},e)),$=()=>{const[e,t]=c.exports.useState([]);var r,n;return r=async()=>{const e=await fetch("https://api.sampleapis.com/the-states/the-states"),r=await e.json();t(r)},n=[],c.exports.useEffect((()=>{r().catch((e=>{throw console.error(e),e}))}),n),o.createElement(O,null,e.map((e=>o.createElement("li",{key:e.id},o.createElement(F,null,o.createElement(I,{src:e.flag,alt:`${e.name}'s flag`}),o.createElement("h2",null,e.name," (",e.abv,")")),o.createElement(P,null,o.createElement("p",null,"Capital: ",e.capital),o.createElement("p",null,"Largest City: ",e.largest_city),o.createElement("p",null,"Population: ",e.population),o.createElement("p",null,"Joined the Union: ",e.admitted_to_union))))))},O=a.ul`
  list-style: none;
`,F=a.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  h2 {
    margin: 0 5px;
  }
`,P=a.div`
  margin-left: calc(2em + 25px);
`,I=a(S)`
  width: 2em;
  margin-right: 20px;
`,N=()=>{const e=s();return o.createElement(A,{onClick:()=>e.goBack()},"Back")},A=a.a`
  cursor: pointer;
`,j=()=>{const[e,t]=c.exports.useState([]),r=e.sort(((e,t)=>e.name<t.name?-1:e.name>t.name?1:0));return c.exports.useEffect((()=>{(async()=>{const e=await fetch("https://api.sampleapis.com/countries/countries"),r=await e.json();t(r)})()}),[]),o.createElement(D,null,r.map((e=>{var t;return o.createElement("li",{key:e.id},o.createElement(M,null,o.createElement(_,null,o.createElement(H,{src:e.media.flag})),o.createElement(z,null,o.createElement("h2",null,e.name),o.createElement(R,null,o.createElement("li",null,o.createElement("strong",null,"Capital:   "),e.capital),o.createElement("li",null,o.createElement("strong",null,"Population:   "),(null==(t=e.population)?void 0:t.toLocaleString())||"N/A"),o.createElement("li",null,o.createElement("strong",null,"Currency:   "),e.currency||"N/A"))),e.media.emblem&&o.createElement(L,null,o.createElement(G,{src:e.media.emblem}))))})))},D=a.ul`
  list-style: none;
  padding-left: 0;
`,M=a.div`
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
`,H=a(S)`
  border: 2px solid #fff;
  width: 200px;
  min-width: 200px;
  min-height: 100px;
  height: auto;
`,L=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  min-height: 100%;
`,G=a(S)`
  max-height: 100px;
`,z=a.div`
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
`,B=Array(9).fill(""),X={first_row:{cells:[0,1,2],coords:[[10,26],[290,26]]},second_row:{cells:[3,4,5],coords:[[10,76],[290,76]]},third_row:{cells:[6,7,8],coords:[[10,126],[290,126]]},first_column:{cells:[0,3,6],coords:[[50,10],[50,144]]},second_column:{cells:[1,4,7],coords:[[150,10],[150,144]]},third_column:{cells:[2,5,8],coords:[[250,10],[250,144]]},backward_diagonal:{cells:[0,4,8],coords:[[12,6],[290,144]]},forward_diagonal:{cells:[2,4,6],coords:[[12,144],[290,6]]}},W=()=>{const e=c.exports.useRef(null),[t,r]=c.exports.useState(B),[n,l]=c.exports.useState("X"),[a,i]=c.exports.useState();c.exports.useEffect((()=>{const t=e.current;if(a&&t){const e=X[a.location].coords[0],r=X[a.location].coords[1],n=t.getContext("2d");n.strokeStyle="red",n.lineWidth=3,n.beginPath(),n.moveTo(...e),n.lineTo(...r),n.stroke()}}),[a]);const s=(e,t)=>{for(const[r,{cells:n}]of Object.entries(X))if(n.every((r=>e[r]===t)))return{play:t,location:r}},m=!a&&t.every((e=>!!e)),d=!!a||m;return o.createElement(o.Fragment,null,o.createElement("h2",null,"Tic Tac Toe"),o.createElement(U,null,o.createElement("tbody",null,o.createElement("tr",null,t.map(((e,c)=>o.createElement(Q,{disabled:!!t[c]||d,onClick:()=>{t[c]||((e,n)=>{if(a)return;const o=[...t.slice(0,e),n,...t.slice(e+1)],c=s(o,n);c&&i(c),r(o),l((e=>"X"===e?"O":"X"))})(c,n)},key:c},e)))))),a&&o.createElement(o.Fragment,null,o.createElement(q,{ref:e}),o.createElement("p",null,"The Winner is ",a.play,"!"),o.createElement("p",null,"They won on the ",a.location.split("_").join(" "),".")),m&&o.createElement("p",null,"It's a Cat's Game! No Winner!"),d&&o.createElement("p",null,o.createElement(V,{onClick:()=>(l("X"),r(B),void i(void 0))},"Start Over")))},q=a.canvas`
  display: block;
  position: relative;
  top: -126px;
  margin-bottom: -126px;
  height: 126px;
  width: 126px;
`,U=a.table`
  margin-top: 20px;
  border-collapse: collapse;
  width: 128px;
  min-width: 160px;
  display: block;
  user-select: none;
`,Q=a.td`
  display: inline-block;
  height: 20px;
  width: 20px;
  padding: 10px;
  border: 1px solid white;
  text-align: center;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
`,V=a.a`
  cursor: pointer;
`,Y=m`
  query GetAllColors($page: Int!, $perPage: Int!) {
    allColors(page: $page, perPage: $perPage) {
      name
      hex
    }
  }
`,J=()=>{const[e,t]=c.exports.useState(1),{loading:r,error:n,data:l,fetchMore:a}=d(Y,{variables:{page:0,perPage:25}});return r?o.createElement("p",null,"Loading..."):n?o.createElement("p",null,"Error :("):o.createElement(K,null,o.createElement("tbody",null,l.allColors.map((({name:e,hex:t})=>o.createElement(Z,{key:t,hex:t},o.createElement(te,null,e)))),e>0&&o.createElement(ee,{key:"NEXT_PAGE",hex:"#FFFFFF",onClick:()=>(a({variables:{page:e,perPage:25},updateQuery:(e,{fetchMoreResult:r})=>r.allColors.length?{allColors:[...e.allColors,...r.allColors]}:(t(0),e)}),void t(e+1))},o.createElement(te,null,"GET MORE COLORS"))))},K=a.table`
  width: 100%;
`,Z=a.tr`
  background-color: ${({hex:e})=>e};
  color: ${({hex:e})=>re(e)};
`,ee=a(Z)`
  text-align: center;
  cursor: pointer;
`,te=a.td`
  padding: 10px;
  font-weight: 500;
`,re=e=>(e=e.replace("#",""),(299*parseInt(e.substr(0,2),16)+587*parseInt(e.substr(2,2),16)+114*parseInt(e.substr(4,2),16))/1e3>=128?"#000000":"#FFFFFF"),ne=new u({uri:"https://api.sampleapis.com/css-color-names/graphql",cache:new p}),le=()=>o.createElement(h,{client:ne},o.createElement(J,null)),ae={light:{colors:{background:"WhiteSmoke",primaryColor:"DimGray",secondaryColor:"DarkSlateGray",hover:"LightSlateGray"}},dark:{colors:{background:"DimGray",primaryColor:"WhiteSmoke",secondaryColor:"Azure",hover:"LavenderBlush"}}},oe=()=>{const{theme:e,setTheme:t}=c.exports.useContext(se);return o.createElement(ie,null,o.createElement("h2",null,"Themes"),o.createElement(ce,{htmlFor:"theme"},"Choose a Theme: "),o.createElement("select",{id:"theme",name:"theme",defaultValue:e,onChange:e=>t(e.currentTarget.value)},o.createElement("option",{value:"light"},"Light"),o.createElement("option",{value:"dark"},"Dark")),"light"===e&&" 🌞","dark"===e&&" 🌚",o.createElement("h3",null,"Sample Paragraph"),o.createElement("p",null,"In this example, the custom theme context lives inside of the parent component, ThemesScene. The implementation is very basic and not as easily reusable as the Advanced Theme Context. However, it gets the job done and provides a basic example of React Context."),o.createElement("h3",null,"Sample Link"),o.createElement("p",null,o.createElement(i,{to:"/advancedThemes"},"See the advanced themes context implementation")))},ie=a.div`
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
`,se=c.exports.createContext(void 0),me=()=>{const[e,t]=c.exports.useState("light");return o.createElement(se.Provider,{value:{theme:e,setTheme:t}},o.createElement(g,{theme:ae[e]},o.createElement(oe,null)))},de=c.exports.createContext(void 0),ue=({children:e})=>{const[t,r]=c.exports.useState("light");return o.createElement(de.Provider,{value:{theme:t,setTheme:r}},o.createElement(g,{theme:ae[t]},e))},pe=()=>{const{theme:e,setTheme:t}=(()=>{const e=c.exports.useContext(de);if(void 0===e)throw new Error("useAdvancedThemeContext must be used within an AdvancedThemeContextProvider");return e})();return o.createElement(he,null,o.createElement("h2",null,"Themes"),o.createElement(ge,{htmlFor:"theme"},"Choose a Theme: "),o.createElement("select",{id:"theme",name:"theme",defaultValue:e,onChange:e=>t(e.currentTarget.value)},o.createElement("option",{value:"light"},"Light"),o.createElement("option",{value:"dark"},"Dark")),"light"===e&&" 🌞","dark"===e&&" 🌚",o.createElement("h3",null,"Sample Paragraph"),o.createElement("p",null,"In this example, the context of the custom theme provider is wrapped into a separate file with safeguards (helpful error messaging) against usage outside the provider. It requires little to no implementation when utilizing the context within a child other than using the custom useAdvancedThemeContext hook. The advantage of this implementation is ease of use, composability, and reusability of the context as well as the aforementioned safeguard."),o.createElement("h3",null,"Sample Link"),o.createElement("p",null,o.createElement(i,{to:"/themes"},"See the basic themes context implementation")))},he=a.div`
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
`,ge=a.label`
  display: block;
`,Ee=()=>o.createElement(ue,null,o.createElement(pe,null)),fe=({number:e,price:t,item:r,type:n,removeOrder:l})=>o.createElement(be,null,o.createElement("span",null,e),o.createElement(ye,null,r),o.createElement(ve,{type:n},t),o.createElement("button",{onClick:l},"Complete")),xe=({type:e})=>o.createElement(be,null,o.createElement("span",null,"Order"),o.createElement(ye,null,"Item"),o.createElement(ve,{type:e},"Price"),o.createElement("span",null,"Complete")),be=a.div`
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
`,ve=a.span`
  flex: 1;
  text-align: left;
  color: ${({type:e})=>"togo"===e?"#fae52d":"#30bb37"};
  padding-left: 25px;
`,we=({hereOrders:e,togoOrders:t,removeHereOrder:r,removeTogoOrder:n})=>{const l=c.exports.useMemo((()=>e.map((({id:e,item:t,price:n})=>o.createElement(fe,{key:e,number:e,price:n,item:t,type:"here",removeOrder:()=>{r(e)}})))),[e]),a=c.exports.useMemo((()=>t.map((({id:e,item:t,price:r})=>o.createElement(fe,{key:e,number:e,price:r,item:t,type:"togo",removeOrder:()=>{n(e)}})))),[t]);return o.createElement(o.Fragment,null,!!a.length&&o.createElement(o.Fragment,null,o.createElement("h3",null,"Togo Orders"),o.createElement(xe,{type:"togo"}),o.createElement("br",null),a),!!t.length&&!!e.length&&o.createElement(ke,null),!!l.length&&o.createElement(o.Fragment,null,o.createElement("h3",null,"Here Orders"),o.createElement(xe,{type:"here"}),o.createElement("br",null),l))},ke=a.hr`
  border-color: #333;
  width: 100%;
`,Ce=e=>({id:e.toString().padStart(4,"0"),item:(1+Math.random()).toString().slice(2,4),price:(5+5*Math.random()).toString().slice(0,4)}),Te=()=>{const[e,t]=c.exports.useState([]),[r,n]=c.exports.useState([]),[l,a]=c.exports.useState(0);return o.createElement(Se,null,o.createElement(Oe,null,o.createElement($e,{onClick:()=>{t((e=>[...e,Ce(l)].sort(((e,t)=>Number(t.id)-Number(e.id))))),a((e=>e+1))},orderType:"here"},"Here"),o.createElement($e,{onClick:()=>{n((e=>[...e,Ce(l)].sort(((e,t)=>Number(t.id)-Number(e.id))))),a((e=>e+1))},orderType:"togo"},"Togo")),o.createElement(we,{hereOrders:e,togoOrders:r,removeHereOrder:e=>{t((t=>t.filter((t=>t.id!==e)).sort(((e,t)=>Number(t.id)-Number(e.id))))),a((e=>e+1))},removeTogoOrder:e=>{n((t=>t.filter((t=>t.id!==e)).sort(((e,t)=>Number(t.id)-Number(e.id))))),a((e=>e+1))}}))},Se=a.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`,$e=a.button`
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
`,Fe=a.div`
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
`,Pe=a.div`
  position: absolute;
  width: 5px;
  height: 5px;
  background: white;
  border-radius: 50%;
  border: 5px solid red;
`,Ie=()=>o.createElement(o.Fragment,null,o.createElement(Ae,null,Array(60).fill("").map(((e,t)=>o.createElement(je,{number:t+1,key:t+1})))),o.createElement(Ne,null,Array(12).fill("").map(((e,t)=>o.createElement(De,{number:t+1,key:t+1},o.createElement("span",null,t+1)))))),Ne=a.div`
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
`,Ae=a.div`
  position: absolute;
  width: 290px;
  height: 290px;
  top: 5px;
  left: 5px;
  font-size: 18px;
  background: #cfcfcf;
  background: linear-gradient(135deg, #cccccc 0%, #fafafa 60%);
  border-radius: 50%;
`,je=a.div`
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
`,De=a.div`
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
`,Me=({time:e=new Date})=>{const t=e.getHours(),r=e.getMinutes(),n=e.getSeconds(),l=30*(t+(r+n/60)/60),a=6*(r+n/60),i=6*(n+e.getMilliseconds()/1e3);return o.createElement(Fe,null,o.createElement(_e,{hourDegrees:l,minuteDegrees:a,secondDegrees:i}),o.createElement(Ie,null),o.createElement(He,{className:"hour hand",degrees:l}),o.createElement(Le,{className:"minute hand",degrees:a}),o.createElement(Ge,{className:"second hand",degrees:i}),o.createElement(Pe,null))},_e=E`
  .hand {
    animation-timing-function: linear;
    animation-iteration-count: infinite;
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
`,He=a.div`
  animation-name: rotateHours;
  animation-duration: 43200s;
  transform: rotate(${({degrees:e})=>e}deg);
`,Le=a.div`
  animation-name: rotateMinutes;
  animation-duration: 3600s;
  transform: rotate(${({degrees:e})=>e}deg);
`,Ge=a.div`
  animation-name: rotateSeconds;
  animation-duration: 60s;
  transform: rotate(${({degrees:e})=>e}deg);
`,ze=({time:e=new Date})=>{const t=e.getHours(),r=e.getMinutes(),n=e.getSeconds(),l=30*(t+(r+n/60)/60),a=6*(r+n/60),i=6*n;return o.createElement(Fe,null,o.createElement(Ie,null),o.createElement("div",{className:"hour hand",style:{transform:`rotate(${l}deg`}}),o.createElement("div",{className:"minute hand",style:{transform:`rotate(${a}deg`}}),o.createElement("div",{className:"second hand",style:{transform:`rotate(${i}deg`,transition:""+(0===i?"none":"transform .025s cubic-bezier(1,1.8,1,1.8)")}}),o.createElement(Pe,null))},Re=()=>{const[e,t]=c.exports.useState(new Date);return((e,t)=>{const r=c.exports.useRef((()=>{}));c.exports.useEffect((()=>{r.current=e}),[e]),c.exports.useEffect((()=>{if(null!==t){let e=setInterval((function(){r.current()}),t);return()=>clearInterval(e)}}),[t])})((()=>{t(new Date)}),1e3),o.createElement(ze,{time:e})},Be=()=>o.createElement(We,null,o.createElement(f,{basename:"/hooks-playground"},o.createElement(Xe,null,o.createElement(i,{to:"/"},"Home")," | ",o.createElement(N,null)),o.createElement(x,null,o.createElement(b,{path:"/colors"},o.createElement(le,null)),o.createElement(b,{path:"/countries"},o.createElement(j,null)),o.createElement(b,{path:"/states"},o.createElement($,null)),o.createElement(b,{path:"/tictactoe"},o.createElement(W,null)),o.createElement(b,{path:"/themes"},o.createElement(me,null)),o.createElement(b,{path:"/advancedThemes"},o.createElement(Ee,null)),o.createElement(b,{path:"/orderTape"},o.createElement(Te,null)),o.createElement(b,{path:"/clock"},o.createElement(Re,null)),o.createElement(b,{path:"/cssClock"},o.createElement(Me,null)),o.createElement(b,{path:"/"},o.createElement(v,null))))),Xe=a.nav`
  z-index: 999;
  position: relative;
`,We=a.div`
  width: 100%;
`;y.render(o.createElement(o.StrictMode,null,o.createElement(Be,null)),document.getElementById("root"));
