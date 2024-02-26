import styled from "styled-components";

export const CatalogList = styled.ul`
display: flex;
flex-wrap: wrap;
column-gap: 29px;
  row-gap: 50px;
padding-top: 60px;
margin: 0 auto;
`;

export const CatalogItem = styled.li`
flex-basis: calc((100% - 3 * 29px) / 4);
position: relative;

`