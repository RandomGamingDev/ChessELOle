(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{4745:(e,t,l)=>{Promise.resolve().then(l.bind(l,3801))},3801:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>g});var s=l(5155),a=l(2115);function n(e){let{pgn:t,score:l}=e,n=(0,a.useRef)(null),r=(0,a.useRef)(null);(0,a.useEffect)(()=>{"dark"!==localStorage.getItem("color-theme")&&("color-theme"in localStorage||!window.matchMedia("(prefers-color-scheme: dark)").matches)?r.current.classList.remove("hidden"):(document.documentElement.classList.add("dark"),n.current.classList.remove("hidden"))},[]);let i=["text-rose-600","text-neutral-500","text-lime-500"][Math.sign(l)+1];return(0,s.jsxs)("div",{id:"navbar",className:"w-full select-none inline-block flex p-4 bg-gradient-to-b dark:from-neutral-800 dark:text-neutral-300 text-neutral-700",children:[(0,s.jsx)("img",{src:"/favicon.ico",className:"w-20 h-20",width:"64",height:"64",alt:"Icon"}),(0,s.jsxs)("div",{id:"title",className:"w-full",children:[(0,s.jsx)("h1",{className:"font-bold text-4xl w-fit px-3",children:"ChessELOle"}),(0,s.jsx)("h2",{className:"font-bold text-2xl w-fit px-4 dark:text-neutral-400 text-neutral-500",children:"Guess the elo of the chess game!"})]}),(0,s.jsx)("div",{className:"w-full",children:(0,s.jsxs)("h2",{className:"font-bold text-center text-5xl mx-128 my-4",children:["Score: ",(0,s.jsx)("p",{className:"".concat(i),children:l})," "]})}),(0,s.jsx)("div",{className:"m-3 float-right",children:(0,s.jsxs)("button",{id:"theme-toggle",type:"button",onClick:()=>{r.current.classList.toggle("hidden"),n.current.classList.toggle("hidden");let e=document.documentElement.classList,t=e.contains("dark");localStorage.setItem("color-theme",t?"light":"dark"),(t?()=>e.remove("dark"):()=>e.add("dark"))()},className:"text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2",children:[(0,s.jsx)("span",{className:"sr-only",children:"Light Mode Toggle"}),(0,s.jsx)("svg",{id:"theme-toggle-dark-icon",ref:r,className:"hidden w-8 h-8",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"})}),(0,s.jsx)("svg",{id:"theme-toggle-light-icon",ref:n,className:"hidden w-8 h-8",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",fillRule:"evenodd",clipRule:"evenodd"})})]})}),(0,s.jsx)("div",{className:"float-none"})]})}function r(e){let{pgn:t,boardRef:l}=e;return(0,s.jsx)("div",{ref:l,className:"board-container viewers mx-8 gap-8 lg:min-w-[57rem]"})}function i(){return(0,s.jsx)("div",{id:"footer",className:"text-neutral-300 fixed bottom-0 w-full",children:(0,s.jsxs)("p",{className:"text-center",children:["\xa92024 Created by ",(0,s.jsx)("a",{className:"underline",href:"https://github.com/RandomGamingDev",children:"RandomGamingDev"})," under the ",(0,s.jsx)("a",{className:"underline",href:"https://github.com/RandomGamingDev/ChessELOle/blob/main/LICENSE",children:"GPL-3"})," License with all code freely available ",(0,s.jsx)("a",{className:"underline",href:"https://github.com/RandomGamingDev/ChessELOle",children:"here"})]})})}l(8172);var c=l(6223);let o=(e,t,l)=>{l(""),fetch("https://lichess.org/game/export/".concat(e,"?clocks=1")).then(e=>e.text()).then(s=>{if(!t.current)return;window.history.pushState(null,"","#".concat(e)),l(s);let a=s.split("\n").find(e=>e.trim().startsWith("1. "));for(;t.current.lastChild;)t.current.removeChild(t.current.lastChild);let n=document.createElement("div");t.current.appendChild(n),(0,c.A)(n,{pgn:a})})},d=(e,t)=>{let l="[".concat(t,' "'),s=e.indexOf(l)+l.length,a=e.indexOf('"',s);return e.slice(s,a)},h=()=>{let e=Math.round(3e4*Math.random());return fetch("https://raw.githubusercontent.com/RandomGamingDev/lichess-id-divider/master/out-lichess_db_standard_rated_2024-10/lichess-".concat(e,".ids")).then(e=>e.arrayBuffer()).then(e=>{let t=6*Math.round(1e3*Math.random()),l=new Uint8Array(e.slice(t,t+6)),s="";for(let e=0;e<l.length;e++)s+=String.fromCharCode(l[e]);return btoa(s)})};function m(e){let{pgn:t,setPgn:l,boardRef:n,guessedElos:r,setGuessedElos:i,setScore:c,setReward:m}=e,x=e=>{let t=e.target;t.value=t.value.replace(/[^0-9]/g,"")};return(0,a.useEffect)(()=>{h().then(e=>o(e,n,l))},[n,l]),(0,s.jsxs)("div",{className:"dark:text-neutral-300 text-neutral-700",children:[(0,s.jsx)("h1",{className:"text-4xl font-bold pb-4 text-nowrap",children:"Make your guess!"}),(0,s.jsxs)("form",{id:"guess",onSubmit:e=>{e.preventDefault();let l=Number(d(t,"WhiteElo")),s=Number(d(t,"BlackElo")),a=new FormData(e.currentTarget),n=Number(a.get("white-elo-guess")),r=Number(a.get("black-elo-guess"));i([n,r]);let o=8e3-10*((l-n+(s-r))*.05)**2;o<0&&(o=-Math.log(Math.abs(o))/Math.log(1.002)),m(o=Math.round(o)),c(e=>e+o),e.currentTarget.reset()},children:[(0,s.jsx)("label",{htmlFor:"white-elo-guess",children:(0,s.jsx)("h2",{className:"text-2xl font-bold",children:"White's ELO"})}),(0,s.jsx)("input",{type:"number",min:0,max:4e3,onInput:x,id:"white-elo-guess",name:"white-elo-guess",className:"mb-4 text-xl w-64",placeholder:"0-4000",required:!0}),(0,s.jsx)("label",{htmlFor:"black-elo-guess",children:(0,s.jsx)("h2",{className:"text-2xl font-bold",children:"Black's ELO"})}),(0,s.jsx)("input",{type:"number",min:0,max:4e3,onInput:x,id:"black-elo-guess",name:"black-elo-guess",className:"mb-4 text-xl w-64",placeholder:"0-4000",required:!0}),(0,s.jsx)("br",{}),(0,s.jsx)("button",{type:"submit",className:"bg-lime-600 hover:bg-lime-700 mt-4 mr-4 text-white font-bold py-2 px-4 rounded appearance-none",children:"Submit"}),(0,s.jsx)("button",{type:"button",onClick:e=>{h().then(e=>o(e,n,l)),i([-1,-1])},className:"".concat(-1==r[0]?"invisible":""," bg-blue-500 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded appearance-none"),children:"Next"})]})]})}function x(e){let{pgn:t}=e;return(0,s.jsxs)("div",{className:"mx-8 dark:text-neutral-300 text-neutral-700 text-right right-0",children:[(0,s.jsx)("h1",{className:"text-4xl font-bold pb-4",children:"Game Details:"}),["Event","Result","Variant","TimeControl","ECO","Opening","Termination"].map(e=>(0,s.jsxs)("h2",{className:"text-2xl font-bold",children:[e,": ",d(t,e)]},e))]})}function u(e){let{pgn:t,guessedElos:l,reward:a}=e,n=d(t,"White"),r=Number(d(t,"WhiteElo")),i=d(t,"WhiteRatingDiff"),c=d(t,"Black"),o=Number(d(t,"BlackElo")),h=d(t,"BlackRatingDiff"),m=d(t,"Site"),x=Math.sign(a)+1,u=["text-rose-600","text-neutral-500","text-lime-500"][x];return(0,s.jsxs)("div",{className:"m-8 mt-8 dark:text-neutral-300 text-neutral-700 w-fit flex ".concat(-1==l[0]?"invisible":""),children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"mb-16",children:(0,s.jsxs)("h1",{className:"flex font-bold text-4xl w-fit",children:["Results:\xa0",(0,s.jsxs)("p",{className:"".concat(u),children:[0!=x?"+":"",a," points!"]})]})}),(0,s.jsxs)("div",{id:"elo-display",children:[(0,s.jsxs)("div",{className:"flex mb-32",children:[(0,s.jsx)("div",{className:"white pawn w-10 h-10 scale-[3] mr-16"}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("h2",{className:"text-2xl font-bold",children:[n," (",r,") [",h,"]"]}),(0,s.jsxs)("h2",{className:"text-2xl font-bold",children:["Your Guess: ",l[0]," (off by ",Math.abs(r-l[0]),")"]})]})]}),(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("div",{className:"black pawn w-10 h-10 scale-[3] mr-16"}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("h2",{className:"text-2xl font-bold",children:[c," (",o,") [",i,"]"]}),(0,s.jsxs)("h2",{className:"text-2xl font-bold",children:["Your Guess: ",l[1]," (off by ",Math.abs(o-l[1]),")"]})]})]})]})]}),(0,s.jsxs)("div",{className:"ml-14 mt-8",children:[(0,s.jsx)("a",{target:"_blank",href:m,children:(0,s.jsx)("img",{className:"rounded-full ml-6",src:"/lichess-logo.png"})}),(0,s.jsx)("h2",{className:"text-2xl font-bold mt-4 text-center",children:"Check out the game on Lichess!"})]})]})}function g(){let[e,t]=(0,a.useState)(""),l=(0,a.useRef)(null),[c,o]=(0,a.useState)([-1,-1]),[d,h]=(0,a.useState)(0),[g,f]=(0,a.useState)(0);return(0,s.jsxs)("div",{children:[(0,s.jsx)(n,{pgn:e,score:d}),(0,s.jsxs)("div",{className:"w-full lg:flex",children:[(0,s.jsx)(r,{pgn:e,boardRef:l}),(0,s.jsxs)("div",{className:"w-max-[50rem] ml-4 lg:ml-0",children:[(0,s.jsxs)("div",{className:"w-max-[50rem] w-fit h-fit flex m-8",children:[(0,s.jsx)(m,{pgn:e,setPgn:t,boardRef:l,guessedElos:c,setGuessedElos:o,setScore:h,setReward:f}),(0,s.jsx)(x,{pgn:e})]}),(0,s.jsx)(u,{pgn:e,guessedElos:c,reward:g})]})]}),(0,s.jsx)(i,{})]})}},8172:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[5,223,441,517,358],()=>t(4745)),_N_E=e.O()}]);