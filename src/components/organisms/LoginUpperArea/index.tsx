import S from "./styles";
import Text from "../../atoms/Text";
import { useEffect, useState } from "react";
import api from "../../../services/api";

export const LoginUpperArea = () => {
  const [trendingCoins, setTrendingCoins] = useState<string[]>([]);

  useEffect(() => {
    api
      .get("/search/trending")
      .then((response) => {
        console.log(response.data);
        setTrendingCoins(response.data.coins);
      })
      .catch((err) => {
        console.log("Ocorreu um erro na requisição !:" + err);
      });
  }, []);

  return (
    <>
      <S.TopContainer>
        <Text type={"input_label"}>{"2.0.0"}</Text>
        <S.TrendingCoinsContainer>
          {trendingCoins &&
            trendingCoins.map((crypto: any) => (
              <S.TrendingCoinsContent>
                <S.TrendingCoins
                  src={crypto.item.small}
                  alt="trending cryptos"
                />
                <S.TrendingSymbol>
                  <Text
                    type={"paragraph_text"}
                  >{`(  ${crypto.item.symbol} )`}</Text>
                </S.TrendingSymbol>
                <S.TrendingName>
                  <Text type={"paragraph_text"}>{`${crypto.item.slug}`}</Text>
                </S.TrendingName>
                <S.TrendingPrice>
                  <Text type={"paragraph_text"}>
                    {` BTC ${crypto.item.price_btc.toFixed(17)}`}
                  </Text>
                </S.TrendingPrice>
              </S.TrendingCoinsContent>
            ))}
        </S.TrendingCoinsContainer>
      </S.TopContainer>
    </>
  );
};