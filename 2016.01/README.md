Bloter Academy Course `2016.01.08`
## [디자이너를 위한 디자인+코딩](http://www.bloteracademy.net/course/6681)

### DAY01

![Web-Designer-developer](../Assets/Web-design-and-development-process-Yariv-Gurfinkel-%C2%A6-Web-Designer-developer.jpg)

##### 오늘날 웹/앱 디자인 프로세스에 요구되는 것들


`NUI(Natural User Interface)`, `N-Screen` 대응<br>
비트맵이 아닌 벡터 그래픽을 고려해야 하는 시대<br>
시스템 기반의 설계 (협업, `Collaboration`)


1. 반응성(`Reactivity`)
1. 유연성(`Flexibility`)
1. 확장성(`Extensibility`)

-

##### [WHY] 해외 디자인 환경의 변화

왜? 그들은 `Photoshop(Bitmap Based Tool)`이 아닌, `Sketch(Vector Based Tool)`를 말하는가?

![featured11](http://netdna.webdesignerdepot.com/uploads/2015/03/featured11.jpg)

- [Switching To Sketch For Your Next Project](http://www.newmediacampaigns.com/blog/switching-to-sketch-for-your-project)
- [INFOGRAPHIC: SKETCH VS PHOTOSHOP](http://www.webdesignerdepot.com/2015/03/infographic-sketch-vs-photoshop/)
- [Sketch VS Photoshop](http://blog.mengto.com/sketch-vs-photoshop/)
- [Photoshop vs Sketch](http://photoshopsecrets.tumblr.com/post/100218629171/photoshop-vs-sketch)
- [Sketch vs. Photoshop : 5 Expert Web Designers Share Their Thoughts](http://www.1stwebdesigner.com/sketch-vs-photoshop/)
- [Zelplin](https://zeplin.io/features.html#designer)

-

##### [BUT] Photoshop CC 2015의 진화

- 벡터 그래픽 (Photoshop Vector Graphic)
- 그리드 시스템 (Draw Grid System)
- N-Screen (@1x, @2x, @3x, ... Slicing Images)
- 멀티 페이지 (Artboard)

![adobe-photoshop-cc-2015-with-crack-32bit-and-64bit](http://www.alihow.com/wp-content/uploads/2015/11/adobe-photoshop-cc-2015-with-crack-32bit-and-64bit.jpeg)

-

##### [[GUIDE] 디자인 방법론](https://github.com/yamoo9/PSD2HTML-CSS/wiki)

- [디자인 프로세스](https://github.com/yamoo9/PSD2HTML-CSS/wiki/%EB%94%94%EC%9E%90%EC%9D%B8-%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4)
- [웹 타이포그래피](https://github.com/yamoo9/PSD2HTML-CSS/wiki/%EC%9B%B9-%ED%83%80%EC%9D%B4%ED%8F%AC%EA%B7%B8%EB%9E%98%ED%94%BC)
- [웹 그리드시스템](https://github.com/yamoo9/PSD2HTML-CSS/wiki/%EC%9B%B9-%EA%B7%B8%EB%A6%AC%EB%93%9C-%EC%8B%9C%EC%8A%A4%ED%85%9C)
- [자연 안에서 찾은 황금 디자인](https://github.com/yamoo9/PSD2HTML-CSS/wiki/%EC%9E%90%EC%97%B0-%EC%95%88%EC%97%90%EC%84%9C-%EC%B0%BE%EC%9D%80-%ED%99%A9%EA%B8%88-%EB%94%94%EC%9E%90%EC%9D%B8)

-

##### [RESOURCES] 디자인 리소스

[자연 안에서 찾은 황금 디자인](https://github.com/yamoo9/PSD2HTML-CSS/wiki/%EC%9E%90%EC%97%B0-%EC%95%88%EC%97%90%EC%84%9C-%EC%B0%BE%EC%9D%80-%ED%99%A9%EA%B8%88-%EB%94%94%EC%9E%90%EC%9D%B8)을 읽은 후, **황금 비율**을 사용해보세요.

- [Photoshop Custom Shape: 황금 비율(Golden Ratio)](2015.12/Photoshop Custom Shape)
- [Photoshop Script: 토글 그리드(toggleGridLayers.jsx)](2015.12/Photoshop Script)

![](https://i.ytimg.com/vi/I2kNf7jnQxU/maxresdefault.jpg)
![](http://www.pencilscoop.com/public/uploads/images/2014/03/golden-design-step3.jpg)
![](http://assets.pencilscoop.com/public/uploads/images/golden-ratio-hero_large.jpg)

-

##### [ENVIRONMENT] 웹 환경 이해

![](http://lghttp.nex.nexcesscdn.net/803313/static/images/blog/2014-11/skitch.jpg)

HTML 문서 구조화 기본기를 학습해봤습니다.

- 문서유형정의(DTD, Document Type Definition)
- 언어 인코딩(Charactor Encoding)
- 모바일 최적화(Mobile Optimization)
- 문서 구조화(Markup)
	- 제목(Heading)
	- 단락(Paragraph)

-

#### `www/index.html`
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>[기본기] 웹 문서의 시작</title>
		<!-- 모바일 최적화 -->
		<meta name="viewport" content="width=device-width">
	</head>
	<body>

		<!--
			문서에는 제목, 단락이 항상 있는 요소
		-->

		<!--
			제목 Heading 1-6
		-->
		<h1>Heading 1</h1>
		<h2>Heading 2</h2>
		<h3>Heading 3</h3>
		<h4>Heading 4</h4>
		<h5>Heading 5</h5>
		<h6>Heading 6</h6>

		<!--
			단락 Paragraph
			Dummy Text: Lorem Ipsum
		-->
		<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>

		<p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>

	</body>
</html>
```

---