import React, { useState } from 'react';
import CriarProduto from './hooks/createProduct';
import BuscarProdutos from './hooks/searchProducts';
import BuscarProduto from './hooks/searchProduct';
import RegistroUsuario from './hooks/registerUser';
import axios from 'axios';

const App = () => {
  const [step, setStep] = useState([
    'login',
    'Registro',
    'Criar Produto',
    'Buscar Produtos',
    'Buscar Produto',
    'Atualizar Produto',
    'Deletar Produto',
  ]);
  const [currentStep, setCurrentStep] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({
    taxNumber: '12345678900',
    password: '123456',
  });

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://interview.t-alpha.com.br/api/auth/login',
        loginData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.status === 200) {
        setIsLoggedIn(true);
        setCurrentStep('Criar Produto');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  const renderStepComponent = () => {
    switch (currentStep) {
      case 'Criar Produto':
        return <CriarProduto />;
      case 'Buscar Produtos':
        return <BuscarProdutos />;
      case 'Buscar Produto':
        return <BuscarProduto />;
      case 'Registro':
        return <RegistroUsuario />;
      default:
        return <div>Selecione uma opção no menu</div>;
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-gray-400 to-gray-100">
      {isLoggedIn ?
        <nav className="mb-4 absolute top-20 bg-blue-500 p-4 rounded-md shadow-lg">
          <ul className="flex space-x-4 justify-center">
            {step.slice(2 , 5).map((item) => (
              <li key={item}>
                <button
                  className="flex flex-col justify-center items-center gap-2 text-white font-bold hover:text-green-200"
                  onClick={() => setCurrentStep(item)}
                >
                  {item === 'Registro'? <i className="fa-regular fa-id-badge"></i> :null}
                  {item === 'Buscar Produto'? <i className="fa-solid fa-magnifying-glass"></i> :null}
                  {item === 'Criar Produto'? <i className="fa-solid fa-basket-shopping"></i>:null }
                  {item === 'Buscar Produtos'? <i className="fa-brands fa-searchengin"></i>:null }
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav> : null}
      <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md">
        {isLoggedIn ? (
          <>
            <main>{renderStepComponent()}</main>
          </>
        ) : (
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="taxNumber">
                CPF
              </label>
              <input
                type="text"
                name="taxNumber"
                value={loginData.taxNumber}
                onChange={handleLoginChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Senha
              </label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default App;