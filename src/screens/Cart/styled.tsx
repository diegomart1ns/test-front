import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`

export const ProductsListWrapper = styled.div`
  @media (min-width: 768px) {
    margin-right: 2rem;
    width: 60%;
  }
`

export const TotalWrapper = styled.div`
  @media (min-width: 768px) {
    width: 40%;

    section {
      margin-top: 0;
    }
  }
`
