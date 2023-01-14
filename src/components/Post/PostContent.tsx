import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

interface PostContentProps {
  html: string
}

const MarkdownRenderer = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 768px;
  margin: 0 auto;
  padding: 80px 0;
  word-break: break-all;

  // Markdown Style
  line-height: 220%;
  font-size: 16px;
  font-weight: 400;

  // Apply Padding Attribute to All Elements
  p {
    margin-top: 0;
  }

  // Adjust Heading Element Style
  * + h1,
  * + h2,
  * + h3 {
    line-height: 1.25;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
    padding-top: 0;
  }

  h1 {
    margin: 0.67em 0;
    font-weight: 600;
    padding: 1em 0 0.5em;
    font-size: 2em;
    border-bottom: 1px solid var(--color-border-muted);
  }

  h2 {
    font-weight: 600;
    padding: 1.6em 0 0.8em;
    font-size: 1.5em;
    border-bottom: 1px solid var(--color-border-muted);
  }

  h3 {
    font-weight: 600;
    font-size: 1.25em;
    padding: 1.2em 0 0.6em;
  }
  h4 {
    font-weight: 600;
    font-size: 1em;
  }
  h5 {
    font-weight: 600;
    font-size: 0.875em;
  }
  h5 {
    font-weight: 600;
    font-size: 0.85em;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 1.2em 0;
    padding: 8px 20px;
    border-left: 0.25em solid #333;
    background-color: #f0f0f0;
  }

  /* .language-text {
    padding: 0;
  } */

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 20px;
    padding: 8px 0 12px;
  }

  li + li {
    margin-top: 0.25em;
  }

  // Adjust Horizontal Rule style
  hr {
    border: 1px solid #acb1b6a0;
    /* margin: 24px 0 80px 0; */
    margin: 40px 0 40px;
  }
  /* hr {
      margin: 50px 0;
    } */
  li {
    list-style: none;
  }

  ul li ul li {
    list-style: circle;
    margin-left: 8px;
  }

  ul [type='checkbox'],
  ul [type='radio'] {
    margin: 0 0.2em 0.25em -0.6em;
    vertical-align: middle;
  }

  // Adjust Link Element Style
  a {
    color: #4263eb;
    text-decoration: underline;
  }

  img {
    display: block;
    border-style: none;
    max-width: 90%;
    box-sizing: content-box;
    padding: 12px 20px;
  }

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 30px 0;
    padding: 25px;
    font-size: 15px;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  .language-text {
    padding: 0;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }

  // Markdown Responsive Design
  @media (max-width: 768px) {
    width: 100%;
    padding: 60px 20px;
    line-height: 200%;
    font-size: 14px;

    ol,
    ul {
      margin-left: 8px;
      /* padding: 16px 0 20px 0; */

      padding: 4px 0 12px 0;
      line-height: 2;
    }

    // Adjust Code Style
    pre[class*='language-'] {
      margin: 25px 0;
      padding: 16px;
      font-size: 14px;
    }
  }
`

const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
}

export default PostContent
