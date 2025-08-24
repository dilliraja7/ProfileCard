import './ProfileCard.css';
import Name from '../Name/Name';
import Footer from '../Footer/Footer';

const ProfileCard = () =>{
    return(
        <div>
        <h2>ProfileCard</h2>
        <div className='card'>
            
            <img src="/src/assets/DILLIRAJA L.jpg" alt="Profile Avatar" />
            <Name firstName={'DILLIRAJA'} lastName={'L'}></Name>
            <h2>Age-22</h2>
            <h3>Location Tiruttani</h3>
            <h3>Address</h3>
            <Footer></Footer>

    </div>
        </div>
    );
}

export default ProfileCard;