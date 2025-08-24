import './Name.css';
const Name=({firstName,lastName})=>{
    return(
        <div>
        <h2>
            I am {firstName} {lastName}
        </h2>
        </div>
    );
}
export default Name;