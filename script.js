// alert('Hello world!');

N = 40
Cell_size = 50;
$cells = [];

window.onload = ready;

function ready() {

	$body = $('body');

	for(i = 0; i < N; i++) {
		$line = [];
		for(j = 0; j < N; j++) {
			$new_cell = $('<div></div>').addClass('cell');
			// console.log($new_cell.css)
			$new_cell.css('top', i * Cell_size);
			$new_cell.css('left', j * Cell_size);
			$new_cell.attr('y', i);
			$new_cell.attr('x', j);
			$body.append($new_cell);
			$new_cell.click(change_color_random);
			$new_cell.mousemove(change_color_random);
			$line.push($new_cell);
		}
		$cells.push($line);
	}
	console.log($cells);


}

function print_hello() {
	alert($(this).attr('y') + $(this).attr('x'));
}

function hide_el() {
	$(this).remove();
}

function change_color() {
	$(this).toggleClass('red');
	$(this).toggleClass('white');
}

function change_color_random() {
	r = Math.random() * 255;
	g = Math.random() * 255;
	b = Math.random() * 255;
	random_color = `rgb(${r}, ${g}, ${b})`;
	$(this).css('background-color', random_color);
}













