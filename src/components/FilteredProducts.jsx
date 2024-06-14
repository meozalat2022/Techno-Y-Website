"use client";
import React from "react";
import { Card } from "antd";
const { Meta } = Card;
const FilteredProducts = ({ products }) => {
  return (
    <div className="flex flex-wrap gap-6 mt-12 justify-center">
      {products?.map((item) => (
        <Card
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <img className="h-[150px]" alt="example" src={item.images[0]} />
          }
        >
          <Meta title={item.title} description={item.description} />
        </Card>
      ))}
    </div>
  );
};

export default FilteredProducts;
