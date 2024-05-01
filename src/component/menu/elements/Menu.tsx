import ContactBtn from './ContactBtn';
import MenuItem from './MenuItem';

function Menu (){

    return (<>
        <MenuItem title={"About Us"}/>
        <MenuItem title={"Services"}/>
        <MenuItem title={"Benefits"}/>
        <ContactBtn title={'Contact Me'} />
        </>);
}

export default Menu;