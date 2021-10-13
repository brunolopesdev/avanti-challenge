import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiOutlineWhatsApp } from "react-icons/ai";
import "./index.scss";

export const Footer = () => {
  return (
    <>
      <div className="pre-footer">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit iure omnis pariatur veniam
          reiciendis aspernatur fugit commodi eius corporis id. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sunt unde delectus odio corrupti obcaecati nobis libero
          quidem natus harum facilis.
        </p>
      </div>
      <footer className="avanti__footer">
        <div className="footer__wrapper">
          <div className="categories">
            <h3>Categorias</h3>
            <ul>
              <li>Categoria</li>
              <li>Categoria</li>
              <li>Categoria</li>
              <li>Categoria</li>
              <li>Categoria</li>
            </ul>
          </div>
          <div className="institutional">
            <h3>Institucional</h3>
            <ul>
              <li>Privacidade e Termos de Uso</li>
              <li>Trabalhe Conosco</li>
              <li>Política de Troca e Devolução</li>
              <li>Política de Frete</li>
              <li>Fale Conosco</li>
            </ul>
          </div>
          <div className="contact">
            <h3>Fale Conosco</h3>
            <ul>
              <li>atendimento@avanti.com.br</li>
              <li>(14) 00000-0000</li>
            </ul>
            <div className="social">
              <i>
                <AiFillFacebook />
              </i>
              <i>
                <AiFillInstagram />
              </i>
              <i>
                <AiFillLinkedin />
              </i>
              <i>
                <AiOutlineWhatsApp />
              </i>
            </div>
          </div>
        </div>
        <div className="bottom_text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos sed veniam iste error
            repellendus impedit ipsam harum quas laboriosam illo?
          </p>
        </div>
      </footer>
    </>
  );
};
