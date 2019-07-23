import React from 'react';
import InnerHtmlWithScriptsContainer from '../InnerHtmlWithScriptsContainer';
import './SideBanner.css';

const SideBanner = ({ code }) => (
  <InnerHtmlWithScriptsContainer html={code} className="sideBanner" />
);

export default SideBanner;