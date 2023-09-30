
import { useLocation } from "react-router-dom";


function DetailsPage() {
    const location = useLocation();
    const {
        imageUrl,
        title,
        address,
        beds,
        bath,
        coveredAreaSQFT,
        propertyType,
        isCommercial,
        price
    } = location.state.data
   
    return (
        <div className="d-flex justify-content-center flex-wrap align-items-center" style={{ height: '100vh' }}>
            <div className="">
                <img width="450" src={imageUrl} alt="" />
            </div>
            <div className="ms-4">
                <h1>
                    {title}
                </h1>
                <h4>Beds: {beds}</h4>
                <div className="d-flex align-items-center">
                    <div><h6>Bath:</h6> </div>
                    <div><p>{bath}</p> </div>
                </div>
                <div className="d-flex align-items-center">
                    <div><h6>Area:</h6> </div>
                    <div><h6>{coveredAreaSQFT}</h6> </div>
                </div>
                <div className="d-flex align-items-center">
                    <div><h6>Proprty Type:</h6></div>
                    <div><h6>{propertyType}</h6></div>
                </div>
                <div className="d-flex align-items-center">
                    <div><h6>Price:</h6></div>
                    <div><h6>{price}</h6></div>
                </div>
            </div>
        </div>
    );
}


export default DetailsPage