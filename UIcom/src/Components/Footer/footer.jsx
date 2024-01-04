import style from "../Footer/footer.module.scss";

export const Footer = () => {
  return (
    <footer>
      <div className={style.footerStyle}>
        <section className={style.adresse}>
          <h4>Address</h4>
          <p>Olympus News Agency</p>
          <p>
            Mount Olympus <br /> 12345 <br /> Greece
          </p>
        </section>
        <section className={style.links}>
          <h4>Links</h4>
          <a href="#">olympusweb.com</a>
        </section>
        <section className={style.politik}>
          <h4>Policy</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Purchase Information</a>
          <a href="#">Sharing Policy</a>
        </section>
        <section className={style.kontakt}>
          <h4>Contact</h4>
          <p>
            Email: news@olympus.com <br />
            Phone: 23232323 <br />
            Fax: 123123-333
          </p>
        </section>
      </div>
    </footer>
  );
};
