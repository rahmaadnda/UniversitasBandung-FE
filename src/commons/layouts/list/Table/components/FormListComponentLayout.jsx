import React, { useEffect, useState } from "react";

import TableHeaderLayout from "./TableHeaderLayout";
import FormTableRowLayout from "./FormTableRowLayout";
import DataTable from "react-data-table-component";
import searchItems from "@/commons/utils/Table/SearchItems";
import filterItems from "@/commons/utils/Table/FilterItems";
import SearchField from "@/commons/components/Table/SearchField";
import FilterField from "@/commons/components/Table/FilterField";

const FormListComponentLayout = ({
  items,
  detail,
  isSearchable,
  filterFields,
  itemsAttrs,
  itemsEvents,
  itemsModals,
  selected,
  handleChange,
}) => {
  const [viewItems, setViewItems] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [filterTextList, setFilterTextList] = useState([]);

  useEffect(() => {
    var newItems = items;
    newItems = searchItems(newItems, searchText, itemsAttrs);
    newItems = filterItems(newItems, filterTextList);

    setViewItems(newItems);
  }, [searchText, filterTextList, items]);

  useEffect(() => {
    setFilterTextList(
      filterFields?.map((filterField) => ({ ...filterField, text: "" }))
    );
  }, [filterFields]);

  const updateSearchText = (newSearchText) => setSearchText(newSearchText);

  const updateFilterText = (newFilterText, featureName) =>
    setFilterTextList((prev) =>
      prev.map((filterText) =>
        filterText.featureName == featureName
          ? { ...filterText, text: newFilterText }
          : filterText
      )
    );

  return (
    <div>
      <DataTable
        customStyles={{
          rows: {
            style: {
              whiteSpace: "pre",
            },
          },
        }}
        columns={TableHeaderLayout({ itemsAttrs, itemsEvents, itemsModals })}
        data={FormTableRowLayout({
          viewItems,
          itemsAttrs,
          selected,
          handleChange,
        })}
        pagination
        subHeader
        subHeaderComponent={
          <div className="flex flex-wrap items-center justify-stretch gap-5 w-full">
            {isSearchable && (
              <SearchField updateSearchText={updateSearchText} />
            )}
            {filterFields?.map(
              (filterField) =>
                filterField && (
                  // eslint-disable-next-line react/jsx-key
                  <FilterField
                    filterField={filterField}
                    updateFilterText={updateFilterText}
                  />
                )
            )}
          </div>
        }
      />
    </div>
  );
};

export default FormListComponentLayout;
