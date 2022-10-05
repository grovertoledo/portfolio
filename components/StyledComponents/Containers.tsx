import styled from 'styled-components';
import tw from 'twin.macro';
import media from "styled-media-query";

const MainContainer = styled.div`
  ${media.lessThan('large')`
    ${tw`bg-red-500`}
  `}
`;

export {
  MainContainer,
};