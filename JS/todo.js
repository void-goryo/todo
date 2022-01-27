var text = {'feeling':'Good', 'time':'Morning'}
var text1 = {'greeting':'Hello', 'afterG':'There!'}

//var jsn = JSON.stringify(text);
var Jstr = JSON.parse(text1);

document.getElementById('text1').innerHTML = jsn;
document.getElementById('text2').innerHTML = Jstr.greeting + '' + Jstr.afterG;