import React, { useState } from "react";
import { FlatList, Modal } from "react-native";

import {
  Container,
  Header,
  Text,
  Balance,
  TotalBalanceDark,
  TotalBalanceLight,
  Wallet,
  WalletIcon,
  WalletInfo,
  NormalText,
  WalletBallance,
  CenteredView,
  ModalView,
  Button,
  InputView,
  ButtonModalView,
  TextInput,
} from "./styles";

import bancoDoBrasil from "../../assets/WalletIcons/bancoDoBrasil.png";
import nubank from "../../assets/WalletIcons/nubank.png";
import picpay from "../../assets/WalletIcons/picpay.png";

const DATA = [
  {
    id: "1",
    icon: "../../assets/WalletIcons/bancoDoBrasil.png",
    title: "Banco do Brasil - Poupança",
    balance: "R$5.346,67",
  },
  {
    id: "2",
    icon: "../../assets/WalletIcons/nubank.png",
    title: "Nubank - Nuconta",
    balance: "R$10.132,45",
  },
  {
    id: "3",
    icon: "../../assets/WalletIcons/picpay.png",
    title: "PicPay",
    balance: "R$3.180,43",
  },
];

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Container>
      <Header>
        <Text>Saldo Total</Text>
        <Balance>
          <TotalBalanceLight>R$</TotalBalanceLight>
          <TotalBalanceDark>18.659</TotalBalanceDark>
          <TotalBalanceLight>,55</TotalBalanceLight>
        </Balance>
      </Header>

      <Modal visible={modalOpen} animationType="fade" transparent={true}>
        <CenteredView>
          <ModalView>
            <InputView>
              <NormalText>Nome da carteira:</NormalText>
              <TextInput placeholder={"Ex: Banco de Townsville"} />
            </InputView>
            <InputView>
              <NormalText>Saldo:</NormalText>
              <TextInput placeholder={"Ex: 100,00"} />
            </InputView>
            <InputView>
              <NormalText>Icone:</NormalText>
              <TextInput placeholder={"Selecione o ícone"} />
            </InputView>
            <ButtonModalView>
              <Button onPress={() => setModalOpen(false)}>
                <NormalText style={{ color: "#e0e6fc" }}>Cancelar</NormalText>
              </Button>
              <Button onPress={() => setModalOpen(false)}>
                <NormalText style={{ color: "#e0e6fc" }}>Ok</NormalText>
              </Button>
            </ButtonModalView>
          </ModalView>
        </CenteredView>
      </Modal>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Wallet onPress={() => setModalOpen(true)}>
            <WalletIcon source={bancoDoBrasil} />
            <WalletInfo>
              <NormalText>{item.title}</NormalText>
              <WalletBallance>{item.balance}</WalletBallance>
            </WalletInfo>
          </Wallet>
        )}
      />
    </Container>
  );
}
