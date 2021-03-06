import React from "react";
import _ from 'lodash';
import PropTypes from 'prop-types'

function Pagination(props) {
    //array of page numbers

    const {itemsCount, pageSize, currentPage} = props;
    const pagesCount = Math.ceil(itemsCount / pageSize)
    console.log(`current page is ${currentPage}`)
    if (pagesCount === 1) return null
    const pages = _.range(1, pagesCount + 1);
    return (
        <nav>
            <ul className="pagination">
                {pages.map(page =>
                    <li
                        key={page}
                        className={page === currentPage ? "page-item active" : "page-item"}
                        onClick={() => props.onPageChange(page)}
                    >
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            className="page-link">{page}
                        </a>
                    </li>)}

            </ul>
        </nav>
    )
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};
export default Pagination;