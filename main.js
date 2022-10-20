$("#clickBtn").click(function() {
    $('#left').toggle('left')
});

$("#clickBtn").click(function() {
    $('#right').toggle('right')
});
$("#clickBtn").click(function() {
    $('#nextBtn').addClass('block')
});


$("#nextBtn").click(function() {
    $('#span1, #clickBtn').addClass('none')
});

$("#nextBtn").click(function() {
    $('#span2 ').addClass('block')
});