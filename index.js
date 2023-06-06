window.addEventListener("DOMContentLoaded", () => {
	document.activeElement.blur();
	$(".preload").css({ display: "table" });
	var percent = 0;
	var int = null;
	int = setInterval(function () {
		percent += 20;
		$(".loading-bar .bar").css({ width: percent + "%" });
		$("span.active").removeClass("active").next().addClass("active");
		if (percent >= 100) {
			clearInterval(int);
		}
	}, 500);
});
