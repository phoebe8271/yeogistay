import styled from "styled-components";

export const RoomsWrapper = styled.div`
width: 1280px; 
margin: 128px auto 0;
position: relative;
padding: 30px 30px;


    .entire-title{
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 20px;
    } 


    .list{
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
    }

    .entirerooms-cover{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgb(255,255, 255,.8);
    }
`;