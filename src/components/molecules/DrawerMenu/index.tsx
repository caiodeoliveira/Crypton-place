import * as S from "./styles";
import Text from "../../atoms/Text";
import { DrawerMenuProps } from "./types";
import { Divider } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import { signOut, getAuth } from "firebase/auth";
import { useHistory } from "react-router-dom";

export const DrawerMenu = ({
  open,
  onClose,
  anchor,
  elevation,
}: DrawerMenuProps) => {
  const auth = getAuth();
  const history = useHistory();

  return (
    <S.DrawerComponent
      open={open}
      anchor={anchor}
      elevation={elevation}
      onClose={onClose}
    >
      <S.DrawerList>
        <S.ItemList button={true}>
          <FavoriteIcon />
          <Text type={"footer"} margin={"0 0 0 20px"}>
            Favorites
          </Text>
        </S.ItemList>

        <S.ItemList button={true}>
          <AccountBalanceWalletIcon />
          <Text type={"footer"} margin={"0 0 0 20px"}>
            Wallet
          </Text>
        </S.ItemList>

        <Divider />
      </S.DrawerList>

      <S.DrawerList>
        <S.ItemList button={true}>
          <AccountCircleIcon />
          <Text type={"footer"} margin={"0 0 0 20px"}>
            Account
          </Text>
        </S.ItemList>

        <S.ItemList button={true} onClick={() => history.push("/")}>
          <ExitToAppIcon />
          <Text type={"footer"} margin={"0 0 0 20px"}>
            Exit
          </Text>
        </S.ItemList>
      </S.DrawerList>
    </S.DrawerComponent>
  );
};
