import styled from 'styled-components';

export const Container = styled.div`
    padding-top:100px;
    display:flex;
    justify-content: center;
    font-family:'Roboto', sans-serif;
`;

export const Component = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius: 25px;
    padding: 50px;
    margin: 20px;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.7);

    h2{
        align-self: flex-start;
        padding:10px 30px;
        //font-weight:600;
    }

    h1{
        padding:10px 30px;
        font-weight:bold;
        font-size:1.5rem;
    }

    button{
        cursor:pointer;
        background-color: #627fe7;
        padding: 0.5rem 1.2rem;
        margin-top: 20px;
        color:white;
        font-family:'Roboto', sans-serif;
        font-size:1.2rem;
        border:none;
        outline:none;
    }
`;

export const Table = styled.table`
    td{
        padding:10px 30px;
    }
`;