"use client";
import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import Navbar from "./Navbar";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);
const Header = () => {
  return (
    <div className="h-36 flex flex-col">
      <div className="bg-primary  flex h-full items-center justify-center">
        {/* shopping cart left */}

        {/* log in user left  */}

        {/* search bar middle */}
        <div className="">
          <Space direction="vertical">
            <Search
              className="text-right"
              placeholder="بحث عن منتج"
              allowClear
              size="large"
              onSearch={onSearch}
              style={{
                width: 600,
              }}
            />
          </Space>
        </div>

        {/* logo right*/}
      </div>
      {/* <Navbar /> */}
    </div>
  );
};

export default Header;
