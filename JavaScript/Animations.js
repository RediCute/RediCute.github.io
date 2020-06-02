var AnimationsRunning;

function OnLoad() {

	AnimationOnLoad();
}

function whichAnimationEvent() {
	var t,
		el = document.createElement("fakeelement");

	var animations = {
		"animation": "animationend",
		"OAnimation": "oAnimationEnd",
		"MozAnimation": "animationend",
		"WebkitAnimation": "webkitAnimationEnd"
	}

	for (t in animations) {
		if (el.style[t] !== undefined) {
			return animations[t];
		}
	}
}

var animationEvent = whichAnimationEvent();

function AnimationOnLoad() {
	StartAnimations();
}

function FirstTyperEnd(event) {
	$(".firsttyper").removeClass("blinker");
	$(".firsttyper").removeClass("typing");
	$(".secondtyper").removeClass("hidetyper");
	$(".secondtyper").addClass("blinker");
	$(".secondtyper").addClass("typing");
}

function SecondTyperEnd() {
	$(".secondtyper").removeClass("blinker");
	$(".secondtyper").removeClass("typing");
	EndAnimations();
}

function AnimationsButtonClick() {
	if (AnimationsRunning) {
		EndAnimations();
	}
	else {
		StartAnimations();
	}
}

function StartAnimations() {
	AnimationsRunning = true;

	$(".firsttyper").addClass("typing");
	$(".firsttyper").addClass("blinker");
	$(".firsttyper").one(animationEvent, FirstTyperEnd);

	$(".secondtyper").addClass("hidetyper");
	$(".secondtyper").one(animationEvent, SecondTyperEnd);

	AnimationsRunning = true;
}

function EndAnimations() {
	$(".hidetyper").removeClass("hidetyper");
	$(".typing").removeClass("typing");
	$(".blinker").removeClass("blinker");

	AnimationsRunning = false;
}