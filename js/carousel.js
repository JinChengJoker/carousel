let $points =  $('.carousel-points > span')
let $carousel = $('.carousel')
let n = 0 % $points.length
let timerId = setTimer()

for(let i = 0; i < $points.length; i++) {
    $points.eq(i).on('click', function(e) {
        let $button = $(e.currentTarget)
        let index = $button.index()
        let px = index * -640
        n = index
        $button.addClass('active').siblings().removeClass('active')
        $('.carousel-images').css({
            transform: 'translateX(' + px +'px)'
        })
    })
}

clickButton()

$carousel.on('mouseenter', function() {
    clearInterval(timerId)
})
$carousel.on('mouseleave', function() {
    timerId = setTimer()
})

function setTimer() {
    return setInterval(() => {
        n += 1
        n = n % $points.length
        clickButton()
    }, 3000)
}

function clickButton() {
    $points.eq(n).click()
}