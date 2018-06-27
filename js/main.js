$(document).ready(function(){
//Слайдеры	
    $('.slider').slick({
		arrows: true,
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
		dots: true
	});
	$('.service-cat-slider').slick({
		arrows: false,
		dots: false
	});
	$('.contact-map-slider').slick({
		arrows: false,
		dots: false
	});
//Прокрутка
	$('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
//Всплывающее окно
    $('.popup').click( function(e){
        e.preventDefault();
    	$('#orderFormWindow').arcticmodal();
	});
// Параллакс
    if($(window).width() > 960)
    {
        $('body').parallax({
            'elements': [
                {
                    'selector': '.move',
                    'properties': {
                        'x': {
                            'right': {
                                'initial': 500,
                                'multiplier': 0.04,
                                'unit': 'px',
                                'invert': false
                            }
                        },
                        'y': {
                            'top': {
                                'initial': 100,
                                'multiplier': 0.1,
                                'unit': 'px',
                                'invert': true
                            }
                        }
                    }
                }
            ]
        });
    } else {
        // change functionality for larger screens
    }
// Гамбургер
    $('.menu__open').click(function () {
        $('.menu-collapse').toggleClass('d-none');
        $('.menu-collapse').toggleClass('opened');
    })   
});
