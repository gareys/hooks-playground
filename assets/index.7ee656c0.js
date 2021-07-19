var e=Object.defineProperty,t=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(t,l,n)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[l]=n;import{g as r,q as o,C as c,u as i,R as s,L as m,a as p,A as u,I as d,B as E,S as h,b as g,c as x,d as f}from"./vendor.b974446c.js";const y=r`
  query GetAllColors($page: Int!, $perPage: Int!) {
    allColors(page: $page, perPage: $perPage) {
      name
      hex
    }
  }
`,b=()=>{const[e,t]=c.exports.useState(1),{loading:l,error:n,data:a,fetchMore:r}=i(y,{variables:{page:0,perPage:25}});return l?s.createElement("p",null,"Loading..."):n?s.createElement("p",null,"Error :("):s.createElement(w,null,s.createElement("tbody",null,a.allColors.map((({name:e,hex:t})=>s.createElement(v,{key:t,hex:t},s.createElement(k,null,e)))),e>0&&s.createElement(C,{key:"NEXT_PAGE",hex:"#FFFFFF",onClick:()=>(r({variables:{page:e,perPage:25},updateQuery:(e,{fetchMoreResult:l})=>l.allColors.length?{allColors:[...e.allColors,...l.allColors]}:(t(0),e)}),void t(e+1))},s.createElement(k,null,"GET MORE COLORS"))))},w=o.table`
  width: 100%;
`,v=o.tr`
  background-color: ${({hex:e})=>e};
  color: ${({hex:e})=>P(e)};
`,C=o(v)`
  text-align: center;
  cursor: pointer;
`,k=o.td`
  padding: 10px;
  font-weight: 500;
`,P=e=>(e=e.replace("#",""),(299*parseInt(e.substr(0,2),16)+587*parseInt(e.substr(2,2),16)+114*parseInt(e.substr(4,2),16))/1e3>=128?"#000000":"#FFFFFF"),T=()=>s.createElement(s.Fragment,null,s.createElement("h1",null,"Hooks Playground"),s.createElement("hr",null),s.createElement("h2",null,"Projects"),s.createElement(F,null,s.createElement("li",null,s.createElement(m,{to:"/colors"},"Colors")," - GraphQL Colors API w/ pagination"),s.createElement("li",null,s.createElement(m,{to:"/countries"},"Countries")," - Basic async useEffect w/ countries API"),s.createElement("li",null,s.createElement(m,{to:"/states"},"The United States")," - Custom useAsyncHook w/ U.S. API"),s.createElement("li",null,s.createElement(m,{to:"/tictactoe"},"TicTacToe")," - TicTacToe game leveraging many hooks"))),F=o.ul`
  list-style: none;
  li {
    margin: 5px 0;
  }
`,S=()=>{const[e,t]=c.exports.useState([]);var l,n;return l=async()=>{const e=await fetch("https://api.sampleapis.com/the-states/the-states"),l=await e.json();t(l)},n=[],c.exports.useEffect((()=>{l().catch((e=>{throw console.error(e),e}))}),n),s.createElement(_,null,e.map((e=>s.createElement("li",{key:e.id},s.createElement(j,null,s.createElement(O,{src:e.flag,alt:`${e.name}'s flag`}),s.createElement("h2",null,e.name," (",e.abv,")")),s.createElement(I,null,s.createElement("p",null,"Capital: ",e.capital),s.createElement("p",null,"Largest City: ",e.largest_city),s.createElement("p",null,"Population: ",e.population),s.createElement("p",null,"Joined the Union: ",e.admitted_to_union))))))},_=o.ul`
  list-style: none;
`,j=o.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  h2 {
    margin: 0 5px;
  }
`,I=o.div`
  margin-left: calc(2em + 25px);
`,O=o.img`
  width: 2em;
  margin-right: 20px;
`,A=()=>{const e=p();return s.createElement($,{onClick:()=>e.goBack()},"Back")},$=o.a`
  cursor: pointer;
`,L=()=>{const[e,t]=c.exports.useState([]),l=e.sort(((e,t)=>e.name<t.name?-1:e.name>t.name?1:0));return c.exports.useEffect((()=>{(async()=>{const e=await fetch("https://api.sampleapis.com/countries/countries"),l=await e.json();t(l)})()}),[]),s.createElement(G,null,l.map((e=>{var t;return s.createElement("li",{key:e.id},s.createElement(N,null,s.createElement(R,null,s.createElement(X,{src:e.media.flag})),s.createElement(H,null,s.createElement("h2",null,e.name),s.createElement(U,null,s.createElement("li",null,s.createElement("strong",null,"Capital:   "),e.capital),s.createElement("li",null,s.createElement("strong",null,"Population:   "),(null==(t=e.population)?void 0:t.toLocaleString())||"N/A"),s.createElement("li",null,s.createElement("strong",null,"Currency:   "),e.currency||"N/A"))),e.media.emblem&&s.createElement(M,null,s.createElement(q,{src:e.media.emblem}))))})))},B=e=>s.createElement("img",((e,r)=>{for(var o in r||(r={}))l.call(r,o)&&a(e,o,r[o]);if(t)for(var o of t(r))n.call(r,o)&&a(e,o,r[o]);return e})({onError:e=>{e.currentTarget.src=""}},e)),G=o.ul`
  list-style: none;
  padding-left: 0;
`,N=o.div`
  display: flex;
  padding: 5px 0;
`,R=o.div`
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
`,X=o(B)`
  border: 2px solid #fff;
  width: 200px;
  min-width: 200px;
  min-height: 100px;
  height: auto;
`,M=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  min-height: 100%;
`,q=o(B)`
  max-height: 100px;
`,H=o.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 20px;
  h2 {
    margin: 15px 0;
  }
`,U=o.ul`
  list-style: none;
  padding-left: 0;
`,W=Array(9).fill(""),Q={first_row:{cells:[0,1,2],coords:[[10,26],[290,26]]},second_row:{cells:[3,4,5],coords:[[10,76],[290,76]]},third_row:{cells:[6,7,8],coords:[[10,126],[290,126]]},first_column:{cells:[0,3,6],coords:[[50,10],[50,144]]},second_column:{cells:[1,4,7],coords:[[150,10],[150,144]]},third_column:{cells:[2,5,8],coords:[[250,10],[250,144]]},backward_diagonal:{cells:[0,4,8],coords:[[12,6],[290,144]]},forward_diagonal:{cells:[2,4,6],coords:[[12,144],[290,6]]}},z=()=>{const e=c.exports.useRef(null),[t,l]=c.exports.useState(W),[n,a]=c.exports.useState("X"),[r,o]=c.exports.useState();c.exports.useEffect((()=>{const t=e.current;if(r&&t){const e=Q[r.location].coords[0],l=Q[r.location].coords[1],n=t.getContext("2d");n.strokeStyle="red",n.lineWidth=3,n.beginPath(),n.moveTo(...e),n.lineTo(...l),n.stroke()}}),[r]);const i=(e,t)=>{for(const[l,{cells:n}]of Object.entries(Q))if(n.every((l=>e[l]===t)))return{play:t,location:l}},m=!r&&t.every((e=>!!e)),p=!!r||m;return s.createElement(s.Fragment,null,s.createElement("h2",null,"Tic Tac Toe"),s.createElement(D,null,s.createElement("tbody",null,s.createElement("tr",null,t.map(((e,c)=>s.createElement(K,{disabled:!!t[c]||p,onClick:()=>{t[c]||((e,n)=>{if(r)return;const c=[...t.slice(0,e),n,...t.slice(e+1)],s=i(c,n);s&&o(s),l(c),a((e=>"X"===e?"O":"X"))})(c,n)},key:c},e)))))),r&&s.createElement(J,{ref:e}),r&&s.createElement(s.Fragment,null,s.createElement("p",null,"The Winner is ",r.play,"!"),s.createElement("p",null,"They won on the ",r.location.split("_").join(" "),".")),m&&s.createElement("p",null,"It's a Cat's Game! No Winner!"),p&&s.createElement("p",null,s.createElement(V,{onClick:()=>(a("X"),l(W),void o(void 0))},"Start Over")))},J=o.canvas`
  display: block;
  position: relative;
  top: -126px;
  margin-bottom: -126px;
  height: 126px;
  width: 126px;
`,D=o.table`
  margin-top: 20px;
  border-collapse: collapse;
  width: 128px;
  min-width: 160px;
  display: block;
  user-select: none;
`,K=o.td`
  display: inline-block;
  height: 20px;
  width: 20px;
  padding: 10px;
  border: 1px solid white;
  text-align: center;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
`,V=o.a`
  cursor: pointer;
`,Y=new u({uri:"https://api.sampleapis.com/css-color-names/graphql",cache:new d}),Z=()=>s.createElement(ee,null,s.createElement(E,null,s.createElement("div",null,s.createElement("nav",null,s.createElement(m,{to:"/"},"Home")," | ",s.createElement(A,null))),s.createElement(h,null,s.createElement(g,{path:"/colors"},s.createElement(x,{client:Y},s.createElement(b,null))),s.createElement(g,{path:"/countries"},s.createElement(L,null)),s.createElement(g,{path:"/states"},s.createElement(S,null)),s.createElement(g,{path:"/tictactoe"},s.createElement(z,null)),s.createElement(g,{path:"/"},s.createElement(T,null))))),ee=o.div`
  width: 100%;
`;f.render(s.createElement(s.StrictMode,null,s.createElement(Z,null)),document.getElementById("root"));
