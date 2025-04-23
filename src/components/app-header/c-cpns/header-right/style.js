import styled from "styled-components";

export const RightWrapper = styled.div`
    flex:1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: ${props => props.theme.isAlpha ? "#fff" : props.theme.text.primaryColor};
    font-weight: 500;

    .btns{
        display: flex;
        align-items: center;
        font-weight: 600;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis ;
        cursor: pointer;

        .btn{
            padding: 12px 15px;
        }
    }

    .languagebtn{
        display: flex;
        align-items: center;
        margin-right: 8px;
        border: none;
        border: 1px solid transparent;
        border-radius: 30px;
        cursor: pointer;
     
        &:hover {
        background-color: #ddd; 
        }
    }

    .language{
        width: 45px;
        height: auto;
        padding: 12px; 
        align-items: center;
    }

    .profile{
        position: relative;
        display: flex;
        
        width: 90px;
        height: 48px;
        margin-right: 25px;
        justify-content: space-evenly;
        align-items: center;
        padding: 8px 8px 8px 14px;
        box-sizing: border-box;
        color: #565656;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 30px;
        cursor: pointer;
        &:hover{
            box-shadow:0 3px 12px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.08);
        }
        

        .panel{
            position: absolute;
            top:100%;
            right:0;
            z-index: 10;

            width: 240px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow:0 3px 12px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.08);
            
        
            .top, 
            .bottom{
                padding: 10px 0;
            }

            .top{
                border-bottom: 1px solid #ddd;
            }

            .item{
                height: 40px;
                line-height: 40px;
                padding: 0 16px;

                &:hover{
                    background-color: #f7f7f7;
                }
            }
        }
        
    }

    .userprofile{
        width: 30px;
        height: auto;
        margin-left: 14px;  
    }

    .usermenu{
        width: 15px;
        height: auto;
    }
`;