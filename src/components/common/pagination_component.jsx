import React from "react";
import _ from 'lodash';

export default function Pagination(props) {
    //array of page numbers

    const {itemsCount, pageSize, currentPage} = props;
    const pagesCount = Math.ceil(itemsCount / pageSize)
    console.log(`current page is ${currentPage}`)
    if(pagesCount===1) return null
    const pages = _.range(1, pagesCount + 1);
    return (
        <nav>
            <ul className="pagination">
                {pages.map(page =>
                <li
                    key={page}
                    className={page===currentPage?"page-item active":"page-item"}
                    onClick={()=>props.onPageChange(page)}
                >
                    <a
                    className="page-link">{page}
                    </a>
                </li>)}

            </ul>
        </nav>
    )
}