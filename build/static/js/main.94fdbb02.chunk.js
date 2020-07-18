(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),i=a.n(s),c=(a(14),a(8)),l=a(2),m=a(3),o=a(1),u=a(5),d=a(4),h=(a(15),function(){function e(){Object(l.a)(this,e)}return Object(m.a)(e,[{key:"getTime",value:function(e){var t=e,a=this.formatUnitOfTime(Math.floor(t/36e5));t%=36e5;var n=this.formatUnitOfTime(Math.floor(t/6e4));t%=6e4;var r=this.formatUnitOfTime(Math.floor(t/1e3));t%=1e3;var s=this.formatUnitOfTime(t%1e3);return"".concat(a,":").concat(n,":").concat(r,":").concat(s)}},{key:"formatUnitOfTime",value:function(e){return e<10?"0".concat(e).substring(0,2):e.toString().substring(0,2)}}]),e}()),f=(a(16),function(e){var t=new h;return r.a.createElement("div",{className:"timer"},r.a.createElement("button",{className:"del-btn",onClick:function(){e.handleDeleteTimer(e.id)}},r.a.createElement("i",{class:"fas fa-trash"})),r.a.createElement("div",{className:"clock"},"started"===e.status&&r.a.createElement("div",{className:"display-time"},r.a.createElement("h1",null,e.timerName),r.a.createElement("h2",{className:"ends"},"Ends in"),r.a.createElement("div",{className:"run-time",style:{color:e.time<=1e4?"#FE5C5C":""}},t.getTime(e.time))),"started"!==e.status&&r.a.createElement("div",null,r.a.createElement("div",{className:"timer-name"},e.timerName),r.a.createElement("div",{className:"initial-input"},r.a.createElement("div",{className:"display-in-time"},t.getTime(e.time)),r.a.createElement("div",{className:"input-time"},r.a.createElement("input",{className:"",maxLength:"6",value:e.seconds,onChange:function(t){e.onSecondsChanged(t.target.value)}})))),r.a.createElement("div",null,e.children)))});f.defaultProps={seconds:0,status:null,time:0,onSecondsChanged:function(e){return console.log(e.target.value)}};var v=f,p=(a(17),function(e){return r.a.createElement("div",{className:"controls"},"started"!==e.status&&r.a.createElement("button",{className:"btn btn-lg btn-success start",disabled:!e.canStart,onClick:e.startTimer,style:{marginTop:"1.8rem"}},r.a.createElement("div",{className:"start"},r.a.createElement("i",{class:"fas fa-play"}))),"started"===e.status&&r.a.createElement("button",{className:"btn btn-lg btn-dark stop",onClick:e.stopTimer,style:{marginTop:"19.8rem"}},r.a.createElement("div",{className:"stop"},r.a.createElement("i",{class:"fas fa-stop"}))),r.a.createElement("button",{className:"btn btn-lg btn-primary",onClick:e.resetTimer,style:"started"===e.status?{marginTop:"19.8rem"}:{marginTop:"1.8rem"}},r.a.createElement("div",{className:"refresh"},r.a.createElement("i",{class:"fas fa-sync"}))))});p.defaultProps={startTimer:function(){return alert("startTimer")},stopTimer:function(){return alert("stopTimer")},resetTimer:function(){return alert("resetTimer")},status:null,canStart:!1};var T=p,E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={seconds:0,time:0,status:null},n.startTimer=n.startTimer.bind(Object(o.a)(n)),n.stopTimer=n.stopTimer.bind(Object(o.a)(n)),n.resetTimer=n.resetTimer.bind(Object(o.a)(n)),n.onSecondsChanged=n.onSecondsChanged.bind(Object(o.a)(n)),n}return Object(m.a)(a,[{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"onSecondsChanged",value:function(e){(e=parseInt(e))&&"number"===typeof e?e<=359999&&this.setState((function(){return{seconds:e,time:1e3*e}})):this.setState((function(){return{seconds:0,time:0}}))}},{key:"startTimer",value:function(){var e=this;"started"!==this.state.status&&(this.interval=setInterval((function(){0!==e.state.time?e.setState((function(e){return{time:e.time-10}})):(e.setState((function(){return{seconds:0,status:null,time:0}})),clearInterval(e.interval))}),10),this.setState((function(){return{status:"started"}})))}},{key:"stopTimer",value:function(){this.state.status&&"started"===this.state.status&&(clearInterval(this.interval),this.setState((function(e){return{status:"stopped",seconds:Math.floor(e.time/1e3)}})))}},{key:"resetTimer",value:function(){clearInterval(this.interval),this.setState((function(){return{seconds:0,status:null,time:0}}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,{seconds:this.state.seconds,status:this.state.status,time:this.state.time,onSecondsChanged:this.onSecondsChanged,timerName:this.props.timerName,handleDeleteTimer:this.props.handleDeleteTimer,id:this.props.id},r.a.createElement("div",null,r.a.createElement(T,{startTimer:this.startTimer,stopTimer:this.stopTimer,resetTimer:this.resetTimer,status:this.state.status,canStart:this.state.seconds>0}))))}}]),a}(n.Component),b=(a(18),function(e){return r.a.createElement("div",{className:"timer-list"},e.timers.map((function(t){return r.a.createElement(E,Object.assign({key:t.id},t,{timerName:t.timerName,handleDeleteTimer:e.handleDeleteTimer,id:t.id}))})))}),N=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={timers:[],timerName:""},e.addNewTimer=e.addNewTimer.bind(Object(o.a)(e)),e.handleDeleteTimer=e.handleDeleteTimer.bind(Object(o.a)(e)),e}return Object(m.a)(a,[{key:"addNewTimer",value:function(e){e.preventDefault();var t={id:Date.now(),timerName:this.state.timerName};this.setState((function(e){return{timers:[].concat(Object(c.a)(e.timers),[t]),timerName:""}}))}},{key:"handleDeleteTimer",value:function(e){var t=this.state.timers.filter((function(t){return t.id!==e}));this.setState((function(e){return{timers:[].concat(t)}}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("i",{class:"fas fa-hourglass-half"}),r.a.createElement("span",null," React Timer")),r.a.createElement("div",{className:"conatiner"},r.a.createElement("div",{className:"input-name"},r.a.createElement("input",{type:"text",placeholder:"Create Timer",maxLength:"25",value:this.state.timerName,onChange:function(t){return e.setState({timerName:t.target.value})},zw:!0}),r.a.createElement("button",{onClick:this.addNewTimer},"Add Timer"))),r.a.createElement(b,{timers:this.state.timers,handleDeleteTimer:this.handleDeleteTimer}),r.a.createElement("footer",{class:"foot"},r.a.createElement("p",null,"Coded By ~",r.a.createElement("span",{class:"hh"},"hopper"))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,{title:"Timer"})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.94fdbb02.chunk.js.map