import styled from "styled-components";

export const FooterWrapper = styled.div`
> .footer-wrapper{
    margin-top: 100px;
    background-color: #F2F2F2;
    
    .footer-service{
    width: 1032px;
    margin: 0 auto;
    display: flex;
    flex: 1;
    justify-content: space-between;
    padding: 48px 24px;
    border-bottom: 1px solid #EBEBEB;

        h3{
        margin-bottom: 16px;
        font-weight: 500;
        color: #222222;
        }

        li{
            margin-top: 15px;
            font-weight: 400;
            cursor: pointer;
            &:hover {
                text-decoration: underline;
                color: #767676;
            }  
        }
    }

    .footer-statement{
        width: 1032px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        margin-top: 10px;
        padding: 20px;
        border-bottom: 1px solid #EBEBEB;
        color: #767676;
        
        .statement{
        display: flex;
        
            ol{
                display: flex;
            }

            li{
                cursor: pointer;
            }
        }
    }

    .footer-companyinfo{
        width: 1032px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        padding: 20px;
        color: #767676;
    }
}
`;