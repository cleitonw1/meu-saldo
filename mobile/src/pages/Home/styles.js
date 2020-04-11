import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 0px;
  flex-direction: column;
  background-color: #f5f7ff;
`;

export const Header = styled.View`
  justify-content: center;
  background-color: #3d40a4;
  height: 25%;
  padding-left: 10px;
  elevation: 5;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #a6aad6;
  font-weight: normal;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Balance = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const TotalBalanceLight = styled.Text`
  font-size: 24px;
  color: #a6aad6;
  font-weight: bold;
`;

export const TotalBalanceDark = styled.Text`
  font-size: 24px;
  color: #e0e6fc;
  font-weight: bold;
`;

export const WalletList = styled.View`
  padding: 30px;
`;

export const Wallet = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 74px;
  padding-left: 10px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #ffffff;
  border-radius: 5px;
  elevation: 1;
`;

export const WalletIcon = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin-right: 10px;
  border-width: 1px;
  border-color: #ddd;
`;

export const WalletInfo = styled.View`
  flex-direction: column;
  justify-content: space-around;
`;

export const NormalText = styled.Text`
  font-size: 16px;
  color: #4b4b4b;
  font-weight: normal;
  padding-bottom: 5px;
`;

export const WalletBallance = styled.Text`
  font-size: 18px;
  color: #090837;
  font-weight: bold;
`;

export const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ModalView = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 326px;
  height: 322px;
  background-color: #e0e6fc;
  border-radius: 18px;
  elevation: 5;
  padding: 10px;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 142px;
  height: 47px;
  background-color: #3d40a8;
  border-radius: 5px;
  margin: 5px;
`;

export const InputView = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  height: 40px;
  background-color: #ffffff;
  border-color: #eee;
  border-width: 1px;
  padding-left: 10px;
`;

export const ButtonModalView = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;
