import styled from "styled-components";
import device from 'assets/breakpoints/device';

export const NoTrContainer = styled.div`
    margin-top: 20px;
    padding: 20px;
    text-align: center;
    @media ${device.tablet} {
        width: 700px;
        margin-top: 100px;
    }
`;

export const NoTrMessage = styled.span`
    font-family: Poppins;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 45px;
    letter-spacing: 0em;
`;