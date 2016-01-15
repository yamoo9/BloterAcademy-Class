Bloter Academy Course `2016.01.15`
## [디자이너를 위한 디자인+코딩](http://www.bloteracademy.net/course/6681)

### DAY02

#### 브라우저 리셋(초기화)

웹 브라우저는 각기 조금씩 다르게 기본 스타일을 처리하고 있어<br>
디자인 시에 결과가 달라진다. 이를 해결하기 위해 기본 스타일을 초기화한다.

```css
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
```

-

#### 웹 그리드 시스템

웹 그리드 시스템을 사용하여 레이아웃 설계<br>
웹 그리드 시스템에 사용되는 CSS 핵심 기술은 `float`

`css/grid-system.css`

```css
.container {
	overflow: hidden;
	width: 960px;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 10px;
	/*background-image: url("../images/columns-8-960.png");*/
	background-image: linear-gradient(90deg, rgba(31, 75, 165, 0.45) 50%, transparent 50%);
	background-size: 240px 240px;
}

.grid {
	float: left;
	height: 60px;
	margin-bottom: 10px;
	background-color: #333;
	color: #fff;
	text-align: center;
	line-height: 60px;
}
.grid-1 { width: 120px; }
.grid-2 { width: 240px; }
.grid-3 { width: 360px; }
.grid-4 { width: 480px; }
.grid-5 { width: 600px; }
.grid-6 { width: 720px; }
.grid-7 { width: 840px; }
.grid-8 { width: 960px; }
```

-

#### CSS 모듈 관리

각기 다른 역할의 코드를 별도로 나누어 관리하는 것으로<br>
코드를 관리하는데 효율적

`css/aware.css`

```css
@import "reset.css";
@import "grid-system.css";

body {
	background-color: #eaeaea;
	/*background-image: url("../images/leading-10.png");*/
	background-image: linear-gradient(180deg, transparent 90%, #9568F3);
	background-size: 10px 10px;
	/*background-repeat: repeat;*/
	/*height: 100%;*/
	height: 100vh; /* vh: viewport height */
}

.container-header {
	height: 80px;
	background: #fff;
}

.container-slide-menu {
	height: 480px;
	background: #CECECE;
}

.container-slide-menu .content-view {
	background: #FC414B;
	height: 480px;
}

.container-slide-menu .navi {
	height: 120px;
	background: #54AEC3;
}
```