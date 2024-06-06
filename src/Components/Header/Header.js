import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HeaderMini from "./HeaderMini/HeaderMini";
import HeaderSearch from "./HeaderSearch/HeaderSearch";

export default function Header() {
    return(
        <>
            <HeaderMini/>
            <HeaderSearch/>
            <HeaderMenu/>
        </>
    )
}