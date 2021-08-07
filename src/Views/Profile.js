

import  {UseProfile} from './Entrance.js'
import './Styles/Profile.css';


export default function Profile() {
    const {list,Image2,Image1,Image3} = UseProfile()


    return (
        <form>
            <img id="image" src={Image3}/>
            <input className = "readProfileName" value={list&&list[0]?.fullname} readOnly={true}/>
        </form>
    )
}
