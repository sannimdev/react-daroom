import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.div`
    text-align: center;
`;

function Footer() {
    return <FooterDiv>&copy; Sannim. {new Date().getFullYear()}</FooterDiv>;
}
export default Footer;
