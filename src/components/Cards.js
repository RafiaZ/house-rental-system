import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

function Cards(props) {
    console.log(props.data);
    const navigate = useNavigate()
    const mapListings = props.data.map((data, index) => {
        
            return (
                <>

                    <Card style={{ width: '18rem', cursor: 'pointer' }} onClick={(e) => {
                        navigate('./detailpage', {
                            state: {
                                data: data
                            }
                        })
                    }}>

                        <Card.Body>
                            <div key={index}>
                                <img style={{ width: "50px" }} src={data.imageUrl} alt="" />
                                <Card.Title>{data.title}</Card.Title>
                                <Card.Text>
                                    {data.bath}
                                </Card.Text>
                                <Card.Text>{data.address}</Card.Text>
                                <Card.Text>{data.bath}</Card.Text>
                            </div>
                        </Card.Body>
                    </Card>

                </>

            );
       
    });

    return (
        <div className='d-flex gap-3 flex-wrap'>

            {mapListings}

        </div>
    );
}


export default Cards