(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports={Huge:"JobStatus_Huge__BliLH","col-xs-9":"JobStatus_col-xs-9__2Noaa",Fa5x:"JobStatus_Fa5x__1G1aw",PanelFooter:"JobStatus_PanelFooter__31M25",PullLeft:"JobStatus_PullLeft__2rFpy",PullRight:"JobStatus_PullRight__18ady"}},228:function(e,t,a){e.exports=a(500)},233:function(e,t,a){},235:function(e,t,a){},29:function(e,t,a){e.exports={App:"App_App__Aw2Kd",Panel:"App_Panel__1fNDj",PanelPrimary:"App_PanelPrimary__1HWTP",PanelGreen:"App_PanelGreen__27McP",PanelRed:"App_PanelRed__3kmwh",PanelHeading:"App_PanelHeading__3QV-W"}},500:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),l=a(15),r=a.n(l),o=(a(233),a(234),a(8)),c=a(9),i=a(12),m=a(10),d=a(11),u=a(29),p=a.n(u),h=(a(235),a(20)),b=a.n(h),g=a(16),f=function(e){var t=null;return"Executed"===e.jobStatus?t=s.a.createElement(g.c,{className:b.a.Fa5x}):"Running"===e.jobStatus?t=s.a.createElement(g.f,{className:b.a.Fa5x}):"Cancelled"===e.jobStatus?t=s.a.createElement(g.g,{className:b.a.Fa5x}):"Failed"===e.jobStatus?t=s.a.createElement(g.d,{className:b.a.Fa5x}):"Halted"===e.jobStatus?t=s.a.createElement(g.h,{className:b.a.Fa5x}):"Succeeded"===e.jobStatus?t=s.a.createElement(g.j,{className:b.a.Fa5x}):"success"===e.jobStatus&&(t=s.a.createElement(g.j,{className:b.a.Fa5x})),s.a.createElement("div",{className:"col-lg-2"},s.a.createElement("div",{className:e.myClass},s.a.createElement("div",{className:e.myChildClass},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xs-3"},t),s.a.createElement("div",{className:"col-xs-9 text-right"},s.a.createElement("div",{className:b.a.Huge},e.totalJobs),s.a.createElement("div",{style:{textTransform:"capitalize"}},e.jobStatus)))),s.a.createElement("a",{href:"/folder/all/project/all/status/all"},s.a.createElement("div",{className:b.a.PanelFooter},s.a.createElement("span",{className:b.a.PullLeft},"View"),s.a.createElement("span",{className:b.a.PullRight},s.a.createElement(g.b,null)),s.a.createElement("div",{className:"clearfix"})))))},v=a(30),E=function(e){return s.a.createElement(v.c,{width:1e3,height:300,data:[{name:"Feb 2019",uv:4e3,pv:2400,amt:2400},{name:"Jan 2019",uv:3e3,pv:1398,amt:2210},{name:"Dec 2018",uv:2e3,pv:9800,amt:2290},{name:"Nov 2018",uv:2780,pv:3908,amt:2e3},{name:"Oct 2018",uv:1890,pv:4800,amt:2181},{name:"Sep 2018",uv:2390,pv:3800,amt:2500}],margin:{top:5,right:20,bottom:5,left:0}},s.a.createElement(v.b,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),s.a.createElement(v.a,{stroke:"#ccc",strokeDasharray:"5 5"}),s.a.createElement(v.b,{type:"monotone",dataKey:"pv",stroke:"red"}),s.a.createElement(v.a,{stroke:"#ccc",strokeDasharray:"5 5"}),s.a.createElement(v.e,{dataKey:"name"}),s.a.createElement(v.f,null),s.a.createElement(v.d,null))},y=a(81),w=function(e){var t={columns:[{label:"Job Id",field:"job_id",sort:"asc",width:150},{label:"Status",field:"status",sort:"asc",width:270},{label:"Start Date",field:"start_time",sort:"asc",width:200},{label:"End Date",field:"end_time",sort:"asc",width:100},{label:"Comments",field:"comments",sort:"asc",width:150}],rows:e.jobsTableRows};return s.a.createElement(y.a,{striped:!0,bordered:!0,hover:!0,data:t})},N=a(195),x=(a(469),a(470),a(471),a(196)),j=a.n(x).a.create({baseURL:"http://localhost:8000"}),S=(a(490),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).jobStatusObj1=null,e.state={menuCollapsed:!0,startDate:"",endDate:"",jobStatusObj:{},jobsTable:[]},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.title="Jobs Dashboard"}},{key:"toggleMenu",value:function(){var e=this.state.menuCollapsed?"toggled":"";this.setState({menuCollapsed:e})}},{key:"componentDidMount",value:function(){var e=this;j.get("/api/dashboard/job_history/date_range").then(function(t){if(t.data.first){var a=new Date(t.data.first),n=("0"+(a.getMonth()+1)).slice(-2),s=[("0"+a.getDate()).slice(-2),n,a.getFullYear()].join("/");console.log(s),e.setState({startDate:s}),console.log(e.state.startDate)}if(t.data.last){var l=new Date(t.data.last),r=("0"+(l.getMonth()+1)).slice(-2),o=[("0"+l.getDate()).slice(-2),r,l.getFullYear()].join("/");console.log(o),e.setState({endDate:o}),console.log(e.state.endDate)}}).catch(function(e){console.log(e)}),j.get("/api/dashboard/job_scores?start=2017-01-01&end=2019-03-10").then(function(t){t.data&&e.setState({jobStatusObj:t.data})}).catch(function(e){console.log(e)}),j.get("/api/dashboard/job_history/?start=2017-01-01&end=2019-03-10").then(function(t){t.data&&e.setState({jobsTable:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this,t=[p.a.Panel,p.a.PanelPrimary].join(" ");[p.a.Panel,p.a.PanelGreen].join(" "),[p.a.Panel,p.a.PanelRed].join(" ");if(null!==this.state.jobStatusObj)var a=Object.keys(this.state.jobStatusObj).map(function(a,n){return s.a.createElement(f,{key:a,totalJobs:e.state.jobStatusObj[a],jobStatus:a,myClass:t,myChildClass:p.a.PanelHeading})});return s.a.createElement("div",{className:p.a.App},s.a.createElement("div",null,s.a.createElement("div",{id:"content-wrapper",className:"d-flex flex-column"},s.a.createElement("div",{id:"content",style:{marginTop:"15px"}},s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"d-sm-flex align-items-center justify-content-between mb-4"},s.a.createElement("h1",{className:"h3 mb-0 text-gray-800"},"Dashboard"),s.a.createElement(N.RangeDatePicker,{startDay:this.state.startDate,endDay:this.state.endDate,startPlaceholder:"Start Date",endPlaceholder:"End Date",dateFormat:"DD/MM/YYYY",onChange:function(t,a){return function(t,a){if(t){var n=new Date(t),s=("0"+(n.getMonth()+1)).slice(-2),l=[("0"+n.getDate()).slice(-2),s,n.getFullYear()].join("/");console.log(l)}if(a){var r=new Date(a),o=("0"+(r.getMonth()+1)).slice(-2),c=[("0"+r.getDate()).slice(-2),o,r.getFullYear()].join("/");console.log(c)}t&&a&&(e.setState({startDate:l,endDate:c}),j.get("/api/dashboard/job_scores?start="+l+"&end="+c).then(function(t){t.data&&e.setState({jobStatusObj:t.data})}).catch(function(e){console.log(e)}),j.get("/api/dashboard/job_history/?start="+l+"&end="+c).then(function(t){t.data&&e.setState({jobsTable:t.data})}).catch(function(e){console.log(e)}))}(t,a)}}),s.a.createElement("a",{href:"index.html",className:"d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"},s.a.createElement("i",{className:"fas fa-download fa-sm text-white-50"})," Generate Report")),s.a.createElement("div",{className:"row"},a," "),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-xl-3 col-md-6 mb-4"},s.a.createElement("div",{className:"card border-left-primary shadow h-100 py-2"},s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"row no-gutters align-items-center"},s.a.createElement("div",{className:"col mr-2"},s.a.createElement("div",{className:"text-xs font-weight-bold text-primary text-uppercase mb-1"},"Total Jobs"),s.a.createElement("div",{className:"h5 mb-0 font-weight-bold text-gray-800"},"5455")),s.a.createElement("div",{className:"col-auto"},s.a.createElement("i",{className:"fas fa-calendar fa-2x text-gray-300"})))))),s.a.createElement("div",{className:"col-xl-3 col-md-6 mb-4"},s.a.createElement("div",{className:"card border-left-success shadow h-100 py-2"},s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"row no-gutters align-items-center"},s.a.createElement("div",{className:"col mr-2"},s.a.createElement("div",{className:"text-xs font-weight-bold text-success text-uppercase mb-1"},"Overall Avg passes"),s.a.createElement("div",{className:"h5 mb-0 font-weight-bold text-gray-800"},"25%")),s.a.createElement("div",{className:"col-auto"},s.a.createElement("i",{className:"fas fa-dollar-sign fa-2x text-gray-300"})))))),s.a.createElement("div",{className:"col-xl-3 col-md-6 mb-4"},s.a.createElement("div",{className:"card border-left-info shadow h-100 py-2"},s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"row no-gutters align-items-center"},s.a.createElement("div",{className:"col mr-2"},s.a.createElement("div",{className:"text-xs font-weight-bold text-info text-uppercase mb-1"},"Tasks"),s.a.createElement("div",{className:"row no-gutters align-items-center"},s.a.createElement("div",{className:"col-auto"},s.a.createElement("div",{className:"h5 mb-0 mr-3 font-weight-bold text-gray-800"},"50%")),s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"progress progress-sm mr-2"},s.a.createElement("div",{className:"progress-bar bg-info",role:"progressbar",style:{width:"50%"},"aria-valuenow":50,"aria-valuemin":0,"aria-valuemax":100}))))),s.a.createElement("div",{className:"col-auto"},s.a.createElement("i",{className:"fas fa-clipboard-list fa-2x text-gray-300"})))))),s.a.createElement("div",{className:"col-xl-3 col-md-6 mb-4"},s.a.createElement("div",{className:"card border-left-warning shadow h-100 py-2"},s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"row no-gutters align-items-center"},s.a.createElement("div",{className:"col mr-2"},s.a.createElement("div",{className:"text-xs font-weight-bold text-warning text-uppercase mb-1"},"Pending Requests"),s.a.createElement("div",{className:"h5 mb-0 font-weight-bold text-gray-800"},"18")),s.a.createElement("div",{className:"col-auto"},s.a.createElement("i",{className:"fas fa-comments fa-2x text-gray-300"}))))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12 mb-4"},s.a.createElement("div",{className:"card shadow mb-4"},s.a.createElement("div",{className:"card-header py-3"},s.a.createElement("h6",{className:"m-0 font-weight-bold text-primary"},"Analytics")),s.a.createElement("div",{className:"card-body"},s.a.createElement(E,null))),s.a.createElement("div",{className:"card shadow mb-4"},s.a.createElement("div",{className:"card-header py-3"},s.a.createElement("h6",{className:"m-0 font-weight-bold text-primary"},"All Packages")),s.a.createElement("div",{className:"card-body"},s.a.createElement(w,{jobsTableRows:this.state.jobsTable}))))))),s.a.createElement("footer",{className:"sticky-footer bg-white"},s.a.createElement("div",{className:"container my-auto"},s.a.createElement("div",{className:"copyright text-center my-auto"},s.a.createElement("span",null,"Copyright \xa9 Accionlabs 2019")))))),s.a.createElement("a",{className:"scroll-to-top rounded",href:"#page-top"},s.a.createElement("i",{className:"fas fa-angle-up"})),s.a.createElement("div",{className:"modal fade",id:"logoutModal",tabIndex:-1,role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},s.a.createElement("div",{className:"modal-dialog",role:"document"},s.a.createElement("div",{className:"modal-content"},s.a.createElement("div",{className:"modal-header"},s.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Ready to Leave?"),s.a.createElement("button",{className:"close",type:"button","data-dismiss":"modal","aria-label":"Close"},s.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),s.a.createElement("div",{className:"modal-body"},'Select "Logout" below if you are ready to end your current session.'),s.a.createElement("div",{className:"modal-footer"},s.a.createElement("button",{className:"btn btn-secondary",type:"button","data-dismiss":"modal"},"Cancel"),s.a.createElement("a",{className:"btn btn-primary",href:"login.html"},"Logout"))))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=a(501),C=a(120),T=a(502),_=a(201),k=a(199),O=function(e){function t(e){var a;return Object(o.a)(this,t),a=Object(i.a)(this,Object(m.a)(t).call(this,e)),console.log(a.props.myData),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.myData.options.map(function(e){return s.a.createElement("option",{key:e.port,value:e.name},e.name)});return s.a.createElement("div",{style:{minHeight:"400px"},className:"center"},s.a.createElement("div",{className:"row",style:{margin:"10px 0 0 0"}},s.a.createElement("div",{className:"six columns"},s.a.createElement("label",{htmlFor:"source"},"Select Source"),s.a.createElement("select",{className:"u-full-width",id:"source",value:this.props.myData.type,onChange:this.props.handleChange,autoFocus:!0},s.a.createElement("option",{value:""},"Select Source"),e))),this.props.myData.type?s.a.createElement("section",null,s.a.createElement("div",{className:"row",style:{margin:"10px 0 0 0"}},s.a.createElement("div",{className:"six columns"},s.a.createElement("label",null,"User Name"),s.a.createElement("input",{className:"u-full-width",placeholder:"User Name",type:"text",onChange:this.props.handleUserNameChanged,value:this.props.myData.username,autoFocus:!0}))),s.a.createElement("div",{className:"row",style:{margin:"10px 0 0 0"}},s.a.createElement("div",{className:"six columns"},s.a.createElement("label",null,"Password"),s.a.createElement("input",{className:"u-full-width required",placeholder:"Password",type:"password",onChange:this.props.handlePasswordChanged,value:this.props.myData.password}))),s.a.createElement("div",{className:"row",style:{margin:"10px 0 0 0"}},s.a.createElement("div",{className:"six columns"},s.a.createElement("label",null,"DB Name"),s.a.createElement("input",{className:"u-full-width",placeholder:"DB Name",type:"text",onChange:this.props.handleDbNameChanged,value:this.props.myData.dbname}))),s.a.createElement("div",{className:"row",style:{margin:"10px 0 0 0"}},s.a.createElement("div",{className:"six columns"},s.a.createElement("label",null,"Host"),s.a.createElement("input",{className:"u-full-width",placeholder:"Host",type:"text",onChange:this.props.handleHostChanged,value:this.props.myData.host}))),s.a.createElement("div",{className:"row",style:{margin:"10px 0 0 0"}},s.a.createElement("div",{className:"six columns"},s.a.createElement("label",null,"Port"),s.a.createElement("input",{className:"u-full-width",placeholder:"Port",type:"text",onChange:this.props.handlePortChanged,value:this.props.myData.port})))):null)}}]),t}(n.Component),P=a(36),F=a(59),J=a(60),H=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).drag=function(e){e.dataTransfer.setData("transfer",e.target.id)},a.noAllowDrop=function(e){e.stopPropagation()},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:this.props.id,draggable:"true",onDragStart:this.drag,onDragOver:this.noAllowDrop,style:this.props.style,currentitem:this.props.currentitem},this.props.children)}}]),t}(s.a.Component),M=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).drop=function(e){e.preventDefault();var t=e.dataTransfer.getData("transfer");e.target.appendChild(document.getElementById(t)),a.props.setMapJob(e.target.getAttribute("name"),document.getElementById(t).getAttribute("currentitem"))},a.allowDrop=function(e){e.preventDefault()},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:this.props.id,name:this.props.name,onDrop:this.drop,className:this.props.className,onDragOver:this.allowDrop,style:this.props.style},this.props.children)}}]),t}(s.a.Component),A=a(79),B=a.n(A);function Q(){var e=Object(F.a)(["\n    background-color: '#f8f9fc',\n    width: '250px',\n    min-height: '400px',\n    height: 'auto',\n    margin: '0px 20px',\n    paddingTop:'10px',\n    border: 'black 1px dashed'\n"]);return Q=function(){return e},e}function W(){var e=Object(F.a)(["\n    background-color: white;\n    color: #555;\n    padding: 10px 20px;\n    text-align: center;\n    display: block;\n    text-decoration: none;\n    font-size: 16px;\n    margin: 10px 20px;\n    border-radius: 3px;\n    cursor: pointer;\n    background: cornflowerblue;\n    color: white!important;\n"]);return W=function(){return e},e}function L(){var e=Object(F.a)(["\n    padding: 8px;\n    color: #555;\n    background-color: white;\n    border-radius: 3px;\n"]);return L=function(){return e},e}function R(){var e=Object(F.a)(["\n    //width: 100%;\n    padding: 0px 0px 10px 15px;\n    display: flex;\n    justify-content: center;\n"]);return R=function(){return e},e}var I=J.a.div(R()),z=J.a.div(L()),U=J.a.a(W()),Y={backgroundColor:"#f8f9fc",width:"250px",minHeight:"500px",height:"auto",margin:"0px 20px",paddingTop:"10px",border:"black 1px solid"},K={backgroundColor:"#f8f9fc",width:"250px",height:"50px",margin:"0px 20px",paddingTop:"3px",marginBottom:"20px",border:"black 1px dashed"},G=J.a.div(Q()),q=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={columns:{tableName:"",columns:[]}},e.button1Handler=e.button1Handler.bind(Object(P.a)(e)),e.button2Handler=e.button2Handler.bind(Object(P.a)(e)),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"button1Handler",value:function(e){var t=this;j.get("/api/sources/"+this.props.id+"/tables/"+e+"/columns").then(function(a){var n={tableName:e,columns:a.data.columns};t.setState({columns:n})}).catch(function(e){B.a.error("No Columns in this table",{position:"top-right",effect:"scale",onShow:function(){console.log("aye!")},beep:!1,timeout:"none",offset:100})})}},{key:"button2Handler",value:function(e){alert("Table2")}},{key:"render",value:function(){var e=this,t=function(t,a){e.props.handlePageTwoData(t,a)};return s.a.createElement(I,null,s.a.createElement("div",null,s.a.createElement("span",{style:{fontSize:"20px",fontWeight:"bold",marginLeft:"115px",color:"darkblue"}},"Tables"),s.a.createElement(G,{style:Y},this.props.table.map(function(t){return s.a.createElement(U,{key:t,onClick:function(){return e.button1Handler(t)}},t)}))),s.a.createElement("div",null,s.a.createElement("span",{style:{fontSize:"20px",fontWeight:"bold",marginLeft:"100px",color:"darkblue"}},"Columns"),s.a.createElement(M,{className:"droppableBlueDiv",id:"dr1",style:Y},this.state.columns.columns.map(function(t,a){return s.a.createElement(H,{key:"item"+a,id:"item"+a,style:{margin:"8px",cursor:"grab"},currentitem:e.state.columns.tableName+"."+t},s.a.createElement(z,null,t))}))),s.a.createElement("div",{style:{display:"grid"}},s.a.createElement("span",{style:{fontSize:"20px",fontWeight:"bold",justifySelf:"center",color:"darkblue"}},"Job ID"),s.a.createElement(M,{id:"dr2",name:"job_id",setMapJob:t,className:"droppableDiv",style:K}),s.a.createElement("span",{style:{fontSize:"20px",fontWeight:"bold",justifySelf:"center",color:"darkblue"}},"Start Date & Time"),s.a.createElement(M,{id:"dr3",name:"start_time",className:"droppableDiv",setMapJob:t,style:K}),s.a.createElement("span",{style:{fontSize:"20px",fontWeight:"bold",justifySelf:"center",color:"darkblue"}},"End Date & Time"),s.a.createElement(M,{id:"dr4",name:"end_time",setMapJob:t,className:"droppableDiv",style:K}),s.a.createElement("span",{style:{fontSize:"20px",fontWeight:"bold",justifySelf:"center",color:"darkblue"}},"Status"),s.a.createElement(M,{id:"dr5",name:"status",setMapJob:t,className:"droppableDiv",style:K}),s.a.createElement("span",{style:{fontSize:"20px",fontWeight:"bold",justifySelf:"center",color:"darkblue"}},"Comments"),s.a.createElement(M,{id:"dr6",name:"comments",setMapJob:t,className:"droppableDiv",style:K})))}}]),t}(s.a.Component),V=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"wrapper"},s.a.createElement("div",{className:"col-lg-12 row"},s.a.createElement("div",{className:"card mb-12 py-3 border-bottom-warning"},s.a.createElement("em",{style:{paddingLeft:"10px",paddingBottom:"20px"}},"Note: Click on Table name to populate Column name, Then drag and drop to appropriate Keys, Then Click next"),s.a.createElement(q,{handlePageTwoData:this.props.handlePageTwoData,id:this.props.id,table:this.props.table}))))}}]),t}(s.a.Component),$=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e={rows:[{name:"Select",control:s.a.createElement("input",{type:"text",placeholder:"Select Query",style:{width:"100%"},value:this.props.data,autoFocus:!0,disabled:!0})},{name:"Where",control:s.a.createElement("input",{type:"text",placeholder:"Where Clause",style:{width:"100%"},value:this.props.whereTxt,onChange:this.props.handleWhereChange})},{name:"Join",control:s.a.createElement("input",{type:"text",placeholder:"Join Tables",style:{width:"100%"},value:this.props.joinTxt,onChange:this.props.handleJoinChange})}]};return s.a.createElement(y.a,{striped:!0,bordered:!0,hover:!0,searching:!1,data:e,paging:!1,style:{width:"80%"}})}}]),t}(s.a.Component),X=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={value:""},a.handleChange=a.handleChange.bind(Object(P.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"row"},s.a.createElement("textarea",{className:"u-full-width",style:{minHeight:"200px",height:"auto",marginLeft:"10px",width:"70%"},value:this.props.previewFinalQuery,onChange:this.handleChange,cols:40,rows:10,autoFocus:!0})))}}]),t}(s.a.Component),Z=a(61),ee=function(e,t){for(var a=[],n=0;n<t;n++)n<e?a.push("done"):n===e?a.push("doing"):a.push("todo");return a},te=function(e,t){return e>0&&e<t?{showPreviousBtn:!0,showNextBtn:!0}:0===e?{showPreviousBtn:!1,showNextBtn:!0}:{showPreviousBtn:!0,showNextBtn:!1}};function ae(e){var t=Object(n.useState)(ee(0,e.steps.length)),a=Object(Z.a)(t,2),l=a[0],r=a[1],o=Object(n.useState)(0),c=Object(Z.a)(o,2),i=c[0],m=c[1],d=Object(n.useState)(1),u=Object(Z.a)(d,2),p=u[0],h=u[1],b=Object(n.useState)(te(0,e.steps.length)),g=Object(Z.a)(b,2),f=g[0],v=g[1];function E(t){if(1===t)j.post("/api/sources/",{data:e.myData}).then(function(a){e.setID(a.data.source_id),h(a.data.source_id),j.get("/api/sources/"+p+"/tables").then(function(a){e.setTable(a.data),y(t)}).catch(function(e){console.log(e)})}).catch(function(e){console.log(e)});else if(4===t){var a={map:e.maps,where:e.whereTxt,joins:e.joinTxt,sql:e.previewFinalQuery};j.post("/api/sources/"+p+"/conf",{data:a}).then(function(e){alert("Success")})}else y(t)}function y(t){r(ee(t,e.steps.length)),m(t<e.steps.length?t:i),v(te(t,e.steps.length))}var w=function(){return E(i+1)},N=function(t){t.currentTarget.value===e.steps.length-1&&i===e.steps.length-1?E(e.steps.length):E(t.currentTarget.value)};return s.a.createElement("div",{className:"container",onKeyDown:function(t){return 13===t.which?w(e.steps.length):{}}},s.a.createElement("ol",{className:"progtrckr"},e.steps.map(function(t,a){return s.a.createElement("li",{className:"progtrckr-"+l[a],onClick:N,key:a,value:a},s.a.createElement("em",null,a+1),s.a.createElement("span",null,e.steps[a].name))})),e.steps[i].component,s.a.createElement("div",{style:e.showNavigation?{}:{pointerEvents:"none",background:"gray"}},s.a.createElement("button",{className:"btn btn-primary",style:f.showPreviousBtn?{}:{pointerEvents:"none",background:"gray"},onClick:function(){return E(i>0?i-1:i)}},"Previous"),s.a.createElement("button",{className:"btn btn-primary",style:f.showNextBtn?{}:{pointerEvents:"none",background:"gray"},onClick:w},"Next")))}ae.defaultProps={showNavigation:!0};var ne=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={id:0,username:"",password:"",host:"",port:"",options:[],type:"",db:"",table:[],pageTwo:[]},a.handleTable=function(e){e&&e.tables&&a.setState({table:e.tables})},a.handleUserNameChanged=function(e){a.setState({username:e.target.value})},a.handleDbNameChanged=function(e){a.setState({dbname:e.target.value})},a.handlePasswordChanged=function(e){a.setState({password:e.target.value})},a.handleHostChanged=function(e){a.setState({host:e.target.value})},a.handlePortChanged=function(e){a.setState({port:e.target.value})},a.handlePageTwoData=function(e,t){var n=Object(k.a)(a.state.pageTwo);n[0]||(n[0]={}),n[0][e]=t,a.setState({pageTwo:n})},a.handleChange=function(e){a.setState({type:e.target.value}),setTimeout(function(){for(var e=0;e<a.state.options.length;e++){if(a.state.type===a.state.options[e].name){a.setState({port:a.state.options[e].port});break}a.setState({port:""})}},500)},a.handleWhereChange=function(e){a.setState({whereTxt:e.target.value})},a.handleJoinChange=function(e){a.setState({joinTxt:e.target.value})},a.setSelectQuery=function(){var e=a.state.pageTwo[0];if(e&&e.job_id&&e.start_time&&e.end_time&&e.status&&e.comments){var t=a.state.pageTwo[0].job_id.split(".")[0];return"select "+a.state.pageTwo[0].job_id+" as job_id, "+a.state.pageTwo[0].start_time+" as start_time, "+a.state.pageTwo[0].end_time+" as end_time, "+a.state.pageTwo[0].status+" as status, "+a.state.pageTwo[0].comments+" as comments from "+t}if(e&&e.job_id&&e.start_time&&e.end_time&&e.status){t=a.state.pageTwo[0].job_id.split(".")[0];return"select "+a.state.pageTwo[0].job_id+" as job_id, "+a.state.pageTwo[0].start_time+" as start_time, "+a.state.pageTwo[0].end_time+" as end_time, "+a.state.pageTwo[0].status+" as status from "+t}return""},a.formFinalQuery=function(){return a.state.whereTxt&&a.state.joinTxt?a.setSelectQuery()+" "+a.state.whereTxt+" "+a.state.joinTxt:a.state.whereTxt||a.state.joinTxt?a.state.whereTxt&&!a.state.joinTxt?a.setSelectQuery()+" "+a.state.whereTxt:!a.state.whereTxt&&a.state.joinTxt?a.setSelectQuery()+" "+a.state.joinTxt:void 0:a.setSelectQuery()},a.setID=function(e){a.setState({id:e})},a.createPostMap=function(){if(a.state.pageTwo[0])return[["table_1.job_id",a.state.pageTwo[0].job_id],["table_1.start_time",a.state.pageTwo[0].start_time],["table_1.end_time",a.state.pageTwo[0].end_time],["table_1.status",a.state.pageTwo[0].status],["table_2.comments",a.state.pageTwo[0].comments?a.state.pageTwo[0].comments:""]]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.get("/api/sources/").then(function(t){e.setState({options:t.data.sources})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=[{name:"Source Configuration",component:s.a.createElement(O,{myData:this.state,handleUserNameChanged:this.handleUserNameChanged,handleDbNameChanged:this.handleDbNameChanged,handlePasswordChanged:this.handlePasswordChanged,handleHostChanged:this.handleHostChanged,handlePortChanged:this.handlePortChanged,handleChange:this.handleChange})},{name:"Property Mapping",component:s.a.createElement(V,{id:this.state.id,handlePageTwoData:this.handlePageTwoData,table:this.state.table})},{name:"Form SQL Query",component:s.a.createElement($,{data:this.setSelectQuery(),whereTxt:this.state.whereTxt,joinTxt:this.state.joinTxt,handleWhereChange:this.handleWhereChange,handleJoinChange:this.handleJoinChange})},{name:"Preview and Confirm",component:s.a.createElement(X,{previewFinalQuery:this.formFinalQuery()})}];return s.a.createElement("div",{id:"content-wrapper",className:"d-flex flex-column tenPadding"},s.a.createElement("div",{id:"content"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-12 mb-12"},s.a.createElement("div",{className:"card shadow mb-4",style:{minHeight:"600px"}},s.a.createElement("div",{className:"card-header py-3"},s.a.createElement("h6",{className:"m-0 font-weight-bold text-primary"},"Job Configurations")),s.a.createElement("div",{className:"card-body"},s.a.createElement(ae,{setID:this.setID,showNavigation:!0,steps:e,myData:this.state,setTable:this.handleTable,previewFinalQuery:this.formFinalQuery(),joinTxt:this.state.joinTxt,maps:this.createPostMap(),whereTxt:this.state.whereTxt})))))))}}]),t}(s.a.Component),se=s.a.createElement(D.a,null,s.a.createElement("div",{id:"wrapper"},s.a.createElement("ul",{className:"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ",id:"accordionSidebar"},s.a.createElement("a",{className:"sidebar-brand d-flex align-items-center justify-content-center",href:"index.html"},s.a.createElement("div",{className:"sidebar-brand-icon rotate-n-15"},s.a.createElement("i",{className:"fas fa-laugh-wink"})),s.a.createElement("div",{className:"sidebar-brand-text mx-3"},"Job Status ",s.a.createElement("sup",null,"Dashboard"))),s.a.createElement("hr",{className:"sidebar-divider my-0"}),s.a.createElement("li",{className:"nav-item active"},s.a.createElement(C.a,{to:"/",className:"nav-link"},s.a.createElement(g.i,null),"Dashboard")),s.a.createElement("hr",{className:"sidebar-divider"}),s.a.createElement("div",{className:"sidebar-heading"},"Interface"),s.a.createElement("li",{className:"nav-item"},s.a.createElement(C.a,{to:"/appsetts",className:"nav-link"},s.a.createElement(g.e,null),"Application Settings")),s.a.createElement("hr",{className:"sidebar-divider"}),s.a.createElement("div",{className:"sidebar-heading"},"Support"),s.a.createElement("li",{className:"nav-item"},s.a.createElement(C.a,{to:"/contactus",className:"nav-link"},s.a.createElement(g.k,null),"Contact Us")),s.a.createElement("hr",{className:"sidebar-divider d-none d-md-block"}),s.a.createElement("div",{className:"text-center d-none d-md-inline white-color"},s.a.createElement(g.a,null))),s.a.createElement(T.a,null,s.a.createElement(_.a,{exact:!0,path:"/",component:S}),s.a.createElement(_.a,{path:"/appsetts",component:ne})),s.a.createElement(B.a,{stack:{limit:3}})));r.a.render(se,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[228,1,2]]]);
//# sourceMappingURL=main.6623248f.chunk.js.map