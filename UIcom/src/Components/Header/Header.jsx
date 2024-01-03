

import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { getHeader } from "../../Queries/getHeader";
import style from '../Header/header.module.scss';


export const Header = () => {


  return (
    <header>
      {/* <h2>{data.headers[0].headerTitle}</h2> */}
      <img className={style.doggyHeader} src={data.headers[0].image.url} alt="" />
    </header>
  );
};