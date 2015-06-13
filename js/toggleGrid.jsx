// Ps 파일을 열면
// 현재 활성화된 문서 : activeDocument
// 의 레이어들 [집합] e.g) [0, 1, 2, 3, 4]
// 첫번째 레이어 -> activeDocument.layers[0]
// 보여지고 안 보여지고 속성 -> visible e.g) yamoo9.job

// 현재 활성화된 문서의 레이어들 중에 첫번째 레이어의
// 만약 눈 아이콘이 켜져있으면.... 눈 아이콘을 꺼라.
// 아니면 눈 아이콘이 꺼져있으면.... 눈 아이콘을 켜라.

var fl = activeDocument.layers[0];

if (fl.visible == true) {
	fl.visible = false;
} else {
	fl.visible = true;
}