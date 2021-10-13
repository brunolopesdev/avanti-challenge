import { useContext } from "react";
import DataContext from "../../Context";
import $ from "jquery"
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

export const Products = () => {
    const { data, addToCart } = useContext(DataContext)

    $(".add-to-cart").on("click", function () {
        $(this).html("ADICIONANDO...");

        setTimeout(function () {
            $('.add-to-cart').html('COMPRAR');
        }, 2000)
    })

    return (
        <div className="main__shelf">
            {data?.map((product, index) => (
                <div className="main__shelf-products" key={product.id}>
                    <div className="product-img">
                        <a href={product.linkURL} target="_blank"><img src={product.imageURL} alt="Imagem do produto" /></a>
                    </div>
                    <div className="product-info">
                        <p className="product-name">{product.name}</p>
                        <div className="product-price">
                            <p className="best-price">{product.bestPrice}</p>
                            <p className="selling-price">{product.sellingPrice}</p>
                        </div>

                        {
                            product.available === 0 ?
                                <button className="unavailable" disabled onClick={() => addToCart(product)}>INDISPONÍVEL</button>
                                :
                                <button className="add-to-cart" onClick={() => addToCart(product)}>ADICIONAR</button>
                        }

                    </div>
                </div>
            ))}
        </div>
    )
}
