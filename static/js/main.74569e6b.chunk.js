(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{160:function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/pop.920450d2.mp3"},161:function(e,t,c){},162:function(e,t,c){},163:function(e,t,c){},164:function(e,t,c){},165:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(11),s=c.n(a),i=c(75),l=c(21),r=c(18),o=c(47),d=Object(o.b)({name:"counter",initialState:{inbox:0},reducers:{increment:function(e){e.inbox+=1},decrement:function(e){e.inbox-=1},lungo:function(e,t){e.inbox=t.payload}}}),j=d.actions,b=(j.increment,j.decrement,j.lungo),u=d.reducer,x=Object(o.b)({name:"reduxTask",initialState:{list:[],smartlist:"inbox",deadlines:[],events:[],listID:void 0},reducers:{addTask:function(e,t){e.list=t.payload},setInbox:function(e){e.smartlist="inbox"},setToday:function(e){e.smartlist="today"},setTomorrow:function(e){e.smartlist="tomorrow"},upcoming:function(e){e.smartlist="upcoming"},taskDeadline:function(e,t){e.deadlines=t.payload},RBCEvent:function(e,t){e.events=t.payload},setID:function(e,t){e.listID=t.payload}}}),h=x.actions,O=h.addTask,m=h.setInbox,f=h.setToday,v=(h.setTomorrow,h.upcoming),g=h.taskDeadline,p=(h.RBCEvent,h.setID),w=x.reducer,N=c(167),k=c(100),y=c.n(k),D=(c(116),c(2));function T(e){var t=Object(n.useState)("none"),c=Object(l.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(""),r=Object(l.a)(i,2),o=r[0],d=r[1],j=Object(n.useState)(new Date),b=Object(l.a)(j,2),u=b[0],x=b[1],h=Object(n.useState)(0),O=Object(l.a)(h,2),m=O[0],f=O[1],v=Object(n.useState)(""),g=Object(l.a)(v,2),p=g[0],w=g[1],k=Object(n.useState)("date"),T=Object(l.a)(k,2),z=T[0],C=T[1];function S(){0===m&&s("none"),1===m&&s("low"),2===m&&s("medium"),3===m&&s("high")}var I=function(e){m>=0&&m<=3?(38===e.keyCode&&(f(m+1),S(),console.log("UP ",m)),40===e.keyCode&&(f(m-1),S(),console.log("DOWN ",m))):(console.log("OUT OF RANGE ",m),f(m>3?m-1:m+1))};return Object(n.useEffect)((function(){S()}),[I]),Object(D.jsx)("div",{className:"inputBorder",children:Object(D.jsx)("div",{className:"w-100",children:Object(D.jsx)("form",{onSubmit:function(t){t.preventDefault(),e.sub(o),e.select(a),e.date(p),d(""),C("date"),s("none"),f(0)},className:"formInput",children:Object(D.jsxs)("div",{className:"taskRow inp mx-2",children:[Object(D.jsx)("input",{type:"text",value:o,onKeyDown:I,onChange:function(e){d(e.target.value)},placeholder:"add a task..."}),Object(D.jsxs)("div",{className:"datePriority",children:[Object(D.jsx)(y.a,{value:z,selected:u,onChange:function(e){var t=Object(N.default)(e,"yyyy MM dd");C(Object(N.default)(e,"dd MMM")),w(t),x(new Date)}}),Object(D.jsxs)("select",{name:"select",onChange:function(e){s(e.target.value)},children:[Object(D.jsx)("option",{value:"none",children:a}),Object(D.jsx)("option",{value:"low",children:"low"}),Object(D.jsx)("option",{value:"medium",children:"medium"}),Object(D.jsx)("option",{value:"high",children:"high"})]}),Object(D.jsx)("button",{className:"my-auto btntt",type:"submit",children:"add"})]})]})})})})}function z(e){var t=e.col;return Object(D.jsx)("div",{children:Object(D.jsx)("svg",{className:"svg",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:t,children:Object(D.jsx)("path",{d:"M5 2c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-14c0-1.654-1.346-3-3-3h-14zm19 3v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5z"})})})}function C(e){var t=e.type,c="";return c="low"===t?"\ud83d\udfe2":"medium"===t?"\ud83d\udd35":"high"===t?"\ud83d\udd34":"",Object(D.jsx)("p",{className:"priorityDot",children:c})}function S(e){var t=e.task,c=(e.obj,e.finishTask),n=e.id,a=Object(r.b)(),s=function(){if(""!==t.deadline&&void 0!==t.deadline){var e=parseInt(Object(N.default)(new Date(t.deadline),"dd"))-parseInt(Object(N.default)(new Date,"dd")),c="",n=void 0;return e>1&&(c=" days",n=!0),0===e&&(c=" today",n=!1),1===e&&(c=" tomorrow",n=!1),Object(D.jsxs)("div",{className:"littleGap",children:[Object(D.jsx)("p",{children:!0===n?e:""}),Object(D.jsx)("p",{children:c})]})}return Object(D.jsx)("span",{})};return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)("div",{className:"mt-2 taskRow",onClick:function(){a(p(n)),console.log("list ID ",n," TASK ",t.task)},children:Object(D.jsxs)("div",{className:"w-100 mx-2 taskRow",children:[Object(D.jsxs)("div",{className:"d-flex flex-row flex-nowrap",children:[Object(D.jsx)("div",{className:"checkBtn me-2",onClick:function(){c(t.task,t.id)},children:Object(D.jsx)(z,{col:"#3e90cc"})}),Object(D.jsx)("p",{children:t.task})]}),Object(D.jsxs)("div",{className:"d-flex flex-row flex-nowrap align-items-center littleGap",children:[Object(D.jsx)(s,{}),Object(D.jsx)(C,{type:t.priority})]})]})})})}var I=c(105);function B(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),o=Object(l.a)(s,2),d=o[0],j=o[1],u=Object(n.useState)(),x=Object(l.a)(u,2),h=x[0],m=x[1],f=Object(r.c)((function(e){return e.counter})).inbox,v=Object(r.c)((function(e){return e.reduxTask})),p=v.list,w=v.deadlines,k=Object(r.b)();Object(n.useEffect)((function(){""!==c&&(k(O([].concat(Object(i.a)(p),[{task:c,id:Object(I.a)(),created:{Day:Object(N.default)(new Date,"dd/LL/yyyy"),Time:Object(N.default)(new Date,"hh:mm aaa")},deadline:h,priority:d}]))),a(""))}),[c]),Object(n.useEffect)((function(){k(b(p.length)),k(g(p.filter((function(e){return void 0!==e.deadline&&null!==e.deadline}))))}),[p]);var y=function(e,t){k(O(p.filter((function(e){return e.id!==t}))))};function z(){var e=p.map((function(e,t){return Object(D.jsx)("div",{className:"hoverable",children:Object(D.jsx)("div",{className:"w-100",children:Object(D.jsx)(S,{task:e,finishTask:y,obj:p,id:e.id},t)})},t)}));return Object(D.jsx)(D.Fragment,{children:e})}return Object(D.jsxs)("div",{className:"devborders mainTask",children:[Object(D.jsxs)("div",{className:"sticky",children:[Object(D.jsx)(T,{sub:function(e){return a(e)},select:function(e){return j(e)},date:function(e){return m(e)}}),Object(D.jsx)("button",{className:"mt-2 btntt",onClick:function(){console.log("LIST -",p),console.log("INBOX -",f),console.log("EVENTS -",w)},children:"REDUX LOG"})]}),Object(D.jsx)(z,{})]})}var M=c(39);var E=function(){return Object(D.jsxs)("div",{className:"iconbar",children:[Object(D.jsxs)("div",{className:"d-flex flex-column flex-start align-items-center mt-5",children:[Object(D.jsx)("img",{className:"userlogo",src:"https://avatars.githubusercontent.com/u/56916252?s=400&u=b3a44d3503034ca35fae58c2c1ba461746ed0e5c&v=4",alt:"userlogo",height:"40",width:"40",onClick:function(){window.location.reload()}}),Object(D.jsx)(M.b,{to:"/",children:Object(D.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"white",className:"bi bi-check-square-fill svgicons",viewBox:"0 0 16 16",children:Object(D.jsx)("path",{d:"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"})})}),Object(D.jsx)(M.b,{to:"/calendar",children:Object(D.jsxs)("svg",{onClick:function(){return console.log("calendar")},xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"white",className:"bi bi-calendar3 svgicons",viewBox:"0 0 16 16",children:[Object(D.jsx)("path",{d:"M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"}),Object(D.jsx)("path",{d:"M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"})]})})]}),Object(D.jsxs)("div",{className:"d-flex flex-column flex-start mb-5",children:[Object(D.jsx)(M.b,{to:"/about",children:Object(D.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"white",className:"bi bi-question-square-fill svgicons",viewBox:"0 0 16 16",children:Object(D.jsx)("path",{d:"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.496 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z"})})}),Object(D.jsx)(M.b,{to:"/settings",children:Object(D.jsx)("svg",{onClick:function(){return console.log("settings")},xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"white",className:"bi bi-gear-fill svgicons",viewBox:"0 0 16 16",children:Object(D.jsx)("path",{d:"M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"})})})]})]})};var R=function(e){var t=e.count;return Object(D.jsx)("div",{className:"d-flex flex-row justify-content-center align-items-center ",style:{backgroundColor:"red",width:"50px",height:"30px",borderRadius:"50px"},children:Object(D.jsx)("h4",{className:"mb-0",children:t})})};c(160);function A(){var e=Object(r.c)((function(e){return e.counter})).inbox,t=Object(r.c)((function(e){return e.reduxTask})).smartlist,c=Object(r.b)();return Object(D.jsxs)("div",{className:"devborders sidebar",children:[Object(D.jsxs)("div",{className:"d-flex flex-row justify-content-between align-content-baseline mb-3 taskBadge",children:[Object(D.jsx)("h3",{className:"me-3",children:t}),Object(D.jsx)(R,{count:e})]}),Object(D.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(D.jsx)("button",{className:"mb-1 btntt btnttActive",onClick:function(){c(m())},children:"Inbox"}),Object(D.jsx)("button",{className:"mb-1 btntt",onClick:function(){c(f())},children:"Today"}),Object(D.jsx)("button",{className:"mb-1 btntt",onClick:function(){c(v())},children:"Upcoming"})]})]})}function G(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(),i=Object(l.a)(s,2),o=i[0],d=i[1],j=Object(n.useState)(),b=Object(l.a)(j,2),u=b[0],x=b[1],h=Object(r.c)((function(e){return e.reduxTask})),O=h.listID,m=h.list;Object(r.b)();Object(n.useEffect)((function(){if(void 0!==m&&m!==[]){var e,t,c=m.filter((function(e){return e.id===O}));if(console.log("task Object ",c),null!==O&&void 0!==O)a(c[0].task),d(null===(e=c[0])||void 0===e||null===(t=e.body)||void 0===t?void 0:t.text),x({Day:c[0].created.Day,Time:c[0].created.Time});else a("click on a task")}}),[O]);return Object(D.jsxs)("div",{className:"devborders deets",children:[Object(D.jsx)("h3",{className:"sticky title",children:c}),Object(D.jsx)("p",{children:u?"".concat(null===u||void 0===u?void 0:u.Day," - ").concat(null===u||void 0===u?void 0:u.Time):""}),Object(D.jsx)("textarea",{className:"modtxt",placeholder:"add description to task",value:o,onChange:function(e){d(e.target.value)}})]})}var L=c(13),V=(c(161),c(99)),F=c(95),H=c(34),U=c(94),q=c(106);var W=function(){var e=Object(r.c)((function(e){return e.reduxTask})).deadlines,t=[],c={"en-GB":q.a},n=Object(V.b)({format:N.default,parse:F.default,startOfWeek:H.default,getDay:U.default,locales:c});return e!==[]&&e.forEach((function(e,c,n){t=[].concat(Object(i.a)(t),[{title:n[c].task,allDay:!0,start:n[c].deadline,end:n[c].deadline}])})),Object(D.jsx)("div",{className:"calendarWrapper",children:Object(D.jsx)(V.a,{localizer:n,events:t,startAccessor:"start",endAccessor:"end",style:{padding:"20px",width:"100%",height:"100%"}})})};function J(){return Object(D.jsxs)("div",{children:[Object(D.jsx)("h1",{children:"settings!"})," "]})}var K=function(){return Object(D.jsx)("div",{children:"pricing and stuff"})};var P=function(){return Object(D.jsx)(M.a,{basename:"/react-todo",children:Object(D.jsxs)(L.c,{children:[Object(D.jsx)(L.a,{exact:!0,path:"/",children:Object(D.jsxs)("div",{className:"grid",children:[Object(D.jsx)(E,{}),Object(D.jsx)(A,{}),Object(D.jsx)(B,{}),Object(D.jsx)(G,{})]})}),Object(D.jsx)(L.a,{exact:!0,path:"/calendar",children:Object(D.jsxs)("div",{className:"gridCalendar",children:[Object(D.jsx)(E,{}),Object(D.jsx)(W,{})]})}),Object(D.jsx)(L.a,{exact:!0,path:"/about",children:Object(D.jsxs)("div",{className:"gridSettings",children:[Object(D.jsx)(E,{}),Object(D.jsx)(K,{})]})}),Object(D.jsx)(L.a,{exact:!0,path:"/settings",children:Object(D.jsxs)("div",{className:"gridSettings",children:[Object(D.jsx)(E,{}),Object(D.jsx)(J,{})]})}),Object(D.jsx)(L.a,{path:"/",render:function(){return Object(D.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center mt-3",children:[Object(D.jsx)("h1",{children:"404 Not Found \u26d4"}),Object(D.jsx)("p",{className:"mt-3",children:"are you lost?"}),Object(D.jsx)("a",{href:"/",children:"home"}),Object(D.jsx)("a",{href:"/calendar",children:"calendar"})]})}})]})})},X=Object(o.a)({reducer:{counter:u,reduxTask:w}});c(162),c(163),c(164);s.a.render(Object(D.jsx)(r.a,{store:X,children:Object(D.jsx)(P,{})}),document.getElementById("root"))}},[[165,1,2]]]);
//# sourceMappingURL=main.74569e6b.chunk.js.map