function toggleSlide(id, direction) {
	const ids = ["prof", "vol", "lead"];
	
	var element = document.getElementById(id);
	var position = ids.indexOf(id);
	element.style.display = "none";

	if (direction === "l") {
		if (position === 0) {
			var dis_element = document.getElementById(ids[2]);
		} else {
			var dis_element = document.getElementById(ids[position-1]);
		}
	} else if (direction === "r") {
		var dis_element = document.getElementById(ids[(position + 1) % 3]);
	}
	dis_element.style.display = "block";
}