import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
    border-radius: 1rem;
    display:flex;
    flex-direction: column;
    width: 70%;
    padding:1rem;
    font-family: Roboto,sans-serif;

    h2{
        font-size:2rem;
    }
    h4{
        font-size:1.2rem;
    }
    h6{
        font-size:1rem;
    }
`;

export const MainInfo = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const LeftPannel = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width:80%;
    img{
        height:6rem;
        width: 9rem;
        border-radius:1rem;
        flex-shrink: 0;
        object-fit: cover;
    }
`;

export const NameCategory = styled.div`
    display: flex;
    flex-direction: column;
    margin:0rem 1rem;
    max-width: 80%;

    h6{
        margin:0.2rem 0;
    }
`

export const ExtraInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0px;
    b{
        font-weight: bold;
    }
    h4{
        margin: 0.2rem 0px;
    }
`;

export const Send = styled.div`
    display:flex;
    align-self:center;
    button{
        font-size: 2rem;
        color:white;
        background-color:#627fe7;
        border:none;
        padding:0.5rem 0.75rem;
        border-radius: 1rem;
        cursor:pointer;
    }
    button:hover{
        background-color: rgba(98,127,231,0.7);
    }
    button:focus{
        outline:none;
    }
`;