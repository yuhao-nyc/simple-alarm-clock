var setCount = 0;

function setTime() {
    var alarmHr = document.querySelector('.alarm-hour').value,
        alarmMin = document.querySelector('.alarm-min').value,
        alarmSec = document.querySelector('.alarm-sec').value,
        alarmHint = document.querySelector('.alarm-hint').value,
        alarmHr = alarmHr < 10 ? '0' + alarmHr : alarmHr,
        alarmMin = alarmMin < 10 ? '0' + alarmMin : alarmMin,
        alarmSec = alarmSec < 10 ? '0' + alarmSec : alarmSec;

        document.getElementById('alarmTime').innerHTML = alarmHr + '*' + alarmMin + '*' + alarmSec + alarmHint;
        setCount = 1;
        document.getElementById('msg').innerHTML = 'Alarm is ON';
        document.getElementById('msg').setAttribute('style', 'color: yellow');
}
function audioAlarm() {
    var audio = new Audio('alarm-sound.wav');
    audio.play();
}

function alarm() {
    var date = new Date(),
        hr = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        hour = hr,
        hint = 'AM',
        hr = hr < 10 ? '0' + hr : hr,
        min = min < 10 ? '0' + min : min,
        sec= sec < 10 ? '0' + sec : sec;

        if (hour > 12) {
            hour = '0' + (hr - 12);
            hint = 'PM';
        }
        if (hour == 12) {
            hint = 'PM';
        }
        if (hour == 0) {
            hour == 12;
        }
        document.getElementById('date-hour').innerHTML = hour;
        document.getElementById('date-min').innerHTML = min;
        document.getElementById('date-sec').innerHTML = sec;
        document.getElementById('date-hint').innerHTML = hint;

        var dateClone = document.getElementById('alarmTime').innerHTML,
            dateNow = hour + '*' + min + '*' + sec + hint;

        if (dateClone == dateNow && setCount) {
            audioAlarm();
            setCount = 0;
            document.getElementById('msg').innerHTML = 'Time to wake up!';
            document.getElementById('msg').setAttribute('style', 'color: #ff768e');
            alert('Time to wake up!');
        }

        setTimeout(function() {
            alarm()
        }, 500);
}

function dateOptions(x) {
    for (var i = 0; i < x; i++) {
        document.write("<option value=" + i + ">" + i  + "</option>");
    }
}
