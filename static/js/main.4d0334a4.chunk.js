(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{14:function(e,t,n){e.exports=n(20)},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),l=(n(19),n(5)),i=n(1),u=n(11),s=n(8),m=n(9),d=n(12),b=n(10),f=n(13),p=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).submitHandler=function(){var t=Object(i.a)({},e.state);t.id=Object(f.a)(),e.props.onCreateHandler(t)},e.state={name:"",number:""},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{id:"contact-creation-form",onSubmit:function(e){return e.preventDefault()}},r.a.createElement("label",null,"Name",r.a.createElement("input",{value:this.state.name,onChange:function(t){return e.setState((function(e){return Object(i.a)(Object(i.a)({},e),{},{name:t.target.value})}))},type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})),r.a.createElement("label",null,"Number",r.a.createElement("input",{value:this.state.number,onChange:function(t){return e.setState((function(e){return Object(i.a)(Object(i.a)({},e),{},{number:t.target.value})}))},type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})),r.a.createElement("button",{onClick:this.submitHandler},"Add contact"))}}]),n}(a.Component),h=function(e){var t=e.value,n=e.onChangeHandler;return r.a.createElement("div",null,r.a.createElement("label",null,"Find contacts by name",r.a.createElement("input",{type:"text",name:"filter",value:t,onChange:n})))},v=n(4),E=n.n(v),C=function(e){var t=e.id,n=e.idx,a=e.name,c=e.number,o=e.deleteHandler;return r.a.createElement("li",{className:E.a.contact},n+1,". ",a,": ",c,r.a.createElement("button",{onClick:function(){return o(t)}},"Delete"))},j=function(e){var t=e.contacts,n=e.deleteHandler;return r.a.createElement("div",null,r.a.createElement("ul",{className:E.a.contactList},t&&t.length?t.map((function(e,t){var a=e.id,c=e.name,o=e.number;return r.a.createElement(C,{key:a,id:a,idx:t,name:c,number:o,deleteHandler:n})})):r.a.createElement("p",null,"Contacts not found!")))};var O=function(){var e=Object(a.useState)({contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""}),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useMemo)((function(){return n.contacts.filter((function(e){return e.name.toLowerCase().includes(n.filter.toLowerCase())}))}),[n]);return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Phonebook"),r.a.createElement(p,{onCreateHandler:function(e){var t=n.contacts.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}));if(t)return alert("".concat(t.name," is already in contacts."));c(Object(i.a)(Object(i.a)({},n),{},{contacts:[].concat(Object(l.a)(n.contacts),[e])}))}}),r.a.createElement("h2",null,"Contacts"),r.a.createElement(h,{value:n.filter,onChangeHandler:function(e){c(Object(i.a)(Object(i.a)({},n),{},{filter:e.target.value}))}}),r.a.createElement(j,{contacts:o,deleteHandler:function(e){var t=n.contacts.filter((function(t){return t.id!==e}));c(Object(i.a)(Object(i.a)({},n),{},{contacts:Object(l.a)(t)}))}}))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root"))},4:function(e,t,n){e.exports={contactList:"ContactList_contactList__1bJYS",contact:"ContactList_contact__6zagR"}}},[[14,1,2]]]);
//# sourceMappingURL=main.4d0334a4.chunk.js.map