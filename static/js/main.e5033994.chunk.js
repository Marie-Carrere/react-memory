(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(9),c=a.n(s),i=(a(16),a(10)),l=a(1),o=a(2),u=a(4),d=a(3),m=a(5),h=a(6),f=a.n(h),g=(a(17),a(18),function(e){var t=e.card,a=e.feedback,n=e.index,s=e.onClick;return r.a.createElement("div",{className:"card ".concat(a),onClick:function(){return s(n)}},r.a.createElement("span",{className:"symbol"},"hidden"===a?"\u2753":t))}),p=(a(19),function(e){var t=e.guesses;return r.a.createElement("div",{className:"guesses"},t)}),v=(a(20),function(e){var t=e.entries;return r.a.createElement("table",{className:"hallOfFame"},r.a.createElement("tbody",null,t.map(function(e){var t=e.date,a=e.guesses,n=e.id,s=e.player;return r.a.createElement("tr",{key:n},r.a.createElement("td",{className:"date"},t),r.a.createElement("td",{className:"guesses"},a),r.a.createElement("td",{className:"player"},s))})))}),b="::Memory::HallofFame",y=10;a(21);var C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).persistWinner=function(e){e.preventDefault(),function(e,t){e.date=(new Date).toLocaleDateString(),e.id=Date.now();var a=JSON.parse(localStorage.getItem(b)||"[]"),n=a.findIndex(function(t){return t.guesses>=e.guesses});-1===n?a.push(e):a.splice(n,0,e),a.length>y&&a.splice(y,a.length),localStorage.setItem(b,JSON.stringify(a)),t(a)}({guesses:a.props.guesses,player:a.state.winner},a.props.onStored)},a.state={winner:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"highScoreInput",onSubmit:this.persistWinner},r.a.createElement("p",null,r.a.createElement("label",null,"Congratulations ! Please enter your name :",r.a.createElement("input",{type:"text",autoComplete:"given-name",onChange:this.handleWinnerUpdate,value:this.state.winner})),r.a.createElement("button",{type:"submit"},"You won !")))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).displayHallOfFame=function(e){a.setState({hallOfFame:e})},a.handleCardClick=function(e){var t=a.state.currentPair;2!==t.length&&(0!==t.length?a.handleNewPairClosedBy(e):a.setState({currentPair:[e]}))},a.state={cards:a.generateCards(),currentPair:[],guesses:0,hallOfFame:null,matchedCardIndices:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"generateCards",value:function(){for(var e=[],t=f()("\ud83d\ude00\ud83c\udf89\ud83d\udc96\ud83c\udfa9\ud83d\udc36\ud83d\udc31\ud83e\udd84\ud83d\udc2c\ud83c\udf0d\ud83c\udf1b\ud83c\udf1e\ud83d\udcab\ud83c\udf4e\ud83c\udf4c\ud83c\udf53\ud83c\udf50\ud83c\udf5f\ud83c\udf7f");e.length<36;){var a=t.pop();e.push(a,a)}return f()(e)}},{key:"getFeedbackForCard",value:function(e){var t=this.state,a=t.currentPair,n=t.matchedCardIndices.includes(e);return a.length<2?n||e===a[0]?"visible":"hidden":a.includes(e)?n?"justMatched":"justMismatched":n?"visible":"hidden"}},{key:"handleNewPairClosedBy",value:function(e){var t=this,a=this.state,n=a.cards,r=a.currentPair,s=a.guesses,c=a.matchedCardIndices,l=[r[0],e],o=s+1,u=n[l[0]]===n[l[1]];this.setState({currentPair:l,guesses:o}),u&&this.setState({matchedCardIndices:[].concat(Object(i.a)(c),l)}),setTimeout(function(){return t.setState({currentPair:[]})},750)}},{key:"render",value:function(){var e=this,t=this.state,a=t.cards,n=t.guesses,s=t.hallOfFame,c=t.matchedCardIndices.length===a.length;return r.a.createElement("div",{className:"memory"},r.a.createElement(p,{guesses:n}),a.map(function(t,a){return r.a.createElement(g,{card:t,feedback:e.getFeedbackForCard(a),index:a,key:a,onClick:e.handleCardClick})}),c&&(s?r.a.createElement(v,{entries:s}):r.a.createElement(C,{guesses:n,onStored:this.displayHallOfFame})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.e5033994.chunk.js.map