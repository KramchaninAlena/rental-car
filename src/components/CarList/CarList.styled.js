import styled from "styled-components";

export const CatalogList = styled.ul`
display: flex;
flex-wrap: wrap;
column-gap: 29px;
  row-gap: 50px;
padding-top: 60px;
margin: 0 auto;
margin-bottom: 100px;
`;

export const CatalogItem = styled.li`
flex-basis: calc((100% - 3 * 29px) / 4);
position: relative;

`;

export const LoadMore = styled.button`
font-weight: 500;
font-size: 16px;
line-height: 150%;
text-decoration: underline;
text-decoration-skip-ink: none;
color: #3470ff;
margin: 0 auto;

`
