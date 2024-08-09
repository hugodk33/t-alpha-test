import { useProduct } from './useProduct';

const CriarProduto = () => {
  const { product, handleChange, createProduct } = useProduct();

  return (
    <form onSubmit={createProduct}>
      <h2 className="text-2xl font-normal mb-4">Registrar Produto</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Nome do Produto
        </label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Descrição
        </label>
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
          Preço
        </label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Criar Produto
      </button>
    </form>
  );
};

export default CriarProduto;