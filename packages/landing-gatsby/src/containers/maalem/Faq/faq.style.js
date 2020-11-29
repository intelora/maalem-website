import styled from 'styled-components';

const FaqWrapper = styled.div`
  .accordion_item {
    background: #ffffff;
    border-radius: 5px;
    margin-bottom: 5px;
  }

  .accordion_title {
    padding: 18px 30px;
    background: #ffffff;
    border: 2px solid #31a135;
    @media (max-width: 575px) {
      padding: 15px 20px;
    }
  }

  .accordion_body {
    padding: 0 30px 18px 30px;
    border: 2px solid #31a135;
    margin-top: -1px;
    @media (max-width: 575px) {
      padding: 0 20px 15px 20px;
    }
  }
`;

export default FaqWrapper;
