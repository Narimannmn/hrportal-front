import { imageSource } from './imageSource';
import { Text } from 'slate';
import escapeHTML from 'escape-html';

export type ThemeType = 'light' | 'dark';

export type RichTextNode = {
  type?: string;
  url?: string;
  alt?: string;
  width?: number;
  height?: number;
  bold?: boolean;
  code?: boolean;
  italic?: boolean;
  newTab?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  value?: {
    url?: string;
    alt?: string;
    width?: number;
    height?: number;
  };
  children?: RichTextNode[];
};

const serialize = (
  children: RichTextNode[] = [],
  color: string,
  theme: ThemeType = 'light',
): string => {
  const fontFamilyStyle = 'font-family: Inter, sans-serif;';
  const colorStyle = `color: ${color};`;
  const combinedStyle = `${fontFamilyStyle} ${colorStyle}`;
  const ulStyle =
    'list-style: none; padding-left: 0px; display: flex; flex-direction: column; gap: 16px;';
  const liStyle = 'display: flex; align-items: flex-start; gap: 8px;';
  const aStyle = `${fontFamilyStyle} text-decoration: none; color: var(${theme === 'dark' ? '--primary-button' : '--golden-background'}) !important`;

  let html = '';

  children.forEach((node) => {
    if (Text.isText(node)) {
      let text = node.text ? escapeHTML(node.text) : '&nbsp;';

      if (node.bold) {
        text = `<strong style="${combinedStyle}">${text}</strong>`;
      }

      if (node.code) {
        text = `<code style="${combinedStyle}">${text}</code>`;
      }

      if (node.italic) {
        text = `<em style="${combinedStyle}">${text}</em>`;
      }

      if (node.underline) {
        text = `<u style="${combinedStyle}">${text}</u>`;
      }

      if (node.strikethrough) {
        text = `<span style="text-decoration: line-through; ${combinedStyle}">${text}</span>`;
      }

      html += text.replace(/\n/g, '<br>');
    } else if (node) {
      switch (node.type) {
        case 'h1':
          html += `<h1 style="${combinedStyle}">${serialize(node.children, color)}</h1>`;
          break;
        case 'h2':
          html += `<h2 style="${combinedStyle}">${serialize(node.children, color)}</h2>`;
          break;
        case 'h3':
          html += `<h3 style="${combinedStyle}">${serialize(node.children, color)}</h3>`;
          break;
        case 'h4':
          html += `<h4 style="${combinedStyle}">${serialize(node.children, color)}</h4>`;
          break;
        case 'h5':
          html += `<h5 style="${combinedStyle}">${serialize(node.children, color)}</h5>`;
          break;
        case 'h6':
          html += `<h6 style="${combinedStyle}">${serialize(node.children, color)}</h6>`;
          break;
        case 'quote':
          html += `<blockquote style="${combinedStyle}">${serialize(
            node.children,
            color,
          )}</blockquote>`;
          break;
        case 'ul':
          html += `<ul style="${ulStyle}">${serialize(node.children, color)}</ul>`;
          break;
        case 'ol':
          html += `<ol style="${combinedStyle}">${serialize(node.children, color)}</ol>`;
          break;
        case 'li':
          html += `<li style="${liStyle}">
                         <span class="li__marker" style="width: 8px; height: 8px; background-color: var(--white); border-radius: 50%; flex-shrink: 0; align-self: center"></span>
                         ${serialize(node.children, color)}
                       </li>`;
          break;
        case 'link':
          html += `
                     <a 
                       target="${node?.newTab ? '_blank' : '_self'}" 
                       style="${aStyle}" 
                       href="${escapeHTML(node.url || '')}">
                         ${serialize(node.children, color)}
                     </a>`;
          break;
        case 'upload':
          if (node.value?.url) {
            html += `<img src="${imageSource(node.value.url)}" alt="${
              node.value.alt || ''
            }" width="100%" height="100%" style="${combinedStyle}" />`;
          }
          break;
        default:
          html += `<p style="${combinedStyle}">${serialize(node.children, color)}</p>`;
          break;
      }
    }
  });

  return html;
};

export default serialize;
