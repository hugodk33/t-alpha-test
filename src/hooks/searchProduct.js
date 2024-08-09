import { useState } from 'react';
import { useProduct } from './useProduct';

const BuscarProduto = () => {
  const { products, fetchProducts } = useProduct();
  const [productId, setProductId] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    await fetchProducts();
  };

  const product = products.find((p) => p.id === productId);

  return (
    <div>
      <h2 className="text-2xl font-normal mb-4">Buscar Produto</h2>
      <form onSubmit={handleSearch} className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productId">
          ID do Produto
        </label>
        <input
          type="text"
          id="productId"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
          Buscar Produto
        </button>
      </form>

      {product && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
          <p>Descrição: {product.description}</p>
          <p>Preço: R${product.price}</p>
          <div>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mx-2">
              Atualizar
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">
              Deletar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuscarProduto;