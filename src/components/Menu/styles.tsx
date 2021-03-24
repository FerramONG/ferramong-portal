import styled from 'styled-components';

export const Container = styled.div`
    
`;

export const NavBar = styled.ol`
    display:flex;
    justify-content: space-around;
    align-items: center;
    height:3rem;
    width:100%;
    background-color: #627fe7;
    font-family:'Roboto', sans-serif;
    /* position:fixed; */
`;

export const Item = styled.li`
    color:white;
    padding:1rem;
`;

export const SearchBar = styled.div`
    color:#5c5b5b;
    input{
        border-radius:15px;
        border:none;
        outline:none;
        padding:0.5rem;
    }
`;

export const Login = styled.div`
    background-color: white;
    color:#5c5b5b;
    padding:0.5rem 0.75rem;
    border-radius: 15px;
`;