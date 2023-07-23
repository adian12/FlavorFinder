import { render } from "@testing-library/react";
import React from "react";
import styles from "./SearchBar.module.css";

const sortByOptions = {
    "best_match": "Best Match",
    "rating": "Highest Rated",
    "review_count": "Most Reviewed",
};

const SearchBar = () => {
    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((sortByOption) => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}>{sortByOptionValue}</li>;
        });
    };

    return (
        <div className={styles.SearchBar}>
            <div className={styles.SearchBarSortOptions}>
                <ul>{renderSortByOptions()}</ul>
            </div>
            <div className={styles.SearchBarFields}>
                <input placeholder="Search Businesses" />
                <input placeholder="Where?" />
            </div>
            <div className={styles.SearchBarSubmit}>
                <a>Let's Go</a>
            </div>
        </div>
    );
};

export default SearchBar;