import axios from 'axios';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const FormCadastro = () => {
    const [email, setEmail] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [showSenha, setShowSenha] = useState(false);

    const handleSubmit = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/register`, {
                email,
                usuario,
                senha
            });
            console.log(response.data);
            alert("Registrado com sucesso!!");
        } catch (error) {
            if (error.response) {
                console.error("Erro do servidor:", error.response.data);
            } else if (error.request) {
                console.error("Sem resposta do servidor:", error.request);
            } else {
                console.error("Erro na requisição:", error.message);
            }
        }

        setEmail('');
        setUsuario('');
        setSenha('');
    }

    return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
            <form className="flex flex-col items-center justify-center gap-2 border-black 
            w-[90%] sm:w-3/4 md:w-2/5 lg:w-1/3 xl:w-1/5 
            h-[50%] sm:h-[60%] md:h-[55%] lg:h-2/5 
            rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white">

                <h3 className="text-center mb-6 text-4xl">Cadastrar</h3>

                <input
                    className="p-2 text-lg outline-none rounded w-4/5 text-black"
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className="p-2 text-lg outline-none rounded w-4/5 text-black"
                    type="text"
                    name="usuario"
                    value={usuario}
                    placeholder="Usuário"
                    required
                    onChange={(e) => setUsuario(e.target.value)}
                    minLength={5}
                    maxLength={12}
                />

                <div className="relative w-4/5">
                    <input
                        className="p-2 text-lg outline-none rounded w-full text-black pr-10"
                        type={showSenha ? "text" : "password"}
                        name="senha"
                        value={senha}
                        placeholder="Senha"
                        required
                        onChange={(e) => setSenha(e.target.value)}
                        minLength={10}
                        maxLength={20}
                    />
                    <span
                        className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-black"
                        onClick={() => setShowSenha(!showSenha)}
                    >
                        {showSenha ? <EyeOff size={20} /> : <Eye size={20} />}
                    </span>
                </div>

                <button
                    className="p-2 rounded-lg text-xl bg-cyan-700 hover:bg-cyan-900 w-4/5"
                    type="button"
                    onClick={handleSubmit}
                >
                    Enviar
                </button>
            </form>
        </div>
    )
}

export default FormCadastro;
