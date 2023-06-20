import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ProyectoCard from "./ProyectoCard"
import {AiOutlineArrowRight,AiOutlineArrowLeft} from 'react-icons/ai'

// Example items, to simulate fetching from another resources.

function PaginatedItems({ buscar, itemsPerPage, proyectList }) {
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    if (buscar.length !== 0) {

      const newOffset = (0 * itemsPerPage) % proyectList.length;
      setItemOffset(newOffset);
      setCurrent(0)
    }
   },[buscar])
  
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  /*console.log(/*`Loading items from ${itemOffset} to ${endOffset}`*/
  const currentProyects = proyectList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(proyectList.length / itemsPerPage);


  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % proyectList.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className='flex flex-wrap p-2 justify-around'>
      {currentProyects.map(p => <ProyectoCard props={p} />)}     

      </div>
      <div className='p-2 flex w-full self-end justify-center my-8'>

      <ReactPaginate
          breakLabel=".."
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          nextLabel=<AiOutlineArrowRight />//>
          previousLabel=<AiOutlineArrowLeft />//<
          onPageChange={handlePageClick}
          pageCount={pageCount}
          forcePage={current}
          previousClassName="mt-1 text-dark-orange"
          nextClassName="mt-1 text-dark-orange"
          containerClassName=" flex flex-row p-3 bg-transparent text-dark-orange rounded-xl text-bold justify-between border-b border-b-dark-orange
          mbl:w-2/5 mbl
          sml:w-1/5 " //container de numeros
          activeClassName="w-7 bg-smoke text-center text-dark-blue rounded-full"//el elegido
          renderOnZeroPageCount={null}
      />
      </div>
      </>
  );
}

export default PaginatedItems;