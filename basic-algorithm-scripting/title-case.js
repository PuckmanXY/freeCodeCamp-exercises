
function titleCase(str) {
    var splited = str.split(' ');
    str = '';
    for (var i = 0; i < splited.length; i++) {
        splited[i].toLowerCase();
        splited[i][0] = splited[i].charAt(0).toUpperCase();
        console.log(splited[i][0]);
        if (i == splited.length - 1)
            str += splited[i];
        else
            str += splited[i] + ' ';
    }
    return str;
  }
  
  titleCase("I'm a little tea pot");
  