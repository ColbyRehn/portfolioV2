import './menu.scss';

type Props = {
    onClick?: () => void
}

const Menu = (props: Props) => {
    return (
        <button id="burger-menu" aria-label="Open menu" onClick={props.onClick}>
            {[...Array(3)].map(() => (
                <div className="burger-line" />
            ))}
        </button>
    );
}

export default Menu;
