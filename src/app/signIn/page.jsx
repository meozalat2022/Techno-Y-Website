"use client";
import React, { useState, useEffect } from "react";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "@/redux/auth/authSlice";

import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
const SignIn = () => {
  const [formData, setFormData] = useState({});

  const { error, loading } = useSelector((state) => state.auth);

  const router = useRouter();

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    console.log(e);
  };
  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">تسجيل الدخول</h1>
      <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
        <input
          onChange={onChangeHandler}
          type="text"
          placeholder="اسم المستخدم"
          id="username"
          className="border p-3 rounded-lg text-right"
        />
        <input
          onChange={onChangeHandler}
          type="password"
          placeholder="الرقم السري"
          id="password"
          className="border p-3 rounded-lg text-right"
        />
        <button
          disabled={loading}
          className="bg-slate-700 p-3 text-white hover:opacity-90 disabled:opacity-80 rounded-lg uppercase "
        >
          {loading ? "تحميل..." : "تسجيل الدخول"}
        </button>
        {/* <GoogleAuth /> */}
      </form>
      <div className="flex gap-3 mt-5 justify-end">
        <Link href={"/signUp"}>
          <span className="text-blue-500 text-right">انشاء حساب جديد</span>
        </Link>
        <p>ليس لديك جساب؟</p>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default SignIn;
