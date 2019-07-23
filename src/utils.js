export const nodeToString = node => {
  var tmpNode = document.createElement( "div" );
  tmpNode.appendChild( node.cloneNode( true ) );
  var str = tmpNode.innerHTML;
  tmpNode = node = null; // prevent memory leaks in IE
  return str;
}

function findNextClosingInline(str, startPosition) {
  let i = startPosition;
  let result = null;
  const maxResult = str.length - 1;
  do {
    i++;
    if (i === maxResult) {
      result = maxResult;
    } else if (str[i] === '>') {
      result = i;
    }
  } while (!result);
  return result;
}

function findEndOfNode(str) {
  if (str[0] !== '<') return str.length - 1;
  let i = 0;
  let result = null;
  do {
    i++;

    // breaking perfomance optimization
    if ((str[i] !== '<') && (str[i] !== '/')) continue;

    if (i >= (str.length - 1)) {
      result = str.length - 1;
    } else if (str.substr(i, 2) === '</') {
      // закрывающий тег
      result = findNextClosingInline(str, i + 1);
      // console.log('close tag: ', str.substr(i, result - i + 1));
    } else if (str.substr(i, 2) === '/>') {
      // конец самозакрывающегося тега
      result = i + 1;
      // console.log('selfclosing tag: ', str.substr(i, result - i + 1));
    } else if (str.substr(i, 4) === '<br>') {
      // тег <br> можно перескочить
      i = i + 4;
    } else if ((str.substr(i, 4) === '<img') || (str.substr(i, 3) === '<hr')) {
      // незакрывающийся тег: img
      i = findNextClosingInline(str, i + 4);
    } else if (str[i] === '<') {
      // внутренний элемент
      // рекурсивно вызываем функцию
      i = i + findEndOfNode(str.substr(i, str.length - i));
    }

  } while (!result);

  // console.log('[end]', str.substr(startPosition, result-startPosition+1));
  return result;
}

export const getArrayOfChildNodes = (arr, str) => {
  // console.time(str.length)
  const nextPos = findEndOfNode(str) + 1;
  // console.timeEnd(str.length)
  const resNode = str.substr(0, nextPos);
  const result = [...arr, resNode];
  if (nextPos < str.length) {
    return getArrayOfChildNodes(result, str.substr(nextPos, str.length - nextPos));
  } else {
    return result;
  }
}

export const getChildNodes = post => {
  console.time('cleanPost');
  // почистить переносы
  const cleanPost = post.replace(/(?:\r\n|\r|\n)/g, '');
  console.timeEnd('cleanPost');
  
  // 1 способ: создадим дом-ноду и вытащим childNodes
  console.time('childNodes via DOM');
  const div = document.createElement('DIV');
  div.insertAdjacentHTML('beforeend', cleanPost);
  const nodes1 = [...div.childNodes[0].childNodes].map(node => nodeToString(node));
  console.timeEnd('childNodes via DOM');

  // 2 способ: старый добрый текстовый парсинг
  console.time('childNodes via text');
  // отрежем родительский контейнер
  const postWithoutWrapper = cleanPost.substring(cleanPost.indexOf('>') + 1, cleanPost.lastIndexOf('<'));
  const nodes2 = getArrayOfChildNodes([], postWithoutWrapper);
  console.timeEnd('childNodes via text');

  // выбрать один способ

  // проверка правильности работы текстового парсера
  nodes1.map((node1, index) => {
    if (node1 !== nodes2[index]) {
      // console.log(false);
      console.error(`Text parser has defference in node index ${index}`, {dom: node1, text: nodes2[index]});
    }
  })

  return nodes1;

}

