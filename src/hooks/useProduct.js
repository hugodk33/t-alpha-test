import { useState } from 'react';
import axios from 'axios';

export const useProduct = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
  });

  const createProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://interview.t-alpha.com.br/api/products', product, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        console.log('Produto criado com sucesso:', response.data);
        fetchProducts();
      }
    } catch (error) {
      console.error('Erro ao criar produto:', error);
    }
  };

  const fetchProducts = async ( ) => {
    try {
      const response = await axios.get('https://interview.t-alpha.com.br/api/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  };

  const updateProduct = async (id) => {
    try {
      const response = await axios.put(`https://interview.t-alpha.com.br/api/products/${id}`, product, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        console.log('Produto atualizado com sucesso:', response.data);
        fetchProducts();
      }
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
    }
  };

  const deleteProduct = async (id ) => {
    try {
      const response = await axios.delete(`https://interview.t-alpha.com.br/api/products/${id}`);

      if (response.status === 200) {
        console.log('Produto deletado com sucesso:', response.data);
        fetchProducts();
      }
    } catch (error) {
      console.error('Erro ao deletar produto:', error);
    }
  };

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  return { product, products, handleChange, createProduct, fetchProducts, updateProduct, deleteProduct };
};