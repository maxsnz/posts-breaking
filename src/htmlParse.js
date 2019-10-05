export const nodeToString = node => {
  var tmpNode = document.createElement( "div" );
  tmpNode.appendChild( node.cloneNode( true ) );
  var str = tmpNode.innerHTML;
  tmpNode = node = null; // prevent memory leaks in IE
  return str;
}

const selfClosingTagsList = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'];

// <span class=""> => span, <br> => br
function getTagName(str) {
  const nextSpaceIndex = str.indexOf(' ');
  const tagClosingIndex = str.indexOf('>');
  if (tagClosingIndex === -1) return null;
  const tagWithSpace = (tagClosingIndex > nextSpaceIndex) && (nextSpaceIndex > -1);
  const tagNameEndIndex = tagWithSpace ? nextSpaceIndex : tagClosingIndex;
  const tagName = str.substring(1, tagNameEndIndex);
  return tagName;
}

// <b>a</b><div>bcd</div> => 7
function findEndOfNode(str) {
  // console.log('findEndOfNode', str);
  // если начинается не с "<" - значит это текстовая нода
  if (str[0] !== '<') {
    const nextNodeIndex = str.indexOf('<');
    return (nextNodeIndex > -1) ? nextNodeIndex - 1 : str.length - 1;
  }

  // тег
  // 1) анализ тега
  const tagClosingIndex = str.indexOf('>');

  if (tagClosingIndex === -1) {
    // если тег не закрывается - код не валидный, отдаем всю строку
    return str.length - 1;
  }

  const tagName = getTagName(str);

  if (selfClosingTagsList.includes(tagName)) {
    // самозакрывающийся тег 
    return tagClosingIndex + 1;
  }

  // осталось самое сложное - вложенный тег такого же типа
  let pos = tagClosingIndex + 1;
  let sum = 0;
  let iterationsCount = 0;
  do {
    iterationsCount++;
    const closingTagIndex = str.indexOf(`</${tagName}>`, pos);
    const thisTagAgainIndex = str.indexOf(`<${tagName}`, pos);
    const noMoreTagsLikeThis = (thisTagAgainIndex === -1);
    const isClosing = (noMoreTagsLikeThis || (closingTagIndex < thisTagAgainIndex))
    const tagIndex = isClosing ? closingTagIndex + 2 : thisTagAgainIndex + 1;
    const partEndIndex = str.indexOf('>', tagIndex);
    sum = isClosing ? sum - 1 : sum + 1;
    pos = partEndIndex + 1;
    // console.log({tagIndex, partEndIndex});
    // console.log((isClosing ? 'закрывающий' : 'открывающий'), 'тег', str.substring(tagIndex - (isClosing ? 2 : 1), partEndIndex + 1));
    // console.log({sum, pos}, '\n\r-----------');
  } while (sum > -1 && pos < str.length && iterationsCount < 10000);
  // console.log('loop ended', iterationsCount);

  if (sum > -1) {
    console.error('html invalid');
    return str.length - 1;
  }

  if (iterationsCount >= 10000) {
    console.error('Oooops, it seems we catch an infinite loop');
    return str.length - 1;
  }

  return pos - 1;
}

// <div>a</div><p>b</p><span>c</span> => [<div>a</div>, <p>b</p>, <span>c</span>]
function getArrayOfChildNodes(arr, str) {
  // console.time(str.length)
  const nextPos = findEndOfNode(str) + 1;
  // console.timeEnd(str.length)
  const resNode = str.substr(0, nextPos);
  const result = [...arr, resNode];
  if (nextPos < str.length) {
    return getArrayOfChildNodes(result, str.substring(nextPos, str.length));
  }
  // console.log(result);
  return result;
}

const parseChildNodes = post => {
  // отрежем родительский контейнер
  const postWithoutWrapper = post.substring(post.indexOf('>') + 1, post.lastIndexOf('<'));
  return getArrayOfChildNodes([], postWithoutWrapper);
};

export const parseChildNodesViaDom = post => {
  const div = document.createElement('DIV');
  const postWithoutWrapper = post.substring(post.indexOf('>') + 1, post.lastIndexOf('<'));
  div.insertAdjacentHTML('beforeend', postWithoutWrapper);
  return [...div.childNodes].map(node => nodeToString(node));
}

export default parseChildNodes;

