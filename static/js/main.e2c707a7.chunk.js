(this.webpackJsonppokedex_app=this.webpackJsonppokedex_app||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),o=a(1),s=a(2),p=a(4),l=a(3),m=a(7),u=(a(13),function(e){Object(p.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e,t="".concat("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/").concat((e=this.props.id)<=999?"00".concat(e).slice(-3):e,".png");return r.a.createElement("div",{className:"Pokecard"},r.a.createElement("h2",{className:"Pokecard-title"},this.props.name),r.a.createElement("div",{className:"Pokecard-image"},r.a.createElement("img",{src:t,alt:""})),r.a.createElement("div",{className:"Pokecard-data"},"Type: ",this.props.type),r.a.createElement("div",{className:"Pokecard-data"}," XP: ",this.props.exp))}}]),a}(n.Component)),d=(a(14),function(e){Object(p.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e;return e=this.props.isWinner?r.a.createElement("h2",{className:"Pokedex-Winner",style:{color:"teal"}},"Winning hand"):r.a.createElement("h2",{className:"Pokedex-Loser",style:{color:"maroon"}},"Losing hand"),r.a.createElement("div",{className:"Pokedex"},r.a.createElement("h2",null,"Total Experience: ",this.props.exp),e,r.a.createElement("div",{className:"Pokedex-container"},this.props.pokemons.map((function(e){return r.a.createElement(u,{key:e.id,id:e.id,name:e.name,type:e.type,exp:e.base_experience})}))))}}]),a}(n.Component)),h=function(e){Object(p.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){for(var e=[],t=Object(m.a)(this.props.pokemons);e.length<t.length;){var a=Math.floor(Math.random()*t.length),n=t.splice(a,1)[0];e.push(n)}var c=e.reduce((function(e,t){return e+t.base_experience}),0),i=t.reduce((function(e,t){return e+t.base_experience}),0);return r.a.createElement("div",null,r.a.createElement(d,{pokemons:e,exp:c,isWinner:c>i}),r.a.createElement(d,{pokemons:t,exp:i,isWinner:i>c}))}}]),a}(n.Component);h.defaultProps={pokemons:[{id:4,name:"Charmander",type:"fire",base_experience:62},{id:7,name:"Squirtle",type:"water",base_experience:63},{id:11,name:"Metapod",type:"bug",base_experience:72},{id:12,name:"Butterfree",type:"flying",base_experience:178},{id:25,name:"Pikachu",type:"electric",base_experience:112},{id:39,name:"Jigglypuff",type:"normal",base_experience:95},{id:94,name:"Gengar",type:"poison",base_experience:225},{id:133,name:"Eevee",type:"normal",base_experience:65}]};var b=h,f=function(e){Object(p.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null))}}]),a}(n.Component);i.a.render(r.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.e2c707a7.chunk.js.map