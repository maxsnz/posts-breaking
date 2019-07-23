import React from 'react';
import InnerHtmlWithScriptsContainer from '../InnerHtmlWithScriptsContainer';
import './Banner.css';

const Banner = ({ code }) => (
  <InnerHtmlWithScriptsContainer html={code} className="banner" />
);

export default Banner;