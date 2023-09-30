
import Tab from 'react-bootstrap/Tab'
import Data from '../db.json'
import { useRef, useState } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Button from 'react-bootstrap/Button'
import Table from '../components/Table'
import Form from 'react-bootstrap/Form'
import { Icon } from '@iconify/react'
import Cards from '../components/Cards'

function LandingPage() {

  const [dataListing, setDataListing] = useState(Data.Listings);
  const [searchItem, setSearchItem] = useState('');
  const [filterMin, setFilterMin] = useState(0)
  const [filterMax, setFilterMax] = useState(0)




  const handleChange = (event) => {
    setSearchItem(event.target.value);

  };

  const searchData = () => {
    const SearchData = [...dataListing].filter((search) => search.title.toLowerCase().includes(searchItem.toLowerCase()))
    setDataListing(SearchData)
  };

  const sortAscending = () => {
    const sortedData = [...dataListing].sort((a, b) => a.price - b.price);
    setDataListing(sortedData);
  };

  const sortDescending = () => {
    const sortedData = [...dataListing].sort((a, b) => b.price - a.price);
    setDataListing(sortedData);
  };

  const handleFilter = () => {
    const FilteredData = [...dataListing].filter((property) => property.price >= parseInt(filterMin) && property.price <= parseInt(filterMax))
    setDataListing(FilteredData);

  }
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = dataListing.slice(startIndex, endIndex);
  const totalPages = Math.ceil(dataListing.length / itemsPerPage);

  const changePage = (flag) => {


    if (flag === "1" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } if (flag === "2" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    };

  }
  return <>
    <div className='d-flex justify-content-center'>
      <h5>LandingPage</h5>
    </div>

    <div className='w-100 d-flex  justify-content-end align-items-center'>
      <div style={{ width: '200px !important', display: 'flex', alignItems: 'center' }} className='d-flex align-items-center '>
        <div className='me-2'>
          <h6>sort price</h6>
        </div>

        <div className='d-flex flex-column me-4'>
          <Icon icon="raphael:arrowup" onClick={sortAscending} />
          <Icon icon="raphael:arrowdown" onClick={sortDescending} />
        </div>

        <div className=''>

          <input
            type="text"
            placeholder="Search title..."
            value={searchItem}
            onChange={handleChange}
          />

          <Button variant="outline-dark ms-2 h-20" onClick={searchData}>search</Button>
        </div>


        <div className='ms-4 d-flex align-items-center '>
          <h6 className='me-3'>Filter Price</h6>
          <input
            type="text"
            placeholder="minprice"
            style={{ width: '100px' }}
            value={filterMin}
            onChange={(e) => setFilterMin(e.target.value)}

          />
          <input
            type="text"
            placeholder="to"
            style={{ width: '100px', marginLeft: '20px' }}
            value={filterMax}
            onChange={(e) => setFilterMax(e.target.value)}
          // value={maxPrice}
          // onChange={(e) => setMaxPrice(e.target.value)}
          />
          <Button variant="outline-dark ms-2 h-20" onClick={handleFilter}>Filter</Button>
        </div>


      </div>
    </div>
    <Tabs
      defaultActiveKey="table"
      id="uncontrolled-tab-example"
      className="mb-3d-flex justify-content-center "
    >
      <Tab eventKey="table" title="Table">
        <Table data={currentItems} search={searchItem} />
      </Tab>
      <Tab eventKey="card" title="Card">
        <Cards data={currentItems} search={searchItem} />
      </Tab>


    </Tabs>
    <div className='d-flex mx-4 my-1'>
      <button onClick={() => changePage("1")}>Previous</button>
      <h4>{currentPage}</h4>
      <button onClick={() => changePage("2")}>Next</button>
    </div>
  </>;
}


export default LandingPage