(this["webpackJsonptodoList-redux-react"]=this["webpackJsonptodoList-redux-react"]||[]).push([[0],{14:function(e,t,n){e.exports=n(25)},25:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),i=n.n(r),l=n(4),c=n(1),s=n(2),u=n(3),p=n(6),d=n(5),m=function(e){return{type:"DELETE_TODO",payload:{title:e}}},h=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).closeTodo=function(){e.props.deleteTodo(e.props.title)},e}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"ui segment center aligned inverted"},o.a.createElement("h1",null,this.props.title),o.a.createElement("p",null,this.props.task),o.a.createElement("i",{className:"ui close icon",style:{cursor:"pointer",position:"absolute",top:"5px",left:"5px"},onClick:this.closeTodo}))}}]),n}(o.a.Component),b=Object(l.b)((function(e){return{todoList:e.todoList}}),{deleteTodo:m})(h),f=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={newTitle:"",newTask:""},e.onFormSubmit=function(t){t.preventDefault(),""!==e.state.newTask&&""!==e.state.newTitle&&(e.props.createTodo(e.state.newTitle,e.state.newTask),e.setState({newTitle:"",newTask:""}))},e.onTitleChange=function(t){e.setState({newTitle:t.target.value})},e.onDescriptionChange=function(t){e.setState({newTask:t.target.value})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=0;return o.a.createElement("div",null,o.a.createElement("h1",{className:"ui segment center aligned inverted"},"TodoList with React & Redux"),o.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form ",style:{maxWidth:"500px",margin:"auto"}},o.a.createElement("div",{className:"field"},o.a.createElement("label",null,"What are you going to do"),o.a.createElement("input",{type:"text",value:this.state.newTitle,onChange:this.onTitleChange})),o.a.createElement("div",{className:"field"},o.a.createElement("label",null,"Description"),o.a.createElement("textarea",{value:this.state.newTask,onChange:this.onDescriptionChange})),o.a.createElement("button",{className:"ui button",type:"submit"},"Add todo")),o.a.createElement("div",{className:"ui segment",style:{maxWidth:"500px",margin:"auto",marginTop:"3vh"}},this.props.todoList.map((function(t){return e++,o.a.createElement(b,{key:e,title:t.title,task:t.task})}))))}}]),n}(o.a.Component),T=Object(l.b)((function(e){return console.log(e),{todoList:e.todoList}}),{createTodo:function(e,t){return{type:"CREATE_TODO",payload:{title:e,task:t}}},deleteTodo:m})(f),E=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"ui container"},o.a.createElement(T,null))}}]),n}(o.a.Component),v=n(13),O=Object(c.b)({todoList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"CREATE_TODO"===t.type?[].concat(Object(v.a)(e),[t.payload]):"DELETE_TODO"===t.type?e.filter((function(e){return e.title!==t.payload.title?e:null})):e}});i.a.render(o.a.createElement(l.a,{store:Object(c.c)(O)},o.a.createElement(E,null)),document.querySelector("#root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.283c5efe.chunk.js.map