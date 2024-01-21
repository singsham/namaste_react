import React, { useEffect, useState } from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "../services/ProductService";
import { Tag } from "primereact/tag";

const Contact = () => {
  const [products, setProducts] = useState({});
  const dataColumns = [];
  const startDate = 2024;
  const endDate = 2025;
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  for (let i = startDate; i <= endDate; i++) {
    months.forEach((el) => {
      dataColumns.push({ field: el + "-" + i, header: el + "-" + i });
    });
  }
  useEffect(() => {
    ProductService.getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  statusBodyTemplate = (product) => {
    console.log("product", product);
    const currentCol = "demand";
    return <Tag value={product[1][currentCol]}></Tag>;
  };

  const CustomTable = ({ currentCol }) => {
    return (
      <div className="card overflow-x-scroll">
        <DataTable value={Object.entries(products)} showGridlines={true} scrollable scrollHeight="300px">
          <Column field="sku" header="Sku Description" body={(e) => e[0]} style={{ minWidth: "200px" }} frozen />
          {dataColumns.map((col, i) => (
            <Column
              key={col.field}
              field={col.field}
              header={col.header}
              body={(e) => e[1][currentCol][col.field]}
              style={{ minWidth: "150px" }}
            />
          ))}
        </DataTable>
      </div>
    );
  };
  return (
    products && (
      <div className="flex flex-col gap-2">
        <CustomTable currentCol="demand" />
        <CustomTable currentCol="capacity" />
      </div>
    )
  );
};

export default Contact;
