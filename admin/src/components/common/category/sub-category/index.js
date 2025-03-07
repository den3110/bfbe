import React, { useState, useEffect } from "react";
import AutoSelect from "../../autoselect";

const Arrays = (data, fieldName, fieldValue) => {
  let arrayItem = [];
  if (data && Array.isArray(data)) {
    data.forEach((item, key) => {
      arrayItem.push({ label: item[fieldName], value: item[fieldValue] });
    });
  }
  return arrayItem;
};

const SubCategorylist = (props) => {
  const [selectedType, setSelectedType] = useState("");
  const [supplierList, setSupplierList] = useState(props.state);

  useEffect(()=> {
    setSelectedType("")
  }, [props.change])

  const handleSelectChange = (name, selected) => {
    if (name === "supplier_id") {
      setSupplierList({
        ...supplierList,
        [name]: selected.value,
      });
      setSelectedType(selected);
      props.onSelectSubCategory(selected.value);
    }
  };

  useEffect(() => {
    setSupplierList(props.state);
  }, [props.state]);

  return (
    <div>
      <AutoSelect
        className="basic-single"
        value={selectedType}
        onChange={handleSelectChange}
        isSearchable={true}
        name="supplier_id"
        options={Arrays(props.state, "sub_name", "id")}
      />
    </div>
  );
};

export default SubCategorylist;
