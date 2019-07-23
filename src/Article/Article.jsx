import React, { Fragment } from 'react';
import { getChildNodes } from '../utils';
import Banner from '../Banner';
import SideBanner from '../SideBanner';
import InnerHtmlWithScriptsContainer from '../InnerHtmlWithScriptsContainer';
import './Article.css';

const groupLength = 5; // разрываем пост через каждые 5 частей

const Article = ({ post, banner }) => {
  // контейнер bfg-post в виде строки со всеми атрибутами
  const wrapContainerTopStr = post.substr(0, post.indexOf('>') + 1);

  // оборачивает любой html контейнером bfg-post
  const wrapWithContainer = node => `${wrapContainerTopStr}${node}</div>`;

  // разобъем пост на дочерние части
  const nodes = getChildNodes(post);

  // количество групп частей поста: 
  // например, из 18 частей получается 4 группы: 
  // 5 + 5 + 5 + 3
  const nodeGroupsLength = Math.floor(nodes.length / groupLength) + 1;

  // разобъем пост на группы
  const nodeGroups = [...Array(nodeGroupsLength).keys()].map(index => nodes.slice(index * groupLength, (index + 1) * groupLength).join(''));

  return (
    <div className="articleContainer">
      {nodeGroups.map((node, index) => (
        <Fragment key={index}>
          {(index > 0) && <Banner code={banner} />}
          <div className="articleGrid">
            <div className="articleSideColumn">
              <SideBanner code={banner} />
            </div>
            <div className="articleContentColumn">
              <InnerHtmlWithScriptsContainer html={wrapWithContainer(node)} />
            </div>
            <div className="articleSideColumn">
              <SideBanner code={banner} />
            </div>
          </div>
        </Fragment>
      ))}
      
    </div>
  );
}

export default Article;
