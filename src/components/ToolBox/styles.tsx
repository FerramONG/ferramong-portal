import styled from 'styled-components';

export const Container = styled.div`
    background-color: #5c5b5b;
    border-radius: 1rem;
    display:flex;
    flex-direction: column;
    width: 80%;
    padding:1rem;
`;

export const MainInfo = styled.div`
    display: flex;
    justify-content: space-between;

    img{
        height:9rem;
        width: 9rem;
        border-radius:1rem;
    }
`;

export const LeftPannel = styled.div`
    display:flex;
    justify-content: space-between;
    max-width:60%;
`;

export const NameCategory = styled.div`
    display: flex;
    flex-direction: column;
    h2{
        font-size:2rem;
    }
`

export const ExtraInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0px;
`;

export const Send = styled.div`
    display:flex;
    align-self:center;
`;