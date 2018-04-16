function findLongestWord(str) {
    var splited = str.split(' ');
    str = splited[0];
    for (var i = 1; i < splited.length; i++)
        if (splited[i].length > str.length)
            str = splited[i];

    return str.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
  