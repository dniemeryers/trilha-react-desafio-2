import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;

    h3 {
        
        display: inline;
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }

    a.remover {
        color: #FF0000;
        margin-top:20px;
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }
    img{
        justify-content: center;
        &: hover{
            cursor: pointer;
           
        }
        
    }
    .box{
        display:flex;
        flex-wrap:wrap;
       justify-content: space-between;
       
    }
    .verrepo{
        background-color: #FAFAFA;
        padding:10px;
        border-radius:30px;
        color:black;
        font-width: bolder;
        text-decoration:none;
    }
`