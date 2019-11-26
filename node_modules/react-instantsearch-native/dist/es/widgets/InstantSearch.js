import algoliasearch from 'algoliasearch/reactnative';
import { View } from 'react-native';
import { createInstantSearch } from 'react-instantsearch-core';
var InstantSearch = createInstantSearch(algoliasearch, {
  Root: View
});
export default InstantSearch;