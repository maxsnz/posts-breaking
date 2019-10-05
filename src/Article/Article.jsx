import React, { Fragment } from 'react';
import parseChildNodes, { parseChildNodesViaDom } from '../htmlParse';
import Banner from '../Banner';
import SideBanner from '../SideBanner';
import InnerHtmlWithScriptsContainer from '../InnerHtmlWithScriptsContainer';
import './Article.css';

const groupLength = 5; // разрываем пост через каждые 5 частей

const Article = ({ post, banner }) => {
  // контейнер bfg-post в виде строки со всеми атрибутами
  const wrapContainerTopStr = post.substr(0, post.indexOf('>') + 1);
  // console.log('wrapContainerTopStr', wrapContainerTopStr);

  // почистить переносы
  const cleanBody = post.replace(/(?:\r\n|\r|\n)/g, '');

  // оборачивает любой html контейнером bfg-post
  const wrapWithContainer = node => `${wrapContainerTopStr}${node}</div>`;

  // разобъем пост на дочерние части
  console.time('childNodes via text');
  const nodes = parseChildNodes(cleanBody);
  console.timeEnd('childNodes via text');
  // console.log('nodes', nodes);

  const nodesText = nodes;
  console.time('childNodes via DOM');
  const nodesDom = parseChildNodesViaDom(cleanBody);
  console.timeEnd('childNodes via DOM');
  nodesDom.map((node, index) => {
    const nodeWithoutClosings = nodesText[index] && nodesText[index].replace(/\s\/>/g, '>');
    if (node !== nodeWithoutClosings) {
      console.error(`Text parser has defference in node index ${index}`, {dom: node, text: nodesText[index]});
    }
  });

  return (
    <div className="articleContainer">
      <div className="articleColumn">
        {nodesText.map((node, index) => (
          <Fragment key={index}>
            <div className="articleGrid">
              <InnerHtmlWithScriptsContainer html={wrapWithContainer(node)} />
            </div>
          </Fragment>
        ))}
      </div>
      <div className="articleColumn">
        {nodesDom.map((node, index) => (
          <Fragment key={index}>
            <div className="articleGrid">
              <InnerHtmlWithScriptsContainer html={wrapWithContainer(node)} />
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default Article;
