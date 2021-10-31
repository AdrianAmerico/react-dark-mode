import * as React from 'react';
import { Container } from './styles';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

interface Props {
    toggleTheme(): void
}
const Header: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = React.useContext(ThemeContext)
    return (

        <Container>
            Hello World
            <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={true}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                onColor={colors.secundary}
                offColor=''
            />
        </Container>
    )
}

export default Header