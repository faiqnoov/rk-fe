import { useState, useEffect } from "react";

function CreateProductForm() {
  return(
    <>
      <div className="max-w-screen-sm mx-auto">
        <form>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Nama</label>
            <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
          </div>
          <div className="mb-6">
            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">Kategori <span className="text-red-700">*</span></label>
            <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option value="1">Karpet</option>
              <option value="2">Lainnya</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="image">Gambar <span className="text-red-700">*</span></label>
            <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" id="image" type="file" required></input>
          </div>
          <div className="mb-6">
            <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900">Merek</label>
            <select id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option value="1">Moderno</option>
              <option value="2">Arizona</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="size" className="block mb-2 text-sm font-medium text-gray-900">Ukuran</label>
            <select id="size" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option value="1">160 x 210</option>
              <option value="2">120 x 310</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-900">Warna</label>
            <select id="color" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option value="1">Biru</option>
              <option value="2">Abu-abu</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="is_available" className="block mb-2 text-sm font-medium text-gray-900">Tersedia <span className="text-red-700">*</span></label>
            <select id="is_available" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option value="1">Ya</option>
              <option value="0">Tidak</option>
            </select>
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Simpan</button>
        </form>
      </div>
    </>
  );
}

function CreateProduct() {
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-center text-2xl font-bold mb-5">Tambah Produk</h1>
      <CreateProductForm />
    </div>
  );
}

export default CreateProduct;
