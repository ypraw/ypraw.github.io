import React from "react";
import PropTypes from "prop-types";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Stats,
  Pagination,
} from "react-instantsearch-dom";

import algoliasearch from "algoliasearch";

import Hit from "./Hit";

const Search = (props) => {
  const { algolia, theme } = props;
  const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey);

  return (
    <React.Fragment>
      <div className="search">
        {algolia && algolia.appId && (
          <InstantSearch
            searchClient={searchClient}
            indexName={algolia.indexName}
          >
            <SearchBox translations={{ placeholder: "Search" }} />
            <Stats />
            <Hits hitComponent={Hit} />
            <Pagination />
          </InstantSearch>
        )}
      </div>

      {/* --- STYLES --- */}
      <style jsx global>{`
        .ais-SearchBox {
          width: 100%;
          margin: 1em 0;
        }
        .ais-InstantSearch {
          max-width: 960px;
          overflow: hidden;
          margin: 0 auto;
        }

        .ais-SearchBox-reset {
          right: 0.3rem;
        }

        .ais-SearchBox-form {
          position: relative;
          border-bottom: 1px solid #aaa;
          display: block;
          justify-content: space-between;
        }
        .ais-SearchBox-input {
          border: none;
          width: 100%;
          padding: 0.3rem 1.7rem;
          font-size: 1.4em;
          flex-grow: 1;
          background: ${theme.background.color.darkAlt};
          color: ${theme.color.neutral.white};
        }
        .ais-SearchBox-submit {
          display: none;
        }
        .ais-SearchBox-reset {
          display: none;
        }
        .ais-Stats {
          margin: 0.5em 0 2em 0.3em;
          font-size: 0.9em;
          color: #999;
          display: block;
        }
        .ais-Hits-list {
          list-style: none;
          padding: 0;
        }
        .ais-Pagination-list {
          display: flex;
          list-style: none;
          justify-content: center;
          padding: 0;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
        }
        .ais-Pagination-item a {
          color: ${theme.color.neutral.white};
        }

        .ais-Pagination-item span {
          font-size: 1.2em;
          display: block;
          padding: 0.5em 0.5em 2em;
        }
        .ais-Pagination-item a:hover {
          color: red;
        }
        .ais-Pagination-link {
          padding: 0.3rem 0.6rem;
          display: block;
          border: 1px solid #072233;
          border-radius: 5px;
          background: #072233;
        }
        .ais-Pagination-item--disabled .ais-Pagination-link {
          opacity: 0.6;
          cursor: not-allowed;
          color: #a5abc4;
          padding: 0.3rem 0.6rem;
          display: block;
          border: 1px solid #072233;
          border-radius: 5px;
          background: #072233;
        }
        .ais-Pagination-item + .ais-Pagination-item {
          margin-left: 0.3rem;
        }
        .ais-Pagination-item--selected .ais-Pagination-link {
          color: #fff;
          background-color: #0096db;
          border-color: #0096db;
        }
        .ais-Pagination-item.ais-Pagination-item--firstPage a,
        .ais-Pagination-item.ais-Pagination-item--previousPage a,
        .ais-Pagination-item.ais-Pagination-item--nextPage a {
          padding: 0.3rem 0.6rem;
        }
      `}</style>
    </React.Fragment>
  );
};

Search.propTypes = {
  algolia: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default Search;
