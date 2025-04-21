import styled from "styled-components";

export const PaginationWrapper= styled.div`
display: flex;
justify-content: center;

    .info{
        display: flex;
        flex-direction: column;
        align-items: center;

        .MuiPaginationItem-page{
            margin: 0 9px;
        }

        .MuiPaginationItem-page.Mui-selected{
            background-color:${props => props.theme.color.primaryColor};
            color: #fff;
        }

        .desc{
            margin-top: 16px;
        }
    }
`;