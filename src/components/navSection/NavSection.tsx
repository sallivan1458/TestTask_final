import classes from './NavSection.module.scss'
import ButtonNav from "./buttonNav/ButtonNav";

interface INavSectionProps {
    active?: string;
    onChange: (tabName: string) => void;
}

export function NavSection({active, onChange}:INavSectionProps) {


    return (
        <nav className={classes.nav}>
            <div className={classes.btnContainer}>
                <ButtonNav
                    onClick={() => {onChange("search")}}
                    isActive={active === 'search'}>Поиск</ButtonNav>
                <ButtonNav
                    onClick={() => {onChange("favorites")}}
                    isActive={active === 'favorites'}>Избранное</ButtonNav>
            </div>
        </nav>
    )
}

export default NavSection