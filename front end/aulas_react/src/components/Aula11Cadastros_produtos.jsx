import { useState, useEffect } from "react";
import { estilos } from "../Style/estilos";
import Aula11_Produto from "./Aula11_Produto";
const Aula11 = () => {

    const [listaProduto, setlistaProduto] = useState([
        {
            nome: 'hot Wheels',
            preco: 25,
            img: 'https://m.media-amazon.com/images/I/81jTiMDz7hL._AC_UF894,1000_QL80_.jpg',
            link: 'https://www.rihappy.com.br/carrinho-hot-wheels-cupra-e-racer-2026-lote-b-jjj08-5-10-1003252194/p?idsku=1003136643&srsltid=AfmBOooX3U2V88wHdZJWGA8RAgLrJIUtUqgzmBCf7gvp5egFpdrsaochrWo',
            categoria: 'brinquedos',
            freteGratuito: false
        },
        {
            nome: 'Playstation 5',
            preco: 5000,
            img: 'https://m.media-amazon.com/images/I/71PeCknZMRL._AC_SX679_.jpg',
            link: 'https://www.amazon.com.br/PlayStation%C2%AE5-Slim-Disk-Pacote-Turismo/dp/B0F8R9NDXC/ref=asc_df_B0F8R9NDXC?mcid=74e6ae7aadd630e1b4f1a8502b06d1b4&tag=googleshopp00-20&linkCode=df0&hvadid=721147801917&hvpos=&hvnetw=g&hvrand=16162094793403430832&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9100681&hvtargid=pla-2374768381854&psc=1&gad_source=1',
            categoria: 'eletronicos',
            freteGratuito: true
        }
    ])
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [img, setImg] = useState('')
    const [link, setLink] = useState('')
    const [categoria, setCategoria] = useState('')
    const [freteGratuito, setFrete] = useState(false)

    function botaoAdicionar() {
        setlistaProduto([...listaProduto, nome, preco, img, link])
        console.log(listaProduto);
        localStorage.setItem('listaProduto', JSON.stringify([...listaProduto, nome, preco, img, link]))
    }


    useEffect(() => {
        const listaSalva = localStorage.getItem('listaProduto') || "[]"
        setlistaProduto(JSON.parse(listaSalva))
    }, [])

    return (
        <div>
            <h2>Aula 11 lista de produtos</h2>
            <h3>cadastro de produtos</h3>
            <div>
                <label>
                    Nome:
                    <input type="text" name="nome" style={estilos.input} placeholder="nome" value={nome} onChange={(event) => setNome(event.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Preço:
                    <input type="number" name="preco" style={estilos.input} placeholder="preço" value={preco} onChange={(event) => setPreco(event.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Imagem:
                    <input type="text" name="img" style={estilos.input} placeholder="imagem" value={img} onChange={(event) => setImg(event.target.value)} />
                </label>
            </div>
            <div>
                <label>
                    Link:
                    <input type="text" name="link" style={estilos.input} placeholder="link" value={link} onChange={(event) => setLink(event.target.value)} />
                </label>
            </div>
            <div>
                <select name="categoria" id="" value={categoria} onChange={(event) => setCategoria(event.target.value)} style={estilos.input}>
                    <option value="">selecione uma categoria</option>
                    <option value="eletronico">eletronico</option>
                    <option value="alimento">alimento</option>
                    <option value="brinquedo">brinquedo</option>
                </select>
            </div>
            <div>
                <label>
                    frete gratis:
                    <input type="checkbox" checked={freteGratuito} onChange={(event) => setFrete(event.target.checked)} />
                </label>
            </div>
            <button type="submit" style={estilos.botaoAdicionar} onClick={botaoAdicionar}>Adicionar</button>
            <hr />
            <div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
                {
                    listaProduto.map((produto, index) => (
                        <Aula11_Produto key={index} produto={produto}/>

                    ))
                }
            </div>
        </div >
    );
};

export default Aula11