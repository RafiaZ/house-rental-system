import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Data from '../db';

function Table(props) {
    const navigate = useNavigate();
    // const showDetails = (( data) => {

    //     navigate("/detailpage", {
    //         state: { data: data }
    //     })
    // })
    //   console.log( DataListing.current );
    const mapListings = props.data.map((data, index) => {
        
        

        // if (data.title.toLowerCase().includes(props.search.toLowerCase())) {
            return (
                <tr style={{ cursor: 'pointer' }} key={index} onClick={(e) => {
                    navigate("/detailpage", {
                        state: { data: data }
                    })
                }}>
                    <td s>  <img style={{ width: "50px" }} src={data.imageUrl} alt="" /></td>

                    <td s>{data.title}</td>
                    <td>{data.address}</td>
                    <td>{data.bath}</td>
                    <td>{data.beds}</td>
                    <td>{data.coveredAreaSQFT}</td>
                    <td>{data.isCommercial== true ?  'commercial' : 'not commercial'}</td>
                    <td>{data.price}</td>
                    <td>{data.propertyType}</td>
                </tr>
            );
            
     

    });

    return (
        <div>

            <table striped bordered hover  variant="dark" className='mt-4' >


                <thead>
                    <tr>
                        <th style={{width: '150px', marginLeft: '30px !important'}}>image</th>
                        <th style={{width: '300px'}}>title</th>
                        <th style={{width: '300px'}}>address</th>
                        <th style={{width: '200px'}}>bath</th>
                        <th style={{width: '200px'}}>beds</th>
                        <th style={{width: '200px'}}>Area</th>
                        <th style={{width: '200px'}}>commeercial</th>
                        <th style={{width: '200px'}}>Price</th>
                        <th style={{width: '200px'}}>Property Type</th>
                    </tr>
                </thead>
                <tbody>
                    {mapListings}
                </tbody>
            </table>
        </div>
    );
}

export default Table;