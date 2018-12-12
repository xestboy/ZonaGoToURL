/* Variable definitions start
   ==========================
   <Variable name="keycolor" description="Main Color" type="color" default="#49ACE1" value="#49ACE1"/>

   <Group description="Page Text" selector="body">
     <Variable name="body.font" description="Font" type="font"
         default="normal normal 16px Roboto, Arial, sans-serif" value="normal normal 16px Roboto, Arial, sans-serif"/>
     <Variable name="body.text.color" description="Main Text Color" type="color" default="#777777" value="#111111"/>
   </Group>

   <Group description="Backgrounds" selector=".body-fauxcolumns-outer">
     <Variable name="body.background.color" description="Body" type="color" default="#ffffff" value="#ffffff"/>
     <Variable name="header.background.kiri" description="Warna Header Kiri" type="color" default="#5b86e5" value="#000000"/>
	 <Variable name="header.background.kanan" description="Warna Header Kanan" type="color" default="#36d1dc" value="#49ace1"/>
	 <Variable name="footer.background.color" description="Footer" type="color" default="#222222" value="#222222"/>
   </Group>
   
   <Variable name="body.background" description="Body Background" type="background"
       color="$(body.background.color)" default="$(color) none repeat scroll top left" value="$(color) none repeat scroll top left"/>
   <Variable name="body.background.override" description="Body Background Override" type="string" default="" value=""/>
   
   <Group description="Links" selector=".main-outer">
     <Variable name="link.color" description="Link Color" type="color" default="#49ACE1" value="#49ACE1"/>
     <Variable name="link.visited.color" description="Visited Color" type="color" default="#49ACE1" value="#49ACE1"/>
     <Variable name="link.hover.color" description="Hover Color" type="color" default="#444444" value="#222222"/>
   </Group>

   <Group description="Blog Title" selector=".header">
     <Variable name="header.font" description="Font" type="font"
         default="500 25px Roboto, Arial, sans-serif" value="500 25px Roboto, Arial, sans-serif"/>
     <Variable name="header.title.color" description="Title Color" type="color" default="#ffffff"  value="#ffffff"/>
   </Group> 
   
   <Group description="Navigation Menu" selector="#cssmenu">
     <Variable name="navmenu.font" description="Font" type="font"
         default="500 12px Roboto, Arial, sans-serif" value="500 12px Roboto, Arial, sans-serif"/>
     <Variable name="navmenu.font.color" description="Color" type="color" default="#ffffff"  value="#ffffff"/>
     <Variable name="navmenu.font.hover.color" description="Hover Color" type="color" default="#ffffff"  value="#ffffff"/>
   </Group>

   <Group description="Search Icon" selector=".search-icon">
     <Variable name="search.icon.color" description="Color" type="color" default="#ffffff"  value="#ffffff"/>
   </Group>
   
   <Group description="Post Title" selector="h2.post-title, .FeaturedPost .post-summary h3">
     <Variable name="post.title.font" description="Font" type="font"
         default="500 20px Roboto, Arial, sans-serif" value="500 20px Roboto, Arial, sans-serif"/>
	 <Variable name="post.title.color" description="Link Color" type="color" default="#444444" value="#000000"/>
	 <Variable name="post.title.hover.color" description="Link Hover Color" type="color" default="#49ACE1" value="#cc0000"/>
   </Group>

   <Group description="Widget Title" selector=".sidebar h2, .sidebar-sticky h2, .latest-post-title h2, .above-post-widget h2">
     <Variable name="widget.title.font" description="Title Font" type="font"
        default="500 15px Roboto, Arial, sans-serif" value="500 15px Roboto, Arial, sans-serif"/>
	 <Variable name="widget.title.color" description="Color" type="color" default="#49ACE1" value="#111111"/>
	 <Variable name="widget.border.color" description="Border Color" type="color" default="#efefef" value="#ff0000"/>
   </Group>

   <Group description="Label" selector=".label-info-th">
     <Variable name="label.bg.color" description="Background" type="color" default="#ffffff" value="#ffffff"/>
	 <Variable name="label.color" description="Color" type="color" default="#888888" value="#888888"/>
	 <Variable name="label.border.color" description="Border Color" type="color" default="#efefef" value="#efefef"/>
   </Group>

   <Group description="Post Body" selector=".post-body, .post-snippet">
     <Variable name="post.body.font" description="Font" type="font"
         default="normal normal 16px Roboto, Arial, sans-serif" value="normal normal 14px Roboto, Arial, sans-serif"/>
	 <Variable name="post.body.color" description="Color" type="color" default="#777777" value="#222222"/>
   </Group>
   
   <Group description="Post Footer" selector=".post-info">
     <Variable name="post.footer.font" description="Font" type="font"
         default="normal normal 13px Roboto, Arial, sans-serif" value="normal normal 13px Roboto, Arial, sans-serif"/>
     <Variable name="post.footer.color" description="Color" type="color" default="#777777" value="#757575"/>
   </Group>
   
   <Group description="Footer Social Icon" selector="#footer-widget-container">
     <Variable name="footerwidget.bg.color" description="Background Color" type="color" default="#f8f8f8"  value="#f8f8f8"/>
	 <Variable name="footerwidget.color" description="Color" type="color" default="#999999"  value="#999999"/>
   </Group>

   <Group description="Footer Navigation Menu" selector="#footer-navmenu">
     <Variable name="navmenufooter.font" description="Font" type="font"
         default="500 14px Roboto, Arial, sans-serif" value="500 14px Roboto, Arial, sans-serif"/>
	 <Variable name="navmenufooter.bg" description="Background Color" type="color" default="#292929"  value="#111111"/>
     <Variable name="navmenufooter.color" description="Color" type="color" default="#ffffff"  value="#ffffff"/>
     <Variable name="navmenufooter.hover.color" description="Hover Color" type="color" default="#ffffff"  value="#ffffff"/>
   </Group>
   
   <Group description="Footer" selector="#footer-wrapper">
     <Variable name="footer.color" description="Color" type="color" default="#dddddd" value="#dddddd"/>
	 <Variable name="footer.link.color" description="Link Color" type="color" default="#dddddd" value="#dddddd"/>
	 <Variable name="footer.hover.color" description="Hover Color" type="color" default="#ffffff" value="#ffffff"/>
   </Group>

   <Group description="Back to Top" selector="#back-to-top"> 
     <Variable name="backtp.background.color" description="Background" type="color" default="#49ACE1" value="#ffffff"/>
	 <Variable name="backtp.color" description="Color" type="color" default="#ffffff" value="#ff0000"/>
   </Group>  

   Variable definitions end
   ========================*/

/**
* Eric Meyer&#39;s Reset CSS v2.0 http://meyerweb.com/eric/tools/css/reset/ 
* http://cssreset.com
*/
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;/*font-size:100%;*/font:inherit;vertical-align:baseline;}
/* HTML5 display-role reset for older browsers */
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;display:block;}*{margin:0;padding:0;}html{display:block;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}

/* Blogger CSS Reset */
.section,.widget{margin:0 0 0 0;padding:0 0 0 0;}
.navbar,.blog-feeds,.feed-links,#backlinks-container,a.home-link,.blog-mobile-link{display:none;}
.post-body .separator > a, .post-body .separator > span {margin-left: 0 !important;}

.quickedit,.thread-toggle,.edit-post,.item-control{display:none;}

/* disable font boosting on mobile browsers */
body * {
  max-height: 9999999em; /* Chrome for Android */
  -moz-text-size-adjust: none; /* Firefox Mobile */
}

/* FRAMEWORK */
strong,b{font-weight:bold;}
cite,em,i{font-style:italic;}
a:link{color:$(link.color);text-decoration:none;outline:none;}
a:visited{color:$(link.color);text-decoration:none;}
a:hover{color:$(link.hover.color);text-decoration:none;}
a img{border:none;border-width:0;outline:none;}
abbr,acronym{border-bottom:1px dotted;cursor:help;}
sup,sub{vertical-align:baseline;position:relative;top:-.4em;font-size:86%;}
sub{top:.4em;}small{font-size:86%;}
kbd{font-size:80%;border:1px solid #777;padding:2px 5px;border-bottom-width:2px;border-radius:3px;}
mark{background-color:#ffce00;color:black;}
p,blockquote,pre,table,figure,hr,form,ol,ul,dl{margin:1.5em 0;}
hr{height:1px;border:none;background-color:#666;}

h1{font-size:1.8rem}
h2{font-size:1.6rem}
h3{font-size:1.4rem}
h4{font-size:1.2rem}
h5{font-size:1rem}
h6{font-size:0.9rem}

/* heading */
h1,h2,h3,h4,h5,h6 {
	margin: 0 0 0.6em;
	font-weight: 500;
}

/* list */
ol,ul,dl{margin: .5em 0em .5em 3em}
li{margin: .5em 0}
dt{font-weight: 500}
dd{margin: 0 0 .5em 2em}
/* form */
input,button,select,textarea{font:inherit;font-size:100%;line-height:normal;vertical-align:baseline;padding: 2px;background-color: #f3f3f3;}
textarea{display:block;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}
/* CSS Anti copy  */
blockquote {
-ms-user-select:none;
-webkit-touch-callout:none;
-khtml-user-select:none;
-moz-user-select:none;
-webkit-user-select:none;}

/* code & blockquote */
pre,code{font-family:"Courier New",Courier,Monospace;color:inherit;}
pre{white-space:pre;word-wrap:normal;overflow:auto;}
blockquote{margin-left:2em;margin-right:2em;padding:1em 1em;font-size:105%;position: relative;font-weight: 500;margin: 0 auto;background: #fdfdfd;line-height: 1.5em !important;width: auto;border-left: 6px solid #e32d24;overflow: auto;}
blockquote:before {
    content: "\f10d"; 
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-decoration: inherit;
    padding-right:4px;
	color:#666;
display: none;
}

/* table */
table[border="1"] td, table[border="1"] th {
vertical-align: top;
text-align: left;
font-size: 13px;
padding: 3px 5px;
border: 1px solid #f6f6f6;
}
table[border="1"] th {
background: #eee;
}
table, img {
max-width: 100%;
height: auto;
}
iframe {
max-width: 100%;
}
td.tr-caption {
color: #777;
}
.clear {
clear: both;
}
.clear:after {
visibility: hidden;
display: block;
font-size: 0;
content: " ";
clear: both;
height: 0;}
/* ==========================================================================
TABLE
========================================================================== */
table{width:100%}
table th{color:#4285f4;border:1px solid rgba(0,0,0,0.12);text-align:left;vertical-align:top;font-size:18px}
table td{border:1px solid rgba(0,0,0,0.12);text-align:left;vertical-align:top}
table caption{border:none;font-style:italic}
th{font-weight:700}
td,th{padding:8px;line-height:1.42857143;vertical-align:top;text-align:left;border:1px solid rgba(0,0,0,0.12)}
table.striped tr:nth-child(even) >td{background-color:#f2f2f2}
table.dark tr,table.dark th{background-color:#212529;color:#fff}
table.dark.striped tr:nth-child(even) > td,table.dark.striped tr > th{background-color:rgba(255,255,255,.05)}
table.tr-caption-container{width:auto}
table.tr-caption-container td{padding:8px;background:#fff!important}
table.tr-caption-container td a{margin:0!important}
/* TRANSISI */
a:link, .label-count, #cssmenu ul ul li, #cssmenu > ul > li.has-sub > a:before, #cssmenu ul ul li.has-sub > a:before, .berlangganan-box input.submit-email[type="submit"], .berlangganan-box input.email-address[type="text"] {
	transition: all 0.2s;
	-moz-transition: all 0.2s;
	-webkit-transition: all 0.2s;
}

.related-post-style-3 .related-post-item {
	transition: opacity 0.2s linear;
}
.img-thumbnail, .img-thumbnail img, .label-info-th a, .info-1, .info-2, h2.post-title, .post-snippet, .sidebar-sticky {
	transition: all .2s linear; 
	-o-transition: all .2s linear; 
	-moz-transition: all .2s linear; 
	-webkit-transition: all .2s linear; 
}

#searchfs input[type="search"], h1,h2,h3,h4,h5,h6 {
	transition: font-size .2s linear; 
	-o-transition: font-size .2s linear; 
	-moz-transition: font-size .2s linear; 
	-webkit-transition: font-size .2s linear; 
}

.img-thumbnail, .img-thumbnail img, .FeaturedPost .post-summary, .FeaturedPost .image, .PopularPosts .item-thumbnail, .PopularPosts .widget-content ul li img, .Profile .widget-content, .PopularPosts .widget-content ul, .list-label-widget-content ul, .label-info-th a, .displaypageNum a, .showpage a, .pagecurrent, #blog-pager-newer-link a, #blog-pager-older-link a, .Profile .profile-link, .label-size, .berlangganan-box, #baca-juga, #baca-juga h2, .related-post-item-thumbnail, #baca-juga ul, .PopularPosts ul li .item-thumbnail-only:before, .PopularPosts ul li .item-content:before, .PopularPosts ul li > a:before {
	border-radius: 3px;
}
#share a:first-child {
	border-radius: 3px 0 0 3px;
}
#share a:last-child {
	border-radius: 0 3px 3px 0;
}

body {
	background: $(body.background);
	margin: 0 0 0 0;
	padding: 0 0 0 0;
	color: $(body.text.color);
	font: $(body.font);
	text-align: left;
}

/* WRAPPER */
#wrapper {
	background: #fff;
	max-width: 1000px;
    margin: 0 auto;
    padding: 70px 30px 30px;
    overflow: hidden;
    border-left: 1px solid rgba(0,0,0,0.05);
    border-right: 1px solid rgba(0,0,0,0.05);
}

/* HEADER */
#header-container {
	background: $(header.background.kiri);
	background: linear-gradient(to right, $(header.background.kiri), $(header.background.kanan));
	-webkit-box-shadow: 0 2px 6px 0 rgba(0,0,0,0.2);
	box-shadow: 0 2px 6px 0 rgba(0,0,0,0.2);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;
	z-index: 999;
	height: 48px;
}
#header-wrapper {
	max-width: 1000px;
	margin: 0 auto;
	position: relative;
}
.header {
	max-width: 400px;
	float: left;
	margin-right: 28px;
	overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.header h1.title, .header p.title {
	font: $(header.font);
	color: $(header.title.color);
	margin: 0;
	text-transform: uppercase;
	padding: 9px 0;
}
.header .description {
	color: $(header.title.color);
    margin: -10px 0 4px 0;
    padding: 0;
    font-size: 0.7em;
	display: none;
}
.header a, .header a:hover  {
	color: $(header.title.color);
}
.header img {
	display: block;
	width: auto;
    margin: 10px 0;
    max-height: 28px;
}


/* POST WRAPPER */
.post-container {
	padding-right: 25px;
}
#post-wrapper {
	background:transparent;
	float:left;
	width:69%;
	max-width:700px;
	margin:0 0 10px;
}
.breadcrumbs a {
	color: $(widget.title.color);
}
.post {
	margin-bottom: 20px;
}
.post-body {
	font:$(post.body.font);
	color:$(post.body.color);
	line-height: 1.6em;
	text-align: left;
	word-wrap: break-word;
}
h2.post-title, h1.post-title {
	font: $(post.title.font);
}
h1.post-title {
	font-size: 30px;
	margin-bottom: 12px;
}
h2.post-title {
	margin-bottom: 12px;
}
h2.post-title a, h1.post-title a, h2.post-title, h1.post-title {
	color: $(post.title.color);
	line-height: 1.3em;
    text-shadow: 1px 1px #fff, 1px 1px 0px #ccc, 2px 2px 0px #ddd, 3px 3px 0px #eee;
}
h2.post-title a:hover, h1.post-title a:hover {
	color: $(post.title.hover.color);
}
.img-thumbnail {
	position: relative;
	float: left;
	width: 80px;
	height: 80px;
}
.img-thumbnail img {
	width: 80px;
	height: auto;
	display: block;
}
.label-info-th {
    display: block;
    z-index: 2;
    position: relative;
    margin-bottom: 10px;
}
.label-line, .label-line-c {
	position:relative;
}
.label-line-c {
	text-align: center;
	margin-bottom: 6px;
}
.label-line:before, .label-line-c:before {
	z-index: 1;
    content: "";
    width: 100%;
    height: 2px;
    background: $(label.border.color);
    position: absolute;
    top: 50%;
    left: 0;
	margin-top: -2px;
}
.label-info-th a {
    color: $(label.color);
    background: $(label.bg.color);
    display: inline-block;
    padding: 6px 12px;
	margin: 1px 0;
    font-size: 11px;
	font-weight: 500;
    text-transform: uppercase;
    border: 2px solid $(label.border.color);
}
.label-info-th a:hover {
	color: $(link.color);
}
.post-info {
	color: $(post.footer.color);
	font: $(post.footer.font);
}
.info-1, .info-2, h2.post-title, .post-snippet {
	margin-left: 100px;
}
.info-1 {
	margin-top: 12px;
}
.info-2 {
	margin-top: 12px;
}
.info-3 {
	margin-bottom: 1.6em;
}
.post-info a {
	display: inline-block;
	color: $(post.footer.color);
}
.post-info a:hover {
	color: $(link.color);
}
.author-info:after, .time-info:after, .label-info:after {
	content: "-";
	padding: 0 2px;
}
.edit-post:before {
	content: "-";
	padding: 0 2px;
}

/* AUTHOR POST PROFILE */
.author-profile {
    overflow: hidden;
    margin: 30px 0;
	line-height: 1.5;
}
.author-profile img {
    border: none;
    float: left;
    margin-right: 15px;
    border-radius: 46px;
}
.author-profile > span {
    font-size: 14px;
    color: #888;
}
.author-profile a.g-profile {
	font-weight: 500;
    color: $(link.hover.color);
    font-size: 18px;
    margin-bottom: 5px;
    display: inline-block;
}
.author-profile a.g-profile:hover {
	color: $(link.color);
}
.author-profile a.g-profile:after {
	content: "\f058";
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-decoration: inherit;
    padding-right: 4px;
    color: $(link.color);
}


/* SIDEBAR WIDGET */
#sidebar-wrapper {
	background:transparent;
	float:right;
	width:30%;
	max-width:300px;
	margin:0 auto;
}
.sidebar h2, .sidebar-sticky h2, .latest-post-title h2, .above-post-widget h2, .comments h3, .breadcrumbs {
	font: $(widget.title.font);
    margin-bottom: 15px;
	padding: 0px 0px 5px;
    color: $(widget.title.color);
    text-transform: uppercase;
	display: inline-block;
	border-bottom: 2px solid $(widget.border.color);
}
.section:last-child .widget:last-child, .sidebar .widget, .sidebar-sticky .widget, .above-post-widget .widget, .bellow-header-widget .widget, #blog-pager {
	margin:0 0 30px;
	clear:both;
}
.sidebar ul, .sidebar ol, .sidebar-sticky ul, .sidebar-sticky ol {
	list-style-type:none;
	margin: 0;
	padding: 0;
}
.sidebar li, .sidebar-sticky li {
	margin:5px 0;
	padding: 0;
}
.sidebar-sticky {
	z-index: 997;
}
.sidebar .widget-content, .sidebar-sticky .widget-content {
	overflow: hidden;
}
.bellow-header-widget {
	text-align: center;
}
.bellow-header-widget h2 {
	display: none;
}
.bellow-header-widget .widget {
	overflow: hidden;
}
.bellow-header-widget img, .bellow-header-widget iframe{
	max-width: 100%;
	border: none;
	overflow: hidden;
}

/* CUSTOM WIDGET */

.widget ul {
	line-height:1.4em;
}

/* Label */
.label-size-1,.label-size-2,.label-size-3,.label-size-4,.label-size-5 {
	font-size:100%;
	opacity:10
}
.cloud-label-widget-content{
	text-align:left
}
.label-size {
	transition: all 0.25s;
    -moz-transition: all 0.25s;
    -webkit-transition: all 0.25s;
	line-height:1.2;
    display: block;
    float: left;
    margin: 0 3px 3px 0;
    color: $(link.color);
    font-size: 12px;
    text-transform: uppercase;
    border: 1px solid $(link.color);
}
.label-size a,.label-size span{
	display: inline-block;
	color: $(link.color);
	padding: 6px 8px;
}
.label-size:hover {
	border: 1px solid $(link.hover.color);
}
.label-size:hover a, .label-size:hover .label-count {
	color: $(link.hover.color);
}
.label-count {
	margin-left: -12px;
    margin-right: 0px;
}
.list-label-widget-content ul li {
    display: block;
    margin: 0 0 5px;
}
.list-label-widget-content ul li:last-child {
	margin-bottom: 10px
}

/* Feed */
.Feed ul li {
    display: block;
    margin: 0 0 10px;
}
.Feed ul li:last-child {
	margin-bottom: 10px;
}
.Feed .item-date, .Feed .item-author {
	color: #999;
}
.Feed .item-title {
	font-weight: 500;
}

/* Popular Posts */
.PopularPosts .widget-content ul, .PopularPosts .widget-content ul li {
	margin: 0 0;
	padding: 0 0;
	list-style:none;
	border:none;
	outline:none;
}
.PopularPosts .widget-content ul {
	margin: 0;
	list-style:none;
	counter-reset:num;
}
.PopularPosts .widget-content ul li img {
	display: block;
	width: 70px;
	height: 70px;
	float: left;
}
.PopularPosts .widget-content ul li {
	margin: 0 0 10px;
	counter-increment: num;
	position: relative;
}
.PopularPosts ul li:last-child {
	margin-bottom: 0px;
}
.PopularPosts ul li .item-title a, .PopularPosts ul li a {
	font-weight: 500;
	text-decoration: none;
	color: $(link.hover.color);
}
.PopularPosts ul li .item-title a:hover, .PopularPosts ul li a:hover {
	color: $(link.color);
}
.PopularPosts ul li .item-thumbnail-only:before, .PopularPosts ul li .item-content:before, .PopularPosts ul li > a:before {
	content: '\f005';
    font-family: fontawesome;
    font-size: 16px;
    font-weight: 500;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    color: #ffbe00 !important;
    width: 26px;
    padding-top: 1px;
    text-align: center;
}
.PopularPosts ul li > a {
	display: block;
	padding-left: 32px;
	min-height: 45px;
}
.PopularPosts .item-title, .PopularPosts .item-thumbnail, .PopularPosts .item-snippet {
	margin-left: 32px;
}
.PopularPosts .item-title {
    line-height: 1.6;
	margin-right: 8px;
	min-height: 40px;
}
.PopularPosts .item-thumbnail {
	float: left;
	margin-right: 8px;
}
.PopularPosts .item-snippet {
    line-height: 1.6em;
	font-size: 14px;
	margin-top: 8px;
}

/* Featured Post */
.FeaturedPost .post-summary {
	background: #f7f7f7;
	position: relative;
	padding: 0;
    min-height: 200px;
	max-height: 450px;
	overflow: hidden;
}
.FeaturedPost .post-summary h3 {
	font: $(post.title.font);
	position: absolute;
	bottom: 58px;
	z-index: 1;
	font-size: 28px;
	margin: 0 15px;
}
.FeaturedPost .post-summary h3:after {
	content:"";
	position:absolute;
	top:-0.25em;
	right:100%;
	bottom:-0.25em;
	width:0.25em;
}
.FeaturedPost .post-summary h3 a {
	color: $(post.title.color);
    background: #fff;
    padding: 2px 8px;
	-webkit-box-decoration-break: clone;
    -o-box-decoration-break: clone;
    box-decoration-break: clone;
}
.FeaturedPost .post-summary h3 a:hover {
	color: $(post.title.hover.color);
}
.FeaturedPost .post-summary p {
	position: absolute;
    background: #ffffff;
    color: #5a5a5a;
    padding: 3px 8px;
    bottom: 15px;
    margin: 0 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 90%;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}
.FeaturedPost .image {
	display: block;
}

/* Profile */
.Profile .widget-content {
	text-align: center;
    padding: 30px;
	margin: 0 auto;
	max-width: 300px;
    border: 2px solid $(label.border.color);
}
.Profile .profile-img {
	border-radius: 50%;
    float: none;
}
.Profile .profile-name-link {
	color: $(body.text.color);
    font-size: .9em;
    opacity: 1;
    overflow: hidden;
}
.Profile .profile-name-link:hover {
	color: $(link.color);
}
.Profile .profile-link {
    border-style: solid;
    border-width: 1px;
    cursor: pointer;
    font-size: 13px;
    font-weight: 400;
    padding: 6px 22px;
    display: inline-block;
    line-height: normal;
}
.profile-textblock {
    margin: .8em 0;
    font-size: 14px;
	line-height: 1.5em;
}
.profile-img {
	float: left;
	display:inline;
	opacity:10;
	margin:0 6px 3px 0;
}
.profile-data {
    margin: 0;
}
.profile-datablock {
    margin: .5em 0;
}
.profile-name-link {
    background: no-repeat left top;
    box-sizing: border-box;
    display: inline-block;
    max-width: 100%;
    min-height: 20px;
    padding-left: 20px;
}

/* Archive */
#ArchiveList .toggle {
    cursor: pointer;
    font-family: Arial, sans-serif;
}
#ArchiveList .toggle-open {
    _font-size: 1.7em;
    line-height: .6em;
}
#ArchiveList {
    text-align: left;
}
#ArchiveList a.post-count-link, #ArchiveList a.post-count-link:link, #ArchiveList a.post-count-link:visited {
    text-decoration: none;
}
#ArchiveList a.toggle, #ArchiveList a.toggle:link, #ArchiveList a.toggle:visited, #ArchiveList a.toggle:hover {
    color: inherit;
    text-decoration: none;
}
.BlogArchive #ArchiveList ul li {
    background: none;
    list-style: none;
    list-style-image: none;
    list-style-position: outside;
    border-width: 0;
    padding-left: 15px;
    text-indent: -15px;
    margin: .25em 0;
    background-image: none;
}
.BlogArchive #ArchiveList ul ul li {
    padding-left: 1.2em;
}
.BlogArchive #ArchiveList ul {
    margin: 0;
    padding: 0;
    list-style: none;
    list-style-image: none;
    border-width: 0;
}
.BlogArchive #ArchiveList ul.posts li {
    padding-left: 1.3em;
}
#ArchiveList .collapsed ul {
    display: none;
}

/* Artikel Terbaru */
.artikel-terbaru ul li {
	border-bottom: 2px dotted $(label.border.color);
    padding-bottom: 8px;
	margin-bottom: 8px;
	font-weight: 500;
}
.list-label-widget-content ul li, .LinkList ul li, .PageList ul li {
    border-bottom: 2px dotted $(label.border.color);
    padding-bottom: 5px;
}
.artikel-terbaru ul li:before, .list-label-widget-content ul li:before, .LinkList ul li:before, .PageList ul li:before {
    content: "\f14b"; 
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-decoration: inherit;
	margin-right: 6px;
}
.artikel-terbaru ul li:before {
    content: "\f14b";
}
.list-label-widget-content ul li:before {
    content: "\f07b"; 
}
.LinkList ul li:before {
	content: "\f14c"; 
}
.PageList ul li:before {
	content: "\f249"; 
}

/* SUBSCRIBER BOX */
.berlangganan-box {
	background: $(header.background.kiri);
	background: linear-gradient(to right, $(header.background.kiri), $(header.background.kanan));
	color: $(header.title.color);
    padding: 15px;
    margin: 20px 0;
    text-align: center;
}
.berlangganan-box p {
	margin:15px 0;
}
.berlangganan-box input.email-address[type="text"] {
	width: 60%;
    padding: 10px;
    text-align: center;
    border-radius: 2px;
	border: none;
    outline: none;
}
.berlangganan-box input.submit-email[type="submit"] {
	background: #fff;
    padding: 10px 15px;
    border-radius: 2px;
    color: $(body.text.color);
    border: none;
    outline: none;
}
.berlangganan-box input.submit-email[type="submit"]:hover {
	background: $(body.text.color);
	color: #fff;
	cursor: pointer;
}
.berlangganan-box input.email-address[type="text"]:focus {
	background: #fffcd2;
}

/* Back to top */
#back-to-top {
	background:$(backtp.background.color);
	color:$(backtp.color);
	padding:8px 10px;
	font-size:24px;
	border-radius: 22px;
	box-shadow: 0 1px 2px 0 rgba(0,0,0,.15), 0 1px 1px 0 rgba(0,0,0,.30);
}
.back-to-top {
	position: fixed !important;
    position: absolute;
    bottom: 25px;
    right: 20px;
    z-index: 998;
}

/* Share button */
.share-this-pleaseeeee {
	display: inline-block;
	margin: 0;
	color: #afafaf;
	text-transform: uppercase;
	font-size: 16px;
	background: #fff;
	z-index: 1;
	position: relative;
	padding: 0 10px;
	font-weight: 500;
}
#share-container {
  	margin: 20px auto;
	overflow: hidden;
}
#share {
	width: 100%;
  	text-align: center;
}
#share a {
    width: 25%;
    height: 40px;
    display: block;
    font-size: 24px;
    color: #fff;
    transition: opacity 0.15s linear;
    float: left;
}
#share a:hover {
	opacity: 0.8;
}
#share i {
  	position: relative;
  	top: 50%;
  	transform: translateY(-50%);
}
.this-vk {
 	background: #4c6c91;
}
.facebook {
 	background: #3b5998;
}
.twitter {
  	background: #55acee;
}
.googleplus {
  	background: #dd4b39;
}

/* Status Msg */

.status-msg-wrap {
    font-size: 110%;
    width: 90%;
    margin: 0 auto 15px;
    position: relative;
}
.status-msg-border {
    border: none;
    filter: alpha(opacity=40);
    -moz-opacity: .4;
    opacity: .4;
    width: 100%;
    position: relative;
}
.status-msg-bg {
    background-color: transparent;
    opacity: .8;
    filter: alpha(opacity=30);
    -moz-opacity: .8;
    width: 100%;
    position: relative;
    z-index: 1;
}
.status-msg-body {
    text-align: center;
    padding: .3em 0;
    width: 100%;
    position: absolute;
    z-index: 4;
}
.status-msg-hidden {
    visibility: hidden;
    padding: .3em 0;
}
.status-msg-wrap a {
    padding-left: .4em;
}

/* SLOT IKLAN */
.iklan-tengah1 .widget, .iklan-tengah2 .widget, .iklan-bawah .widget, .iklan-atas .widget, .iklan-tengah1 .widget-content, .iklan-tengah2 .widget-content, .iklan-bawah .widget-content, .iklan-atas .widget-content {
	margin:0 !important;
}
.iklan-tengah1 h2, .iklan-tengah2 h2, .iklan-bawah h2, .iklan-atas h2 {
	display: none;
}
#kode-iklan-atas ins, #kode-iklan-bawah ins, #kode-iklan-tengah1 ins, #kode-iklan-tengah2 ins {
	margin: 20px 0;
}
.post-body #kode-iklan-tengah1, .post-body #kode-iklan-tengah2, .post-body #kode-iklan-bawah, .post-body #kode-iklan-atas {
	text-align: center;
	display: block;
}
.post-body #baca-juga {
	display: block;
}

/* PAGE NAVIGATION */

#blog-pager {
	clear:both !important;
	padding:2px 0;
	text-align: center;
}
#blog-pager-newer-link a {
	float:left;
	display:block;
}
#blog-pager-older-link a {
	float:right;
	display:block;
}
.displaypageNum a,.showpage a,.pagecurrent, #blog-pager-newer-link a, #blog-pager-older-link a {
	font-size: 12px;
	padding: 8px 12px;
    margin: 0 4px 0 0;
    display: inline-block;
    color: $(link.color);
background: #111;
    color: #fff;
    border-radius: 3px;
    font-weight: 700;
    transition: all .3s;
}
#blog-pager-older-link a:hover, #blog-pager-newer-link a:hover, a.home-link:hover, .displaypageNum a:hover,.showpage a:hover, .pagecurrent {
    color: #ffffff;
    background-color: #cf2f1e;
}
.showpageOf { 
	display: none !important;
}
#blog-pager .pages {
	border: none;
}

/* FOOTER NAV MENU */
#footer-navmenu {
	background: $(navmenufooter.bg);
	padding: 25px 0px;
	font: $(navmenufooter.font);
	color: $(navmenufooter.color);
}
#footer-navmenu-container {
	max-width: 1000px;
    margin: 0 auto;
    text-align: center;
}
#footer-navmenu ul {
    list-style: none;
    margin: 0;
}
#footer-navmenu ul li {
    display: inline-block;
    margin: 6px 0;
}
#footer-navmenu ul li:after {
	content:"/";
}
#footer-navmenu ul li:last-child:after {
	content:"";
}
#footer-navmenu ul li a {
	color: $(navmenufooter.color);
	margin: 0 15px;
}
#footer-navmenu ul li a:hover {
	color: $(navmenufooter.hover.color);
	border-bottom: 2px solid $(navmenufooter.hover.color);
}

/* FOOTER WIDGET */
#footer-widget-container {
	background: $(footerwidget.bg.color);
	font-size: 18px;
}
.footer-widget {
	max-width: 1000px;
    margin: 0 auto;
    text-align: center;
}
.footer-widget h2 {
	display: none;
}
.footer-widget .widget {
	margin-bottom: 0px !important;
	padding: 20px 0px;
}

/* SOCIAL ICON */
ul.nav-social {
    list-style: none;
    margin: 0;
	padding: 0;
}
ul.nav-social li {
    display: inline-block;
    padding: 0px 15px;
	margin: 0;
}
ul.nav-social li a {
	color: $(footerwidget.color);
}

ul.nav-social li a:hover {
	color:#555;
}
ul.nav-social li a.fcb:hover {
	color:#3B5A9B;
}
ul.nav-social li a.gpl:hover {
	color:#DD4B39;
}
ul.nav-social li a.twt:hover {
	color:#1BB2E9;
}
ul.nav-social li a.ytb:hover {
	color:#ED3F41;
}
ul.nav-social li a.lkdn:hover {
	color:#007fb2;
}
ul.nav-social li a.igicon:hover {
	color:#527fa4;
}

/* SEARCH FORM */
.search-icon {
    position: absolute;
    top: 11px;
    right: 0px;
	font-size: 19px;
}
.search-icon a {
	color: $(search.icon.color);
}
#searchfs {
    position: fixed;
	z-index:9999;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    
    -webkit-transition: all 0.1s ease-in-out;
	-moz-transition: all 0.1s ease-in-out;
	-o-transition: all 0.1s ease-in-out;
	-ms-transition: all 0.1s ease-in-out;
	transition: all 0.1s ease-in-out;

    -webkit-transform: translate(0px, -100%) scale(0, 0);
	-moz-transform: translate(0px, -100%) scale(0, 0);
	-o-transform: translate(0px, -100%) scale(0, 0);
	-ms-transform: translate(0px, -100%) scale(0, 0);
	transform: translate(0px, -100%) scale(0, 0);
    
    opacity: 0;
}

#searchfs.open {
    -webkit-transform: translate(0px, 0px) scale(1, 1);
    -moz-transform: translate(0px, 0px) scale(1, 1);
	-o-transform: translate(0px, 0px) scale(1, 1);
	-ms-transform: translate(0px, 0px) scale(1, 1);
	transform: translate(0px, 0px) scale(1, 1); 
    opacity: 1;
	z-index: 9999;
}

#searchfs input[type="search"] {
	position: absolute;
    top: 50%;
    left: 0;
    margin-top: -51px;
    width: 70%;
    margin-left: 15%;
    color: rgb(255, 255, 255);
    background: transparent;
    border-top: 1px solid rgba(255, 255, 255, .8);
    border-bottom: 2px solid rgba(255, 255, 255, .5);
    border-left: 0px solid transparent;
    border-right: 0px solid transparent;
    font-size: 40px;
    text-align: center;
    outline: none;
    padding: 10px;
}
#searchfs .close {
    position: fixed;
    top: 20px;
    right: 30px;
    color: #fff;
    background-color: transparent;
    opacity: 0.8;
    font-size: 40px;
    border: none;
	outline: none;
}
#searchfs .close:hover {
	cursor: pointer;
}

/* NAV MENU */
#cssmenu, #cssmenu ul, #cssmenu ul li, #cssmenu ul li a, #cssmenu #head-mobile {
	border: 0;
	list-style: none;
	line-height: 1;
	display: block;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}
#cssmenu ul li a {
	position: relative;
}
#cssmenu #head-mobile {
	position: relative;
}
#cssmenu {
	text-align: left;
}
#cssmenu ul {
	margin: 0;
	display: block;
	height: 48px;
	overflow: hidden;
}
#cssmenu #head-mobile {
	display: none;
	position: relative;
}
#cssmenu > ul > li {
	float: left;
	margin: 0;
}
#cssmenu > ul > li > a {
	padding: 17px;
	font: $(navmenu.font);
	letter-spacing: 0.8px;
	text-decoration: none;
	text-transform: uppercase;
	color: $(navmenu.font.color);
}
#cssmenu > ul > li:hover > a, #cssmenu ul li.active a {
	color: $(navmenu.font.hover.color);
}
#cssmenu > ul > li:hover, #cssmenu ul li.active:hover, #cssmenu ul li.active, #cssmenu ul li.has-sub.active:hover {
	background: rgba(64,64,64,0.1);
	-webkit-transition: background .2s ease;
	-ms-transition: background .2s ease;
	transition: background .2s ease;
}
#cssmenu > ul > li.has-sub > a {
	padding-right: 25px
}
#cssmenu > ul > li.has-sub > a:after {
	position: absolute;
	top: 22px;
	right: 11px;
	width: 8px;
	height: 2px;
	display: block;
	background: $(navmenu.font.color);
	content:''
}
#cssmenu > ul > li.has-sub > a:before {
	position: absolute;
	top: 19px;
	right: 14px;
	display: block;
	width: 2px;
	height: 8px;
	background: $(navmenu.font.color);
	content:'';
}
#cssmenu > ul > li.has-sub:hover > a:before {
	top: 23px;
	height: 0
}
#cssmenu ul ul {
	position: absolute;
	left: -9999px;
	z-index: 1;
	-webkit-box-shadow: 0 2px 8px 0 rgba(0,0,0,0.15);
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.15);
	height: auto;
}
#cssmenu ul ul li {
	height: 0;
	background :#f8f8f8;
	margin: 0;
}
#cssmenu ul ul li:hover {
	background: #efefef;
}
#cssmenu li:hover > ul {
	left: auto
}
#cssmenu li:hover > ul > li {
	height: 33px
} 
#cssmenu ul ul ul{
	margin-left: 100%;
	top: 0
}
#cssmenu ul ul li a {
    border-bottom: 1px solid rgba(150,150,150,0.15);
    padding: 10px 25px 10px 15px;
    max-width: 100%;
	min-width: 150px;
    font-size: 12px;
    text-decoration: none;
    color: #888;
    font-weight: 400;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
#cssmenu ul ul li:last-child > a,#cssmenu ul ul li.last-item > a {
	border-bottom: 0
}

#cssmenu ul ul li.has-sub > a:after {
	position: absolute;
	top: 16px;
	right: 11px;
	width: 8px;
	height: 2px;
	display: block;
	background: #888;
	content:''
}
#cssmenu ul ul li.has-sub > a:before {
	position: absolute;
	top: 13px;
	right: 14px;
	display: block;
	width: 2px;
	height: 8px;
	background: #888;
	content:'';
}
#cssmenu ul ul > li.has-sub:hover > a:before {
	top: 17px;
	height: 0
}
#cssmenu ul ul li.has-sub:hover,#cssmenu ul li.has-sub ul li.has-sub ul li:hover {
	background: #efefef;
}
#cssmenu ul ul ul li.active a {
	border-left:1px solid #333
}
#cssmenu > ul > li.has-sub > ul > li.active > a,#cssmenu > ul ul > li.has-sub > ul > li.active> a{
	border-top: 1px solid #333
}

@media screen and (min-width:801px){
	#cssmenu ul {
		display: block !important;
	}
}
@media screen and (max-width:800px){
	#cssmenu {
		float: none;
	}
	#cssmenu ul {
		background: #f8f8f8;
		width: 100%;
		display: none;
		height: auto;
		-webkit-box-shadow: 0 2px 8px 0 rgba(0,0,0,0.15);
		box-shadow: 0 2px 8px 0 rgba(0,0,0,0.15);
	}
	#cssmenu > ul {
		max-height: calc(100vh - 48px);
		overflow-y: auto;
	}
	#cssmenu ul ul {
		-webkit-box-shadow: none;
		box-shadow: none;
		display:none;
	}
	#cssmenu ul li {
		width: 100%;
		border-top: 1px solid #efefef;
		background: #f8f8f8;
	}
	#cssmenu ul ul li, #cssmenu li:hover > ul > li {
		height: auto
	}
	#cssmenu ul li a, #cssmenu ul ul li a {
		width: 100%;
		border-bottom: 0;
		color: #888 !important;
	}
	#cssmenu > ul > li {
		float: none;
		position: relative;
	}
	#cssmenu ul ul li a {
		padding-left: 25px
	}
	#cssmenu ul ul ul li a {
		padding-left: 35px
	}
	#cssmenu ul ul, #cssmenu ul ul ul{
		position: relative;
		left: 0;
		width: 100%;
		margin: 0;
		text-align: left
	}
	#cssmenu > ul > li.has-sub > a:after,#cssmenu > ul > li.has-sub > a:before, #cssmenu ul ul > li.has-sub > a:after, #cssmenu ul ul > li.has-sub > a:before{
		display: none
	}
	#cssmenu #head-mobile {
		display: block;
		padding: 24px;
		color: #fff;
		font-size: 12px;
		font-weight: 500
	}
	.button {
		width: 25px;
		height: 20px;
		position: absolute;
		left: 0;
		top: 14px;
		cursor: pointer;
		z-index: 2;
		outline: none;
	}
	.mline1, .mline2, .mline3 {
		position: absolute;
		left: 0;
		display: block;
		height: 3px;
		width: 22px;
		background: $(search.icon.color);
		content:'';
		border-radius: 5px;
		transition: all 0.2s;
	}
	.mline1 {
		top: 0;
	}
	.mline2 {
		top: 7px;
	}
	.mline3 {
		top: 14px;
	}
	.button.menu-opened .mline1 {
		top: 8px;
		border: 0;
		height: 3px;
		width: 22px;
		background: $(navmenu.font.color);
		-webkit-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(45deg)
	}
	.button.menu-opened .mline2 {
		top: 8px;
		background: $(navmenu.font.color);
		width: 22px;
		-webkit-transform: rotate(-45deg);
		-moz-transform: rotate(-45deg);
		-ms-transform: rotate(-45deg);
		-o-transform: rotate(-45deg);
		transform: rotate(-45deg)
	}
	.button.menu-opened .mline3 {display: none;height:0;}
	#cssmenu .submenu-button {
		position: absolute;
		z-index: 99;
		right: 0;
		top: 0;
		display: block;
		border-left: 1px solid #efefef;
		height: 38px;
		width: 38px;
		cursor: pointer
	}
	#cssmenu .submenu-button.submenu-opened {
		background: rgba(64,64,64,0.1);
	}
	#cssmenu ul ul .submenu-button {
		height: 32px;
		width: 32px
	}
	#cssmenu .submenu-button:after {
		position: absolute;
		top: 19px;
		right: 16px;
		width: 8px;
		height: 2px;
		display: block;
		background: #888;
		content:''
	}
	#cssmenu ul ul .submenu-button:after {
		top: 15px;
		right: 13px
	}
	#cssmenu .submenu-button.submenu-opened:after {
		background: #888
	}
	#cssmenu .submenu-button:before {
		position: absolute;
		top: 16px;
		right: 19px;
		display: block;
		width: 2px;
		height: 8px;
		background: #888;
		content:''
	}
	#cssmenu ul ul .submenu-button:before{
		top: 12px;
		right: 16px
	}
	#cssmenu .submenu-button.submenu-opened:before{
		display: none
	}
	#cssmenu ul ul ul li.active a{
		border-left: none
	}
	#cssmenu > ul > li.has-sub > ul > li.active > a,#cssmenu > ul ul > li.has-sub > ul > li.active > a{
		border-top: none
	}
}

/* FOOTER */
#footer-container {
	background: $(footer.background.color);
	padding: 20px 5px;
	overflow: hidden;
	color: $(footer.color);
	font-size: 12px;
	text-align: center;
}
#footer-wrapper {
	max-width: 1000px;
	margin: 0 auto;
}
#footer-wrapper a {
	color: $(footer.link.color);
}
#footer-wrapper a:hover {
	color: $(footer.hover.color);
}

/* BACA JUGA */
#baca-juga {
	display: none;
    position: relative;
}
#baca-juga h2 {
	color: $(label.color);
    position: absolute;
    top: -15px;
	left: 20px;
    border: 2px solid $(label.border.color);
    padding: 2px 12px;
    font-size: 14px;
    background: $(label.bg.color);
    font-weight: 500;
	z-index: 1;
}
#baca-juga a {
	font-weight: 500;
	font-size: 14px;
    display: block;
    padding: 0;
}
#baca-juga ul {
	max-width: 75%;
    margin: 30px 0 20px;
    padding: 20px 20px 10px 40px;
    position: relative;
    border: 2px solid $(label.border.color);
}
#baca-juga li {
	padding: 0px;
	margin: .6em 0;
}

/* RELATED POSTS */
.related-post {
	margin: 30px auto 0;
	overflow: hidden;
}
.related-post h4 {
	position:relative;
    margin: 0;
    display: inline-block;
    font-weight: 500;
    color: #afafaf;
    text-transform: uppercase;
    font-size: 16px;
    z-index: 1;
    background: #fff;
    padding: 0 10px;
}
.related-post ul {
	padding: 0 !important;
	font-size: 14px;
}

/* Style 3 */
.related-post-style-3,
.related-post-style-3 li {
	margin: 0;
	padding: 0;
	list-style: none;
	word-wrap: break-word;
	overflow: hidden;
}
.related-post-style-3 .related-post-item {
	float: left;
	width: 23.5%;
	height: auto;
	margin-right: 2%;
	margin-bottom: 10px;
}
.related-post-style-3 .related-post-item:nth-of-type(4n+0) {
	margin-right: 0;
}
.related-post-style-3 .related-post-item:nth-of-type(4n+1) {
	clear: both;
}
.related-post-style-3 .related-post-item:hover {
	opacity: 0.7;
}
.related-post-style-3 .related-post-item-thumbnail {
    display: block;
    max-height: none;
    background-color: transparent;
    border: none;
    padding: 0;
    max-width: 100%;
}
.related-post-style-3 .related-post-item-title {
	color: #444;
}
.related-post-style-3 .related-post-item-tooltip {
    padding: 10px 0;
}
.related-post-item-tooltip .related-post-item-title {
    font-weight: 500;
    display: block;
}

@media only screen and (max-width:480px){
	.related-post-style-3 .related-post-item {
		width: 48%;
		margin-right: 4%;
	}
	.related-post-style-3 .related-post-item:nth-of-type(2n+0) {
		margin-right: 0;
	}
	.related-post-style-3 .related-post-item:nth-of-type(2n+1) {
		clear: both;
	}
}

.contact-form-widget {
}
.contact-form-success-message, .contact-form-error-message {
    background: #f9edbe;
    border: 0 solid #f0c36d;
    font-size: 14px;
    text-align: center;
    max-width: 500px;
    border-radius: 3px;
}
.contact-form-success-message-with-border, .contact-form-error-message-with-border {
    background: #f9edbe;
    border: 1px solid #f0c36d;
    font-size: 14px;
    text-align: center;
    max-width: 600px;
    border-radius: 3px;
	box-sizing: border-box;
	padding: 5px 10px;
}
.contact-form-cross {
    height: 11px;
    margin: 0 5px;
    vertical-align: -8.5%;
    width: 11px;
}
.contact-form-email, .contact-form-name {
	color: inherit;
	height: 40px;
    margin-top: 5px;
    max-width: 300px;
    width: 100%;
    padding: 0 15px;
    border-radius: 3px;
    border: 1px solid #cacaca;
    box-sizing: border-box;
}
.contact-form-email-message {
	color: inherit;
    margin-top: 5px;
    vertical-align: top;
    max-width: 600px;
    width: 100%;
    border-radius: 3px;
    border: 1px solid #cacaca;
    padding: 15px;
}
.contact-form-email:hover, .contact-form-name:hover, .contact-form-email-message:hover {
	outline: none;
	border: 1px solid $(link.color);
}
.contact-form-email:focus, .contact-form-name:focus, .contact-form-email-message:focus {
    outline: none;
	border: 1px solid $(link.color);
}
.contact-form-name, .contact-form-email, .contact-form-email-message {
	background: #f8f8f8;
}
.contact-form-button {
	display: block;
	font-size: 14px;
    line-height: 24px;
    padding: 5px 20px;
	margin: 30px 0;
    text-align: center;
    border: none;
    background: $(link.color);
    color: #fff;
    border-radius: 3px;
	font-weight: 500;
}
.contact-form-button:hover, .contact-form-button.hover {
	cursor: pointer;
	outline: none;
	opacity: .85;
}
.contact-form-button.focus, .contact-form-button.right.focus, .contact-form-button.mid.focus, .contact-form-button.left.focus {
    outline: none;
}
.contact-form-button-submit:focus, .contact-form-button-submit.focus {
	outline: none;
	opacity: .85;
}
.swajib {
	font-weight: bold;
	color: #e85e5e;
}
.ctitles {
    font-weight: 500;
    display: block;
    margin: 30px 0 0;
}


/* COMMENT FORM */
#comments-block {
	margin: 15px 0;
}
.comment-body {
	padding: 15px 0;
	margin: 0 0;
}
.comment-body p {
	margin: 0;
}
.comment-form {
	overflow: hidden;
	margin-top: 20px;
}
.comment-footer {
	margin: 0 0 30px;
}
#comments-block .avatar-image-container {
	display: none;
}
h4#comment-post-message {
	display: none;
	margin: 0 0 0 0;
}
.comments{
	clear: both;
	margin-top: 10px;
	margin-bottom: 0
}
.comments .comments-content{
	font-size: 14px;
	margin-bottom: 30px
}
.comments .comments-content .comment-thread ol{
	text-align: left;
	margin: 13px 0;
	padding: 0;
	list-style: none;
}
.comment .avatar-image-container {
	float: left;
	max-height: 36px;
	overflow: hidden;
	width: 36px;
}
.comments .avatar-image-container img {
    max-width: 34px;
    border-radius: 17px;
}
.comments .comment-block{
	position: relative;
	padding: 20px;
	margin-left: 45px;
	border: 2px solid $(label.border.color);
	border-radius: 10px;
	word-break: break-word;
}
.comments .comments-content .comment-replies{
	margin:10px 0;
	margin-left:45px
}
.comments .comments-content .comment-thread:empty{
	display:none
}
.comments .comment-replybox-single {
	margin-left:45px
}
.comments .comment-replybox-thread {
}
iframe#comment-editor {
	min-height: 220px;
}
.comments .comments-content .comment{
	margin-bottom:6px;
	padding:0
}
.comments .comments-content .comment:first-child {
	padding:0;
	margin:0
}
.comments .comments-content .comment:last-child {
	padding:0;
	margin:0
}
.comments .comment-thread.inline-thread .comment, .comments .comment-thread.inline-thread .comment:last-child {
	margin:0px 0px 5px 14%
}
.comment .comment-thread.inline-thread .comment:nth-child(6) {
	margin:0px 0px 5px 12%;
}
.comment .comment-thread.inline-thread .comment:nth-child(5) {
	margin:0px 0px 5px 10%;
}
.comment .comment-thread.inline-thread .comment:nth-child(4) {
	margin:0px 0px 5px 8%;
}
.comment .comment-thread.inline-thread .comment:nth-child(3) {
	margin:0px 0px 5px 4%;
}
.comment .comment-thread.inline-thread .comment:nth-child(2) {
	margin:0px 0px 5px 2%;
}
.comment .comment-thread.inline-thread .comment:nth-child(1) {
	margin:0px 0px 5px 0;
}
.comments .comments-content .comment-thread{
	margin:0;
	padding:0
}
.comments .comments-content .inline-thread{
	background:#fff;
	margin:0
}
.comments .comments-content .icon.blog-author {
	display:inline;
	height: 18px;
	margin: 0 0 -4px 6px;
	width: 18px;
}
.comments .comments-content .icon.blog-author:after {
	content:"\f058";
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-decoration: inherit;
    padding-right:4px;
	color:$(link.color);
}
.comments .comments-content .comment-header {
	font-size:14px;
	margin: 0 0 15px;
}
.comments .comments-content .comment-content {
	margin: 0 0 15px;
	text-align: left;
	line-height: 1.6;
}
.comments .comments-content .datetime {
	margin-left: 6px;
}
.comments .comments-content .datetime a {
	color:#bbbbbb;
}
.comments .comments-content .user {
	font-weight: 500;
	font-style: normal;
}
.comments .comment .comment-actions a {
	display:inline-block;
	font-weight:500;
	font-size:13px;
	line-height:15px;
	margin:4px 8px 0 0;
}
.comments .continue a {
	display:inline-block;
	font-size:13px;
	padding: .5em;
}
.comments .comment .comment-actions a:hover, .comments .continue a:hover{
	text-decoration:underline;
}
.pesan-komentar {
	padding: 0 8px;
}
.pesan-komentar p {
	margin: 5px 0;
}
.comments .comments-content .loadmore {
	max-height: 24px;
	opacity: 1;
	overflow: hidden;
	line-height: 24px;
}
.comments .comments-content .loadmore a {
	display: block;
	padding: 0 0;
	text-align: center;
	font-weight: 500;
}
.deleted-comment {
	font-style: italic;
	opacity: .5;
}

/* MEDIA QUERY */
@media only screen and (max-width:1080px){
	#wrapper {
		margin: 0 auto;
	}
	.footer-widget, #footer-navmenu-container {
		max-width: 100%;
	}
	#header-wrapper, .footer-widget .widget, #footer-navmenu-container {
		padding-left: 30px;
		padding-right: 30px;
	}
	.sticky-mobile {
		margin-right: 30px;
	}
	.img-thumbnail, .img-thumbnail img {
		width: 80px;
	    height: auto;
	}
	.info-1, .info-2, h2.post-title, .post-snippet {
		margin-left: 100px;
	}
	.search-icon {
		right: 30px;
	}
}
@media only screen and (max-width:800px){
	#header-wrapper {
		padding-left: 0px;
		padding-right: 0px;
		position: relative;
	}
	#wrapper {
		padding: 70px 20px 20px;
	}
	#cssmenu > ul > li > a {
		padding: 12px 20px;
	}
	.footer-widget .widget, #footer-navmenu-container {
		padding-left: 20px;
		padding-right: 20px;
	}
	.button {
		left: 20px;
	}
	.header {
		position: absolute;
		top: 0;
		left: 45px;
		right: 45px;
		z-index: 1;
		text-align: center;
		float: none;
		display: inline-block;
		max-width: 100%;
		margin-right: 0;
	}
	.header img {
		display: inline-block !important;
	}
	.img-thumbnail, .img-thumbnail img {
		width: 80px;
        height: auto;
	}
	.info-1, .info-2, h2.post-title, .post-snippet {
		margin-left: 100px;
	}
	.search-icon {
		right: 20px;
	}
}
@media only screen and (max-width:768px){
	#post-wrapper, #sidebar-wrapper {
		float:none;
		width:100%;
		max-width:100%
	}
	.post-container {
		padding: 0 0 20px 0;
	}
}

@media only screen and (max-width:640px){
	#wrapper {
		padding: 70px 15px 15px;
	}
	#cssmenu > ul > li > a {
		padding: 12px 15px;
	}
	.footer-widget .widget, #footer-navmenu-container {
		padding-left: 15px;
		padding-right: 15px;
	}
	.button {
		left: 15px;
	}
	#post-wrapper, #sidebar-wrapper {
		float:none;
		width:100%;
		max-width:100%
	}
	.info-1, .info-2, h2.post-title, .post-snippet {
		margin-left: 100px;
	}
	.search-icon {
		right: 15px;
	}
}

@media only screen and (max-width:480px){
	#wrapper {
		padding: 70px 12px 12px;
	}
	#cssmenu > ul > li > a {
		padding: 12px 12px;
	}
	.footer-widget .widget, #footer-navmenu-container {
		padding-left: 12px;
		padding-right: 12px;
	}
	#footer-navmenu ul li a {
		margin: 0px 8px;
	}
	ul.nav-social li {
		padding: 0px 8px;
	}
	.button {
		left: 12px;
	}
	.img-thumbnail {
		width: 100%;
		height: 80px;
		margin: 0px 0px 15px 0px;
		overflow: hidden;
	}
	.img-thumbnail img {
		width: 80px;
		position: relative;
		top: 50%;
		transform: translateY(-50%);
		height: auto;
		display: inline-block;
	}
	.info-1, .info-2, h2.post-title, .post-snippet {
		margin-left: 0px;
	}
	.post-snippet {
		margin-top: 10px;
	}
	h1{font-size:170%}
	h2{font-size:150%}
	h3{font-size:130%}
	h4{font-size:120%}
	h5{font-size:110%}
	h6{font-size:100%}
	h2.post-title {
		font-size: 18px;
		display: inline;
	}
	h1.post-title {
		font-size: 24px;
	}
	.section:last-child .widget:last-child, .sidebar .widget, .sidebar-sticky .widget, .above-post-widget .widget, .bellow-header-widget .widget, #blog-pager {
		margin:0 0 20px;
	}
	.comments .comments-content .comment-replies{
		margin-left:20px !important;
	}
	.comments .comment-block {
		padding: 15px !important;
	}
	.comment .comment-thread.inline-thread .comment {
		margin: 0 0 0 0 !important;
	}
	iframe#comment-editor {
		min-height: 270px;
	}
	#searchfs input[type="search"] {
		font-size: 26px;
	}
	.FeaturedPost .post-summary h3 {
		font-size: 20px;
		margin: 0 10px;
	}
	.FeaturedPost .post-summary p {
		margin: 0 10px;
	}
	.search-icon {
		right: 12px;
	}
	#baca-juga {
		max-width: 100%;
	}
}

@media screen and (max-width:320px){
	#wrapper {
		padding: 70px 10px 10px;
	}
	#cssmenu > ul > li > a {
		padding: 12px 10px;
	}
	.footer-widget .widget, #footer-navmenu-container {
		padding-left: 10px;
		padding-right: 10px;
	}
	.button {
		left: 10px;
	}
	.info-1, .info-2, h2.post-title, .post-snippet {
		margin-left: 0px;
	}
	.search-icon {
		right: 10px;
	}
}
/* Arlina Shortcodes */
ul.button {display:contents;position: relative;list-style: none;margin: auto;}
/* CSS Arlina Shortcodes END */
/* Tombol Download */
.download {
	border-radius: 3px;
	display: inline-block;
	position: relative;
	padding: 5px 15px;
    margin: 10px auto;
    width: 160px;
	background-color:#dd4b39;
	color: white !important;
	font-weight: 500;	
	font-size: 0.9em;
	text-align: center;
	text-indent: 15px;
	transition:all 0.4s;
	-moz-transition:all 0.4s;
	-webkit-transition:all 0.4s;
}
.download:hover {
	opacity: .85;
}
.download:before, .download:after {
	content: ' ';
	display: block;
	position: absolute;
	left: 15px;
	top: 52%;
}
.download:before {
	width: 10px;
	height: 2px;
	border-style: solid;
	border-width: 0 2px 2px;
}
.download:after {
	width: 0;
	height: 0;
	margin-left: 3px;
	margin-top: -7px;
	border-style: solid;
	border-width: 4px 4px 0 4px;
	border-color: transparent;
	border-top-color: inherit;
	animation: downloadArrow 2s linear infinite;
	animation-play-state: paused;
}
.download:hover:after {
	animation-play-state: running;
}
@keyframes downloadArrow {
	0% {
		margin-top: -7px;
		opacity: 1;
	}
	0.001% {
		margin-top: -15px;
		opacity: 0;
	}
	50% {
		opacity: 1;
	}
	100% {
		margin-top: 0;
		opacity: 0;
	}
}

/* Skin for Blogger Tabbed Layout TOC */
.tabbed-toc {
	margin: 0 auto;
	background: $(header.background.kiri);
	background: linear-gradient(to bottom right, $(header.background.kiri), $(header.background.kanan));
	position: relative;
}
.tabbed-toc .loading {
	display: block;
	padding: 2px 12px;
	color: $(navmenu.font.color);
}
.tabbed-toc ul,
.tabbed-toc ol,
.tabbed-toc li {
	margin: 0;
	padding: 0;
	list-style: none;
}
.tabbed-toc .toc-tabs {
	width: 20%;
	float: left;
}
.tabbed-toc .toc-tabs li a {
	display: block;
	font: $(navmenu.font); 
	overflow: hidden;
	color: $(navmenu.font.color);
	text-transform: uppercase;
	text-decoration: none;
	padding: 12px;
}
.tabbed-toc .toc-tabs li a:hover {
	background-color: rgba(64,64,64,0.1);
}
.tabbed-toc .toc-tabs li a.active-tab {
	background: rgba(64,64,64,0.1);
	position:relative;
	z-index:5;
	margin:0 -1px 0 0;
	/* cursor:text; */
}
.tabbed-toc .toc-content,
.tabbed-toc .toc-line {
	width: 80%;
	float: right;
	background-color: white;
	border-left: 5px solid rgba(64,64,64,0.1);
	box-sizing: border-box;
}
.tabbed-toc .toc-line {
	float: none;
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
}
.tabbed-toc .panel {
	position: relative;
	z-index: 5;
}
.tabbed-toc .panel li a {
	display: block;
	position: relative;
	font-weight: 500;
	font-size: 14px;
	padding: 6px 12px;
	overflow: hidden;
}
.tabbed-toc .panel li time {
	display: block;
	font-weight: normal;
	font-size: 11px;
	color: #666;
	float: right;
}
.tabbed-toc .panel li .summary {
	display: block;
	padding: 10px 12px 10px;
	font-size: 13px;
}
.tabbed-toc .panel li .summary img.thumbnail {
	float: left;
	display: block;
	margin: 5px 8px 0 0;
	width: 72px;
	height: 72px;
	background-color: #fafafa;
}
.tabbed-toc .panel li {background-color:#f3f3f3}
.tabbed-toc .panel li:nth-child(even) {background-color:#fff}
.tabbed-toc .panel li a:hover,
.tabbed-toc .panel li a:focus,
.tabbed-toc .panel li.bold a {
	background-color: rgba(64,64,64,0.1);
	outline: none;
}
@media (max-width:700px) {
	.tabbed-toc .toc-tabs,
	.tabbed-toc .toc-content {
		overflow :hidden;
		width: auto;
		float: none;
		display: block;
	}
	.tabbed-toc .toc-tabs li {
		display: inline;
		float: left;
	}
	.tabbed-toc .toc-tabs li a.active-tab {
		background-color: rgba(64,64,64,0.1);
	}
	.tabbed-toc .toc-content { border: none }
	.tabbed-toc .toc-line,
	.tabbed-toc .panel li time { display: none }
}